import React, { useState } from "react";
import Card from '../../component/card'
import { Carousel } from 'react-carousel-cards-npm'
import Sidebar from "../../component/sidebar";
import KeySkillGrid from "../../component/keySkills/keySkillGrid";

const KeySkills = () => {

    const [count, setCout] = useState("");

    function toHandle() {
        setCout("Updated")
    }
    return (
        <div>
            <Sidebar />
            <div>
                <KeySkillGrid /><br /><br />
            </div>
            {/* {count}
            <div> <button onClick={() => toHandle()}>Click</button></div> */}
            
        </div>
    )
}

export default KeySkills;