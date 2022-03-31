import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar variant="dark" className="nav">
            <Container>
                <Navbar.Brand href="#home" className='nav-brand'>
                    Random User API
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar