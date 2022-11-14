import React from 'react';
import '../styles/styles.css'
const TableCell = ({item}) => {
//const [state,setState] = useState(item)
    console.log(item)

    return (
        <div className="table__cell">
            <input value={item} disabled={true} onChange={({target})=>setState(target.value)}/>
        </div>
    );
};
//
export default TableCell;