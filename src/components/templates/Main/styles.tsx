import styled from 'styled-components';

export const MainGridContainer = styled.div`
    display: grid;
    grid-template-areas:
    'header header header header header header'
    'main main main main main main'
    'footer footer footer footer footer footer';
    gap: 10px;
    background-color: #2196F3;
    padding: 10px;

    // & div{
    //     background-color: rgba(255, 255, 255, 0.8);
    //     text-align: center;
    //     padding: 20px 0;
    //     font-size: 30px;
    // }

`
export const GridHeader = styled.div`grid-area: header;`
export const GridMain = styled.div`grid-area: main;`
export const GridFooter = styled.div`grid-area: footer;`