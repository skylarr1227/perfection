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

  ☻/  * @file Recipe Apotheosis script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

    //======= Inert Trident =======
    event.shaped('apotheosis:inert_trident', [' AA', 'CBA', 'B  '], {
        A: '#forge:rods/osmium',
        B: '#forge:rods/bronze',
        C: 'minecraft:conduit'
    }).id(`kubejs:apotheosis/inert_trident`)

    //======= Trident =======
    event.shaped('minecraft:trident', [' AA', ' BA', 'C  '], {
        A: ['progressivebosses:elder_guardian_spike','undead_unleashed:demon_horn'],
        B: 'apotheosis:inert_trident',
        C: '#forge:rods/treated_wood'
    }).id(`kubejs:apotheosis/trident`)

    //======= Gem Cutting Table =======
    event.shaped('apotheosis:gem_cutting_table', ['ADA', 'BCB', 'B B'], {
        A: '#misctags:smooth_stone',
        B: '#minecraft:planks',
        C: 'apotheosis:gem_dust',
        D: Item.of('immersiveengineering:rockcutter', '{Damage:0}')
    }).id(`kubejs:apotheosis/gem_cutting_table`)

    removeRecipeByID(event, [
        'apotheosis:inert_trident',
        'apotheosis:gem_cutting_table',
        'progressivebosses:trident',
        'undead_unleashed:trident_crafting'
    ])

})
