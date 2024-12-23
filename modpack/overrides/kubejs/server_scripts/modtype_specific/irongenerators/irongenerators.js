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

  ☻/  * @file Recipe Iron Generators script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Netherrack Generator =======
  modifyShaped(event, 'irongenerators:netherrack_generator', 1, ['ABA', 'BCB', 'ABA'], {
    A: 'minecraft:netherrack',
    B: '#forge:dusts/redstone',
    C: '#misctags:furnace'
  })

  //======= Stone Generator =======
  modifyShaped(event, 'irongenerators:stone_generator', 1, ['ABA', 'BCB', 'ABA'], {
    A: '#misctags:smooth_stone',
    B: '#forge:dusts/redstone',
    C: '#misctags:furnace'
  })

  //======= The Everlasting Generator =======
  event.shaped('irongenerators:infinity_generator', ['FAF', 'BEC', 'GDG'], {
     A: 'irongenerators:allthemodium_generator',
    B: 'irongenerators:vibranium_generator',
    C: 'irongenerators:unobtainium_generator',
    G: 'mysticaladaptations:insanium_furnace',
    E: 'extendedcrafting:ultimate_singularity',
    F: 'extendedcrafting:the_ultimate_block',
    D: '#forge:furnaces/rainbow'
  }).id(`kubejs:irongenerators/infinity_generator`)

})    
