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


const ModalForm = ({active,setActive,info}) => {


const toggleShow = () => setActive(!active)

    console.log(info)
    return (
        <div>
            <>
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
                                <MDBBtn color='white' className='border-dark' onClick={toggleShow}>
                                    Close
                                </MDBBtn>
                                <MDBBtn color='dark'>Send</MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </>
        </div>)


}
export default ModalForm;