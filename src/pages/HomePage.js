import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <h1>HomePage</h1>
            <Link to = "/Test"><button>Test 이동하기</button></Link>
        </>
    );
}