import Header from "./Santa/Header"
import AddName from "./Santa/AddName"
import bell from './PNG/bell.png';
import tree from './PNG/tree.png';
import santa_tonakai from './PNG/santa_tonakai.png';
import snowman from './PNG/snowman.png';
import "./CSS/Santa.css"
const ChildAdd = () => {
    return (
        <div>
            <Header />
            <div className="allrap">
                <div className="leftside text_align_center">
                    <img alt="bell" className="bell" src={bell} />
                    <img alt="tree" className="tree" src={tree} />
                </div>
                <div className="childrap">
                    <AddName />
                </div>
                <div className="rightside text_align_center">
                    <img alt="santa_tonakai" className="santa_tonakai" src={santa_tonakai} />
                    <img alt="snowman" className="snowman" src={snowman} />
                </div>
            </div>
        </div>
    );
};

export default ChildAdd;