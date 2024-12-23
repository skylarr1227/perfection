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

  ☻/  * @file Recipe Silent Gear script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Salvager =======
  event.shaped('silentgear:salvager', [' A ', 'CDC', 'CBC' ], {
    A: 'mininggadgets:upgrade_magnet',
    B: 'minecraft:obsidian',
    C: 'silentgear:crimson_steel_ingot',
    D: 'minecraft:diamond_block'
  })

  //======= Cristalline Alloy =======
  event.shaped('silentcompat:crystalline_alloy', [' A ', 'BEC', ' D ' ], {
    A: '#forge:crystals/earth',
    B: '#forge:crystals/sky',
    C: '#forge:crystals/ichor',
    D: '#forge:crystals/ender',
    E: 'extendedcrafting:crystaltine_ingot'
  })

  removeRecipeByID(event, [
    'silentgear:bronze_ingot',
    'silentgear:salvager',
    'silentcompat:crystalline_alloy'
  ])
  
})
