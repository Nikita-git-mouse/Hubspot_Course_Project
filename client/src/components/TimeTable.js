import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle, MDBCol,
    MDBContainer, MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdb-react-ui-kit';
import TimeTableDay from "./TimeTableDay";


const TimeTable = () => {
    const TimeTableData = {
        weeks: [
            {
                num: 1,
                days: [
                    {day: "Понедельник",
                        pairs: [["Физкультура", "10:30", "11:50", "Практическое занятие", "Физрук Физрукович"],
                            ["ТВИМС", "12:10", "13:30", "Лекция", "Математица Математичная"]]},
                    {day: "Вторник",
                        pairs: [["Физкультура", "10:30", "11:50", "Практическое занятие", "Физрук Физрукович"],
                            ["ТВИМС", "12:10", "13:30", "Лекция", "Математица Математичная"]]},
                    {day: "Среда",
                        pairs: [["Физкультура", "10:30", "11:50", "Практическое занятие", "Физрук Физрукович"],
                            ["Непонятная пара", "23:59", "32:95", "Лаборатоная работа", "Ночная ночь"],
                            ["ТВИМС", "12:10", "13:30", "Лекция", "Математица Математичная"]]},
                    {day: "Четверг",
                        pairs: [["Физкультура", "10:30", "11:50", "Практическое занятие", "Физрук Физрукович"],
                            ["ТВИМС", "12:10", "13:30", "Лекция", "Математица Математичная"]]},
                    {day: "Пятница",
                        pairs: [["Физкультура", "10:30", "11:50", "Практическое занятие", "Физрук Физрукович"],
                            ["ТВИМС", "12:10", "13:30", "Лекция", "Математица Математичная"]]},
                    {day: "Суббота",
                        pairs: []},
                    {day: "Воскресенье",
                        pairs: []},
                ]
            },{}
        ]
    }

    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                {/*{TimeTableData.weeks.length}
                <MDBPagination>
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#">
                            #
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>*/

                /*<MDBRow><MDBCol>*/}

                <MDBRow>
                    <MDBCol lg="3">
                        {TimeTableDay(TimeTableData.weeks[0].days[0])}
                    </MDBCol>
                    <MDBCol lg="3">
                        {TimeTableDay(TimeTableData.weeks[0].days[1])}
                    </MDBCol>
                    <MDBCol lg="3">
                        {TimeTableDay(TimeTableData.weeks[0].days[2])}
                    </MDBCol>
                    <MDBCol lg="3">
                        {TimeTableDay(TimeTableData.weeks[0].days[3])}
                    </MDBCol>
                </MDBRow>
                <MDBRow className="py-2">
                </MDBRow>
                <MDBRow>
                    <MDBCol lg="3">
                        {TimeTableDay(TimeTableData.weeks[0].days[4])}
                    </MDBCol>
                    <MDBCol lg="3">
                        {TimeTableDay(TimeTableData.weeks[0].days[5])}
                    </MDBCol>
                    <MDBCol lg="3">
                        {TimeTableDay(TimeTableData.weeks[0].days[6])}
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </section>
    );
};

export default TimeTable;