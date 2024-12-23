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

  ☻/  * @file Global recipe replacement script
  /▌  * @copyright KnightDexx's Modded Minecraft World
  /\

*/
ServerEvents.recipes(event => {

    //======= Functions =======
    //Replace inputs and outputs across all recipes that use the given ingredient / item.
    const replaceInput = (from, to) => {event.replaceInput({}, from, to)}
    //const replaceOutput = (from, to) => {event.replaceOutput({}, from, to)}

    //Replace inputs / outputs by recipe ID.
    //const replaceInputID = (recipeID, from, to) => {event.replaceInput({id: recipeID}, from, to)}
    //const replaceOutputID = (recipeID, from, to) => {event.replaceOutput({id: recipeID}, from, to)}

    //Replace inputs / outputs by recipe type.
    //const replaceInputType = (recipeType, from, to) => {event.replaceInput({type: recipeType}, from, to)}
    //const replaceOutputType = (recipeType, from, to) => {event.replaceOutput({type: recipeType}, from, to)}


    //======= Replace Tools with Bone Tools =======
    let Tools = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe']

    Tools.forEach((tool) => {
        //Wooden
        event.replaceInput(
            { input: `minecraft:wooden_${tool}` },                                              //Arg 1: the filter
            `minecraft:wooden_${tool}`,                                                         //Arg 2: the item to replace
            Ingredient.of(Item.of(`primitivestart:bone_${tool}`, `{Damage:0}`))                 //Arg 3: the item to replace it with
        )
        //Stone
        event.replaceInput(
            { input: `minecraft:stone_${tool}` },
            `minecraft:stone_${tool}`,
            Ingredient.of(Item.of(`primitivestart:reinforced_bone_${tool}`, `{Damage:0}`))
        )
    })

    //======= Make all Axes & Saws usable to craft planks =======
    //===== Minecraft & Security Craft =====
    VanillaWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x minecraft:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#minecraft:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:minecraft/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x minecraft:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#minecraft:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:minecraft/${wood_type}_planks_saw`)

        removeRecipeByID(event, [
            `minecraft:${wood_type}_planks`
        ])
    })

    VanillaWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x securitycraft:reinforced_${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#securitycraft:reinforced/${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:securitycraft/reinforced_${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x securitycraft:reinforced_${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#securitycraft:reinforced/${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:securitycraft/reinforced_${wood_type}_planks_saw`)

        removeRecipeByID(event, [
            `securitycraft:reinforced_${wood_type}_planks`
        ])
    })

    //===== Werewolves =====
    //=== Axe ===
    event.shaped(`2x minecraft:oak_planks`, ['A', 'B'], {
        A: '#forge:tools/axes',
        B: 'werewolves:jacaranda_log'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:werewolves/oak_planks`)
    event.shaped(`2x werewolves:magic_planks`, ['A', 'B'], {
        A: '#forge:tools/axes',
        B: 'werewolves:magic_log'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:werewolves/magic_planks`)
    //=== Saw ===
    event.shaped(`4x minecraft:oak_planks`, ['A', 'B'], {
        A: '#forge:saws',
        B: 'werewolves:jacaranda_log'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:werewolves/oak_planks_saw`)
    event.shaped(`4x werewolves:magic_planks`, ['A', 'B'], {
        A: '#forge:saws',
        B: 'werewolves:magic_log'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:werewolves/magic_planks_saw`)

    //===== RU =====
    RUWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x regions_unexplored:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#regions_unexplored:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:regions_unexplored/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x regions_unexplored:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#regions_unexplored:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:regions_unexplored/${wood_type}_planks_saw`)

        removeRecipeByID(event, [
            `regions_unexplored:${wood_type}_planks`,
        ])
    })

    //===== BYG =====
    BYGWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x byg:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#byg:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:byg/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x byg:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#byg:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:byg/${wood_type}_planks_saw`)

        removeRecipeByID(event, [
            `byg:${wood_type}_planks`,
        ])
    })
    //=== Axe (Withering Oak, Polo Verde & Apple Log) ===
    event.shaped('2x minecraft:oak_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#byg:withering_oak_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:aof/withering_oak_to_oak_planks`)
    event.shaped('2x minecraft:birch_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#byg:palo_verde_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:aof/pole_verde_to_birch_planks`)
    event.shaped('2x minecraft:oak_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#vinery:apple_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:aof/apple_log_to_oak_planks`)
    //=== Saw (Withering Oak, Polo Verde & Apple Log) ===
    event.shaped('4x minecraft:oak_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#byg:withering_oak_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:aof/withering_oak_to_oak_planks_saw`)
    event.shaped('4x minecraft:birch_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#byg:palo_verde_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:aof/pole_verde_to_birch_planks_saw`)
    event.shaped('4x minecraft:oak_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#vinery:apple_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:aof/apple_log_to_oak_planks_saw`)
   
    //===== Silent Gear =====
    //=== Axe ===
    event.shaped('2x silentgear:netherwood_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#silentgear:netherwood_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:silentgear/netherwood_planks`)
    //=== Saw ===
    event.shaped('4x silentgear:netherwood_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#silentgear:netherwood_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:silentgear/netherwood_planks_saw`)

    //===== Myrtrees =====
    //=== Axe ===
    event.shaped('2x myrtrees:rubberwood_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: 'myrtrees:rubberwood_log'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:myrtrees/rubberwood_planks`)
    //=== Saw ===
    event.shaped('4x myrtrees:rubberwood_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: 'myrtrees:rubberwood_log'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:myrtrees/rubberwood_planks_saw`)

    //===== Quark =====
    QuarkWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x quark:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#quark:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:quark/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x quark:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#quark:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:quark/${wood_type}_planks_saw`)

        removeRecipeByID(event, [
            `quark:world/crafting/woodsets/${wood_type}/planks`
        ])
    })

    //===== Botania =====
    BotaniaWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x botania:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#botania:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:botania/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x botania:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#botania:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:botania/${wood_type}_planks_saw`)

        removeRecipeByID(event, [
            `botania:${wood_type}_planks`
        ])
    })
    
    //===== Blue Skies =====
    BlueSkiesWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x blue_skies:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#blue_skies:logs/${wood_type}`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:blue_skies/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x blue_skies:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#blue_skies:logs/${wood_type}`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:blue_skies/${wood_type}_planks_saw`)

        removeRecipeByID(event, [
            `blue_skies:${wood_type}_planks`
        ])
    })
    
    //===== Deeper and Darker =====
    //=== Axe ===
    event.shaped('2x deeperdarker:echo_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#deeperdarker:echo_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:deeperdarker/echo_planks`)
    //=== Saw ===
    event.shaped('4x deeperdarker:echo_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#deeperdarker:echo_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:deeperdarker/echo_planks_saw`)

    //===== Twilight Forest =====
    TwilightForestWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x twilightforest:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#twilightforest:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:twilightforest/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x twilightforest:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#twilightforest:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:twilightforest/${wood_type}_planks_saw`)
        
        removeRecipeByID(event, [
            `twilightforest:wood/${wood_type}_planks`,
            `twilightforest:wood/${wood_type}_from_stripped_planks`,
            `twilightforest:wood/${wood_type}_from_stripped_wood_planks`,
            `twilightforest:wood/${wood_type}_from_wood_planks`
        ])
    })

    //===== Allthemodium =====
    AllthemodiumWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x allthemodium:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#allthemodium:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:allthemodium/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x allthemodium:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#allthemodium:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:allthemodium/${wood_type}_planks_saw`)

        removeRecipeByID(event, [
            `allthemodium:${wood_type}_planks_from_shapelesscrafting`,
            `allthemodium:${wood_type}_planks_0_from_shapelesscrafting`,
            `allthemodium:${wood_type}_planks_1_from_shapelesscrafting`,
            `allthemodium:${wood_type}_planks_2_from_shapelesscrafting`,
            `allthemodium:${wood_type}_planks_3_from_shapelesscrafting`
        ])
    })
    
    //The Abyss
    AbyssWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x theabyss:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#theabyss:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:theabyss/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x theabyss:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#theabyss:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:theabyss/${wood_type}_planks_saw`)

        removeRecipeByID(event, [
            `theabyss:${wood_type}_planks_rcp`,
            `theabyss:${wood_type}_planks_rcp_2`,
            `theabyss:s_${wood_type}_planks_rcp`
        ])
    })

    //======= The Undergarden =======
    UndergadenWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x undergarden:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#undergarden:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:undergarden/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x undergarden:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#undergarden:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:undergarden/${wood_type}_planks_saw`)

        removeRecipeByID(event, [
            `undergarden:${wood_type}_planks`
        ])
    })

    //===== Thermal Foundation =====
    //=== Axe ===
    event.shaped('2x thermal:rubberwood_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#forge:rubberwood_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:thermal/rubberwood_planks`)
    //=== Saw ===
    event.shaped('4x thermal:rubberwood_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#forge:rubberwood_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:thermal/rubberwood_planks_saw`)
    
    //===== Ars Nouveau =====
    //=== Axe ===
    event.shaped('2x ars_nouveau:archwood_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#forge:logs/archwood'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:ars_nouveau/archwood_planks`)
    //=== Saw ===
    event.shaped('4x ars_nouveau:archwood_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#forge:logs/archwood'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:ars_nouveau/archwood_planks_saw`)

    //===== Enlightened End =====
    //=== Axe ===
    event.shaped('2x enlightened_end:indigo_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#enlightened_end:indigo_stems'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:enlightened_end/indigo_planks`)
    event.shaped('2x enlightened_end:cerulean_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#enlightened_end:cerulean_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:enlightened_end/cerulean_planks`)
    //=== Saw ===
    event.shaped('4x enlightened_end:indigo_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#enlightened_end:indigo_stems'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:enlightened_end/indigo_planks_saw`)
    event.shaped('4x enlightened_end:cerulean_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#enlightened_end:cerulean_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:enlightened_end/cerulean_planks_saw`)

    //Forbidden & Arcanus
    //=== Axe ===
    event.shaped('2x forbidden_arcanus:fungyss_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#forbidden_arcanus:fungyss_stems'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:forbidden_arcanus/fungyss_planks`)
    event.shaped('2x forbidden_arcanus:cherry_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#forbidden_arcanus:cherrywood_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:forbidden_arcanus/cherry_planks`)
    event.shaped('2x forbidden_arcanus:aurum_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#forbidden_arcanus:mysterywood_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:forbidden_arcanus/aurum_planks`)
    event.shaped('forbidden_arcanus:edelwood_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#forbidden_arcanus:edelwood_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:forbidden_arcanus/edelwood_planks`)
    //=== Saw ===
    event.shaped('4x forbidden_arcanus:fungyss_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#forbidden_arcanus:fungyss_stems'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:forbidden_arcanus/fungyss_planks_saw`)
    event.shaped('4x forbidden_arcanus:cherry_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#forbidden_arcanus:cherrywood_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:forbidden_arcanus/cherry_planks_saw`)
    event.shaped('4x forbidden_arcanus:aurum_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#forbidden_arcanus:mysterywood_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:forbidden_arcanus/aurum_planks_saw`)
    event.shaped('2x forbidden_arcanus:edelwood_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#forbidden_arcanus:edelwood_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:forbidden_arcanus/edelwood_planks_saw`)

    //===== Nature's Aura =====
    //=== Axe ===
    event.shaped('2x naturesaura:ancient_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: ['naturesaura:ancient_log', 'naturesaura:ancient_bark']
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:naturesaura/ancient_planks`)
    //=== Saw ===
    event.shaped('4x naturesaura:ancient_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: ['naturesaura:ancient_log', 'naturesaura:ancient_bark']
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:naturesaura/ancient_planks_saw`)

    //===== Hexerei =====
    HexereiWoodType.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x hexerei:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#hexerei:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:hexerei/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x hexerei:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#hexerei:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:hexerei/${wood_type}_planks_saw`)
    
        removeRecipeByID(event, [
            `hexerei:${wood_type}_planks`,
            `hexerei:${wood_type}_planks_from_wood`,
            `hexerei:${wood_type}_planks_from_stripped_log`,
            `hexerei:${wood_type}_planks_from_stripped_wood`
        ])
    })

    //===== EvilCraft =====
    //=== Axe ===
    event.shaped('2x evilcraft:undead_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#evilcraft:undead_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:evilcraft/undead_planks`)
    //=== Saw ===
    event.shaped('4x evilcraft:undead_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#evilcraft:undead_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:evilcraft/undead_planks_saw`)

    //===== Vampirism =====
    //=== Axe ===
    event.shaped('2x vampirism:dark_spruce_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#vampirism:dark_spruce_log'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:vampirism/dark_spruce_planks`)
    event.shaped('2x vampirism:cursed_spruce_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#vampirism:cursed_spruce_log'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:vampirism/cursed_spruce_planks`)
    //=== Saw ===
    event.shaped('4x vampirism:dark_spruce_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#vampirism:dark_spruce_log'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:vampirism/dark_spruce_planks_saw`)
    event.shaped('4x vampirism:cursed_spruce_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#vampirism:cursed_spruce_log'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:vampirism/cursed_spruce_planks_saw`)

    //===== Eidolon =====
    //=== Axe ===
    event.shaped('2x eidolon:illwood_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: ['eidolon:illwood_log', 'eidolon:illwood_bark', 'eidolon:stripped_illwood_log', 'eidolon:stripped_illwood_bark']
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:eidolon/illwood_planks`)
    //=== Saw ===
    event.shaped('4x eidolon:illwood_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: ['eidolon:illwood_log', 'eidolon:illwood_bark', 'eidolon:stripped_illwood_log', 'eidolon:stripped_illwood_bark']
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:eidolon/illwood_planks_saw`)
    
    //======= The Aether, The Aether: Redux & Deep Aether =======
    //=== Axe ===
    event.shaped('2x aether:skyroot_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#aether:crafts_skyroot_planks'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:aether/skyroot_planks`)
    //=== Saw ===
    event.shaped('4x aether:skyroot_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#aether:crafts_skyroot_planks'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:aether/skyroot_planks_saw`)
    DeepAetherWoodType.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x deep_aether:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#deep_aether:crafts_${wood_type}_planks`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:deep_aether/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x deep_aether:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#deep_aether:crafts_${wood_type}_planks`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:deep_aether/${wood_type}_planks_saw`)
    
        removeRecipeByID(event, [
            `deep_aether:${wood_type}_planks`
        ])
    })
    AetherReduxWoodType.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x aether_redux:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#aether_redux:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:aether_redux/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x aether_redux:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#aether_redux:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:aether_redux/${wood_type}_planks_saw`)
    
        removeRecipeByID(event, [
            `aether_redux:${wood_type}_planks`
        ])
    })

    //======= [Let's Do] Vinery =======
    //=== Axe ===
    event.shaped('2x vinery:cherry_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: '#vinery:cherry_logs'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:vinery/cherry_planks`)
    //=== Saw ===
    event.shaped('4x vinery:cherry_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: '#vinery:cherry_logs'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:vinery/cherry_planks_saw`)

    //======= Ecologics =======
    EcologicsWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x ecologics:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#ecologics:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:ecologics/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x ecologics:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#ecologics:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:ecologics/${wood_type}_planks_saw`)
    
        removeRecipeByID(event, [
            `ecologics:${wood_type}_planks`
        ])
    })

    //======= Tinkers' Constructs =======
    TinkersWoodTypes.forEach((wood_type) => {
        //=== Axe ===
        event.shaped(`2x tconstruct:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:tools/axes',
            B: `#tconstruct:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:tconstruct/${wood_type}_planks`)
        //=== Saw ===
        event.shaped(`4x tconstruct:${wood_type}_planks`, ['A', 'B'], {
            A: '#forge:saws',
            B: `#tconstruct:${wood_type}_logs`
        }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:tconstruct/${wood_type}_planks_saw`)
    
        removeRecipeByID(event, [
            `tconstruct:world/wood/${wood_type}/planks`
        ])
    })

    //======= Midnight Madness =======
    //=== Axe ===
    event.shaped('2x midnight_madness:cursed_planks', ['A', 'B'], {
        A: '#forge:tools/axes',
        B: 'midnight_madness:cursed_log'
    }).damageIngredient({ item: '#forge:tools/axes', damage: 1 }).id(`kubejs:midnight_madness/cursed_planks`)
    //=== Saw ===
    event.shaped('4x midnight_madness:cursed_planks', ['A', 'B'], {
        A: '#forge:saws',
        B: 'midnight_madness:cursed_log'
    }).damageIngredient({ item: '#forge:saws', damage: 1 }).id(`kubejs:midnight_madness/cursed_planks_saw`)

    removeRecipeByID(event, [
        'werewolves:oak_planks',
        'werewolves:magic_planks',
        'byg:mangrove_planks',
        'byg:palo_verde_planks',
        'byg:bulbis_planks',
        'byg:imparius_planks',
        'byg:sythian_planks',
        'byg:embur_planks',
        'silentgear:netherwood_planks',
        'myrtrees:rubberwood_planks',
        'deeperdarker:echo_planks',
        'twilightforest:wood/darkwood_planks',
        'twilightforest:wood/darkwood_from_stripped_planks',
        'twilightforest:wood/darkwood_from_stripped_wood_planks',
        'twilightforest:wood/darkwood_from_wood_planks',
        'thermal:rubberwood_planks',
        'ars_nouveau:archwood_planks',
        'enlightened_end:cerulean_planks',
        'enlightened_end:ceruelean_log_to_planks',
        'enlightened_end:indigo_planks',
        'forbidden_arcanus:fungyss_planks',
        'forbidden_arcanus:cherry_planks',
        'forbidden_arcanus:cherrywood_planks_from_thin_cherrywood_log',
        'forbidden_arcanus:aurum_planks',
        'forbidden_arcanus:edelwood_planks',
        'naturesaura:ancient_planks',
        'naturesaura:ancient_planks_from_bark',
        'evilcraft:crafting/undead_planks',
        'vampirism:dark_spruce_planks',
        'vampirism:cursed_spruce_planks',
        'aether:skyroot_planks',
        'vinery:cherry_planks',
        'vinery:oak_planks',
        'vinery:oak_planks_from_wood',
        'eidolon:illwood_planks',
        'midnight_madness:cursed_planks_recipe'
    ])

})
