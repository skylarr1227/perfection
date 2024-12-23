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

  ☻/  * @file Recipe Enigmatic Legacy script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Ring of the Seven Curses ======
  event.shaped('enigmaticlegacy:cursed_ring', ['AEB', 'EDE', 'CEC'], {
    A: 'enigmaticlegacy:unholy_grail',
    B: 'enigmaticlegacy:forbidden_fruit',
    C: 'enigmaticlegacy:etherium_ingot',
    D: 'enigmaticlegacy:ender_ring',
    E: 'minecraft:netherite_ingot'
  }).id(`kubejs:enigmaticlegacy/cursed_ring`)

  //======= Dermant Eye =======
  event.shaped('enigmaticlegacy:enigmatic_eye', ['ABA', 'BCB', 'ABA'], {
    A: 'apotheosis:gem_dust',
    B: '#forge:ingots/netherite',
    C: 'enigmaticlegacy:oblivion_stone'
}).id(`kubejs:enigmaticlegacy/enigmatic_eye`)

  colors.forEach((color) => {
    removeRecipeByID(event, [
      `enigmaticlegacy:wool/${color}_wool`
    ])
  })
  
})
