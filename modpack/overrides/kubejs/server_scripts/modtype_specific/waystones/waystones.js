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

  ☻/  * @file Recipe Waystones script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Warp Stone =======
  event.shaped('waystones:warp_stone', ['ABA', 'BCB', 'ABA'], {
    A: 'waystones:warp_dust',
    B: 'rftoolsbase:infused_enderpearl',
    C: 'tombstone:impregnated_diamond'
  }).id(`kubejs:waystones/warp_stone`)

  //======= Warp Dust =======
  event.shapeless('waystones:warp_dust', ['#forge:dusts/diamond', '#forge:ender_pearls', '#forge:dyes/purple']).id(`kubejs:waystones/warp_dust`)

  removeRecipeByID(event, [
    'waystones:warp_dust',
    'waystones:warp_stone'
  ])

})
