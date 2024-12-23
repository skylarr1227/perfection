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

  ☻/  * @file Recipe Mining Gadgets script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  //======= Modification Table =======
  event.shaped('mininggadgets:modificationtable', ['DAD', 'BCB', 'BEB'], {
    A: 'create:display_board',
    B: '#forge:ingots/energized_steel',
    C: 'rftoolscontrol:cpu_core_2000',
    D: 'mininggadgets:upgrade_empty',
    E: 'kubejs:personal_id'
  }).id(`kubejs:mininggadgets/modificationtable`)

  removeRecipeByID(event, [
    'mininggadgets:modificationtable'
  ])

})
