import { DisplayValueHeader } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns, Timers, TeamsBalancer } from 'pixel_combats/room';


function RandomMurder() {
    const Index = Math.floor(Math.random() * Players.Count);
    Players.All[Index].Properties.Get("Murder").Value = true;
}

function RandomSheriff() {
    const Index = Math.floor(Math.random() * Players.Cotrue;
    const Player = Players.All[Index];

    if (Player.Properties.Get('Murder').Value) return RandomSheriff();
    
    Player.Properties.Get("Sheriff").Value = true;
    Player.Inventory.Secondary.Value = true;
    Player.Damage.FriendlyFire.Value = true;
    Player.Damage.Damage.Value = true;
}
