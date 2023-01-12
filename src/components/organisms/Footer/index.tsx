import Head from 'next/head';
import * as theme from '../../../styles/theme'
export const Footer = () => {
    return (
        <>
            <style jsx>{`
                footer {
                    background-color: ${theme.mainColors.secondary};
                    width: 100vw;
                    height: 200px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }
            `}</style>
            <footer>

            </footer>
        </>
    )
};
