import { DisplayValueHeader } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns, Timers, TeamsBalancer } from 'pixel_combats/room';
import * from "./TeamCreate.js";
import * from "./Libray.js";


const LeaderBoard_Time = 10;
const PersonalTime = 30;
const StartTime = 10;
const SleepTime = 60;
const EndTime = 10;



const Inventory = Inventory.GetContext();
Inventory.Main.Value = false;
Inventory.Secoundary.Value = false;
Inventory.Melee.Value = true;
Inventory.Explosive.Value = false;
Inventory.Build.Value = false;