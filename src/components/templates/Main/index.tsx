import { Header } from "../../organisms/Header"
import { Footer } from "../../organisms/Footer"
import { HomeSearchEngine } from "../../organisms/HomeSearchEngine"
import { GalleryCards } from "../../organisms/GalleryCards"
import * as theme from '../../../styles/theme'
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
                    width: 100vw;
                    height: 200px;
                }

                #item2 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100vw;
                    height: 350px;
                    background-color: ${theme.mainColors.principal}
                }

                #item3 {
                    background-color: blue;
                    width: 100vw;
                    height: 200px;
                }
                .subitle {
                    padding-top: 10px;
                    color: ${theme.fonts.mobile.subtitle.color};
                    font-size: ${theme.fonts.mobile.subtitle.fontSize};
                    letter-spacing: ${theme.fonts.mobile.subtitle.letterSpacing};
                    font-weight: ${theme.fonts.mobile.subtitle.fontWeight};
                }
                .title {
                    padding-bottom: 10px;
                    color: ${theme.fonts.mobile.title.color};
                    font-size: ${theme.fonts.mobile.title.fontSize};
                    letter-spacing: ${theme.fonts.mobile.title.letterSpacing};
                    font-weight: ${theme.fonts.mobile.title.fontWeight};
                }
            `}</style>
            <MainGridContainer>
                <GridHeader>
                    <Header />
                </GridHeader>
                <GridMain>
                    <div id="body-containers">
                        <div id="item1">
                           <span className="title">Busque o produto que deseja</span>
                           <HomeSearchEngine />
                        </div>
                        <div id="item2">
                            <span className="subitle">Categorias mais buscadas</span>
                            <GalleryCards />
                        </div>
                        {/* <div id="item3">a</div> */}
                    </div>
                </GridMain>

                <GridFooter>
                    <Footer />
                </GridFooter>

            </MainGridContainer>

        </>
    )
}





