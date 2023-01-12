import Props from "./interface"
import * as theme from '../../../styles/theme'
export const ButtonAdvertise = ({
    href,
    onclick
}: Props) => {

    return (
        <>
            <style jsx>{`
            a {
                text-decoration: none;
                font-size: 12px;
                border: solid 2px;
                padding: 5px;
                border-radius: 5px 5px;
                font-weight: 500;
                color: ${theme.fonts.mobile.text.color};
                border-color: ${theme.fonts.mobile.title.color}
            }

            a:hover {
                color: black;
            }

           `}</style>

            <a href={href} onClick={onclick}>Anuncie</a>
        </>
    )

}
