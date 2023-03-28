import React, { useState } from "react";
import "./Sidebar.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Home from "../Home/Home";
import SidebarList from "./SidebarList";

const Sidebar = ({theme,changeThem}) => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  const expandClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar?"sidebar-expand sidebar":"sidebar"}>
        <div className="icon-for-sidebar-expand-and-collapse">
          <p onClick={expandClick}>
            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}
          </p>
        </div>

        <SidebarList expandSidebar={expandSidebar}/>
      </div>
      <div className="container">
        <Home changeThem={changeThem} theme={theme}/>
      </div>
    </div>
  );
};

export default Sidebar;
