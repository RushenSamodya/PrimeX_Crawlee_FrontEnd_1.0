import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



const StyledButton = styled.button`
width: 100%;
height: 50px;
display: flex;
align-items: center;
color: #000000;
cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    padding: 9px 13px;
  }
`
function Request() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
        <>
            <div>
                <StyledButton onClick={handleShow}><FaUserCircle />user01</StyledButton>
                <StyledButton onClick={handleShow}><FaUserCircle />user02</StyledButton>
                <StyledButton onClick={handleShow}><FaUserCircle />user03</StyledButton>
                <StyledButton onClick={handleShow}><FaUserCircle />user04</StyledButton>
                <StyledButton onClick={handleShow}><FaUserCircle />user05</StyledButton>
                <StyledButton onClick={handleShow}><FaUserCircle />user06</StyledButton>
        
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>User Name : </li>
                            <li>Email :</li>
                            <li>Phone number :</li>
                            <li>Subject :</li>
                            <li>Gender :</li>
                            <li>Experience :</li>
                        </ul>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Decline Request   
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Accept Request
                    </Button>
                </Modal.Footer>
            </Modal> 
        </>
               
    )
}

export default Request