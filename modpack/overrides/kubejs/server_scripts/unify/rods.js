//Priority: 100
/*
  ---╔═══╗------------╔═╗--╔═══╗--╔╗-------
  ---║╔═╗║------------║╔╝--║╔══╝-╔╝╚╗------
  ---║║ ║╠══╦══╗--╔══╦╝╚╗--║╚══╦═╩╗╔╬══╗---
  ---║╚═╝║╔╗║║═╣--║╔╗╠╗╔╝--║╔══╣╔╗║║║║═╣---
  ---║╔═╗║╚╝║║═╣--║╚╝║║║---║║--║╔╗║╚╣║═╣---
  ---╚╝ ╚╩═╗╠══╝--╚══╝╚╝---╚╝--╚╝╚╩═╩══╝---
  -------╔═╝║------------------------------
  -------╚══╝------------------------------
*/
/**

  ☻/  * @file Unify Rods script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  if (global.devLogging) {
    console.log('Finishing Unifying on Rods')
  }
  let rodCount = {
    create: 0,
    ftbic: 0,
    ie: 0,
    thermal: 0
  }

  global.auTags.rods.forEach(material => {
    let rod = global.itemFromTag('rods', material)
    if (rod.isEmpty()) {
      console.log(`${material} does not have a rod tag entry`)
      return
    }

    let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
    if (ingotTag.getFirst().isEmpty()) {
      //======= Check for gems =======
      ingotTag = Ingredient.of(`#forge:gems/${material}`)
      if (ingotTag.getFirst().isEmpty()) { return }
    }

    if (global.loaded.CreateAdd_Loaded) {
      let count = event.recipeStream({ type: 'createaddition:rolling' }).mapToInt(recipe => {
        if (rod.equalsIgnoringCount(Item.of(recipe.json.get('result')))) { return 1 }
        return 0
      }).sum()

      if (count == 0) {
        event.custom({
          type: 'createaddition:rolling',
          input: ingotTag.toJson(),
          result: rod.withCount(2).toJson()
        }).id(`kubejs:createaddition/rolling/${material}_ingot`)
        rodCount.create++
      }
    }

    if (global.loaded.FTBIC_Loaded) {
      //======= Check if FTBIC extruding recipe exists =======
      let count = event.recipeStream({ type: 'ftbic:extruding' }).mapToInt(recipe => {
        let hasMatch = false
        recipe.json.get('outputItems').forEach(item => {
          if (rod.specialEquals(Item.of(item), true)) {
            hasMatch = true
          }
        })
        if (hasMatch) { return 1 }
        return 0
      }).sum()

      if (count == 0) {
        event.custom({
          type: 'ftbic:extruding',
          inputItems: [{ "count": 1, "ingredient": ingotTag.toJson() }],
          outputItems: [rod.withCount(2).toJson()]
        }).id(`kubejs:ftbic/extruding/ingots/${material}_to_${material}_rod`)
        rodCount.ftbic++
      }
    }

    if (global.loaded.IE_Loaded) {
      //======= Check if IE metal press recipe exists =======
      let count = event.recipeStream({ type: 'immersiveengineering:metal_press' }).mapToInt(recipe => {
        let result = recipe.json.get('result')
        if (result.has('base_ingredient')) {
          if (rod.equalsIgnoringCount(Item.of(result.get('base_ingredient')))) { return 1 }
        } else if (rod.equalsIgnoringCount(Item.of(result))) { return 1 }
        return 0
      }).sum()

      if (count == 0) {
        event.custom({
          type: 'immersiveengineering:metal_press',
          mold: 'immersiveengineering:mold_rod',
          input: ingotTag.toJson(),
          result: {
            count: 2,
            base_ingredient: rod.toJson()
          },
          energy: 2400
        }).id(`kubejs:immersiveengineering/metalpress/rod_${material}`)
        rodCount.ie++
      }
    }
    
    //======= Remove crafting recipes not using atm hammer =======
    event.forEachRecipe({ type: 'minecraft:crafting_shaped', output: rod }, recipe => {
      if (!recipe.hasInput('#alltheores:ore_hammers')) {
        event.remove({ id: recipe.getId() })
      }
    })

  })

  if (global.devLogging) {
    console.log(`Added Rod Recipes - CreateAdditions: ${rodCount.create}, FTBIC: ${rodCount.ftbic}, IE: ${rodCount.ie}, Thermal: ${rodCount.thermal}`)
    //Added Rod Recipes - CreateAdditions: 20, FTBIC: 16, IE: 8, Thermal: 0
  }
  
})