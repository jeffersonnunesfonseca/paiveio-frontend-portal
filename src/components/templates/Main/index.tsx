import { Header } from "../../organisms/Header"
import { Footer } from "../../organisms/Footer"
import {MainGridContainer, GridHeader, GridMain, GridFooter} from './styles'
export const Main = () => {

    return (
     
        <>
            <MainGridContainer>
                <GridHeader>
                    <Header />
                </GridHeader>
                <GridMain>
                </GridMain>

                <GridFooter>
                    <Footer />
                </GridFooter>                

            </MainGridContainer>
        
        </>
    )
}





  