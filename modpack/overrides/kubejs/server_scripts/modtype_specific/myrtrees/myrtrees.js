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

  ☻/  * @file Recipe Myrtrees script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

    //======= Tree Tap =======
    event.shaped('myrtrees:tree_tap', ['A A', ' B '], {
        A: '#forge:nuggets/iron',
        B: '#forge:ingots/iron'
    }).id(`kubejs:myrtrees/tree_tap`)

    //======= Wooden Bucket =======
    event.shaped('myrtrees:wooden_bucket', ['A A', 'ABA'], {
        A: '#minecraft:logs',
        B: '#minecraft:wooden_slabs'
    }).id(`kubejs:myrtrees/wooden_bucket`)

    removeRecipeByID(event, [
        'myrtrees:tree_tap',
        'myrtrees:wooden_bucket'
    ])

})
