

import Props from "./interface";

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
                color: #818181;
                display: block;
                transition: 0.3s;
                right: 25px;
                position: ${isClose?'absolute':'none'};
                top: ${isClose?'0':'none'}px;
                font-size: ${isClose?'36':'20'}px;
                margin-left: ${isClose?'50':'none'}px;            
            }
            
            a:hover {
                color: #f1f1f1;
            }           
           
           `}</style>
            <a href={href} onClick={onclick}>{text}</a>
        </>
    )
    
}