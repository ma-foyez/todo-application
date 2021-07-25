import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AddTodo from '../addTodo/AddTodo';
import SimpleModal from '../master/Modal/SimpleModal';

const Header = () => {

    const [show, setShow] = useState<boolean>(false);
    const handleClose     = (): void => setShow(false);
    const handleShow      = (): void => setShow(true);

    return (
        <>
            <Navbar bg="light" className="shadow-sm" expand="lg">
                <Navbar.Brand >React Application</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#">
                            <button className="btn btn-sm mr-3" onClick={handleShow}>Add New</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <SimpleModal
                show        = {show}
                handleClose = {handleClose}
                size        = "md"
                id          = "1"
                title       = "Add New Activity"
            >
                <AddTodo />
            </SimpleModal>
        </>
    );
};

export default Header;