import React, { useState } from "react";
import { HeaderMenuSideNavDiv } from "./style"
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
            <HeaderMenuSideNavDiv width={state} id="HeaderMenuSideNavDiv">
                <a href="#" className="closebtn" onClick={closeMenu}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </HeaderMenuSideNavDiv>
            <button onClick={openMenu}>Abrir</button>
        </>

    )
}