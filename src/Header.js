import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <Container>
            <HeaderArea>
                <FirstDiv>
                    <Div width="10%"><Link to = "/">로고</Link></Div>
                    <Div>검색</Div>
                </FirstDiv>
                <SecondDiv>메뉴 리스트</SecondDiv>
            </HeaderArea>

            <BodyArea>
                <Outlet/>
            </BodyArea>
        </Container>
    );
}

const Container = styled.div `
    width : 100vw;
    height : 100vh;

    background-color: black;

    padding : 3vw;
    box-sizing: border-box;
`

const HeaderArea = styled.div `
    width : 100%;
    height : 10%;

    margin : 0;

    background-color: red;

    display: flex;
    flex-direction : column;

`;
const BodyArea = styled.div `
    width :100%;
    height : 90%;

    margin : 0;

    background-color: orange;
`;

const Div = styled.div`
    width: ${(props) => (props.width || "")};
    /* background-color: green; */
`


const FirstDiv = styled.div`
    width : 100%;
    height : 60%;
    background-color: skyblue;

    display: flex;

`
const SecondDiv = styled.div`
    height : 40%;
    background-color: pink;
`
export default Header;