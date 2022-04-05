import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card, CardGroup } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const DisplayUser = ({ randomUser }) => {
    const [showModal, setShowModal] = useState(false);
    const [firstHex, setFirstHex] = useState();
    const [secondHex, setSecondHex] = useState();

    // a function that creates the first random hex color
    const firstRandomHex = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

        setFirstHex(randomColor);
    };

    // also a function that creates the second random hex color
    const secondRandomHex = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

        setSecondHex(randomColor);
    };

    // a function that combine the first and second randomHex color that will create a gradient color
    const gradientColor = () => {
        return `linear-gradient(to right, ${firstHex}, ${secondHex})`;
    }

    useEffect(() => {
        setFirstHex(firstRandomHex);
        setSecondHex(secondRandomHex);
    }, [])

    // return all of the user but hide the modal
    return (
        <>
            {/* if the "More About" button has been clicked, display the pop-up modal 
            with the full details of the user and its favorite random gradient color. */}
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                className='modal'
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton style={{ background: gradientColor() }}/>
                <Modal.Header className='modal-header' >
                    <Card.Img src={randomUser.picture.large} className="modal-image" />
                    <Modal.Title className='modal-title'>
                        {randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}
                        <p><a href={`mailto:${randomUser.email}`}>{randomUser.email}</a></p>
                        <p>@{randomUser.login.username}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <p><strong>Registered:</strong> {randomUser.registered.date.slice(0, 10)}</p>
                    <p><strong>Gender:</strong> {randomUser.gender.charAt(0).toUpperCase() + randomUser.gender.slice(1)}</p>
                    <p><strong>Date of Birth:</strong> {randomUser.dob.date.slice(0, 10)}</p>
                    <p><strong>Location:</strong> {randomUser.location.street.number} {randomUser.location.street.name}, {randomUser.location.city}, {randomUser.location.state}, {randomUser.location.country}</p>
                    <p><strong>Phone/Cell:</strong> {randomUser.phone} | {randomUser.cell}</p>
                    <p><strong>NAT:</strong> {randomUser.nat}</p>
                    <p><strong>Favorite Color:</strong> {firstHex} {secondHex} </p>
                </Modal.Body>
            </Modal>

            {/* display the list of users with the necessary information */}
            <div className='col-lg-4'>
                <CardGroup className='card'>
                    <Card>
                        <Card.Body>
                            <Card.Title className='card-name'>
                                {randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}
                            </Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><strong>Email:</strong> <a href={`mailto:${randomUser.email}`}>{randomUser.email}</a></ListGroupItem>
                            <ListGroupItem><strong>Phone:</strong> {randomUser.phone}</ListGroupItem>
                            <ListGroupItem><strong>Cell No:</strong> {randomUser.cell}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button className='card-button' onClick={() => {
                                setShowModal(true);
                            }}>
                                More About {randomUser.name.first}
                            </Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default DisplayUser;