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

  ☻/  * @file Recipe FTB Industrial Contraptions script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

    //======= Machine Block =======
    modifyShaped(event, 'ftbic:machine_block', 1, ['ABA', 'BCB', 'ABA'], {
        A: 'ftbic:advanced_alloy',
        B: 'ftbic:industrial_grade_metal',
        C: 'ftbic:fuse'
    })

    //======= Iron Furnace =======
    modifyShaped(event, 'ftbic:iron_furnace', 1, ['AAA', 'ACA', 'ABA'], {
        A: '#forge:ingots/iron',
        B: '#misctags:furnace',
        C: 'ftbic:machine_block'
    })

    //======= Powered Furnace =======
    modifyShaped(event, 'ftbic:powered_furnace', 1, ['ABA', 'BCB', 'DED'], {
        A: '#forge:ingots/iron',
        B: 'ftbic:industrial_grade_metal',
        C: 'ftbic:iron_furnace',
        D: 'ftbic:lv_cable',
        E: 'ftbic:electronic_circuit'
    })

    //======= Macerator =======
    modifyShaped(event, 'ftbic:macerator', 1, ['AAA', 'BCB', 'DED'], {
        A: 'minecraft:flint',
        B: 'ftbic:reinforced_stone',
        C: 'ftbic:machine_block',
        D: 'ftbic:industrial_grade_metal',
        E: 'ftbic:electronic_circuit'
    })

    //======= Compressor =======
    modifyShaped(event, 'ftbic:compressor', 1, ['AFA', 'BCB', 'DED'], {
        A: '#forge:ingots/iron',
        B: 'ftbic:reinforced_stone',
        C: 'ftbic:machine_block',
        D: 'ftbic:industrial_grade_metal',
        E: 'ftbic:electronic_circuit',
        F: 'minecraft:piston'
    })

    //======= Reprocessor =======
    modifyShaped(event, 'ftbic:reprocessor', 1, ['AAA', 'ABA', 'DED'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'minecraft:composter',
        D: 'ftbic:electronic_circuit',
        E: 'ftbic:compressor'
    })

    //======= Extruder =======
    modifyShaped(event, 'ftbic:extruder', 1, ['ABA', 'BCB', 'DED'], {
        A: '#forge:ingots/iron',
        B: '#forge:rods/iron',
        C: 'ftbic:machine_block',
        D: 'ftbic:industrial_grade_metal',
        E: 'ftbic:electronic_circuit'
    })

    //======= Quarry =======
    modifyShaped(event, 'ftbic:quarry', 1, ['ABA', 'DCD', 'AEA'], {
        A: 'ftbic:advanced_alloy',
        B: 'thermal:flux_drill',
        C: 'ftbic:advanced_machine_block',
        D: 'ftbic:advanced_circuit',
        E: 'immersiveengineering:drillhead_steel'
    })

    //======= MV Transformer =======
    modifyShaped(event, 'ftbic:mv_transformer', 1, ['ABA', 'ACA', 'ABA'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'ftbic:mv_cable',
        C: 'ftbic:machine_block'
    })

    //======= HV Transformer =======
    modifyShaped(event, 'ftbic:hv_transformer', 1, ['ABA', 'DCE', 'ABA'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'ftbic:hv_cable',
        C: 'ftbic:mv_transformer',
        D: 'ftbic:electronic_circuit',
        E: 'ftbic:energy_crystal'
    })

    //======= EV Transformer =======
    modifyShaped(event, 'ftbic:ev_transformer', 1, ['ABA', 'DCE', 'ABA'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'ftbic:ev_cable',
        C: 'ftbic:hv_transformer',
        D: 'ftbic:advanced_circuit',
        E: 'ftbic:advanced_alloy'
    })

    //======= Ejector Upgrade =======
    modifyShaped(event, 'ftbic:ejector_upgrade', 1, ['ABA', 'BCB', 'ADA'], {
        A: '#forge:ingots/tin',
        B: 'ftbic:advanced_alloy',
        C: 'minecraft:piston',
        D: 'ftbic:electronic_circuit'
    })

    //======= Fuse =======
    modifyShaped(event, 'ftbic:fuse', 8, ['AAA', 'BBB', 'AAA'], {
        A: '#forge:glass/colorless',
        B: 'ftbic:industrial_grade_metal'
    })

    //======= Fluid Cell =======
    event.shaped('2x ftbic:fluid_cell', [' A ', 'ABA', ' A '], {
        A: '#forge:ingots/tin',
        B: '#forge:glass/colorless'
    }).id(`kubejs:ftbic/fluid_cell_empty`)

    //======= Roller =======
    modifyShaped(event, 'ftbic:roller', 1, ['AAA', 'HMH', 'PCP'], {
        A: 'ftbic:industrial_grade_metal',
        H: '#forge:gears/aluminum',
        P: 'minecraft:piston',
        M: 'ftbic:machine_block',
        C: 'ftbic:electronic_circuit'
    })

    //======= Centrifuge =======
    event.shaped('ftbic:centrifuge', ['BTB', 'TMT', 'ACA'], {
        A: 'ftbic:industrial_grade_metal',
        B: '#forge:ingots/iron',
        T: 'myrtrees:tree_tap',
        M: 'ftbic:machine_block',
        C: 'ftbic:electronic_circuit'
    }).id(`kubejs:ftbic/centrifuge`)

    //======= FTBIC Book =======
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"ftbic:ftbic_guide"}'), ['minecraft:book', 'ftbic:industrial_grade_metal']).id(`kubejs:ftbic/ftbic_guide`)

    //======= Rolling missing plate recipes =======
    //Thermal
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/rose_gold"}}],
        outputItems: [{item: "thermal:rose_gold_plate"}]
    }).id(`kubejs:ftbc/rolling/rose_gold_plate`)
    //Thermal Extra
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/soul_infused"}}],
        outputItems: [{item: "thermal_extra:soul_infused_plate"}]
    }).id(`kubejs:ftbc/rolling/soul_infused_plate`)
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/shellite"}}],
        outputItems: [{item: "thermal_extra:shellite_plate"}]
    }).id(`kubejs:ftbc/rolling/shellite_plate`)
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/twinite"}}],
        outputItems: [{item: "thermal_extra:twinite_plate"}]
    }).id(`kubejs:ftbc/rolling/twinite_plate`)
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/dragonsteel"}}],
        outputItems: [{item: "thermal_extra:dragonsteel_plate"}]
    }).id(`kubejs:ftbc/rolling/dragonsteel_plate`)

    //======= Extruder missing gear recipes =======
    //Alltheores
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/nickel"}}],
        outputItems: [{item: "alltheores:nickel_gear"}]
    }).id(`kubejs:ftbic/extruder/nickel_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/osmium"}}],
        outputItems: [{item: "alltheores:osmium_gear"}]
    }).id(`kubejs:ftbic/extruder/osmium_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/platinum"}}],
        outputItems: [{item: "alltheores:platinum_gear"}]
    }).id(`kubejs:ftbic/extruder/platinum_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/silver"}}],
        outputItems: [{item: "alltheores:silver_gear"}]
    }).id(`kubejs:ftbic/extruder/silver_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/zinc"}}],
        outputItems: [{item: "alltheores:zinc_gear"}]
    }).id(`kubejs:ftbic/extruder/zinc_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/steel"}}],
        outputItems: [{item: "alltheores:steel_gear"}]
    }).id(`kubejs:ftbic/extruder/steel_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/invar"}}],
        outputItems: [{item: "alltheores:invar_gear"}]
    }).id(`kubejs:ftbic/extruder/invar_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/electrum"}}],
        outputItems: [{item: "alltheores:electrum_gear"}]
    }).id(`kubejs:ftbic/extruder/electrum_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/diamond"}}],
        outputItems: [{item: "alltheores:diamond_gear"}]
    }).id(`kubejs:ftbic/extruder/diamond_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/lumium"}}],
        outputItems: [{item: "alltheores:lumium_gear"}]
    }).id(`kubejs:ftbic/extruder/lumium_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/signalum"}}],
        outputItems: [{item: "alltheores:signalum_gear"}]
    }).id(`kubejs:ftbic/extruder/signalum_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/constantan"}}],
        outputItems: [{item: "alltheores:constantan_gear"}]
    }).id(`kubejs:ftbic/extruder/constantan_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/brass"}}],
        outputItems: [{item: "alltheores:brass_gear"}]
    }).id(`kubejs:ftbic/extruder/brass_gear`)
    //Allthemodium
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/allthemodium"}}],
        outputItems: [{item: "allthemodium:allthemodium_gear"}]
    }).id(`kubejs:ftbic/extruder/allthemodium_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/vibranium"}}],
        outputItems: [{item: "allthemodium:vibranium_gear"}]
    }).id(`kubejs:ftbic/extruder/vibranium_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/unobtainium"}}],
        outputItems: [{item: "allthemodium:unobtainium_gear"}]
    }).id(`kubejs:ftbic/extruder/unobtainium_gear`)
    //Thermal
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/netherite"}}],
        outputItems: [{item: "thermal:netherite_gear"}]
    }).id(`kubejs:ftbic/extruder/netherite_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/rose_gold"}}],
        outputItems: [{item: "thermal:rose_gold_gear"}]
    }).id(`kubejs:ftbic/extruder/rose_gold_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:gems/lapis"}}],
        outputItems: [{item: "thermal:lapis_gear"}]
    }).id(`kubejs:ftbic/extruder/lapis_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:gems/emerald"}}],
        outputItems: [{item: "thermal:emerald_gear"}]
    }).id(`kubejs:ftbic/extruder/emerald_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:gems/quartz"}}],
        outputItems: [{item: "thermal:quartz_gear"}]
    }).id(`kubejs:ftbic/extruder/quartz_gear`)
    //Thermal Extra
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/soul_infused"}}],
        outputItems: [{item: "thermal_extra:soul_infused_gear"}]
    }).id(`kubejs:ftbic/extruder/soul_infused_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/shellite"}}],
        outputItems: [{item: "thermal_extra:shellite_gear"}]
    }).id(`kubejs:ftbic/extruder/shellite_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/twinite"}}],
        outputItems: [{item: "thermal_extra:twinite_gear"}]
    }).id(`kubejs:ftbic/extruder/twinite_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/dragonsteel"}}],
        outputItems: [{item: "thermal_extra:dragonsteel_gear"}]
    }).id(`kubejs:ftbic/extruder/dragonsteel_gear`)
    //Redstone Arsenal
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:ingots/flux"}}],
        outputItems: [{item: "redstone_arsenal:flux_gear"}]
    }).id(`kubejs:ftbic/extruder/flux_gear`)

    removeRecipeByID(event, [
        'ftbic:shaped/fluid_cell',
        'ftbic:shaped/extractor',
        'ftbic:shaped/ingots/aluminum_to_aluminum_rod',
        'ftbic:shaped/ingots/iridium_to_iridium_rod',
        'ftbic:shaped/ingots/lead_to_lead_rod',
        'ftbic:shaped/ingots/tin_to_tin_rod',
        'ftbic:shaped/ingots/uranium_to_uranium_rod',
        'ftbic:shaped/ingots/bronze_to_bronze_rod',
        'ftbic:shaped/ingots/iron_to_iron_rod',
        'ftbic:shaped/ingots/gold_to_gold_rod',
        'ftbic:shaped/ingots/copper_to_copper_rod',
        'ftbic:shaped/ingots/enderium_to_enderium_rod',
    ])

})
