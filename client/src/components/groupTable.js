import React from 'react';
import TableRow from "./TableRow";
import '../styles/styles.css'
import TableTitle from "./TableTitle";
const GroupTable = () => {
        const studentList ={group:"021703",students:[
                {number:1,fullName:"Nikita Yakub",email:"qweq@gmail.com"},
                {number:2,fullName:"Eldar Poplavskiy",email:"123fsf@gmail.com"},
                {number:3,fullName:"Alexey Smelov",email:"zxcvdf@gmail.com"}]}
    return (
        <div>
            <div className="table">
             <TableTitle group={studentList.group}/>
            {studentList.students.map((studentList, idx) => <TableRow key={idx} student={studentList} />)}
        </div>
        </div>
    );
};

export default GroupTable;