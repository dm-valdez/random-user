import React from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card, CardGroup } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useState } from 'react';

const DisplayUser = ({ randomUser }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                className='modal'
                aria-labelledby="example-modal-sizes-title-lg"
            >

                <Modal.Header className='modal-header' closeButton>
                    <Card.Img src={randomUser.picture.large} className="modal-image" />
                    <Modal.Title className='modal-title'>
                        {randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}
                        <p>{randomUser.email}</p>
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
                    <p><strong>Favorite Color:</strong> Random Gradient Color</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='modal-button' onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            <div className='col-lg-4'>
                <CardGroup className='card'>
                    <Card>
                        <Card.Body>
                            <Card.Title className='card-name'>{randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><strong>Email:</strong> <a href="#">{randomUser.email}</a></ListGroupItem>
                            <ListGroupItem><strong>Phone:</strong> {randomUser.phone}</ListGroupItem>
                            <ListGroupItem><strong>Cell No:</strong> {randomUser.cell}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button className='card-button' onClick={() => setShowModal(true)}>More About {randomUser.name.first}</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default DisplayUser