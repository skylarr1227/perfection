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

  ☻/  * @file Modpack recipe script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Black Card =======
  event.shaped('4x kubejs:blank_card', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:nuggets/copper',
    B: 'minecraft:clay_ball',
    C: 'minecraft:paper'
  }).id(`kubejs:blank_card`)

  //======= Personal ID =======
  event.shaped('2x kubejs:personal_id', [' C ', 'AED', ' B '], {
    A: 'silentgear:blueprint_paper',
    B: 'cyclic:carbon_paper',
    C: 'kubejs:blank_card',
    D: 'thermal:redprint',
    E: 'minecraft:piston'
  }).id(`kubejs:personal_id`)

  //======= Obsidian With Iron Block =======
  event.shaped('kubejs:obsidian_with_iron_block', ['AAA', 'AAA', 'AAA'], {
    A: 'forbidden_arcanus:obsidian_with_iron'
  }).id(`kubejs:obsidian_with_iron_block`)

  //======= Flux Dust =======
  event.custom({
    type: "mekanism:metallurgic_infusing",
    chemicalInput: {
      amount: 10,
      tag: "mekanism:redstone"
    },
    itemInput: {
      ingredient: {
        tag: "forge:dusts/obsidian"
      }
    },
    output: {
      item: "fluxnetworks:flux_dust"
    }
  }).id(`kubejs:fluxnetworks/flux_dust`)

  //======= Gold Bars Conversion =======
  event.shapeless('quark:gold_bars', 'cyclic:gold_bars')
  event.shapeless('quark:gold_bars', 'tconstruct:gold_bars')
  event.shapeless('cyclic:gold_bars', 'quark:gold_bars')
  event.shapeless('cyclic:gold_bars', 'tconstruct:gold_bars')
  event.shapeless('tconstruct:gold_bars', 'quark:gold_bars')
  event.shapeless('tconstruct:gold_bars', 'cyclic:gold_bars')

})
