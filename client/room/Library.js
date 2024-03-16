import { DisplayValueHeader } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns, Timers, TeamsBalancer } from 'pixel_combats/room';


function RandomMurder(player) {
    const Index = Math.floor(Math.random() * Players.Count);
    Players.All[Index].Properties.Get("Murder").Value = true;
}

function RandomSheriff(player) {
    const Index = Math.floor(Math.random() * Players.Count);
    Players.All[Index].Properties.Get("Sheriff").Value = true;
    Inventory.Secoundary.Value = true;
    player.Damage.Damage.Value = true;
}