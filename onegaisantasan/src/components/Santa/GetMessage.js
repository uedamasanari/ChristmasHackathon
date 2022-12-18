import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "../CSS/getmessage.css"
const GetMessage = () => {
    let childid=1;
    let [text,setText] = useState([
        {id:1,present:"スイッチ",forsanta:"一年間いい子にしたので欲しいです。"},
        {id:2,present:"プレステ",forsanta:"モンハンやりたいです"},
        {id:3,present:"ゲーミングPC",forsanta:"APAXやりたいです"},
        {id:4,present:"Mac",forsanta:"ごりごり開発したいです"}
    ])
    const navigation = useNavigate()
    const returnbutton=()=>{
        navigation("/santa")
    }
    return (
        <div className="getmessage">
            <p className="getp">たけし</p>
            <p className="getp30">欲しいプレゼント</p>
            {text.map((child,index)=>(child.id===childid?
                <div className="gettextarea getpresent" key="index">{child.present}</div>:""))}
            <p className="getp30">サンタさんに一言</p>
            {text.map((child,index)=>(child.id===childid?
                <div className="gettextarea gethitokoto" key="index">{child.forsanta}</div>:""))}
            <div className="getreturn">
                <div className="getreturntext" onClick={returnbutton}>戻る</div>
            </div>
        </div>
    );
};

export default GetMessage;