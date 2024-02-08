import {Outlet} from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

function Layout() {
    return (
        <ContainerLayout>
            <WrapperLayout>
                <Header/>
                <main  style={{height : "880px"}}>
                    <Outlet />
                </main>
            </WrapperLayout>
        </ContainerLayout>
    );
}

const ContainerLayout = styled.div `
    width : 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const WrapperLayout = styled.div`
    width : 1500px;
    height : 980px;
    background-color: yellow;
`;

export default Layout;