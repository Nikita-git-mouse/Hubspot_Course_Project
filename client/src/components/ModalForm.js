import React from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBTextArea,
    MDBInput, MDBFile,
} from 'mdb-react-ui-kit';
import {useState} from "react";
import {Button} from "react-bootstrap";


const ModalForm = ({active,setActive,info}) => {


const toggleShow = () => setActive(!active)

    console.log(info)
    return (
        <div>
            <MDBModal show={active} setShow={setActive} tabIndex='-1' >
                <MDBModalDialog >
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Id {info.id} </MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody >
                            <p>Group: {info.group}</p>
                            <p>Teacher: {info.teacher}</p>
                            <p>Type: {info.type}</p>
                            <p>Time: {info.time}</p>
                            <MDBTextArea contrast className='ms-0' label='Message' id='textAreaExample' rows={4} />
                            <MDBFile label='File input' id='customFile' />
                        </MDBModalBody>
                        <MDBModalFooter>
                            <Button variant={'outline-dark'} onClick={toggleShow}>
                                Close
                            </Button>
                            <Button variant={'dark'} onClick={toggleShow}>
                                Send
                            </Button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>)


}
export default ModalForm;