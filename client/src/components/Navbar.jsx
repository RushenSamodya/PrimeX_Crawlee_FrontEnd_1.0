import React from "react";
import styled from "styled-components";
import { RiNotification2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Container = styled.div`
  height: 10vh;
  display: flex;
  margin: 0px 5px 0px 260px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const LeftContainer = styled.div`
  font-size: 30px;
  color: rgba(119, 124, 136, 1);
  margin-left: 25px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex: 2;
  margin-right: 40px;
  align-items: center;
  justify-content: flex-end;
`;
const LogoutBtn = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 10px;
  border: #f0634c solid 2px;
  background-color: white;
  color: #f0634c;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    padding: 9px 13px;
  }
`;
const IconBtn = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
`;

const LinkText = styled.div`
  font-size: 14px;
  text-decoration: none;
`;

const RightContainer = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: rgba(119, 124, 136, 1);
`;
const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
`;
const Line = styled.div`
  height: 35px;
  width: 2px;
  background-color: rgba(119, 124, 136, 1);
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;
const Username = styled.span`
  font-size: 20px;
`;
const Role = styled.span`
  color: #f0634c;
  font-size: 12px;
  font-weight: 900;
`;

export default function Navbar({ query }) {
  const teacher = false;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container data-aos="fade-down">
      <LeftContainer>{query}</LeftContainer>
      <CenterContainer>
        {teacher ? (
          <></>
        ) : (
          <>
            <LogoutBtn onClick={handleShow}>
              <IconBtn>
                <FaChalkboardTeacher />
              </IconBtn>
              <LinkText>Become a Teacher</LinkText>
            </LogoutBtn>

            <Modal show={show} onHide={handleClose} size="xl">
              <Modal.Header closeButton>
                <Modal.Title>How to become an Instructor</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className="mb-3">
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="name"
                          placeholder="First Name"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="name"
                          placeholder="Last Name"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group 
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="tel"
                          placeholder="Phone Number"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <div className="mb-1">
                      <b>Gender *</b>
                    </div>

                    <Col>
                      <div className="mb-4">
                        <Form.Check 
                          inline
                          label="Male"
                          name="group1"
                          type="radio"
                        />
                        <Form.Check
                          inline
                          label="Female"
                          name="group1"
                          type="radio"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                  <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Subjects"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                  <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                           as="textarea" rows={3} 
                          placeholder="Experience/Qualifications *"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                  <Col>
                      <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      
                    </Col>
                  </Row>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" style={{ backgroundColor: '#f0634c', border:'none' }} onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </CenterContainer>
      <RightContainer>
        <Icon>
          <RiNotification2Fill />
        </Icon>
        <Line></Line>
        <Icon>
          <FaUserCircle />
        </Icon>
        <NameContainer>
          <Username>Username</Username>
          <Role>{teacher ? 'Teacher' : 'Student'}</Role>
        </NameContainer>
      </RightContainer>
    </Container>
  );
}
