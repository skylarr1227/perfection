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

  ☻/  * @file Recipe Bigger Reactors script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

    //======= Reactor Terminal =======
    event.shaped('biggerreactors:reactor_terminal', ['ABA', 'CDC', 'AEA'], {
        A: 'biggerreactors:reactor_casing',
        B: 'advgenerators:controller',
        C: '#forge:ingots/uranium',
        D: 'advgenerators:exchanger_controller',
        E: '#forge:ingots/energized_steel'
    }).id(`kubejs:biggerreactor/reactor_terminal`)

    //======= Turbine Terminal =======
    event.shaped('biggerreactors:turbine_terminal', ['ABA', 'CDC', 'AEA'], {
        A: 'biggerreactors:reactor_casing',
        B: 'advgenerators:controller',
        C: 'biggerreactors:blutonium_ingot',
        D: 'advgenerators:steam_turbine_controller',
        E: '#forge:ingots/energized_steel'
    }).id(`kubejs:biggerreactor/turbine_terminal`)

    //======= Reactor Fuel Road =======
    event.shaped('biggerreactors:reactor_fuel_rod', ['ABA', 'ACA', 'ABA'], {
        A: '#forge:ingots/steel',
        B: '#forge:ingots/graphite',
        C: '#forge:ingots/uranium',
    }).id(`kubejs:biggerreactor/reactor_fuel_rod`)

    removeRecipeByID(event, [
        'biggerreactors:crafting/reactor/reactor_terminal',
        'biggerreactors:crafting/turbine/turbine_terminal',
        'biggerreactors:crafting/reactor/reactor_fuel_rod',
    ])

})
