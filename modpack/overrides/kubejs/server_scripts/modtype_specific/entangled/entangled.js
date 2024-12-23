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

  ☻/  * @file Recipe Entangled script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Entangled Block =======
  event.shaped('entangled:block', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:ingots/unobtainium',
    B: '#forge:ender_pearls',
    C: 'enderstorage:ender_chest'
  }).id(`kubejs:entangled/block`)

  //======= Entangled Binder =======
  event.shaped('entangled:item', [' BC', ' AB', 'A  '], {
    A: '#forge:ingots/unobtainium',
    B: '#forge:ender_pearls',
    C: 'enderstorage:ender_chest'
  }).id(`kubejs:entangled/item`)

  removeRecipeByID(event, [
    'entangled:block',
    'entangled:item'
  ])

})
