import { DisplayValueHeader, Color } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns, Timers, TeamsBalancer } from 'pixel_combats/room';
import * as UTILS from './Libray.js';

try {
    const PlayerTeam_Color = new Color(1, 1, 1, 0);
    const PlayerTeam_DisplayName = "PlayerTeam";
    const PlayerTeam_Name = "<b>Игроки\nDevelopers: ch1lly, mak</b>";
    const PlayerTeam_SpawnPoint = 1;

    const LeaderBoard_Time = 10;
    const MaxRounds_Count = 6;
    const PersonalTime = 30;
    const StartTime = 10;
    const SleepTime = 60;
    const EndTime = 10;

    const StateProp = Properties.GetContext().Get("StateProp");
    const RoundProp = Properties.GetContext().Get("RoundProp");
    const MainTimer = Timers.GetContext().Get("MainTimer");


    Teams.Add(PlayerTeam_Name, PlayerTeam_DisplayName, PlayerTeam_Color);
    const PlayerTeam = Teams.Get(PlayerTeam_Name);
    PlayerTeam.Spawns.SpawnPointsGroups.Add(PlayerTeam_SpawnPoint);


    MainTimer.OnTimer.Add(() => {
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

        if (RoundProp.Value > MaxRounds_Count) StateProp.Value = "End";
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

} catch (error) {
    Teams.Add('error', "ErrorTeam",new Color(0,0,0,0));
}


