//Priority: 1000
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

  ☻/  * @file Recipe Quark script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Corundum Blocks & Lamps =======
  const CorundumColor = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black']

  CorundumColor.forEach((color) => {
    //Corundum Block
    event.shapeless(`quark:${color}_corundum`, [`9x quark:${color}_corundum_cluster`]).id(`kubejs:quark/${color}_corundum`)
    //Corundum Lamp
    event.remove({id: `quark:building/crafting/lamps/${color}_corundum_lamp`})
    event.shaped(`quark:${color}_crystal_lamp`, ['ABA', 'BCB', 'ABA'], {
      A: '#forge:nuggets/iron',
      B: '#forge:dusts/redstone',
      C: `quark:${color}_corundum`
    }).id(`kubejs:quark/${color}_crystal_lamp`)
  })

  //======= Blank Rune =======
  event.shaped('quark:blank_rune', [' A ', 'ABA', ' A '], {
    A: 'forbidden_arcanus:rune',
    B: 'forbidden_arcanus:dark_matter'
  }).id(`kubejs:quark/blank_rune`)

  //======= Deepslate Furnace =======
  event.shaped('quark:deepslate_furnace', ['ABA', 'B B', 'ABA'], {
    A: 'allthecompressed:cobbled_deepslate_block_1x',
    B: 'minecraft:cobbled_deepslate'
  }).id(`kubejs:quark/deepslate_furnace`)

  //======= Blackstone Furnace =======
  event.shaped('quark:blackstone_furnace', ['ABA', 'B B', 'ABA'], {
    A: 'allthecompressed:blackstone_block_1x',
    B: 'minecraft:blackstone'
  }).id(`kubejs:quark/blackstone_furnace`)

  //======= Trowel =======
  event.shaped('quark:trowel', [' BB', 'A  '], {
    A: '#forge:wooden_grip',
    B: '#forge:ingots/prosperity'
  }).id(`kubejs:quark/trowel`)

  removeRecipeByID(event, [
    'quark:building/crafting/furnaces/deepslate_furnace',
    'quark:building/crafting/furnaces/blackstone_furnace',
    'quark:tools/crafting/trowel'
  ])

})
