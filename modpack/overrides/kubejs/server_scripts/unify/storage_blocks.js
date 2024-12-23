//Priority: 100
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

  ☻/  * @file Unify Storage Blocks script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
//======= Missing tags for unify =======
ServerEvents.tags('item', event => {

  event.add('forge:storage_blocks/raw_aluminum', 'xycraft_world:aluminum_raw_block')
  event.add('forge:storage_blocks/raw_elementium', 'mythicbotany:raw_elementium_block')
  event.add('forge:storage_blocks/raw_pendorite', 'byg:raw_pendorite_block')
  event.add('forge:storage_blocks/raw_quartz', 'byg:raw_quartz_block')
  event.add('forge:storage_blocks/raw_valkyrum', 'aether_redux:raw_valkyrum_block')
  event.add('forge:storage_blocks/valkyrum', 'aether_treasure_reforging:valkyrum_block')
  event.add('forge:ingots/valkyrum', 'aether_treasure_reforging:valkyrum_ingot')
  event.add('forge:storage_blocks/raw_redstone', 'regions_unexplored:raw_redstone_block')
  event.add('forge:storage_blocks/raw_irradium', 'enlightened_end:raw_irradium_block')
  event.add('forge:storage_blocks/irradium', 'enlightened_end:irradium_block')
  event.add('forge:storage_blocks/raw_bismuth', 'enlightened_end:raw_bismuth_block')
  event.add('forge:storage_blocks/bismuth', 'enlightened_end:bismuth_block')
  event.add('forge:ingots/bismuth', 'enlightened_end:bismuth_ingot')
  event.add('forge:storage_blocks/raw_veridium', 'aether_redux:raw_veridium_block')
  event.add('forge:storage_blocks/veridium', 'aether_redux:veridium_block')
  event.add('forge:ingots/veridium', 'aether_redux:veridium_ingot')

  global.blueskies.forEach(metal => {
    event.add(`forge:storage_blocks/raw_${metal}`, `blue_skies:raw_${metal}_block`)
    event.add(`forge:storage_blocks/${metal}`, `blue_skies:${metal}_block`)
  })

  event.add('forge:gems/charoite', '#blue_skies:gems/charoite')
  event.add('forge:gems/aquite', '#blue_skies:gems/aquite')
  event.add('forge:gems/irradium', 'enlightened_end:irradium_bar')

  event.remove('forge:storage_blocks/steel', ['ad_astra:steel_block'])
  event.remove('forge:ingots/steel', ['ad_astra:steel_ingot'])

})

ServerEvents.recipes(event => {

  const rawBlockMetals = [
    'copper',
    'iron',
    'gold',
    'cobalt',
    'froststeel',
    'cloggrum',
    'elementium',
    'horizonite',
    'ventium',
    'falsite',
    'iridium',
    'zinc',
    'uranium',
    'tin',
    'silver',
    'platinum',
    'osmium',
    'nickel',
    'aluminum',
    'lead',
    'allthemodium',
    'vibranium',
    'unobtainium',
    'crimson_iron',
    'azure_silver',
    'bismuth',
    'veridium',
    'valkyrum'
  ]

  const rawBlockGems = [
    'charoite',
    'aquite',
    'irradium'
  ]
  
  rawBlockMetals.forEach((material) => {
    event.smelting(`#forge:storage_blocks/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:smelting/raw_${material}_to_${material}_block`)
  })

  rawBlockMetals.forEach((material) => {
    event.smelting(`9x #forge:ingots/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:smelting/raw_${material}_to_${material}_ingots`)
  })

  rawBlockMetals.forEach((material) => {
    event.blasting(`#forge:storage_blocks/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:blasting/raw_${material}_to_${material}_block`)
  })

  rawBlockMetals.forEach((material) => {
    event.blasting(`9x #forge:ingots/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:blasting/raw_${material}_to_${material}_ingots`)
  })

  rawBlockGems.forEach((material) => {
    event.smelting(`#forge:storage_blocks/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:smelting/raw_${material}_to_${material}_block_2`)
  })

  rawBlockGems.forEach((material) => {
    event.smelting(`9x #forge:gems/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:smelting/raw_${material}_to_${material}_gems`)
  })

  rawBlockGems.forEach((material) => {
    event.blasting(`#forge:storage_blocks/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:blasting/raw_${material}_to_${material}_block_2`)
  })

  rawBlockGems.forEach((material) => {
    event.blasting(`9x #forge:gems/${material}`, `#forge:storage_blocks/raw_${material}`, 0.7).id(`kubejs:blasting/raw_${material}_to_${material}_gems`)
  })

  //======= Pendorite ======= 
  event.blasting('9x byg:pendorite_scraps', '#forge:storage_blocks/raw_pendorite', 0.7).id(`kubejs:blasting/raw_pendorite_to_pendorite_scraps`)
  event.smelting('9x byg:pendorite_scraps', '#forge:storage_blocks/raw_pendorite', 0.7).id(`kubejs:smelting/raw_pendorite_to_pendorite_scraps`)
  //======= Quartz ======= 
  event.blasting('4x minecraft:quartz', '#forge:storage_blocks/raw_quartz', 0.7).id(`kubejs:blasting/raw_quartz_to_quartz`)
  event.smelting('4x minecraft:quartz', '#forge:storage_blocks/raw_quartz', 0.7).id(`kubejs:smelting/raw_quartz_to_quartz`)
  event.blasting('minecraft:quartz_block', '#forge:storage_blocks/raw_quartz', 0.7).id(`kubejs:blasting/raw_quartz_to_quartz_block`)
  event.smelting('minecraft:quartz_block', '#forge:storage_blocks/raw_quartz', 0.7).id(`kubejs:smelting/raw_quartz_to_quartz_block`)
  //======= Redstone ======= 
  event.blasting('4x minecraft:redstone', '#forge:storage_blocks/raw_redstone', 0.7).id(`kubejs:blasting/raw_redstone_to_redstone`)
  event.smelting('4x minecraft:redstone', '#forge:storage_blocks/raw_redstone', 0.7).id(`kubejs:smelting/raw_redstone_to_redstone`)
  
})
