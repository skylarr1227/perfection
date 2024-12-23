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

  ☻/  * @file Recipe Construction Wand script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Infinity Wand ======= 
  event.shaped('constructionwand:infinity_wand', ['  C', ' B ', 'A  '], {
    A: 'redstone_arsenal:flux_obsidian_rod',
    B: 'allthemodium:unobtainium_rod',
    C: 'extendedcrafting:ender_star'
  }).id(`kubejs:constructionwand/infinity_wand`)

  removeRecipeByID(event, [
    'constructionwand:infinity_wand'
  ])

})
