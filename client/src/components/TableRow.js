import React from 'react';
import TableCell from "./TableCell";
import '../styles/styles.css'
const TableRow = (studentList) => {

    //const {number,fullName,email} = studentList.student

    return (
        <div className="table__row">
            <TableCell item={studentList.student.number+'. '}/>
            <TableCell item={studentList.student.fullName}/>
            <TableCell item={studentList.student.email}/>
        </div>
    );
};

export default TableRow;