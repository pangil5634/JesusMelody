import {Link} from "react-router-dom";
import styled from "styled-components";
import SectionArea from "./Components/Layout/SectionArea";

export default function HomePage() {
    return (
        <SectionArea>
            <span>HomePage</span>
            <Div>
                <Link to="/Test">
                    <DefaultButton>Test 이동하기</DefaultButton>
                </Link>
                <Link to="/AddSong">
                    <DefaultButton>노래 추가하러 가기</DefaultButton>
                </Link>
            </Div>
        </SectionArea>
    );
}

const Div = styled.div `
    display: flex;
`;
const DefaultButton = styled.button `
    width : 150px;
    height : 40px;

    background-color: #5CD1E5;
    color : white;

    border : none;
            
    &:hover {
        background-color: #B2EBF4;
        color : black;
    }
    margin : 0px 10px;  
    box-sizing: border-box;
`;
