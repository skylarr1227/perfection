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

  ☻/  * @file Recipe EvilCraft script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Origin of Darkness (Guide Book) =======
  event.shapeless('evilcraft:origins_of_darkness', ['minecraft:book', '2x evilcraft:dark_gem']).id(`kubejs:evilcraft/origins_of_darkness`)

  //======= Crushed Dark Gem =======
  event.shapeless('evilcraft:dark_gem_crushed', ['evilcraft:dark_gem', '#forge:all_hammers']).id(`kubejs:evilcraft/dark_gem_crushed`)

  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {item: "evilcraft:dark_gem"}
    },
    output: {count: 2, item: "evilcraft:dark_gem_crushed"}
  }).id(`kubejs:evilcraft/mekanism/dark_gem_crushed`)

  event.custom({
    type: "immersiveengineering:crusher",
    energy: 3200,
    input: {item: "evilcraft:dark_gem"},
    result: {count: 2, item: "evilcraft:dark_gem_crushed"},
    secondaries: []
  }).id(`kubejs:evilcraft/immersiveengineering/dark_gem_crushed`)

  event.custom({
    type: "thermal:pulverizer",
    ingredient: {item: "evilcraft:dark_gem"},
    result: [{item: "evilcraft:dark_gem_crushed", count: 2}],
    energy_mod: 0.5
  }).id(`kubejs:evilcraft/thermal/dark_gem_crushed`)

  event.custom({
    type: "ftbic:macerating",
    inputItems: [{count: 1, ingredient: {item: "evilcraft:dark_gem"}}],
    outputItems: [{count: 2, item: "evilcraft:dark_gem_crushed"}]
  }).id(`kubejs:evilcraft/ftbic/dark_gem_crushed`)
    
})
