import React, { useState } from "react";
import { InputSearch } from "../../molecules/InputSearch";
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
                    height: 7vh;
                    display: flex;
                    justify-content: center;
                    align-items: center
                }
            `}</style>

            <div id='search-engine-container'>
                <InputSearch />
            </div>

        </>

    )
}
