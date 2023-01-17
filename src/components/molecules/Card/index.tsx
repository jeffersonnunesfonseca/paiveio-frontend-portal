import Props from "./interface"
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
                    border: 1px solid;
                    border-radius: 5px 5px 5px;
                    box-sizing: border-box;
                    width: 300px;
                    text-align: center;
                    height: 300px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
            `}</style>

            <div id="main-container">
                <div>
                    Images
                </div>
                <div>
                    Info
                </div>

            </div>
        </>
    )

}
