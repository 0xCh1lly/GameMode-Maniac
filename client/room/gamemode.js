import { DisplayValueHeader } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns, Timers, TeamsBalancer } from 'pixel_combats/room';
import * as teams from './TeamCreate.js';


const WaitingTime = 10;
const ChoiceTime = 10;
const GameTime = 600;

const StateProp = Properties.GetContext().Get("StateProp");
const MainTimer = Timers.GetContext().Get("MainTimer");


BreackGraph.OnlyPlayerBlockDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Damage.FriendlyFire = GameMode.Parameters.GetBool("FriendlyFire");