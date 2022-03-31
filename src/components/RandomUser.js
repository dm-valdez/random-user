import React from 'react'
import { Button } from 'react-bootstrap';
import { Card, CardGroup } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import { css } from "@emotion/react";
import { PacmanLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 300px auto;
`;

const RandomUser = ({ randomUsers, loading }) => {
    if (loading) {
        return (
            <PacmanLoader
                css={override}
                size={30}
                color={"#006778"}
                loading={loading}
            />
        )
    }
    return (
        <div className='container'>
            <div className='row'>
                {randomUsers.map((randomUser) => (
                    <div className='col-md-4'>
                        <CardGroup>
                            <Card style={{ width: '100%', marginBottom: '10px' }}>
                                <Card.Body>
                                    <Card.Title className='user-name'>{randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Email: <a href="#">{randomUser.email}</a></ListGroupItem>
                                    <ListGroupItem>Phone: {randomUser.phone}</ListGroupItem>
                                    <ListGroupItem>Cell No: {randomUser.cell}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Button className='see-button'>See More</Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomUser;