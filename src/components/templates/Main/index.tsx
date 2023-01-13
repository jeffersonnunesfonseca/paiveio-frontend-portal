import { Header } from "../../organisms/Header"
import { Footer } from "../../organisms/Footer"
import { HomeSearchEngine } from "../../organisms/HomeSearchEngine"
import {MainGridContainer, GridHeader, GridMain, GridFooter} from './styles'
export const Main = () => {

    return (

        <>
            <style jsx >{`
                #body-containers {
                    display: flex;
                    flex-direction: column;

                }

                #item1 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: lime;
                    width: 100vw;
                    height: 200px;
                }

                #item2 {
                    background-color: yellow;
                    width: 100vw;
                    height: 200px;
                }

                #item3 {
                    background-color: blue;
                    width: 100vw;
                    height: 200px;
                }
            `}</style>
            <MainGridContainer>
                <GridHeader>
                    <Header />
                </GridHeader>
                <GridMain>
                    <div id="body-containers">
                        <div id="item1">
                           <HomeSearchEngine />
                        </div>
                        <div id="item2">a</div>
                        <div id="item3">a</div>
                    </div>
                </GridMain>

                <GridFooter>
                    <Footer />
                </GridFooter>

            </MainGridContainer>

        </>
    )
}





