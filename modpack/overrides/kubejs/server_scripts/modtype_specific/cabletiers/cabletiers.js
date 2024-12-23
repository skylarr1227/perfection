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

  ☻/  * @file Recipe Cable Tiers script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

    //======= EXPORTER'S =======
    event.shaped('cabletiers:elite_exporter', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'refinedstorage:exporter',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_exporter`)

    event.shaped('cabletiers:ultra_exporter', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_exporter',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_exporter`)

    event.shaped('cabletiers:creative_exporter', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:nether_star',
        B: 'cabletiers:ultra_exporter',
        C: 'kubejs:crystal_of_creation'
    }).id(`kubejs:cabletiers/creative_exporter`)

    //======= IMPORTER'S =======
    event.shaped('cabletiers:elite_importer', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'refinedstorage:importer',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_importer`)

    event.shaped('cabletiers:ultra_importer', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_importer',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_importer`)

    event.shaped('cabletiers:creative_importer', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:nether_star',
        B: 'cabletiers:ultra_importer',
        C: 'kubejs:crystal_of_creation'
    }).id(`kubejs:cabletiers/creative_importer`)

    //======= CONSTRUCTORS'S =======    
    event.shaped('cabletiers:elite_constructor', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'refinedstorage:constructor',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_constructor`)

    event.shaped('cabletiers:ultra_constructor', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_constructor',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_constructor`)

    event.shaped('cabletiers:creative_constructor', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:nether_star',
        B: 'cabletiers:ultra_constructor',
        C: 'kubejs:crystal_of_creation'
    }).id(`kubejs:cabletiers/creative_constructor`)

    //======= DESTRUCTORS'S =======    
    event.shaped('cabletiers:elite_destructor', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'refinedstorage:destructor',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_destructor`)

    event.shaped('cabletiers:ultra_destructor', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_destructor',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_destructor`)

    event.shaped('cabletiers:creative_destructor', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:nether_star',
        B: 'cabletiers:ultra_destructor',
        C: 'kubejs:crystal_of_creation'
    }).id(`kubejs:cabletiers/creative_destructor`)

    //======= REQUESTER'S =======    
    event.shaped('cabletiers:elite_requester', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'rsrequestify:requester',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_requester`)

    event.shaped('cabletiers:ultra_requester', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_requester',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_requester`)

    event.shaped('cabletiers:creative_requester', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:nether_star',
        B: 'cabletiers:ultra_requester',
        C: 'kubejs:crystal_of_creation'
    }).id(`kubejs:cabletiers/creative_requester`)

    //======= DISK MANIPULATOR'S =======    
    event.shaped('cabletiers:elite_disk_manipulator', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'refinedstorage:disk_manipulator',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_disk_manipulator`)

    event.shaped('cabletiers:ultra_disk_manipulator', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_disk_manipulator',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_disk_manipulator`)

    event.shaped('cabletiers:creative_disk_manipulator', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:nether_star',
        B: 'cabletiers:ultra_disk_manipulator',
        C: 'kubejs:crystal_of_creation'
    }).id(`kubejs:cabletiers/creative_disk_manipulator`)

    removeRecipeByID(event, [
        'cabletiers:elite_exporter',
        'cabletiers:ultra_exporter',
        'cabletiers:creative_exporter',
        'cabletiers:elite_importer',
        'cabletiers:ultra_importer',
        'cabletiers:creative_importer',
        'cabletiers:elite_constructor',
        'cabletiers:ultra_constructor',
        'cabletiers:creative_constructor',
        'cabletiers:elite_destructor',
        'cabletiers:ultra_destructor',
        'cabletiers:creative_destructor',
        'cabletiers:elite_requester',
        'cabletiers:ultra_requester',
        'cabletiers:creative_requester',
        'cabletiers:elite_disk_manipulator',
        'cabletiers:ultra_disk_manipulator',
        'cabletiers:creative_disk_manipulator'
    ])

})
