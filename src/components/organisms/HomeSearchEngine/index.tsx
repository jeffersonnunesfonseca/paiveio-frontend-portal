import React, { useState } from "react";
import { MenuSideNavOption } from "../../atoms/MenuSideNavOption";
import * as theme from '../../../styles/theme'
export const HomeSearchEngine = () => {

    return (
        <>
            <style jsx>{`
                #search-engine-container {
                    border: 1px solid;
                    border-radius: 5px 5px 5px;
                    padding: 10px;
                    box-sizing: border-box;
                    width: 80vw;
                    text-align: center;
                    box-shadow: 0px 0px 10px black;
                    height: 7vh;
                    display: flex;
                    justify-content: center;
                    align-items: center
                }
            `}</style>

            <div id='search-engine-container'>
                <span>a</span>
            </div>

        </>

    )
}
