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

  ☻/  * @file Recipe Crafting on a Stick script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

    //======= Crafting Table =======
    modifyShaped(event, 'crafting_on_a_stick:crafting_table', 1, [' A', 'B '], {
        A: '#forge:workbenches',
        B: '#byg:all/sticks'
    })

    //======= Loom =======
    modifyShaped(event, 'crafting_on_a_stick:loom', 1, [' A', 'B '], {
        A: 'minecraft:loom',
        B: '#byg:all/sticks'
    })

    //======= Grindstone =======
    modifyShaped(event, 'crafting_on_a_stick:grindstone', 1, [' A', 'B '], {
        A: 'minecraft:grindstone',
        B: '#byg:all/sticks'
    })

    //======= Cartography Table =======
    modifyShaped(event, 'crafting_on_a_stick:cartography_table', 1, [' A', 'B '], {
        A: 'minecraft:cartography_table',
        B: '#byg:all/sticks'
    })

    //======= Bench Saw =======
    modifyShaped(event, 'crafting_on_a_stick:stonecutter', 1, [' A', 'B '], {
        A: 'minecraft:stonecutter',
        B: '#byg:all/sticks'
    })

    //======= Smithing Table =======
    modifyShaped(event, 'crafting_on_a_stick:smithing_table', 1, [' A', 'B '], {
        A: 'minecraft:smithing_table',
        B: '#byg:all/sticks'
    })

    //======= Anvil =======
    modifyShaped(event, 'crafting_on_a_stick:anvil', 1, [' A', 'B '], {
        A: 'minecraft:anvil',
        B: '#byg:all/sticks'
    })

    //======= Chipped Anvil =======
    modifyShaped(event, 'crafting_on_a_stick:chipped_anvil', 1, [' A', 'B '], {
        A: 'minecraft:chipped_anvil',
        B: '#byg:all/sticks'
    })

    //======= Damaged Anvil =======
    modifyShaped(event, 'crafting_on_a_stick:damaged_anvil', 1, [' A', 'B '], {
        A: 'minecraft:damaged_anvil',
        B: '#byg:all/sticks'
    })

})
