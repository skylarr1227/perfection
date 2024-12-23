//Priority: 1
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

  ☻/  * @file JEI Hidden Items script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
JEIEvents.hideItems(event => {

  event.hide(/extrastorage:(block|disk|storagepart)_.+/)
  event.hide(/rebornstorage:(small|medium|large|larger)_(item|fluid)_disk.*/)
  event.hide(/extrastorage:advanced_(importer|exporter)/)
  event.hide('twilightforest:uncrafting_table')
  event.hide('mysticalagradditions:awakened_draconium_crux')
  event.hide('allthecompressed:atm_star_block_1x')

  Color.DYE.forEach(color => {
    ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'].forEach(machine => {
      event.hide(`refinedstorage:${color}_${machine}`)
    })
  })

  const hide = [
    'irongenerators:skystone_generator',
    'irongenerators:certus_quartz_generator',
    'mysticalagriculture:mithril_seeds',
    'mysticalagriculture:mithril_essence',
    'mysticalagriculture:chrome_seeds',
    'mysticalagriculture:chrome_essence',
    'minecraft:wooden_sword',
    'minecraft:wooden_pickaxe',
    'minecraft:wooden_axe',
    'minecraft:wooden_shovel',
    'minecraft:wooden_hoe',
    'minecraft:stone_sword',
    'minecraft:stone_pickaxe',
    'minecraft:stone_axe',
    'minecraft:stone_shovel',
    'minecraft:stone_hoe',
    'vanillaaiots:wooden_aiot',
    'vanillaaiots:stone_aiot',
    'mekanismtools:wood_paxel',
    'mekanismtools:stone_paxel',
    'allthecompressed:atm_star_block_1x',
    'allthecompressed:atm_star_block_2x',
    'allthecompressed:atm_star_block_3x',
    'allthecompressed:atm_star_block_4x',
    'allthecompressed:atm_star_block_5x',
    'allthecompressed:atm_star_block_6x',
    'allthecompressed:atm_star_block_7x',
    'allthecompressed:atm_star_block_8x',
    'allthecompressed:atm_star_block_9x',
    'farmersdelight:carrot_crate',
    'farmersdelight:potato_crate',
    'farmersdelight:beetroot_crate',
    'farmersdelight:tomato_crate',
    'farmersdelight:onion_crate',
    'farmersdelight:rice_bag',
    'extendedcrafting:handheld_table',
    'ftbic:silicon',
    'thermal:cured_rubber',
    Item.of('mysticalagriculture:infusion_crystal', '{Damage:0}'),
    'hmag:ender_eye_block',
    'hmag:nether_star_block',
    'potionsmaster:bismuth_powder',
    'potionsmaster:calcinatedbismuth_powder',
    'cyclic:crafter',
    'cyclic:crafting_stick',
    'cyclic:crafting_bag'
  ]

  hide.forEach((id) => {
    event.hide(id)
  })

})
