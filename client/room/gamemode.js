import { DisplayValueHeader } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns, Timers, TeamsBalancer } from 'pixel_combats/room';
import * as teams from './TeamCreate.js';



const Inventory = Inventory.GetContext();
Inventory.Main.Value = false;
Inventory.Secoundary.Value = false;
Inventory.Melee.Value = true;
Inventory.Build.Value = false;