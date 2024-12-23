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

  ☻/  * @file Disable seeds form Mystical Agriculture script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
const $MysticalAgricultureAPI = Java.loadClass('com.blakebr0.mysticalagriculture.api.MysticalAgricultureAPI')

const CropManualDisableList = ["tungsten", "titanium", "chrome", "mithril"]
const CropManualEnableList = []

StartupEvents.postInit(event => {
  let CropRegistry = $MysticalAgricultureAPI.getCropRegistry()
  for (const disable of CropManualDisableList) {
    CropRegistry.getCropByName(disable).setEnabled(false)
  }
  for (const enable of CropManualEnableList) {
    CropRegistry.getCropByName(enable).setEnabled(true)
  }

})
