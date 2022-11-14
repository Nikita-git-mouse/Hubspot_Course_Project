import React from 'react';
import '../styles/styles.css'

const TableTitle = (groupNumber) => {
    console.log(groupNumber.group)
    return (
        <div className="table__title">
            <h1 >{'Group ' + groupNumber.group}</h1>
        </div>
    );
};

export default TableTitle;