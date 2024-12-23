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

  ☻/  * @file Recipe Functional Storage script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes((event) => {

  //======= Storage Controller =======
  event.shaped('functionalstorage:storage_controller', ['ABA', 'DCD', 'ABA'], {
    A: '#forge:plates/aluminum',
    B: 'create:andesite_casing',
    C: 'advgenerators:controller',
    D: '#functionalstorage:drawer'
  }).id(`kubejs:functionalstorage/storage_controller`)

  //======= Armory Cabinet =======
  event.shaped('functionalstorage:armory_cabinet', ['ABA', 'BCB', 'ADA'], {
    A: '#forge:plates/aluminum',
    B: '#functionalstorage:drawer',
    C: 'advgenerators:controller',
    D: '#forge:ingots/energized_steel'
  }).id(`kubejs:functionalstorage/armory_cabinet`)

  //======= Compacting Drawer =======
  event.shaped('functionalstorage:compacting_drawer', ['AAA', 'DCD', 'ABA'], {
    A: '#forge:plates/aluminum',
    B: '#forge:ingots/iron',
    C: '#functionalstorage:drawer',
    D: 'immersive_aircraft:industrial_gears'
  }).id(`kubejs:functionalstorage/compacting_drawer`)

  //======= Simple Compacting Drawer =======
  event.shaped('functionalstorage:simple_compacting_drawer', ['AAA', 'ACD', 'ABA'], {
    A: '#forge:plates/aluminum',
    B: '#forge:ingots/iron',
    C: '#functionalstorage:drawer',
    D: 'immersive_aircraft:industrial_gears'
  }).id(`kubejs:functionalstorage/simple_compacting_drawer`)

  removeRecipeByID(event, [
    'functionalstorage:storage_controller',
    'functionalstorage:armory_cabinet',
    'functionalstorage:oak_drawer_alternate_x1',
    'functionalstorage:oak_drawer_alternate_x2',
    'functionalstorage:oak_drawer_alternate_x4',
    'functionalstorage:compacting_drawer',
    'functionalstorage:simple_compacting_drawer',
  ])

})
