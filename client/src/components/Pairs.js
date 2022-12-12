import React, {useState} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBCardGroup
} from 'mdb-react-ui-kit';
import ModalForm from "./ModalForm";
import {values} from "mobx";
import {defaults} from "axios";
let btnInfo={}
const Pairs = () => {
    const [modal,setModal]=useState(false)
    const toggleShow = () => {
        setModal(!modal)
    };
    const Pairs=[
        {id:1,title:'Физкультура',group:'021703',teacher:'Физрук Физрукович',type:'Практическое занятие',time:'10:30-11:50'},
        {id:2,title:'ТВИМС',group:'021703',teacher:'Физрук Физрукович',type:'Практическое занятие',time:'10:30-11:50'},
        {id:3,title:'Непонятная пара',group:'021703',teacher:'Ночная ночь',type:'Лаборатоная работа',time:'23:59-32:95'},
        {id:4,title:'Непонятная пара',group:'021703',teacher:'Ночная ночь',type:'Лаборатоная работа',time:'23:59-32:95'},
        {id:5,title:'Непонятная пара',group:'021703',teacher:'Ночная ночь',type:'Лаборатоная работа',time:'23:59-32:95'},
        {id:6,title:'Непонятная пара',group:'021703',teacher:'Ночная ночь',type:'Лаборатоная работа',time:'23:59-32:95'},
        {id:7,title:'Непонятная пара',group:'021703',teacher:'Ночная ночь',type:'Лаборатоная работа',time:'23:59-32:95'},
        {id:8,title:'Непонятная пара',group:'021703',teacher:'Ночная ночь',type:'Лаборатоная работа',time:'23:59-32:95'},
        {id:9,title:'Непонятная пара',group:'021703',teacher:'Ночная ночь',type:'Лаборатоная работа',time:'23:59-32:95'},
        {id:10,title:'Непонятная пара',group:'021703',teacher:'Ночная ночь',type:'Лаборатоная работа',time:'23:59-32:95'},
        {id:11,title:'Непонятная пара',group:'021703',teacher:'Ночная ночь',type:'Лаборатоная работа',time:'23:59-32:95'}

    ]
    return (
        <div className='w-75 ms-auto me-auto mt-2' >

                <MDBRow className='row-cols-1 row-cols-md-5 g-4 ' >
                    {Pairs.map((item) =>
                        <MDBCol>

                        <MDBCard className='m-1' shadow='0' border='dark' background='dark'  >
                        <MDBCardBody className='text-dark'>
                            <MDBCardTitle className='text-white'>{item.id}. {item.title}</MDBCardTitle>
                            <MDBCardText className='text-white'>
                                <p>Group: {item.group}</p>
                                <p>Teacher: {item.teacher}</p>
                                <p>Type: {item.type}</p>
                                <p>Time: {item.time}</p>
                            </MDBCardText>
                            <MDBBtn onClick={()=>{btnInfo=item;toggleShow()}}  color='white' className='text-white border-white '>
                                Select</MDBBtn>
                            <ModalForm active={modal} setActive={setModal} info={btnInfo}/>
                        </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    )}

                </MDBRow>

        </div>
    );
};

export default Pairs;