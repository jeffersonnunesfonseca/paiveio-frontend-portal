import styled from 'styled-components';

export const MainGridContainer = styled.div`
    display: grid;
    grid-template-areas:
    'header header header header header header'
    'main main main main main main'
    'footer footer footer footer footer footer';
    gap: 10px;
    padding: 10px;
`
export const GridHeader = styled.div`grid-area: header;`
export const GridMain = styled.div`grid-area: main;`
export const GridFooter = styled.div`grid-area: footer;`
