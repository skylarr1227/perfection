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

  ☻/  * @file Unify Plates script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  if (global.devLogging) {
    console.log('Finishing Unifying on Plates')
  }

  let plateCount = {
    create: 0,
    ftbic: 0,
    ie: 0,
    thermal: 0
  }

  global.auTags.plates.forEach(material => {
    let plate = global.itemFromTag('plates', material)
    if (plate.isEmpty()) {
      console.log(`${material} does not have a plate tag entry`)
      return
    }

    let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
    if (ingotTag.getFirst().isEmpty()) {
      //======= Check for gems =======
      ingotTag = Ingredient.of(`#forge:gems/${material}`)
      if (ingotTag.getFirst().isEmpty()) { return }
    }

    if (global.loaded.Create_Loaded) {
      //======= Check if Create press recipe exists =======
      let count = event.recipeStream({ type: 'create:pressing' }).mapToInt(recipe => {
        let hasMatch = false
        recipe.json.get('results').forEach(item => {
          if (plate.specialEquals(Item.of(item), true)) {
            hasMatch = true
          }
        })
        if (hasMatch) { return 1 }
        return 0
      }).sum()

      if (count == 0) {
        event.custom({
          type: 'create:pressing',
          ingredients: [ingotTag.toJson()],
          results: [plate.withCount(1).toJson()]
        }).id(`kubejs:create/pressing/${material}_ingot`)
        plateCount.create++
      }
    }

    if (global.loaded.FTBIC_Loaded) {
      //======= Check if FTBIC rolling recipe exists =======
      let count = event.recipeStream({ type: 'ftbic:rolling' }).mapToInt(recipe => {
        let hasMatch = false
        recipe.json.get('outputItems').forEach(item => {
          if (plate.specialEquals(Item.of(item), true)) {
            hasMatch = true
          }
        })
        if (hasMatch) { return 1 }
        return 0
      }).sum()

      if (count == 0) {
        event.custom({
          type: 'ftbic:rolling',
          inputItems: [{ "count": 1, "ingredient": ingotTag.toJson() }],
          outputItems: [plate.withCount(1).toJson()]
        }).id(`kubejs:ftbic/rolling/ingots/${material}_to_${material}_plate`)
        plateCount.ftbic++
      }
    }

    if (global.loaded.IE_Loaded) {
      //======= Check if IE metal press recipe exists =======
      let count = event.recipeStream({ type: 'immersiveengineering:metal_press' }).mapToInt(recipe => {
        let result = recipe.json.get('result')
        if (result.has('base_ingredient')) {
          if (plate.equalsIgnoringCount(Item.of(result.get('base_ingredient')))) { return 1 }
        } else if (plate.equalsIgnoringCount(Item.of(result))) { return 1 }
        return 0
      }).sum()

      if (count == 0) {
        event.custom({
          type: 'immersiveengineering:metal_press',
          mold: 'immersiveengineering:mold_plate',
          input: ingotTag.toJson(),
          result: plate.toJson(),
          energy: 2400
        }).id(`kubejs:immersiveengineering/metalpress/plate_${material}`)
        plateCount.ie++
      }
    }

    if (global.loaded.Thermal_Loaded) {
      //======= Check if Thermal multiservo press recipe exists =======
      let count = event.recipeStream({ type: 'thermal:press' }).mapToInt(recipe => {
        let hasMatch = false
        recipe.json.get('result').forEach(item => {
          if (plate.specialEquals(Item.of(item), true)) {
            hasMatch = true
          }
        })
        if (hasMatch) { return 1 }
        return 0
      }).sum()

      if (count == 0) {
        event.custom({
          type: 'thermal:press',
          ingredient: ingotTag.toJson(),
          result: [plate.toJson()],
        }).id(`kubejs:thermal/machines/press/press_${material}_ingot_to_plate`)
        plateCount.thermal++
      }
    }

  })

  if (global.devLogging) {
    console.log(`Added Plate Recipes - Create: ${plateCount.create}, FTBIC: ${plateCount.ftbic}, IE: ${plateCount.ie}, Thermal: ${plateCount.thermal}, Ad Astra: ${plateCount.adastra}`)
    //Added Plate Recipes - Create: 21, FTBIC: 27, IE: 13, Thermal: 11, Ad Astra: 32
  }
  
})
