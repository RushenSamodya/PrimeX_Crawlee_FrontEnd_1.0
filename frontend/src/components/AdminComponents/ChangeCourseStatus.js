import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { SelectRole } from "../styles/Admin.styled";


const ChangeCourseStatus = () => {
    const[courseStatus, setCourseStatus] = useState("");
    
    return (  
        <div>
            <SelectRole>
                <select value={courseStatus} onChange={(e) => setCourseStatus(e.target.value)}>
                    <option value="">-select-</option>
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                    
                </select>
                <button>
                    <FaCheck size={15} color="white"/>
                </button>
            </SelectRole>
        </div>
    );


}
 
export default ChangeCourseStatus;