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

  ☻/  * @file Recipe Potions Master script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

  let PotionMetalMaterials = ['coal', 'diamond', 'emerald', 'gold', 'iron', 'lapis', 'redstone', 'aluminium', 'copper', 'tin', 'nickel', 'uranium', 'lead', 'silver', 'zinc', 'osmium', 'quartz', 'crimsoniron', 'platinum', 'allthemodium', 'vibranium', 'unobtainium', 'netherite']

  //======= Calcinated Powder =======
  PotionMetalMaterials.forEach((material) => {
    event.custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: { tag: `forge:powders/${material}` },
      output: `potionsmaster:calcinated${material}_powder`,
      pedestalItems: [
        {item: { tag: "forge:dusts/arcane_crystal" }},
        {item: { item: "eidolon:enchanted_ash" }},
        {item: { item: "apotheosis:gem_dust" }}
      ],
      source: 700
    }).id(`kubejs:potionsmaster/calcinated${material}_powder`)
  
    removeRecipeByID(event, [
      `potionsmaster:calcinated${material}_powder`
    ])
  })

})
