import React from "react";
import { useState } from "react";
import "../CSS/getmessage.css"
const PostMessage = () => {
    let [present,setPresent] = useState("")
    let [forsanta,setForsanta] = useState("")
    return (
        <div className="getmessage">
            <p className="getp">たけし</p>
            <p className="getp30">欲しいプレゼント</p>
            <input type="gettext" className="gettextarea getpresent" onChange={e => setPresent(e.target.value)} value={present}/>
            <p className="getp30">サンタさんに一言</p>
            <textarea className="gettextarea gethitokoto" onChange={e => setForsanta(e.target.value)} value={forsanta}/>
            <div className="getreturn">
                <div className="getreturntext">送信</div>
            </div>
        </div>
    );
};

export default PostMessage;