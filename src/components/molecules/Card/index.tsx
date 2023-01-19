import Props from "./interface"
import Image from 'next/image'
import * as theme from '../../../styles/theme'
import { SearchButton } from "../../atoms/SearchButton"
export const Card = ({
    href,
    onclick
}: Props) => {

    return (
        <>
            <style jsx>{`
                #main-container {
                    text-align:center;
                    max-width: 300px;
                    height: 100%;
                    border: 0;
                    flex-basis: 80%;
                    flex-grow: 0;
                    flex-shrink: 0;
                    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
                    border-radius: 5px 5px 5px 5px;
                    background: white;


                }
                hr {
                    width: 100%;
                    border: 1px solid;

                }
                img {
                    // border: 1px solid;
                    width: 300px;
                    height: 230px;

                }

                #info {
                    // border: 1px solid;
                    width: 100%;
                    height: 25%;
                }
            `}</style>

            <div id="main-container">
                <img src="https://picsum.photos/300/230" />
                <br />
                <div id='info'>
                    Info
                </div>

            </div>
        </>
    )

}
