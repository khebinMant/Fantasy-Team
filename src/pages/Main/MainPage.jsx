import { FantasyLayout } from "../../ui/FantasyLayout";
import { TeamsList } from "./components/TeamsList";
import { LeaguesList } from "./components/LeaguesList";
import { PlayerList } from "./components/PlayerList";


export const MainPage = () => {

  return (
    <FantasyLayout>
      <div className="main-content">
        {/* <PlayerCard data={result} /> */}
        <PlayerList/>
        <br/>
        <PlayerList/>
        <br/>
        <PlayerList/>
        <br/>
        <br/>
        <br/>
        {/* <LeaguesList/>
        <TeamsList/> */}
      </div>
    </FantasyLayout>
  );
};
