import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginRegisterPage } from "../auth/pages/LoginRegisterPage";
import { CheckingAuth } from "../components/CheckingAuth";
import { useCheckOut } from "../hooks/useCheckout";
import { CreateFantasyTeamPage } from "../pages/Create/CreateFantasyTeamPage";
import { FantasyTeamPage } from "../pages/FantasyTeams/FantasyTeamPage";
import { FantasyTeamsPage } from "../pages/FantasyTeams/FantasyTeamsPage";
import { LeaguePage, LeaguesPages } from "../pages/League/LeaguePage";
import { MainPage } from "../pages/Main/MainPage";
import { PlayerPage } from "../pages/Player/PlayerPage";
import { TeamPage } from "../pages/Team/TeamsPage";
import PlayerDetails from "../pages/PlayerDetails/PlayerDetails";

export const MainRouter = () => {
  const { status } = useCheckOut();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
            <Routes>
                {     
                    status === 'authenticated'
                    ? 
                    <>
                        <Route path='/*' element={<MainPage/>}/>
                        <Route path='/create-fantasy' element={<CreateFantasyTeamPage/>}/>
                        <Route path='/fantasy-teams' element={<FantasyTeamsPage/>}/>
                        <Route path='/league/:leagueId' element={<LeaguePage/>}/>
                        <Route path='/team/:teamId' element={<TeamPage/>}/>
                        <Route path='/player/:playerId' element={<PlayerPage/>}/>
                        <Route path='/fantasy-team/:fantasyTeamId' element={<FantasyTeamPage/>}/>
                        <Route path="/player-details" element={<PlayerDetails />} />
                    </>
                    :
                    <Route path='/auth/' element={<LoginRegisterPage/>}/>
                }
                <Route path='/*' element={<Navigate to='/auth/'/> }/>

            </Routes>
    )
}
