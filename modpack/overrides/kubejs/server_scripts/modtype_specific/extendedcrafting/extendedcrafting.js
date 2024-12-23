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

  ☻/  * @file Recipe Extended Crafting script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

    //======= Redstone Ingot =======
    event.shaped('extendedcrafting:redstone_ingot', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/iron',
        B: '#forge:dusts/redstone'
    }).id(`kubejs:extendedcrafting/redstone_ingot`)
    
    //======= Ender Ingot =======
    event.shaped('extendedcrafting:ender_ingot', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/iron',
        B: 'minecraft:ender_pearl'
    }).id(`kubejs:extendedcrafting/ender_ingot`)

    //======= Ultimate Singularity =======
    event.recipes.extendedcrafting.shapeless_table({
        tier: 4,
        ingredients: [
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:lumium"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:enderium"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:copper"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:lead"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:gold"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:invar"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:emerald"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:aluminum"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:clay"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:pink_slime"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:osmium"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:uranium"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:electrum"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:coal"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:bronze"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:iron"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:platinum"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:diamond"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:iridium"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:glowstone"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:sapphire"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:nickel"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:silver"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:netherite"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:tin"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:fiery"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:redstone"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:manasteel"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:plastic"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:lapis_lazuli"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:steel"}' },
            {type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:refined_obsidian"}' }
        ],
        result: {item: "extendedcrafting:ultimate_singularity", },
    }).id(`kubejs:extendedcrafting/ultimate_singularity`)

    //======= The Ultimate Ingot =======
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "roAprpAor",
            "oBCDEFGHo",
            "AIJKLMNOA",
            "pPQRSTUVp",
            "rWXYZ123r",
            "p4567890p",
            "AabcdefgA",
            "ohijklmno",
            "roAprpAor",
        ],
        key: {
            A: {item: "extendedcrafting:black_iron_ingot", },
            B: {item: "minecraft:iron_ingot", },
            C: {item: "minecraft:gold_ingot", },
            D: {item: "alltheores:aluminum_ingot", },
            E: {item: "minecraft:copper_ingot", },
            F: {item: "alltheores:lead_ingot", },
            G: {item: "alltheores:nickel_ingot", },
            H: {item: "alltheores:osmium_ingot", },
            I: {item: "alltheores:zinc_ingot", },
            J: {item: "alltheores:silver_ingot", },
            K: {item: "alltheores:tin_ingot", },
            L: {item: "alltheores:uranium_ingot", },
            M: {item: "alltheores:platinum_ingot", },
            N: {item: "botania:manasteel_ingot", },
            O: {item: "botania:elementium_ingot", },
            P: {item: "botania:terrasteel_ingot", },
            Q: {item: "silentgear:crimson_iron_ingot", },
            R: {item: "silentgear:crimson_steel_ingot", },
            S: {item: "silentgear:blaze_gold_ingot", },
            T: {item: "silentgear:azure_silver_ingot", },
            U: {item: "silentgear:azure_electrum_ingot", },
            V: {item: "minecraft:netherite_ingot", },
            W: {item: "mysticalagriculture:inferium_ingot", },
            X: {item: "mysticalagriculture:prudentium_ingot", },
            Y: {item: "mysticalagriculture:tertium_ingot", },
            Z: {item: "mysticalagriculture:imperium_ingot", },
            1: {item: "mysticalagriculture:supremium_ingot", },
            2: {item: "mysticalagradditions:insanium_ingot", },
            3: {item: "twilightforest:knightmetal_ingot", },
            4: {item: "mekanism:ingot_refined_obsidian", },
            5: {item: "mekanism:ingot_refined_glowstone", },
            6: {item: "alltheores:steel_ingot", },
            7: {item: "industrialforegoing:pink_slime_ingot", },
            8: {item: "silentgear:tyrian_steel_ingot", },
            9: {item: "theabyss:fusion_ingot", },
            0: {item: "theabyss:unorithe_ingot", },
            a: {item: "thermal_extra:dragonsteel_ingot", },
            b: {item: "allthemodium:allthemodium_ingot", },
            c: {item: "allthemodium:unobtainium_ingot", },
            d: {item: "allthemodium:vibranium_ingot", },
            e: {item: "thermal_extra:soul_infused_ingot", },
            f: {item: "thermal_extra:shellite_ingot", },
            g: {item: "thermal_extra:twinite_ingot", },
            h: {item: "blue_skies:horizonite_ingot", },
            i: {item: "alltheores:bronze_ingot", },
            j: {item: "alltheores:invar_ingot", },
            k: {item: "alltheores:constantan_ingot", },
            l: {item: "alltheores:signalum_ingot", },
            m: {item: "alltheores:lumium_ingot", },
            n: {item: "alltheores:enderium_ingot", },
            o: {item: "minecraft:nether_star", },
            p: {item: "extendedcrafting:ender_star", },
            r: {item: "extendedcrafting:flux_star", }
        },
        result: {item: "extendedcrafting:the_ultimate_ingot", },
    }).id(`kubejs:extendedcrafting/the_ultimate_ingot`)

    //======= Auto Crafting Tables =======
    event.shaped('extendedcrafting:basic_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:basic_table'
    }).id(`kubejs:extendedcrafting/basic_auto_table`)

    event.shaped('extendedcrafting:advanced_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:advanced_table'
    }).id(`kubejs:extendedcrafting/advanced_auto_table`)

    event.shaped('extendedcrafting:elite_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:elite_table'
    }).id(`kubejs:extendedcrafting/elite_auto_table`)

    event.shaped('extendedcrafting:ultimate_auto_table', ['ABA', 'CDC', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:redstone_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        D: 'extendedcrafting:ultimate_table'
    }).id(`kubejs:extendedcrafting/ultimate_auto_table`)

    //======= Black Iron Frame =======
    event.shaped('extendedcrafting:frame', ['ABA', 'BCB', 'ABA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:ender_star',
        C: 'extendedcrafting:crystaltine_catalyst'
    }).id(`kubejs:extendedcrafting/frame`)

    //======= Queantum Comressor =======
    event.shaped('extendedcrafting:compressor', ['ABA', 'CEC', 'ADA'], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:crystaltine_catalyst',
        C: 'extendedcrafting:enhanced_redstone_catalyst',
        D: 'extendedcrafting:black_iron_slate',
        E: 'extendedcrafting:frame'
    }).id(`kubejs:extendedcrafting/compressor`)

    //======= Basic Crafting Table =======
    modifyShaped(event, 'extendedcrafting:basic_table', 1, ['ABA', 'CDC', 'AEA'], {
        A: 'extendedcrafting:basic_component',
        B: 'extendedcrafting:basic_catalyst',
        C: '#forge:workbenches',
        D: '#forge:storage_blocks/iron',
        E: 'extendedcrafting:black_iron_slate'
    })

    //======= Ender Crafter =======
    modifyShaped(event, 'extendedcrafting:ender_crafter', 1, ['AAA', 'BCB', 'BBB'], {
        A: 'minecraft:ender_eye',
        B: '#forge:ingots/ender_ingot',
        C: '#forge:workbenches'
    })

    //======= Flux Crafter =======
    modifyShaped(event, 'extendedcrafting:flux_crafter', 1, ['AAA', 'BCB', 'BBB'], {
        A: '#forge:ingots/gold',
        B: '#forge:ingots/redstone',
        C: '#forge:workbenches'
    })

    removeRecipeByID(event, [
        'extendedcrafting:basic_auto_table',
        'extendedcrafting:advanced_auto_table',
        'extendedcrafting:elite_auto_table',
        'extendedcrafting:ultimate_auto_table',
        'extendedcrafting:frame',
        'extendedcrafting:compressor',
        'extendedcrafting:redstone_ingot',
        'extendedcrafting:ender_ingot',
        'extendedcrafting:handheld_table',
        'extendedcrafting:ultimate_singularity'
    ])

})
