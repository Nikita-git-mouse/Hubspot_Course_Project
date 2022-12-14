import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import axios from 'axios'
import {Button} from "react-bootstrap";


const Account = () => {
    const ref = React.useRef(null)
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <p className="text-muted mb-1">Искуственный интеллект</p>
                                <p className="text-muted mb-4">3-й курс ФИТиУ</p>
                                <div className="d-flex justify-content-center mb-2">
                                    {/*<MDBBtn>Delete</MDBBtn>
                                        <MDBBtn outline className="ms-1">Edit</MDBBtn>*/}
                                    <Button variant="primary" className="me-1">
                                        Delete
                                    </Button>
                                    <Button variant="outline-primary">
                                        Edit
                                    </Button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <MDBListGroup flush className="rounded-3">
                                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                                        <MDBIcon fas icon="globe fa-lg text-warning" />
                                        <MDBCardText>Курс: 3</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                                        <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                        <MDBCardText>Рейтинг: 4</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                                        <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                        <MDBCardText>inst: @_nkch_n</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                                        <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                        <MDBCardText>Остальное не</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                                        <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                        <MDBCardText>Имеет значения</MDBCardText>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Nikitka Yakub</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">severside93@gmail.com</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Home Phone</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">(29) 804-2190</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Mobile</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Address</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Dzerzhinskogo 95, Minsk</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">ASSIGMENT:</span> Student</MDBCardText>
                                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Front-end</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Soft Skills</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Hard Skills</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>attractiveness</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>heterosexual</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1 d-flex justify-content-center align-items-center">Коротко о себе:</span></MDBCardText>
                                        <div>
                                        - Увлекаюсь катанием на своей нестабильной нервной системе
                                        </div><div>
                                        - Изучаю Front-end в свободное от универа время
                                        </div><div>
                                        - Грамотно подхожу к выполению своих обязанностей
                                        </div><div>
                                        - Но это не всегла именно так
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                {/*<input ref={ref}/>
                <button onClick={async () => {
                    axios.post('http://192.168.177.208:3002/api/v1/teachers/event', {
                        "classId": 40,
                        "message": ref?.current.value || "Some text",
                        "teacherId": 41
                    })
                }}>Click me</button>*/}
            </MDBContainer>
        </section>
    );
};

export default Account;