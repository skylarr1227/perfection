//Priority: 100
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

  ☻/  * @file Recipe Eccentric Tome script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
let EccentricTome = Item.of('eccentrictome:tome',
  {
    "eccentrictome:mods": {
      allthemodium: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "allthemodium:allthemodium" } } },
      alexsmobs: { 0: { Count: 1, id: "alexsmobs:animal_dictionary" } },
      apotheosis: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "apotheosis:apoth_chronicle" } } },
      ars_nouveau: { 0: { Count: 1, id: "ars_nouveau:worn_notebook" } },
      botania: { 0: { Count: 1, id: "botania:lexicon" } },
      byg: { 0: { Count: 1, id: "byg:biomepedia" } },
      croptopia: { 0: { Count: 1, id: "croptopia:guide" } },
      cyclic: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "cyclic:cyclic_guide_book" } } },
      eidolon: { 0: { Count: 1, id: "eidolon:codex" } },
      enigmaticlegacy: { 0: { Count: 1, id: "enigmaticlegacy:the_acknowledgment" } },
      evilcraft: { 0: { Count: 1, id: "evilcraft:origins_of_darkness" } },
      extendedcrafting: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "extendedcrafting:guide" } } },
      ftbic: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "ftbic:ftbic_guide" } } },
      ftbquests: { 0: { Count: 1, id: "ftbquests:book" } },
      immersiveengineering: { 0: { Count: 1, id: "immersiveengineering:manual" } },
      industrialforegoing: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "industrialforegoing:industrial_foregoing" } } },
      irons_spellbooks: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "irons_spellbooks:iss_guide_book" } } },
      midnight_madness: { 0: { Count: 1, id: "midnight_madness:midnight_necronomicon" } },
      mysticalagriculture: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "mysticalagriculture:guide" } } },
      naturesaura: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "naturesaura:book" } } },
      powah: { 0: { Count: 1, id: "powah:book" } },
      psi: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "psi:encyclopaedia_psionica" } } },
      rebornstorage: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "rebornstorage:rs_book" } } },
      rftoolsbase: { 0: { Count: 1, id: "rftoolsbase:manual" } },
      sebastrnlib: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "sebastrnlib:sebastrn_mods_guide_book" } } },
      securitycraft: { 0: { Count: 1, id: "securitycraft:sc_manual" } },
      silentgear: { 0: { Count: 1, id: "silentgear:guide_book" } },
      solcarrot: { 0: { Count: 1, id: "solcarrot:food_book" } },
      storagenetwork: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "storagenetwork:network_book" } } },
      tconstruct: { 0: { Count: 1, id: "tconstruct:materials_and_you" } },
      tconstruct2: { 0: { Count: 1, id: "tconstruct:fantastic_foundry" } },
      tconstruct3: { 0: { Count: 1, id: "tconstruct:tinkers_gadgetry" } },
      tconstruct4: { 0: { Count: 1, id: "tconstruct:mighty_smelting" } },
      tconstruct5: { 0: { Count: 1, id: "tconstruct:puny_smelting" } },
      tconstruct6: { 0: { Count: 1, id: "tconstruct:encyclopedia" } },
      theabyss: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "theabyss:the_abyss" } } },
      treasure2: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "treasure2:treasure2_manual" } } },
      theoneprobe: { 0: { Count: 1, id: "theoneprobe:probenote" } },
      thermal: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "thermal:guidebook" } } },
      vampirism: { 0: { Count: 1, id: "guideapi_vp:vampirism-guidebook" } }
    },
    "eccentrictome:version": 1
  }
)

ServerEvents.recipes(event => {
	
  event.shapeless(EccentricTome, 'minecraft:book').id('kubejs:full_tome')
  
})
