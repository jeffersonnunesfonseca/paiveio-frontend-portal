import React, { useState } from "react";
import { MenuSideNavOption } from "../../atoms/MenuSideNavOption";
import * as theme from '../../../styles/theme'
import { InputSearch } from "../../molecules/InputSearch";
import { Card } from "../../molecules/Card";
export const GalleryCards = () => {

    return (
        <>
            <style jsx>{`
                .row{
                    align-items: stretch;
                    display: flex;
                    flex-direction: row;
                    overflow-x: auto;
                    overflow-y: hidden;

                    height: 100%;
                    width: 100%;
                    padding: 10px;
                    gap: 10px;

                }
                .card {
                    max-width: 100%;
                    padding: .75rem;
                    margin-bottom: 2rem;
                    border: 0;
                    flex-basis: 80%;
                    flex-grow: 0;
                    flex-shrink: 0;
                }

                .card > img {
                    margin-bottom: .75rem;
                    width: 100%;
                }

                .card-text {
                    font-size: 85%;
                }

            `}</style>

            <div className="row">
                <Card />

                <Card />

                <Card />

            </div>
        </>

    )
}
