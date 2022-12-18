import { useNavigate } from 'react-router-dom';
import "../CSS/addname.css"
import React, { useState } from "react";
const GetMessage = () => {
    const [name, setName] = useState("");
    const navigation = useNavigate()
    const add=()=>{
        navigation("/santa")
    }
    return (
        <div className="addmessage">
            <p className="addp30">追加するお子様の名前</p>
            <input type="addtext" className="addtextarea addpresent"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div className="addreturn" onClick={add}>
                <div className="addreturntext">追加</div>
            </div>
        </div>
    );
};

export default GetMessage;