import React from 'react';
import { useState, useEffect } from 'react';
import Team from './Team';


const Teams = () => {
    const [Teams, setTeams] = useState([]);


    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setTeams(data.teams))

    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    Teams.map((team) => <Team key={team.idTeam} team={team} />)
                }

            </div>
        </div>
    );
};

export default Teams;