import React from "react";
import "./task.css";
import { useState } from "react";
import{ MdDelete } from "react-icons/md"; 

function Task({ name, index, deletefxn}) {
    let [ischecked, setIsChecked]= useState(false)
    return (
        <div className="task">
            <input type="checkbox" ischecked = {ischecked} onChange={()=> setIsChecked(!ischecked)} />
            <span
                style={{
                    textDecoration: ischecked ? 'line-through' : 'none'
                }}
            >
                {name}
            </span>

         
           <div className="delete" onClick={()=> deletefxn(index)}>

            <MdDelete color='#ffff' size= "1.3em"/>
           </div>
        </div>
    );
}

export default Task;


