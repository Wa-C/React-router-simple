import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link , useHistory } from "react-router-dom";

const Team = (props) => {
    const {idTeam, strTeam} = props.team;
    // console.log(props.team);
    const history = useHistory();



    return (
        <div className="col-md-3 my-3">
        <Card>
            {/* <Card.Img variant="top" src={``} /> */}
            <Card.Body>
                <div className="text-center">
                    <Card.Title>{strTeam}</Card.Title>
                    {/* <Button as={Link}  to={`/Team/${idTeam}`} variant="primary">View Details</Button> */}
                    <Button onClick={ () => history.push(`/Team/${idTeam}`)} variant="primary">Explore</Button>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Team;