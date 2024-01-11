import {Link} from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
    return (    
        <div>
            <h1>HomePage</h1>
            <Link to="/Test">
                <DefaultButton>Test 이동하기</DefaultButton>
            </Link>
        </div>
    );
}

const DefaultButton = styled.button`
    width : 100px;
    height : 40px;

    background-color: #5CD1E5;
    color : white;

    border : none;
            
    &:hover {
        background-color: #B2EBF4;
        color : black;
    }
`;