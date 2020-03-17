import React, { useState } from 'react';
import './Friend.css'
import fakeData from '../../fakeData';
import Design from '../Design/Design';
import Salary from '../Salary/Salary';
const Friend = () => {
    const infoValue = fakeData;
    const [friend,setFriend]=useState(infoValue);
    const [total, setTotal] = useState([]);
    const salaryHandle =(friend) =>{
        const newTotal = [...total, friend];
        setTotal(newTotal);
    }
    return (
        <div>
            <div>
                <Salary total={total}></Salary>
            </div>
            <div>  
                {  
                    friend.map(info => <Design 
                        addSalary = {salaryHandle}
                        friendInfo={info
                        }></Design> 
                    )
                }
            </div>
            
        </div>
    );
};

export default Friend;