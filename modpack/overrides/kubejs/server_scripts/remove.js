//Priority: 3
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

  ☻/  * @file Global recipe Removement script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  removeRecipeByID(event, [
    //Miscelleneous region
    'extendedcrafting:handheld_table',
    'botania:mushroom_stew',
    'blue_skies:furnace_compat',
    'farmersdelight:book_from_canvas',
    'vanillaaiots:wooden_aiot',
    'mekanismtools:wood_paxel',
    'mekanismtools:stone_paxel',
    'midnight_madness:crafting_table',
    'regions_unexplored:redstone_from_blasting_raw_redstone_block',
    'regions_unexplored:redstone_from_smelting_raw_redstone_block',
    //Hostile Mobs & Girls
    'hmag:ender_eye_block',
    'hmag:ender_eye_from_ender_eye_block',
    'hmag:nether_star_block',
    'hmag:nether_star_from_nether_star_block',
    //Nourished Nether
    'nourished_nether:netherite_nugget',
    'nourished_nether:netherite_nuggets_to_ingot',
    'nourished_nether:netherite_scrap_block_recipe',
    'nourished_nether:netherite_scrap_block_convert',
    //FTB Industrial Contraptions
    'ftbic:shaped/enderium_ingot',
    'ftbic:shaped/bronze_dust',
    //Immersiveengineering region
    'immersiveengineering:crafting/stick_aluminum',
    'immersiveengineering:crafting/stick_steel',
    'immersiveengineering:crafting/stick_iron',
    'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
    'immersiveengineering:crafting/hammercrushing_osmium',
    'immersiveengineering:crafting/raw_hammercrushing_copper',
    'immersiveengineering:crafting/hammercrushing_silver',
    'immersiveengineering:crafting/hammercrushing_uranium',
    'immersiveengineering:crafting/hammercrushing_aluminum',
    'immersiveengineering:crafting/raw_hammercrushing_platinum',
    'immersiveengineering:crafting/hammercrushing_iron',
    'immersiveengineering:crafting/hammercrushing_gold',
    'immersiveengineering:crafting/raw_hammercrushing_osmium',
    'immersiveengineering:crafting/hammercrushing_copper',
    'immersiveengineering:crafting/raw_hammercrushing_zinc',
    'immersiveengineering:crafting/raw_hammercrushing_silver',
    'immersiveengineering:crafting/raw_hammercrushing_gold',
    'immersiveengineering:crafting/raw_hammercrushing_nickel',
    'immersiveengineering:crafting/hammercrushing_zinc',
    'immersiveengineering:crafting/hammercrushing_nickel',
    'immersiveengineering:crafting/hammercrushing_lead',
    'immersiveengineering:crafting/raw_hammercrushing_iron',
    'immersiveengineering:crafting/hammercrushing_tin',
    'immersiveengineering:crafting/raw_hammercrushing_tin',
    'immersiveengineering:crafting/hammercrushing_platinum',
    'immersiveengineering:crafting/raw_hammercrushing_lead',
    'immersiveengineering:crafting/raw_hammercrushing_uranium',
    'immersiveengineering:crafting/raw_hammercrushing_aluminum',
    //Twilight Forest region
    'twilightforest:smeltery/melting/metal/fiery/nugget',
    'twilightforest:smeltery/melting/metal/knightmetal/nugget',
    //All the Ores region
    'alltheores:osmium_gear',
    'alltheores:platinum_gear',
    'alltheores:zinc_gear',
    'alltheores:brass_gear',
    //Oh the Biomes You'll Go region
    'byg:torch_from_byg_coals',
    'byg:soul_torch_from_byg_coals',
    //Quark region
    'quark:tweaks/crafting/utility/tools/stone_sword',
    'quark:tweaks/crafting/utility/tools/stone_pickaxe',
    'quark:tweaks/crafting/utility/tools/stone_axe',
    'quark:tweaks/crafting/utility/tools/stone_shovel',
    'quark:tweaks/crafting/utility/tools/stone_hoe',
    'quark:tweaks/crafting/slab_to_block',
    'quark:building/crafting/compressed/apple_crate',
    'quark:building/crafting/compressed/apple_crate_uncompress',
    'quark:building/crafting/compressed/potato_crate',
    'quark:building/crafting/compressed/potato_crate_uncompress',
    'quark:building/crafting/compressed/carrot_crate',
    'quark:building/crafting/compressed/carrot_crate_uncompress',
    'quark:building/crafting/compressed/beetroot_crate',
    'quark:building/crafting/compressed/beetroot_crate_uncompress',
    'quark:building/crafting/compressed/gunpowder_sack',
    'quark:building/crafting/compressed/gunpowder_sack_uncompress',
    'quark:building/crafting/compressed/sugar_cane_block',
    'quark:building/crafting/compressed/sugar_cane_block_uncompress',       
    'quark:building/crafting/furnaces/cobblestone_furnace',
    'quark:building/crafting/furnaces/deepslate_smoker',
    'quark:building/crafting/furnaces/blackstone_smoker',
    'quark:building/crafting/furnaces/deepslate_blast_furnace',
    'quark:building/crafting/furnaces/blackstone_blast_furnace',
    'quark:building/crafting/furnaces/basalt_blast_furnace',
    'quark:tweaks/crafting/utility/bent/bread',
    'quark:tweaks/crafting/utility/bent/paper',
    'quark:tweaks/crafting/utility/wool/white_wool',
    'quark:tweaks/crafting/utility/wool/orange_wool',
    'quark:tweaks/crafting/utility/wool/magenta_wool',
    'quark:tweaks/crafting/utility/wool/light_blue_wool',
    'quark:tweaks/crafting/utility/wool/yellow_wool',
    'quark:tweaks/crafting/utility/wool/lime_wool',
    'quark:tweaks/crafting/utility/wool/pink_wool',
    'quark:tweaks/crafting/utility/wool/gray_wool',
    'quark:tweaks/crafting/utility/wool/light_gray_wool',
    'quark:tweaks/crafting/utility/wool/cyan_wool',
    'quark:tweaks/crafting/utility/wool/purple_wool',
    'quark:tweaks/crafting/utility/wool/blue_wool',
    'quark:tweaks/crafting/utility/wool/brown_wool',
    'quark:tweaks/crafting/utility/wool/green_wool',
    'quark:tweaks/crafting/utility/wool/red_wool',
    'quark:tweaks/crafting/utility/wool/black_wool',
    'quark:tweaks/crafting/elytra_duplication',
    'quark:tweaks/crafting/utility/misc/easy_sticks',
    'quark:tweaks/crafting/utility/misc/easy_hopper',
    'quark:tweaks/smelting/raw_iron_block_smelt',
    'quark:tweaks/blasting/raw_iron_block_blast',
    'quark:tweaks/smelting/raw_copper_block_smelt',
    'quark:tweaks/blasting/raw_copper_block_blast',
    'quark:tweaks/smelting/raw_gold_block_smelt',
    'quark:tweaks/blasting/raw_gold_block_blast',
    //Mystical Agriculture
    'mysticalagriculture:mithril_seeds',
    'mysticalagriculture:mithril_essence',
    'mysticalagriculture:titanium_seeds',
    'mysticalagriculture:titanium_essence',
    'mysticalagriculture:chrome_seeds',
    'mysticalagriculture:chrome_essence',
    'mysticalagriculture:yellorium_seeds',
    'mysticalagriculture:yellorium_essence',
    //Thermal
    'thermal:white_concrete_powder_with_slag',
    'thermal:orange_concrete_powder_with_slag',
    'thermal:magenta_concrete_powder_with_slag',
    'thermal:light_blue_concrete_powder_with_slag',
    'thermal:yellow_concrete_powder_with_slag',
    'thermal:lime_concrete_powder_with_slag',
    'thermal:pink_concrete_powder_with_slag',
    'thermal:gray_concrete_powder_with_slag',
    'thermal:light_gray_concrete_powder_with_slag',
    'thermal:cyan_concrete_powder_with_slag',
    'thermal:purple_concrete_powder_with_slag',
    'thermal:blue_concrete_powder_with_slag',
    'thermal:brown_concrete_powder_with_slag',
    'thermal:green_concrete_powder_with_slag',
    'thermal:red_concrete_powder_with_slag',
    'thermal:black_concrete_powder_with_slag',
    //Cyclic region
    'cyclic:crafting/repeater',
    'cyclic:crafting/chest',
    'cyclic:crafting/clay',
    'cyclic:crafting/glowstone',
    'cyclic:crafting/quartz',
    'cyclic:crafting/nether_wart_reverse',
    'cyclic:netherite_ingot',
    'cyclic:crafting_stick',
    'cyclic:crafting_bag',
    //Farmer's Delight region
    'farmersdelight:carrot_crate',
    'farmersdelight:carrot_from_crate',
    'farmersdelight:potato_crate',
    'farmersdelight:potato_from_crate',
    'farmersdelight:beetroot_crate',
    'farmersdelight:beetroot_from_crate',
    'farmersdelight:tomato_crate',
    'farmersdelight:tomato',
    'farmersdelight:onion_crate',
    'farmersdelight:onion',
    'farmersdelight:rice_bag',
    'farmersdelight:rice_from_bag'
  ])

})