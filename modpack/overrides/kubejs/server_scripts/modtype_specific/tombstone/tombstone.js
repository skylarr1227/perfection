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

  ☻/  * @file Recipe Corail Tombstone script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {
  
  //======= Ankh of Prayer =======
  event.shaped(Item.of('tombstone:ankh_of_prayer', '{Damage:0}'), ['CBC', 'BAB', 'CBC'], {
    A: '#forge:ingots/gold',
    B: '#forge:rods/wooden',
    C: 'nourished_nether:soul_quartz'
  }).id(`kubejs:tombstone/ankh_of_prayer`)

  //======= Grave Dust =======
  event.shapeless('tombstone:grave_dust', ['#forge:all_hammers', 'mysticalagriculture:soulium_gemstone']).id(`kubejs:tombstone/grave_dust`)

  removeRecipeByID(event, [
    'tombstone:ankh_of_prayer'
  ])
  
})
