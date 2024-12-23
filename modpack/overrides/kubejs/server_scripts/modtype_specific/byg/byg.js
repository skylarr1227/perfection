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

  ☻/  * @file Recipe Oh The Biomes You'll Go script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  let SandColors = ['black', 'white', 'blue', 'purple', 'pink']

  SandColors.forEach(color => {

    //======= Smooth Sandstone =======
    event.smelting(`byg:${color}_smooth_sandstone`, `byg:${color}_sandstone`).id(`kubejs:byg/${color}_smooth_sandstone`)
    //======= Sandstone =======
    event.shaped(`byg:${color}_sandstone`, ['AA', 'AA'], {
      A: `#forge:sand/${color}`
    }).id(`kubejs:byg/${color}_sandstone`)

  })

  //======= Black Ice =======
  event.shaped('byg:black_ice', ['AAA', 'ABA', 'AAA'], {
    A: 'minecraft:ice',
    B: '#forge:dyes/black'
  }).id(`kubejs:byg/black_ice`)

  //======= Ametrine Horse Armor =======
  event.shaped('byg:ametrine_horse_armor', ['  A', 'ABA', 'ACA'], {
    A: 'byg:ametrine_gems',
    B: 'minecraft:saddle',
    C: '#forge:rope'
  }).id(`kubejs:byg/ametrine_horse_armor`)

  //======= Pendorite Horse Armor =======
  event.shaped('byg:pendorite_horse_armor', ['  A', 'ABA', 'ACA'], {
    A: 'byg:pendorite_ingot',
    B: 'minecraft:saddle',
    C: '#forge:rope'
  }).id(`kubejs:byg/pendorite_horse_armor`)

  //======= Therium Lamp =======
  event.shaped('byg:therium_lamp', ['ABA', 'BCB', 'ABA'], { 
    A: '#forge:nuggets/electrum',
    B: '#forge:dusts/redstone',
    C: 'byg:therium_crystal_shard'
  }).id(`kubejs:byg/therium_lamp`)

  //======= Glowstone Lamp =======
  event.shaped('byg:glowstone_lamp', ['ABA', 'BCB', 'ABA'], { 
    A: '#forge:nuggets/electrum',
    B: '#forge:dusts/redstone',
    C: 'minecraft:glowstone'
  }).id(`kubejs:byg/glowstone_lamp`)

  //======= Chain Plating =======
  event.shaped('2x byg:chain_plating', ['ABA', 'B B', 'ABA'], {
    A: '#forge:nuggets/iron',
    B: '#forge:ingots/iron'
  }).id(`kubejs:byg/chain_plating`)

  //======= Pendorite Ingot =======
  event.shaped('byg:pendorite_ingot', ['ABA', 'DCD', 'ABA'], { 
    A: 'byg:pendorite_scraps',
    B: 'byg:emeraldite_shards',
    C: '#forge:ingots/crystaltine',
    D: 'cyclic:gem_obsidian'
  }).id(`kubejs:byg/pendorite_ingot`)

  removeRecipeByID(event, [
    'byg:ametrine_horse_armor',
    'byg:pendorite_horse_armor',
    'byg:black_smooth_sandstone',
    'byg:white_smooth_sandstone',
    'byg:blue_smooth_sandstone',
    'byg:purple_smooth_sandstone',
    'byg:pink_smooth_sandstone',
    'byg:black_sandstone',
    'byg:white_sandstone',
    'byg:blue_sandstone',
    'byg:purple_sandstone',
    'byg:pink_sandstone',
    'byg:therium_lamp',
    'byg:glowstone_lamp',
    'byg:chain_plating',
    'byg:pendorite_ingot',
    'byg:byg_chest'
  ])

})
