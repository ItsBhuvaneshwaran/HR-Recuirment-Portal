import React from "react";
import Card from '../../component/card'
import { Carousel } from 'react-carousel-cards-npm'
import Sidebar from "../../component/sidebar";
import DepartmentGrid from "../../component/department/deptGrid";


const Department = () => {
    return (
        <div>
            <Sidebar />
            <div>
                <DepartmentGrid /><br /><br />
            </div>
        </div>
    )
}

export default Department;