import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./Elements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="features" onClick={toggle}>
              Features
            </SidebarLink>
            <SidebarLink to="Experience" onClick={toggle}>
              Experience
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle}>
              About Us
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to="/doctors" onClick={toggle}>
              List Doctors
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle}>
              About Us
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
