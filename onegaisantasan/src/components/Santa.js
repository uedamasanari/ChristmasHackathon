import React from "react";
import { useState } from "react";
import { useModal } from 'react-hooks-use-modal';
import axios from "axios";
import Header from "./Santa/Header"
import ChildRen from "./Santa/ChildRen";
import AddChildButton from "./Santa/AddChildButton";
import bell from './PNG/bell.png';
import tree from './PNG/tree.png';
import santa_tonakai from './PNG/santa_tonakai.png';
import snowman from './PNG/snowman.png';
import "./CSS/Santa.css"
const Santa = () => {
    let [children,setChildren] = useState([
        {id:1,name:"たけし"},
        {id:2,name:"みか"},
        {id:3,name:"さとる"},
        {id:4,name:"はなこ"}
    ])
    const [Modal, open, close, isOpen] = useModal('root',{
        preventScroll: true,
        focusTrapOptions: {
            clickOutsideDeactivates: false,
            onDeactivate: () => {},
          },
      });
    async function getData() {
        try {
          const response = await axios.get(`http://localhost:8888/api/child/${children.id}`);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    }
    getData();
    const openedit=()=>{

    }
    const editname=()=>{

    }
    return (
        <div>
            <Header />
            <div className="allrap">
                <div className="leftside text_align_center">
                    <img alt="bell" className="bell" src={bell} />
                    <img alt="tree" className="tree" src={tree} />
                </div>
                <div className="childrap">
                    {children.map((child,index)=>(
                        <ChildRen child={child} setChildren={setChildren} key={index}/>
                    ))}
                    <AddChildButton />
                    <div>Modal is Open? {isOpen ? 'Yes' : 'No'}</div>
                    <button onClick={open}>OPEN</button>
                    <Modal>
                        <div className="modal">
                            <h1 className="changenametitle">名前の変更</h1>
                            <div><input type="text" value="" /></div>
                            <div><button onClick={editname}>変更</button></div>
                            <div><button onClick={close}>戻る</button></div>
                        </div>
                    </Modal>
                </div>
                <div className="rightside text_align_center">
                    <img alt="santa_tonakai" className="santa_tonakai" src={santa_tonakai} />
                    <img alt="snowman" className="snowman" src={snowman} />
                </div>
            </div>
        </div>
    );
};
export default Santa;