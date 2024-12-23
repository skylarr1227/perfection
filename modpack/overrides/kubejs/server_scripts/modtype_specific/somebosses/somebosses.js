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

  ☻/  * @file Recipe World of Bosses script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event=> {

    //======= Crystal of Summoning =======
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('minecraft:amethyst_shard').toJson(),
            Ingredient.of('ars_nouveau:manipulation_essence').toJson(),
            Ingredient.of('cyclic:ender_eye_reuse').toJson(),
            Ingredient.of('rftoolsbase:dimensionalshard').toJson(),
            Ingredient.of('cyclic:flute_summoning').toJson(),
            Ingredient.of('redstone_arsenal:flux_gem').toJson()
        ],
        energy: '10000',
        result: Item.of('kubejs:crystal_of_summoning').toJson()
    }).id(`kubejs:energizing/crystal_of_summoning`)

    //======= Gilded Dynamite =======
    event.shaped('somebosses:gilded_dynamite', ['ADA', 'BCB', 'ABA'], {
        A: 'minecraft:tnt',
        B: 'thermal:explosive_grenade',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/angerite'
    }).id(`kubejs:somebosses/gilded_dynamite`)

    //======= Illegal Beacon =======
    event.shaped('somebosses:illegal_beacon', ['FDF', 'BCB', 'AAA'], {
        A: '#forge:storage_blocks/iron',
        B: 'cyclic:beacon_redstone',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/ghoul_quartz',
        F: '#forge:glass/tinted'
    }).id(`kubejs:somebosses/illegal_beacon`)

    //======= Vampire Bait =======
    event.shaped('somebosses:vampire_bait', ['ADA', 'BCB', 'AFA'], {
        A: 'rottencreatures:corrupted_wart',
        B: 'twilightforest:fiery_blood',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/blood_quartz',
        F: 'reliquary:zombie_heart'
    }).id(`kubejs:somebosses/vampire_bait`)

    //======= Cursed Spring Water =======
    event.shaped('somebosses:cursed_spring_water', ['ADA', 'BCB', 'ABA'], {
        A: 'mysticalagriculture:soulstone',
        B: 'mysticalagriculture:water_essence',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/medusa_quartz'
    }).id(`kubejs:somebosses/cursed_spring_water`)

    //======= Token of the Ninja =======
    event.shaped('somebosses:token_of_the_ninja', ['ADA', 'BCB', 'AFA'], {
        A: '#forge:gems/amethyst',
        B: Item.of('cyclic:boomerang_stun', '{Damage:0}'),
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/cyber_orb',
        F: 'reliquary:void_tear'
    }).id(`kubejs:somebosses/token_of_the_ninja`)

    //======= Rusty Sword Relic =======
    event.shaped('somebosses:rusty_sword_relic', ['ADA', 'BCB', 'ABA'], {
        A: 'ars_nouveau:thread_magic_capacity',
        B: Item.of('mekanismtools:steel_sword', '{Damage:0}'),
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/corrupted_crystal'
    }).id(`kubejs:somebosses/rusty_sword_relic`)

    //======= Necromancy Staff =======
    event.shaped('somebosses:necromancy_staff', ['ADA', 'BCE', 'AFA'], {
        A: 'botania:spark',
        B: Item.of('cyclic:ice_scepter', '{Damage:0}'),
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/citrine',
        E: Item.of('cyclic:fire_scepter', '{Damage:0}'),
        F: Item.of('cyclic:lightning_scepter', '{Damage:0}')
    }).id(`kubejs:somebosses/necromancy_staff`)

    //======= Furnace Torch =======
    event.shaped('somebosses:furnace_torch', ['ADA', 'BCB', 'AEA'], {
        A: 'cyclic:fireball',
        B: 'immersiveengineering:blastbrick_reinforced',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/borgium',
        E: 'torchmaster:megatorch'
    }).id(`kubejs:somebosses/furnace_torch`)

    //======= Burning Volcanic Rock =======
    event.shaped('somebosses:burning_volcanic_rock', ['ADA', 'BCB', 'AEA'], {
        A: 'forbidden_arcanus:polished_darkstone',
        B: 'ars_nouveau:fire_essence',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/meteorite_scrap',
        E: 'reliquary:molten_core'
    }).id(`kubejs:somebosses/burning_volcanic_rock`)

    //======= Ice Lantern =======
    event.shaped('somebosses:ice_lantern', ['ADA', 'BCB', 'ABA'], {
        A: 'minecraft:blue_ice',
        B: 'minecraft:fire_charge',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/fire_opal'
    }).id(`kubejs:somebosses/ice_lantern`)

    //======= Frozen Shield Plate =======
    event.shaped('somebosses:frozen_shield_plate', ['ADA', 'BCB', 'AEA'], {
        A: 'thermal:ice_charge',
        B: 'reliquary:frozen_core',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/matrix_opal',
        E: Item.of('ars_nouveau:enchanters_shield', '{Damage:0}')
    }).id(`kubejs:somebosses/frozen_shield_plate`)

    //======= Prismarine Eye =======
    event.shaped('somebosses:prismarine_eye', ['ADA', 'BCB', 'AEA'], {
        A: 'minecraft:dark_prismarine',
        B: 'mysticalagriculture:prismarine_essence',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/catseye',
        E: 'alexsmobs:guster_eye'
    }).id(`kubejs:somebosses/prismarine_eye`)

    //======= Slab of Command =======
    event.shaped('somebosses:slab_of_command', ['ADA', 'BCB', 'ABA'], {
        A: 'minecraft:chiseled_polished_blackstone',
        B: 'thermal:cracked_slag_bricks',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/grindstone_scrap'
    }).id(`kubejs:somebosses/slab_of_command`)

    //======= Cactus Relic =======
    event.shaped('somebosses:cactus_relic', ['ADA', 'BCB', 'AEA'], {
        A: 'minecraft:cactus',
        B: 'mysticalagriculture:nature_essence',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/hercynite',
        E: 'quark:green_rune'
    }).id(`kubejs:somebosses/cactus_relic`)
    
    //======= Power Generator Core =======
    event.shaped('somebosses:power_generator_core', ['ADA', 'BCB', 'AEA'], {
        A: 'mekanismgenerators:electromagnetic_coil',
        B: 'immersiveengineering:coil_mv',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/draconium_scrap',
        E: 'ftbic:electronic_circuit'
    }).id(`kubejs:somebosses/power_generator_core`)

    //======= Disgusting Pendant =======
    event.shaped('somebosses:disgusting_pendant', ['ADA', 'BCB', 'AEA'], {
        A: 'refinedstorage:quartz_enriched_iron_block',
        B: 'botania:mana_string',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/humoranium',
        E: 'reliquary:salamander_eye'
    }).id(`kubejs:somebosses/disgusting_pendant`)

    //======= Dark Magic Gauntlet =======
    event.shaped('somebosses:dark_magic_gauntlet', ['ADA', 'BCB', 'AEA'], {
        A: '#forge:storage_blocks/knightmetal',
        B: 'cyclic:laser',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/star_sapphire',
        E: Item.of('cyclic:charm_attack_speed', '{Damage:0}')
    }).id(`kubejs:somebosses/dark_magic_gauntlet`)

    //======= One Eyed Wrait in a Bottle =======
    event.shaped('somebosses:one_eyed_wrait_in_a_bottle', ['ADA', 'BCB', 'AEA'], {
        A: 'reliquary:wraith_node',
        B: '#thermal:glass/hardened',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/chalcanthite',
        E: 'ars_nouveau:mob_jar'
    }).id(`kubejs:somebosses/one_eyed_wrait_in_a_bottle`)

    //======= Chaos Insignia =======
    event.shaped('somebosses:chaos_insignia', ['ADA', 'ACA', 'BEB'], {
        A: '#forge:ingots/platinum',
        B: 'quark:blue_rune',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/neonium',
        E: 'somebosses:cursed_gem'
    }).id(`kubejs:somebosses/chaos_insignia`)

    //======= Bone of Curse =======
    event.shaped('somebosses:bone_of_curse', ['ADA', 'BCB', 'AEA'], {
        A: 'mysticalagriculture:skeleton_essence',
        B: 'reliquary:rib_bone',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/cursed_crystal',
        E: 'minecraft:skeleton_skull'
    }).id(`kubejs:somebosses/bone_of_curse`)

    //======= Monochrome Mask =======
    event.shaped('somebosses:monochrome_mask', ['ADB', 'ACB', 'AEB'], {
        B: 'quark:smooth_soul_sandstone',
        A: 'nourished_nether:smooth_soul_quartz',
        C: '#forge:crystals/crystal_of_summoning',
        D: '#forge:crystals/eclipse_diamond',
        E: Item.of('cyclic:soulstone', '{Damage:0}')
    }).id(`kubejs:somebosses/monochrome_mask`)

    //======= Dark Magic Eye =======
    event.shaped('somebosses:dark_magic_eye', ['ABC', 'DEF', 'DDG'], {
        A: 'iceandfire:cyclops_eye',
        B: 'botania:third_eye',
        C: 'cyclic:ender_pearl_reuse',
        D: 'evilcraft:blood_potash',
        E: '#forge:crystals/crystal_of_summoning',
        F: 'enigmaticlegacy:extradimensional_eye',
        G: 'endrem:witch_eye'
    }).id(`kubejs:somebosses/dark_magic_eye`)

    //======= Jack O'Soul =======
    event.shaped('somebosses:jack_o_soul', ['ABA', 'ECE', 'FDF'], {
        A: '#forge:gems/soulium',
        B: 'minecraft:jack_o_lantern',
        C: '#forge:crystals/crystal_of_summoning',
        D: Item.of('cyclic:soulstone', '{Damage:0}'),
        E: 'midnight_madness:dark_soul',
        F: 'endermanoverhaul:soul_pearl'
    }).id(`kubejs:somebosses/jack_o_soul`)

    removeRecipeByID(event, [
        'somebosses:vulcanrecipe',
        'somebosses:aesegullreicpe',
        'somebosses:vampirerecipe',
        'somebosses:springwaterrecipe',
        'somebosses:m_arecipe',
        'somebosses:namelessrecipe',
        'somebosses:flaberrecipe',
        'somebosses:volrecipe',
        'somebosses:f_mrecipe',
        'somebosses:froverlordrecipe',
        'somebosses:p_wrecipe',
        'somebosses:slab_of_command_recipe',
        'somebosses:sandrecipe',
        'somebosses:powergeneratorcorerecipe',
        'somebosses:e_orecipe',
        'somebosses:handheadrecipe',
        'somebosses:monorecipe',
        'somebosses:insigia_recipe',
        'somebosses:boneofcurserecipe',
        'somebosses:mask_recipe',
        'somebosses:eye_recipe',
        'somebosses:headless_recipe',
    ])

})
