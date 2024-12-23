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

  ☻/  * @file Global custom items registration script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
StartupEvents.registry('item', event => {

	//Register new items hete
	event.create('stone_gear').displayName('Stone Gear')
	event.create('personal_id').displayName('§9Personal ID Card')
	event.create('blank_card').displayName('Blank Card')
	event.create('blank_disk').displayName('Blank Disk')
	event.create('explorershat').displayName(`§2Explorer's Hat`)
	event.create('note_1').displayName('§e$1')
	event.create('note_2').displayName('§e$2')
	event.create('note_5').displayName('§e$5')
	event.create('note_10').displayName('§e$10')
	event.create('note_20').displayName('§e$20')
	event.create('note_50').displayName('§e$50')
	event.create('note_100').displayName('§e$100')
	event.create('note_200').displayName('§e$200')
	event.create('note_500').displayName('§e$500')
	event.create('note_1000').displayName('§e$1000')
	event.create('1b_card').displayName('§d1B Card')
	event.create('1m_card').displayName('§d1M Card')
	event.create('5k_card').displayName('§d5K Card')
	event.create('5m_card').displayName('§d5M Card')
	event.create('10k_card').displayName('§d10K Card')
	event.create('10m_card').displayName('§d10M Card')
	event.create('50k_card').displayName('§d50K Card')
	event.create('50m_card').displayName('§d50M Card')
	event.create('100k_card').displayName('§d100K Card')
	event.create('100m_card').displayName('§d100M Card')
	event.create('500k_card').displayName('§d500K Card')
	event.create('500m_card').displayName('§d500M Card')
	event.create('angerite').displayName(`§bAngerite`)
	event.create('blood_quartz').displayName(`§bBlood Quartz`)
	event.create('borgium').displayName(`§bBorgium`)
	event.create('catseye').displayName(`§bCatseye`)
	event.create('chalcanthite').displayName(`§bChalcanthite`)
	event.create('citrine').displayName(`§bCitrine`)
	event.create('corrupted_crystal').displayName(`§bCorrupted Crystal`)
	event.create('cyber_orb').displayName(`§bCyber Orb`)
	event.create('draconium_scrap').displayName(`§bDraconium Scrap`)
	event.create('eclipse_diamond').displayName(`§bEclipse Diamond`)
	event.create('fire_opal').displayName(`§bFire Opal`)
	event.create('ghoul_quartz').displayName(`§bGhoul Quartz`)
	event.create('grindstone_scrap').displayName(`§bGrindstone Scrap`)
	event.create('hercynite').displayName(`§bHercynite`)
	event.create('humoranium').displayName(`§bHumoranium`)
	event.create('matrix_opal').displayName(`§bMatrix Opal`)
	event.create('medusa_quartz').displayName(`§bMedusa Quartz`)
	event.create('meteorite_scrap').displayName(`§bMeteorite Scrap`)
	event.create('neonium').displayName(`§bNeonium`)
	event.create('cursed_crystal').displayName(`§bCursed Crystal`)
	event.create('star_sapphire').displayName(`§bStar Sapphire`)
	event.create('crystal_of_summoning').displayName(`§5Crystal of Summoning`)
	event.create('blueprint').displayName('Blueprint')
	event.create('airship_blueprint').displayName('Airship Blueprint')
	event.create('biplane_blueprint').displayName('Biplane Blueprint')
	event.create('cargo_blueprint').displayName('Cargo Airship Blueprint')
	event.create('gyrodyne_blueprint').displayName('Gyrodyne Blueprint')
	event.create('quadrocopter_blueprint').displayName('Quadrocopter Blueprint')
	event.create('crystal_of_creation').displayName(`§6Crystal of Creation`)

	event.create('kyanite_of_the_depth').displayName(`§bKyanite of the Depth`)
	event.create('crystal_of_wild_spirit').displayName(`§bCrystal of Wild Spirit`)
	event.create('jewel_of_the_deepdark').displayName(`§bJewel of the Deepdark`)
	event.create('void_tears').displayName(`§bVoid Tears`)
	event.create('stone_of_fear').displayName(`§bStone of Fear`)
	event.create('emerald_of_the_lost_soul').displayName(`§bEmerald of the Lost Soul`)
	event.create('skydust_amethyst').displayName(`§bSkydust Amethyst`)
	event.create('heart_of_hell').displayName(`§bHeart of Hell`)

})

StartupEvents.registry('block', event => {
	
	//Register new blocks here
	event.create('magical_soil').displayName('§5Magical Soil').material('dirt').hardness(1.0)
	event.create('ender_pearl_block_1x').displayName('Ender Pearl Block 1x')
	event.create('ender_pearl_block_2x').displayName('Ender Pearl Block 2x')
	event.create('ender_pearl_block_3x').displayName('Ender Pearl Block 3x')
	event.create('ender_pearl_block_4x').displayName('Ender Pearl Block 4x')
	event.create('ender_pearl_block_5x').displayName('Ender Pearl Block 5x')
	event.create('ender_pearl_block_6x').displayName('Ender Pearl Block 6x')
	event.create('ender_pearl_block_7x').displayName('Ender Pearl Block 7x')
	event.create('ender_pearl_block_8x').displayName('Ender Pearl Block 8x')
	event.create('ender_pearl_block_9x').displayName('Ender Pearl Block 9x')
	event.create('obsidian_with_iron_block').displayName('Obsidian With Iron Block')

})
