import React, { useState } from "react";
import { HeaderMenuSideNavDiv } from "./style"
import { MenuSideNavOption } from "../../atoms/MenuSideNavOption";
export const HeaderMenuSideNav = () => {
    const [state, setState] = useState("0");

    const closeMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setState("0px")
    };

    const openMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setState("100vw")
    };

    return (
        <>
            <HeaderMenuSideNavDiv width={state}>
                <MenuSideNavOption isClose={true} href="#" onclick={closeMenu} text="&times;" />
                
                <MenuSideNavOption href="#" text="About" />
                <MenuSideNavOption href="#" text="Services" />
                <MenuSideNavOption href="#" text="Client" />
                <MenuSideNavOption href="#" text="Contact" />
            </HeaderMenuSideNavDiv>
            <button onClick={openMenu}>Abrir</button>
        </>

    )
}