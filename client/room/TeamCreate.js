import { Color } from "pixel_combats/basic";
import { Teams } from "pixel_combats/room";


export const PlayerTeam_Color = new Color(1, 1, 1, 0);
export const PlayerTeam_DisplayName = "PlayerTeam";
export const PlayerTeam_Name = "<b>Игроки</b>";
export const PlayerTeam_SpawnPoint = 1;


export function CreateTeam() {
    Teams.Add(PlayerTeam_Name, PlayerTeam_DisplayName, PlayerTeam_Color);
    const PlayerTeam = Teams.Get(PlayerTeam_Name);
    PlayerTeam.Spawns.SpawnPointsGroups.Add(PlayerTeam_SpawnPoint);

    return PlayerTeam;
}