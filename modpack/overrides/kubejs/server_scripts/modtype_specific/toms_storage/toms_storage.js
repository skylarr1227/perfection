//Priority: 1000
/*  
  ████████╗███████╗░█████╗░██╗░░██╗██████╗░███████╗██╗░░░██╗░█████╗░██╗░░░░░██╗░░░██╗████████╗██╗░█████╗░███╗░░██╗
  ╚══██╔══╝██╔════╝██╔══██╗██║░░██║██╔══██╗██╔════╝██║░░░██║██╔══██╗██║░░░░░██║░░░██║╚══██╔══╝██║██╔══██╗████╗░██║
  ░░░██║░░░█████╗░░██║░░╚═╝███████║██████╔╝█████╗░░╚██╗░██╔╝██║░░██║██║░░░░░██║░░░██║░░░██║░░░██║██║░░██║██╔██╗██║
  ░░░██║░░░██╔══╝░░██║░░██╗██╔══██║██╔══██╗██╔══╝░░░╚████╔╝░██║░░██║██║░░░░░██║░░░██║░░░██║░░░██║██║░░██║██║╚████║
  ░░░██║░░░███████╗╚█████╔╝██║░░██║██║░░██║███████╗░░╚██╔╝░░╚█████╔╝███████╗╚██████╔╝░░░██║░░░██║╚█████╔╝██║░╚███║
  ░░░╚═╝░░░╚══════╝░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝░░░╚═╝░░░░╚════╝░╚══════╝░╚═════╝░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝
*/
/*

  ☻/ Recipe Tom's Simple Storage Event Handler
  /▌
  /\﻿

*/
ServerEvents.recipes(event => {

    //======= Inventory Connector =======
    event.shaped('toms_storage:ts.inventory_connector', ['ADA', 'BCB', 'AEA'], {
      A: '#minecraft:planks',
      B: '#functionalstorage:drawer',
      C: '#forge:gems/diamond',
      D: 'sophisticatedstorage:storage_link',
      E: '#forge:ender_pearls'
    }).id(`kubejs:toms_storage/inventory_connector`)

    //======= Storage Terminal =======
    event.shaped('toms_storage:ts.storage_terminal', ['ADA', 'BCE', 'ADA'], {
        A: '#minecraft:planks',
        B: '#functionalstorage:drawer',
        C: '#forge:storage_blocks/glowstone',
        D: 'minecraft:comparator',
        E: 'create_crystal_clear:andesite_clear_glass_casing'
    }).id(`kubejs:toms_storage/ts.storage_terminal`)

    //======= Crafting Terminal =======
    event.shaped('toms_storage:ts.crafting_terminal', ['ABA', 'BCB', 'ABA'], {
        A: 'create:mechanical_crafter',
        B: '#forge:gems/diamond',
        C: 'toms_storage:ts.storage_terminal'
    }).id(`kubejs:toms_storage/ts.crafting_terminal`)
  
    
    removeRecipeByID(event, [
      'toms_storage:inventory_connector',
      'toms_storage:storage_terminal',
      'toms_storage:crafting_terminal'
    ])
  
})
  