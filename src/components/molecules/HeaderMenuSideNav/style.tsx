import styled from 'styled-components';
// import * as themes from '../../../styles/theme';

interface Props {
    width: string
}

export const HeaderMenuSideNavDiv = styled.div<Props>`
    height: 100%; /* 100% Full-height */
    width: ${(props) => props.width}; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    & a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }
    & a:hover {
        color: #f1f1f1;
    }
    & .closebtn{
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
`;
