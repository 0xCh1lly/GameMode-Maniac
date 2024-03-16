import { DisplayValueHeader } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns, Timers, TeamsBalancer } from 'pixel_combats/room';
import * from "./TeamCreate.js";
import * from "./Libray.js";


const LeaderBoard_Time = 10;
const MaxRounds_Count = 6;
const PersonalTime = 30;
const StartTime = 10;
const SleepTime = 60;
const EndTime = 10;

const StateProp = Properties.GetContext().Get("StateProp");
const RoundProp = Properties.GetContext().Get("RoundProp");
const MainTimer = Timers.GetContext().Get("MainTimer");


MainTimer.Timers.Add(() => {
    switch (StateProp) {
        case "Loading":
            SetStateStart();
            break;
        case "Start":
            SetStateSleep();
            break;
        case "Sleep":
            SetStatePersonal();
            break;
        case "Personal":
            SetStateSleep();
            break;
        case "End":
            SetStateLeaderBoard();
            break;
        case "LeaderBoard":
            Game.RestartGame();
            break;
    }
});


function SetStateStart() {
    StateProp.Value = "Start";
    MainTimer.Restart(StartTime);
}

function SetStateSleep() {
    StateProp.Value = "Sleep";
    RoundProp.Value++;
    MainTimer.Restart(SleepTime);

    if (RoundProp > MaxRounds_Count);
}

function SetStatePersonal() {
    StateProp.Value = "Personal";
    MainTimer.Restart(PersonalTime);
}

function SetStateLeaderBoard() {
    StateProp.Value = "LeaderBoard";
    MainTimer.Restart(LeaderBoard_Time);
}



const Inventory = Inventory.GetContext();
Inventory.Main.Value = false;
Inventory.Secoundary.Value = false;
Inventory.Melee.Value = true;
Inventory.Explosive.Value = false;
Inventory.Build.Value = false;