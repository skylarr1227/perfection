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

  ☻/  * @file Recipe Advanced Generators script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

    //======= Iron Tubing =======
    modifyShaped(event, 'advgenerators:iron_tubing', 2, ['A  ', ' B ', '  A'], {
        A: '#forge:ingots/iron',
        B: '#forge:rods/wooden'
    })

    //======= Redstone-Iron Wiring =======
    modifyShaped(event, 'advgenerators:iron_wiring', 2, ['AC ', 'CBC', ' CA'], {
        A: '#forge:ingots/iron',
        B: '#forge:rods/wooden',
        C: '#forge:dusts/redstone'
    })

    //======= Upgrade Kit =======
    modifyShaped(event, 'advgenerators:upgrade_kit', 4, ['A  ', ' B ', '  A'], {
        A: 'advgenerators:iron_frame',
        B: '#forge:rods/wooden'
    })

    //======= Enhanced Turbine Rotor =======
    modifyShaped(event, 'advgenerators:turbine_rotor_tier2', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/gold',
        B: '#forge:rods/wooden'
    })

    //======= Enhanced Turbine Upgrade Kit =======
    modifyShaped(event, 'advgenerators:turbine_kit_tier2', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:ingots/gold',
        B: '#forge:rods/wooden'
    })

    //======= Basic Turbine Blade =======
    modifyShaped(event, 'advgenerators:turbine_blade', 2, ['AB ', 'AB ', ' B '], {
        A: 'advgenerators:iron_frame',
        B: '#forge:ingots/iron'
    })

    //======= Control Circuit =======
    modifyShaped(event, 'advgenerators:controller', 2, ['ABA', 'CDC', 'EBE'], {
        A: '#forge:ingots/iron',
        B: '#forge:dusts/redstone',
        C: 'advgenerators:iron_wiring',
        D: '#botania:all_quartz',
        E: 'advgenerators:iron_tubing'
    })

    //======= Power IO Module =======
    modifyShaped(event, 'advgenerators:power_io', 1, ['ABA', 'CDC', 'ABA'], {
        A: 'advgenerators:iron_frame',
        B: 'minecraft:piston',
        C: 'advgenerators:iron_tubing',
        D: 'advgenerators:iron_wiring'
    })

    //======= Steam Turbine Controller =======
    modifyShaped(event, 'advgenerators:steam_turbine_controller', 1, ['ABA', 'CEC', 'ADA'], {
        A: 'advgenerators:iron_frame',
        B: 'advgenerators:controller',
        C: 'advgenerators:iron_tubing',
        D: 'advgenerators:iron_wiring',
        E: 'irongenerators:diamond_generator'
    })

    //======= Syngas Producer Controller =======
    modifyShaped(event, 'advgenerators:syngas_controller', 1, ['ABA', 'FEC', 'ADA'], {
        A: 'advgenerators:iron_frame',
        B: 'advgenerators:pressure_valve',
        C: 'advgenerators:iron_tubing',
        D: 'advgenerators:iron_wiring',
        E: 'advgenerators:controller',
        F: 'irongenerators:signalum_generator'
    })

    //======= Heat Exchanger Controller =======
    modifyShaped(event, 'advgenerators:exchanger_controller', 1, ['ADA', 'CBC', 'AEA'], {
        A: 'advgenerators:iron_frame',
        B: 'advgenerators:controller',
        C: 'advgenerators:iron_tubing',
        D: 'advgenerators:iron_wiring',
        E: 'irongenerators:osmium_generator'
    })

    //======= Gas Turbine Controller =======
    modifyShaped(event, 'advgenerators:fuel_turbine_controller', 1, ['ACA', 'DBD', 'AEA'], {
        A: 'advgenerators:iron_frame',
        B: 'advgenerators:controller',
        C: 'advgenerators:iron_tubing',
        D: 'advgenerators:iron_wiring',
        E: 'irongenerators:enderium_generator'
    })

    removeRecipeByID(event, [
        'advgenerators:turbines/rotor_tier4_invar',
        'advgenerators:turbines/kit_tier4_invar'
    ])

})
