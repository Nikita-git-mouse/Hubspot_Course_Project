import React from 'react';
import {
    MDBBadge,
    MDBCard,
    MDBCardBody, MDBCardText,
    MDBCardTitle, MDBCol,
    MDBContainer, MDBIcon, MDBListGroup, MDBListGroupItem, MDBPagination, MDBPaginationItem, MDBPaginationLink,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdb-react-ui-kit';

const TimeTableDay = (props) => {
    //const pairs_format = ["Предмет", "Время начала", "Время окончания", "Тип", "Преподаватель"]

    return (
        <MDBCard>
            <MDBCardTitle className="mt-2 text-center"><h5>{props.day}</h5></MDBCardTitle>
            <MDBCardBody className="p-0">
                {
                    props.pairs.map(Pair =>
                        <tr>
                            <td>
                                <p className='ms-2 fw-bold mb-1'>
                                    {
                                        Pair[3] === "Практическое занятие" ? (<div className='px-1 bg-warning text-light rounded-3'>{Pair[1]}</div>)
                                        : (Pair[3] === "Лекция" ? (<div className='px-1 bg-success text-light rounded-3'>{Pair[1]}</div>)
                                        : (<div className='px-1 bg-danger text-light rounded-3'>{Pair[1]}</div>))
                                    }
                                </p>
                                <p className='px-1 ms-2 mb-3 text-muted mb-0'>{Pair[2]}</p>
                            </td>
                            <td>
                                <p className='px-1 ms-2 fw-bold mb-1'>{Pair[0]}</p>
                                <p className='px-1 ms-2 mb-3 text-muted mb-0'>{Pair[4]}</p>
                            </td>
                        </tr>
                    )
                }
            </MDBCardBody>

        </MDBCard>
    );
};

export default TimeTableDay;