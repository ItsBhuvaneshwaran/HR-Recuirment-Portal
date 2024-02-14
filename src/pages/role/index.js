import React from "react";
import Card from '../../component/card'
import { Carousel } from 'react-carousel-cards-npm'
import Sidebar from "../../component/sidebar";
import RoleGrid from "../../component/role/roleGrid";

const Role = () => {
    return (
        <div>
            <Sidebar />
            <div>
                <RoleGrid /><br /><br />
            </div>
        </div>
    )
}

export default Role;