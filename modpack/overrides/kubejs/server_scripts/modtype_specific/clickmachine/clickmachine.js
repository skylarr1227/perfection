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

  ☻/  * @file Recipe Click Machine script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Auto Clicker =======
  event.shaped('clickmachine:auto_clicker', ['ACA', 'BEB', 'ADA'], {
    A: 'mysticalagriculture:machine_frame',
    B: '#forge:plates/aluminum',
    C: '#forge:gears/nickel',
    D: 'createaddition:redstone_relay',
    E: 'cyclic:clock'
  })

  removeRecipeByID(event, [
    'clickmachine:auto_clicker'
  ])

})
