import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBContainer,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdb-react-ui-kit';

const GroupTable = () => {
    const GroupData = {
        group: "021703",
        columns: ["Номер", "ФИО", "email", "Номер телефона"],
        students: [
            [1, "Якубович Никита Игоревич", "severside93@gmail.com", "+375298042190"],
            [2, "Поплавский Эльдар Эдуардович", "eldarpoplauski111@gmail.com", "+375445447445"],
            [3, "Смелов Алексей Александрович", "zxcvdf@gmail.com", "+375293702067"]]
    };

    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBCard alignment='center'>
                    <MDBCardTitle className="mt-3"><h5>Номер группы: {GroupData.group}</h5></MDBCardTitle>
                    <MDBCardBody className="p-0">
                        <MDBTable align='middle'>
                            <MDBTableHead dark>
                                <tr>
                                    {GroupData.columns.map(columnName => <th scope='col'> {columnName} </th>)}
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody> {
                                GroupData.students.map(Student =>
                                    <tr>
                                        {Student.map((cellData) => <td>{cellData}</td>)}
                                    </tr>
                                    )
                                }
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </section>
    );
};

export default GroupTable;