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

  ☻/  * @file Unify Dusts script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  if (global.devLogging) {
    console.log('Finishing Unifying on Dusts')
  }

  let dustCount = {
    ftbic: 0
  }

  global.auTags.dusts.forEach(material => {
    let dust = global.itemFromTag('dusts', material)
    if (dust.isEmpty()) {
      console.log(`${material} does not have a dust tag entry`)
      return
    }

    let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
    let oreTag = Ingredient.of(`#forge:ores/${material}`)
    let rawTag = Ingredient.of(`#forge:raw_materials/${material}`)

    //======= FTBIC Macerating =======
    if (global.loaded.FTBIC_Loaded) {
      let macerate = {
        ingot: false,
        ore: false,
        raw: false,
      }

      event.forEachRecipe({ type: 'ftbic:macerating' }, recipe => {
        let recipeJson = recipe.json
        recipeJson.get('outputItems').forEach(item => {
          if (dust.equalsIgnoringCount(Item.of(item))) {
            recipeJson.get('inputItems').forEach(inputJson => {
              let input = inputJson.get('ingredient')
              if (ingotTag.test(Ingredient.of(input))) {
                macerate.ingot = true
              } else if (oreTag.test(Ingredient.of(input))) {
                macerate.ore = true
              } else if (rawTag.test(Ingredient.of(input))) {
                macerate.raw = true
              }
            })
          }
        })
      })

      if (!ingotTag.getFirst().isEmpty() && !macerate.ingot) {
        event.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: ingotTag.toJson() }],
          "outputItems": [dust.toJson()]
        }).id(`kubejs:ftbic/macerating/ingots/${material}_to_dust`)
        dustCount.ftbic++
      }

      if (!oreTag.getFirst().isEmpty() && !macerate.ore) {
        event.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: oreTag.toJson() }],
          "outputItems": [dust.withCount(2).toJson()]
        }).id(`kubejs:ftbic/macerating/ores/${material}_to_dust`)
        dustCount.ftbic++
      }

      if (!rawTag.getFirst().isEmpty() && !macerate.raw) {
        event.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: rawTag.toJson() }],
          "outputItems": [
            dust.toJson(),
            { chance: 0.35, item: dust.id }
          ]
        }).id(`kubejs:ftbic/macerating/raw_materials/${material}_to_dust`)
        dustCount.ftbic++
      }
    }

  })

  if (global.devLogging) {
    console.log(`Added Dust Recipes - FTBIC: ${dustCount.ftbic}`)
    //Added Dust Recipes - FTBIC: 60
  }

})
