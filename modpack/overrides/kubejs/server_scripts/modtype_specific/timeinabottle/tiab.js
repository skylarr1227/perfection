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

  ☻/  * @file Recipe Time in a bottle standanole script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Time in a bottle =======
  event.shaped('tiab:time_in_a_bottle', ['AFA', 'BCB', 'DED'], {
    A: '#forge:ingots/rose_gold',
    B: 'tombstone:impregnated_diamond',
    C: 'ftbic:overclocker_upgrade',
    D: 'thermal:lapis_gear',
	  E: 'thermal:jar',
    F: 'rftoolsutility:speed_module'
  }).id(`kubejs:tiab/time_in_a_bottle`)

  removeRecipeByID(event, [
    'tiab:time_in_a_bottle'
  ])

})
