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

  ☻/  * @file Recipe Woodcutter script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {


  //======= Hexerei Wood Type Woodcutters =======
  HexereiWoodType.forEach((wood_type) => {
    modifyShaped(event, `hexerei:${wood_type}_woodcutter`, 1, [' A ', 'BBB'], { 
      A: Item.of('immersiveengineering:sawblade', '{Damage:0}').strongNBT(),
      B: `hexerei:${wood_type}_planks`
    })
  })

})
