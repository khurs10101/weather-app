import React from "react";
import '../App.css'
import { SidebarData } from "../data/SidebarData";
import MenuItems from "./MenuItem";

export default () => {
    return (<div className="sidebar">
        {
            SidebarData.map((val, idx) => <MenuItems key={idx} data={val} />)
        }
    </div>)
}