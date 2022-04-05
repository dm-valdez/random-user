import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Skeleton from '@mui/material/Skeleton';

const SkeletonLoader = () => {
    return (
        <div className='col-lg-4'>
            <CardGroup className='card'>
                <Card>
                    <Card.Body>
                        <Card.Title className='card-name'>
                            <Skeleton
                                variant='text'
                                animation='wave'
                            ></Skeleton>
                        </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Skeleton
                                variant='text'
                                animation='wave'
                            ></Skeleton>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Skeleton
                                variant='text'
                                animation='wave'
                            ></Skeleton>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Skeleton
                                variant='text'
                                animation='wave'
                            ></Skeleton>
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Skeleton
                            variant='text'
                            animation='wave'
                        ></Skeleton>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default SkeletonLoader