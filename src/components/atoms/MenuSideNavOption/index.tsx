import Props from "./interface";
import * as theme from '../../../styles/theme'
export const MenuSideNavOption = ({
    isClose,
    href,
    text,
    onclick
}: Props) => {

    return (
        <>
            <style jsx>{`
            a {
                padding: 8px 8px 8px 32px;
                text-decoration: none;
                color: #ffff;
                display: block;
                transition: 0.3s;
                right: 25px;
                position: ${isClose?'absolute':'none'};
                top: ${isClose?'0':'none'}px;
                font-size: ${!isClose?theme.fonts.mobile.subtitle.fontSize:theme.fonts.mobile.title.fontSize};
                letter-spacing: ${theme.fonts.mobile.subtitle.letterSpacing};
                font-weight: ${theme.fonts.mobile.subtitle.fontWeight};
                margin-left: ${isClose?'50':'none'}px;
            }

            a:hover {
                color: black;
            }

           `}</style>

            <a href={href} onClick={onclick}>{text}</a>
        </>
    )

}
