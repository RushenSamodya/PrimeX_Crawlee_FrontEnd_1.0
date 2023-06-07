import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { SelectRole } from "../styles/Admin.styled";


const ChangeRole = () => {
    const[userRole, setUserRole] = useState("");
    
    return (  
        <div>
            <SelectRole>
                <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
                    <option value="">-select-</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Admin">Admin</option>
                </select>
                <button>
                    <FaCheck size={15} color="white"/>
                </button>
            </SelectRole>
        </div>
    );


}
 
export default ChangeRole;