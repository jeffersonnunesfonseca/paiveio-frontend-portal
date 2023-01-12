import React, { useState } from "react";
import { MenuSideNavOption } from "../../atoms/MenuSideNavOption";
import * as theme from '../../../styles/theme'
export const HeaderMenuSideNav = () => {
    const [state, setState] = useState("0");

    const closeMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setState("0")
    };

    const openMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        let newState = state == '0'?'70vw':'0'
        setState(newState)

    };

    return (
        <>
            <style jsx>{`
                div {
                    height: 100vh;
                    width: ${state};
                    position: absolute;
                    z-index: 1;
                    top: 70px;
                    left: 0;
                    background-color: ${theme.mainColors.secondary};
                    overflow-x: hidden;
                    padding-top: 60px;
                    transition: 0.5s;
                }
            `}</style>
            <div>
                <MenuSideNavOption isClose={true} href="#" onclick={closeMenu} text="&times;" />
                <MenuSideNavOption href="#" text="Entrar" />
                <MenuSideNavOption href="#" text="Anunciar" />
                <MenuSideNavOption href="#" text="Contato" />
                <MenuSideNavOption href="#" text="Quem Somos" />
            </div>
            <img onClick={openMenu} src="/icons/icon_menu_hamburguer.png" width={30} />


        </>

    )
}
