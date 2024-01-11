import {Button} from "@mui/material";
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

const DefaultButton = styled(Button)`
    background-color: #5CD1E5;
    color : white;
            
    &:hover {
        color : black;
        background-color: #B2EBF4;
    }
`;