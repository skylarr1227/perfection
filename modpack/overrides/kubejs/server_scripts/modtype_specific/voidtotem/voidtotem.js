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

  ☻/  * @file Recipe Void Totem script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Totem of Void Undying=======
  event.shaped('voidtotem:totem_of_void_undying', ['ABA', 'CDC', ' C '], {
    A: 'nourished_nether:necronium_block',
    B: 'botania:mana_void',
    C: Item.of('cyclic:ender_eye_reuse', '{Damage:0}'),
    D: 'minecraft:totem_of_undying'
  }).id(`kubejs:voidtotem/totem_of_void_undying`)

  removeRecipeByID(event, [
    'voidtotem:totem_of_void_undying'
  ])

})
