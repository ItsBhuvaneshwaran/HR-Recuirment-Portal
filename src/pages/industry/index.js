import React from "react";
import Card from '../../component/card'
import { Carousel } from 'react-carousel-cards-npm'
import Sidebar from "../../component/sidebar";
import IndustryGrid from "../../component/industry/industryGrid";

const Industry = () => {
    return (
        <div>
            <Sidebar />
            <div className="grid-indus">
                <IndustryGrid /> <br /><br />
            </div>
        </div>
    )
}

export default Industry;