import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import male from './images/male.png'
import female from './images/female.png'


const TeamDetails = () => {
    const { idTeam } = useParams();

    const [Team, setTeam] = useState([]);


    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
        // console.log(Team);

    }, [idTeam])

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    {/* <img className="img-fluid" src={``} alt=""/> */}
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {
                            Team?.strGender?.toLowerCase() === "male" ? <img style={{width: "100%"}} src={male} /> : <img src={female} />
                        }
                    </div>
                    <div className="col-md-6"  >
                        <h3>{Team.strTeam}</h3>
                        <p>Release Date {Team.intFormedYear}</p>
                        <p>{Team.strLeague}</p>
                        <p>Gender : {Team.strGender}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeamDetails;