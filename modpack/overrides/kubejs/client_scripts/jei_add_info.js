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

  ☻/  * @file JEI infos script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
JEIEvents.information(event => {

  event.addItem('enderstorage:ender_chest', [
    'Cross-dimensional wireless item transfer to any chest on the same channel.',
    'Use dye on the colored bars to set the channel.',
    'Sneak + right-click with a diamond to switch to private channel.',
    'Sneak + right-click with an ender pearl or eye of ender to increase inventory size.'
  ])

  event.addItem('enderstorage:ender_tank', [
    'Cross-dimensional wireless fluid transfer to any tank on the same channel.',
    'Use dye on the colored bars to set the channel.',
    'Sneak + right-click with a diamond to switch to private channel.',
    'Sneak + right-click with an ender pearl or eye of ender to increase tank size.'
  ])

  //======= World of Bosses =======
  event.addItem('kubejs:angerite', ['Drops from Rib Golem Boss.'])
  event.addItem('kubejs:ghoul_quartz', ['Drops from Vulcan Boss.'])
  event.addItem('kubejs:blood_quartz', ['Drops from Aesegull Boss.'])
  event.addItem('kubejs:medusa_quartz', ['Drops from Crimson Vampire Boss.'])
  event.addItem('kubejs:cyber_orb', ['Drops from Man of Water Boss.'])
  event.addItem('kubejs:corrupted_crystal', ['Drops from Merciless Assasin Boss.'])
  event.addItem('kubejs:citrine', ['Drops from Ancient Wizard Boss.'])
  event.addItem('kubejs:borgium', ['Drops from Nameless One Boss.'])
  event.addItem('kubejs:meteorite_scrap', ['Drops from Flaming Berserker Boss.'])
  event.addItem('kubejs:fire_opal', ['Drops from Volcanium Boss.'])
  event.addItem('kubejs:matrix_opal', ['Drops from Frost Magma Boss.'])
  event.addItem('kubejs:catseye', ['Drops from Froverlord Boss.'])
  event.addItem('kubejs:grindstone_scrap', ['Drops from Prismarine Watcher Boss.'])
  event.addItem('kubejs:hercynite', ['Drops from Stone Guard Boss.'])
  event.addItem('kubejs:draconium_scrap', ['Drops from Sand Giant Boss.'])
  event.addItem('kubejs:humoranium', ['Drops from Electric Head Boss.'])
  event.addItem('kubejs:star_sapphire', ['Drops from Ender Ordnance Boss.'])
  event.addItem('kubejs:chalcanthite', ['Drops from Hand Head Boss.'])
  event.addItem('kubejs:neonium', ['Drops from Mono Eyed Skeleton Boss.'])
  event.addItem('kubejs:cursed_crystal', ['Drops from Knight Garent Boss.'])
  event.addItem('kubejs:eclipse_diamond', ['Drops from Skeleton Demon Boss.'])

  //======= Crystals for Crystals of Cretion =======
  event.addItem('kubejs:kyanite_of_the_depth', ['Drops from Ghost of Captain Cornelia Boss.'])
  event.addItem('kubejs:crystal_of_wild_spirit', ['Drops from Wilden Chimera Boss.'])
  event.addItem('kubejs:jewel_of_the_deepdark', ['Drops from Warden Boss.'])
  event.addItem('kubejs:void_tears', ['Drops from Void Worm Boss.'])
  event.addItem('kubejs:stone_of_fear', ['Drops from Arachnarach Boss.'])
  event.addItem('kubejs:emerald_of_the_lost_soul', ['Drops from The Roka Boss.'])
  event.addItem('kubejs:skydust_amethyst', ['Drops from Valkyrie Queen Boss.'])
  event.addItem('kubejs:heart_of_hell', ['Drops from Ignis Boss.'])

  //======= Enigmatic Legacy =======
  //=== Heart of the Earth ===
  event.addItem('enigmaticlegacy:earth_heart', [
    '100% drop chance by killing a Wither.',
    '10% drop chance by killing Vex.',
    '5% drop chance by killing Wither Skeleton.'
  ])

  //=== Heart of the Abyss ===
  event.addItem('enigmaticlegacy:abyssal_heart', ['100% drop chance by killing a Warden.'])

  //====== Essence of Fate =======
  event.addItem('mysticalagradditions:creative_essence', [
    'The Essence of Fate can be obtained by defeating',
    'the Dark Mask Boss in the last Boss Rush challage battle.'
  ])

})
