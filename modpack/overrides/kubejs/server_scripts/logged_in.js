//Priority: 3
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

  ☻/  * @file Logged In script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
PlayerEvents.loggedIn(event => {

  //======= Check if player doesn't have "Starting Items" & "Game Stage" yet =======
  if (!event.player.stages.has('starting_items')) {
    //======= Add the Game Stage =======
    event.player.stages.add('starting_items')
    //======= Give the player "Starting Items" =======
    event.player.give(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{alexsmobs:{0:{Count:1.0d,id:"alexsmobs:animal_dictionary"}},allthemodium:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"allthemodium:allthemodium"}}},apotheosis:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}}},ars_nouveau:{0:{Count:1.0d,id:"ars_nouveau:worn_notebook"}},botania:{0:{Count:1.0d,id:"botania:lexicon"}},byg:{0:{Count:1.0d,id:"byg:biomepedia"}},croptopia:{0:{Count:1.0d,id:"croptopia:guide"}},cyclic:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"cyclic:cyclic_guide_book"}}},eidolon:{0:{Count:1.0d,id:"eidolon:codex"}},enigmaticlegacy:{0:{Count:1.0d,id:"enigmaticlegacy:the_acknowledgment"}},evilcraft:{0:{Count:1.0d,id:"evilcraft:origins_of_darkness"}},extendedcrafting:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"extendedcrafting:guide"}}},ftbic:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"ftbic:ftbic_guide"}}},ftbquests:{0:{Count:1.0d,id:"ftbquests:book"}},immersiveengineering:{0:{Count:1.0d,id:"immersiveengineering:manual"}},industrialforegoing:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}}},irons_spellbooks:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}}},midnight_madness:{0:{Count:1.0d,id:"midnight_madness:midnight_necronomicon"}},mysticalagriculture:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"mysticalagriculture:guide"}}},naturesaura:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}}},powah:{0:{Count:1.0d,id:"powah:book"}},psi:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"psi:encyclopaedia_psionica"}}},rebornstorage:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"rebornstorage:rs_book"}}},rftoolsbase:{0:{Count:1.0d,id:"rftoolsbase:manual"}},sebastrnlib:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"sebastrnlib:sebastrn_mods_guide_book"}}},securitycraft:{0:{Count:1.0d,id:"securitycraft:sc_manual"}},silentgear:{0:{Count:1.0d,id:"silentgear:guide_book"}},solcarrot:{0:{Count:1.0d,id:"solcarrot:food_book"}},storagenetwork:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"storagenetwork:network_book"}}},tconstruct:{0:{Count:1b,id:"tconstruct:encyclopedia",tag:{mantle:{book:{current_page:""}}}},1:{Count:1b,id:"tconstruct:puny_smelting",tag:{mantle:{book:{current_page:"further_reading.mighty_smelting"}}}},2:{Count:1b,id:"tconstruct:mighty_smelting",tag:{mantle:{book:{current_page:"smeltery.seared_tanks"}}}},3:{Count:1b,id:"tconstruct:tinkers_gadgetry",tag:{mantle:{book:{current_page:""}}}},4:{Count:1b,id:"tconstruct:fantastic_foundry",tag:{mantle:{book:{current_page:""}}}},5:{Count:1b,id:"tconstruct:materials_and_you",tag:{mantle:{book:{current_page:""}}}}},theabyss:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"theabyss:the_abyss"}}},treasure2:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"treasure2:treasure2_manual"}}},theoneprobe:{0:{Count:1.0d,id:"theoneprobe:probenote"}},thermal:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}}},vampirism:{0:{Count:1b,id:"guideapi_vp:vampirism-guidebook"}}},"eccentrictome:version":1.0d}'))
    event.player.setHeadArmorItem({type: 'forge:nbt', item:'minecraft:leather_helmet', count: 1, nbt:{Damage:0,Enchantments:[{id:'ensorcellation:soulbound',lvl:1}], Unbreakable:1}})
    event.player.setChestArmorItem({type: 'forge:nbt', item:'minecraft:leather_chestplate', count: 1, nbt:{Damage:0,Enchantments:[{id:'ensorcellation:soulbound',lvl:1}], Unbreakable:1}})
    event.player.setLegsArmorItem({type: 'forge:nbt', item:'minecraft:leather_leggings', count: 1, nbt:{Damage:0,Enchantments:[{id:'ensorcellation:soulbound',lvl:1}], Unbreakable:1}})
    event.player.setFeetArmorItem({type: 'forge:nbt', item:'minecraft:leather_boots', count: 1, nbt:{Damage:0,Enchantments:[{id:'ensorcellation:soulbound',lvl:1}], Unbreakable:1}})
    event.player.give(Item.of('primitivestart:bone_sword', '{Damage:0}'))
  }

})
