//Priority: 1
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

  ☻/  * @file Global Tool Tiers script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
const $TierSortingRegistry = Java.loadClass('net.minecraftforge.common.TierSortingRegistry')
const $Tiers = Java.loadClass('net.minecraft.world.item.Tiers')

//======= Botania & AIOT =======
const $BotaniaAPI = Java.loadClass('vazkii.botania.api.BotaniaAPI')
const $AIOTBotaniaTiers = Java.loadClass('de.melanx.aiotbotania.items.ItemTiers')
//======= Blue Skies =======
const $SkiesItemTier = Java.loadClass('com.legacy.blue_skies.items.util.SkiesItemTier')
//======= Mystical Agriculture =======
const $MAItemTier = Java.loadClass('com.blakebr0.mysticalagriculture.lib.ModItemTier')
//======= IE =======
const $IEItemTier = Java.loadClass('blusunrize.immersiveengineering.api.Lib')
//======= Aquaculture =======
const $AquacultureAPI = Java.loadClass('com.teammetallurgy.aquaculture.api.AquacultureAPI')
//======= BYG =======
const $BYGItemTier = Java.loadClass('potionstudios.byg.common.item.BYGTier')
//======= Redstone Arsenal =======
const $RSAItemTier = Java.loadClass('cofh.redstonearsenal.init.RSAItems')

StartupEvents.postInit(event => {

  let botaniaInstance = $BotaniaAPI.instance()
  let Manasteel = botaniaInstance.getManasteelItemTier()
  if (!$TierSortingRegistry.isTierSorted(Manasteel)) {
    $TierSortingRegistry.registerTier(Manasteel, "botania:manasteel", [$Tiers.IRON], [$Tiers.DIAMOND])
  }
  let Elementium = botaniaInstance.getElementiumItemTier()
  if (!$TierSortingRegistry.isTierSorted(Elementium)) {
    $TierSortingRegistry.registerTier(Elementium, "botania:elementium", [Manasteel], [$Tiers.DIAMOND])
  }
  let Terrasteel = botaniaInstance.getTerrasteelItemTier()
  if (!$TierSortingRegistry.isTierSorted(Terrasteel)) {
    $TierSortingRegistry.registerTier(Terrasteel, "botania:terrasteel", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  }
  let LivingWood = $AIOTBotaniaTiers.LIVINGWOOD_ITEM_TIER
  if (!$TierSortingRegistry.isTierSorted(LivingWood)) {
    $TierSortingRegistry.registerTier(LivingWood, "aiotbotania:livingwood", [$Tiers.WOOD], [$Tiers.STONE])
  }
  let LivingRock = $AIOTBotaniaTiers.LIVINGROCK_ITEM_TIER
  if (!$TierSortingRegistry.isTierSorted(LivingRock)) {
    $TierSortingRegistry.registerTier(LivingRock, "aiotbotania:livingrock", [$Tiers.STONE], [$Tiers.IRON])
  }

  let Wood = $SkiesItemTier.WOOD
  if (!$TierSortingRegistry.isTierSorted(Wood)) {
    $TierSortingRegistry.registerTier(Wood, "blue_skies:wood", [$Tiers.WOOD], [$Tiers.STONE])
  }
  let Cherry = $SkiesItemTier.CHERRY
  if (!$TierSortingRegistry.isTierSorted(Cherry)) {
    $TierSortingRegistry.registerTier(Cherry, "blue_skies:cherry", [$Tiers.STONE], [$Tiers.IRON])
  }
  let LunarStone = $SkiesItemTier.LUNAR_STONE
  if (!$TierSortingRegistry.isTierSorted(LunarStone)) {
    $TierSortingRegistry.registerTier(LunarStone, "blue_skies:lunar_stone", [Cherry], [$Tiers.IRON])
  }
  let TurquoiseStone = $SkiesItemTier.TURQUOISE_STONE
  if (!$TierSortingRegistry.isTierSorted(TurquoiseStone)) {
    $TierSortingRegistry.registerTier(TurquoiseStone, "blue_skies:turquoise_stone", [Cherry], [$Tiers.IRON])
  }
  let Pyrope = $SkiesItemTier.PYROPE
  if (!$TierSortingRegistry.isTierSorted(Pyrope)) {
    $TierSortingRegistry.registerTier(Pyrope, "blue_skies:pyrope", [LunarStone, TurquoiseStone], [$Tiers.IRON])
  }
  let Aquite = $SkiesItemTier.AQUITE
  if (!$TierSortingRegistry.isTierSorted(Aquite)) {
    $TierSortingRegistry.registerTier(Aquite, "blue_skies:aquite", [$Tiers.IRON], [$Tiers.DIAMOND])
  }
  let Horizonite = $SkiesItemTier.HORIZONITE
  if (!$TierSortingRegistry.isTierSorted(Horizonite)) {
    $TierSortingRegistry.registerTier(Horizonite, "blue_skies:horizonite", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  }
  let Charoite = $SkiesItemTier.CHAROITE
  if (!$TierSortingRegistry.isTierSorted(Charoite)) {
    $TierSortingRegistry.registerTier(Charoite, "blue_skies:charoite", [Horizonite], [$Tiers.NETHERITE])
  }
  let Diopside = $SkiesItemTier.DIOPSIDE
  if (!$TierSortingRegistry.isTierSorted(Diopside)) {
    $TierSortingRegistry.registerTier(Diopside, "blue_skies:diopside", [Charoite], [$Tiers.NETHERITE])
  }

  let Awakened = $MAItemTier.AWAKENED_SUPREMIUM
  if (!$TierSortingRegistry.isTierSorted(Awakened)) {
    $TierSortingRegistry.registerTier(Awakened, "mysticalagriculture:awakened_supremium", [$MAItemTier.SUPREMIUM], [])
  }

  let IESteel = $IEItemTier.MATERIAL_Steel
  if (!$TierSortingRegistry.isTierSorted(IESteel)) {
    $TierSortingRegistry.registerTier(IESteel, "immersiveengineering:steel", [$Tiers.IRON], [$Tiers.DIAMOND])
  }

  let Neptunium = $AquacultureAPI.MATS.NEPTUNIUM
  if (!$TierSortingRegistry.isTierSorted(Neptunium)) {
    $TierSortingRegistry.registerTier(Neptunium, "aquaculture:neptunium", [$Tiers.DIAMOND], [$Tiers.NETHERITE])
  }

  let Pendorite = $BYGItemTier.PENDORITE
  if (!$TierSortingRegistry.isTierSorted(Pendorite)) {
    $TierSortingRegistry.registerTier(Pendorite, "byg:pendorite", [$Tiers.NETHERITE], [])
  }

  let FluxMetal = $RSAItemTier.MATERIAL_FLUX_METAL
  if (!$TierSortingRegistry.isTierSorted(FluxMetal)) {
    $TierSortingRegistry.registerTier(FluxMetal, "redstone_arsenal:flux_metal", [$Tiers.NETHERITE], [])
  }

})
