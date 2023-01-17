import Props from "./interface"
import * as theme from '../../../styles/theme'
import { SearchButton } from "../../atoms/SearchButton"
export const InputSearch = ({
    href,
    onclick
}: Props) => {

    return (
        <>
            <style jsx>{`
            input {
                width: 100%;
                width: 100%;
                height: 100%;
                border: 0;

            }

            input:focus{
                outline: none;
            }




           `}</style>

            <SearchButton/>
            <input type="search" placeholder="Encontre um produto."/>
        </>
    )

}
