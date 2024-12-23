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

  ☻/  * @file Recipe Aether script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

    //======= Altar =======
    modifyShaped(event, 'aether:altar', 1, ['ABA', 'BCB', 'ABA'], {
        A: 'deep_aether:big_holystone_bricks',
        B: 'aether_redux:veridium_ingot',
        C: 'aether:zanite_block'
    })

    //======= Incubator =======
    modifyShaped(event, 'aether:incubator', 1, ['ABA', 'BCB', 'ABA'], {
        A: 'aether:holystone_bricks',
        B: 'deep_aether:skyjade',
        C: 'aether:ambrosium_block'
    })

    //======= Freezer =======
    modifyShaped(event, 'aether:freezer', 1, ['AAA', 'ABA', 'CCC'], {
        A: 'deep_aether:chiseled_holystone',
        B: 'aether:icestone',
        C: 'aether:skyroot_planks'
    })

    //======= Holystone Furnace =======
    modifyShaped(event, 'aether_redux:holystone_furnace', 1, ['ABA', 'B B', 'ABA'], {
        A: 'deep_aether:big_holystone_bricks',
        B: 'deep_aether:frosted_holystone_tiles'
    })
    
    //======= Skyroot Crafting Table =======
    modifyShaped(event, 'aether_redux:skyroot_crafting_table', 1, ['AB', 'BA'], {
        A: '#aether:planks_crafting',
        B: ['#aether:crafts_skyroot_planks', '#deep_aether:crafts_roseroot_planks', '#deep_aether:crafts_yagroot_planks',
            '#deep_aether:crafts_cruderoot_planks', '#deep_aether:crafts_conberry_planks', '#deep_aether:crafts_sunroot_planks',
            '#aether_redux:fieldsproot_logs', '#aether_redux:blightwillow_logs', '#aether_redux:cloudcap_stems',
            '#aether_redux:crystal_logs', '#aether_redux:glacia_logs'
        ]
    }) 

})
