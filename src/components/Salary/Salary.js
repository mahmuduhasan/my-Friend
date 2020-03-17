import React from 'react';

const Salary = (props) => {
    const total = props.total;
    const totalSalary = total.reduce((salary , friend) => salary+friend.salary ,0)
    return (
        <div>
            <h4>Friend Added : {total.length}</h4>
            <p>My friends salary : {totalSalary}</p>
        </div>
    );
};

export default Salary;