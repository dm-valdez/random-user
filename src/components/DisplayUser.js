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
                size="lg"
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header className='modal-header' closeButton>
                    <Card.Img src={randomUser.picture.large} className="modal-image"/>
                    <Modal.Title id="example-modal-sizes-title-lg" className='modal-title'>
                        {randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
            <div key={randomUser.login.uuid} className='col-lg-4'>
                <CardGroup className='card'>
                    <Card>
                        <Card.Body>
                            <Card.Title className='user-name'>{randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><strong>Email:</strong> <a href="#">{randomUser.email}</a></ListGroupItem>
                            <ListGroupItem><strong>Phone:</strong> {randomUser.phone}</ListGroupItem>
                            <ListGroupItem><strong>Cell No:</strong> {randomUser.cell}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button className='see-button' onClick={() => setShowModal(true)}>More About {randomUser.name.first}</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default DisplayUser