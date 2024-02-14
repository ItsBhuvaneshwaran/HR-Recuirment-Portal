import React from "react";
import Card from '../../component/card'
import { Carousel } from 'react-carousel-cards-npm'
import Sidebar from "../../component/sidebar";
import DesignGrid from "../../component/designation/designGrid";

const Designation = () => {
    return (
        <div>
            <Sidebar />
            <div>
                <DesignGrid /><br /><br />
            </div>
        </div>
    )
}

export default Designation;