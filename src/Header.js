import { Outlet } from "react-router-dom";

function Header() {
    return (
        <div>
            <div>
                <h1>헤더 영역</h1>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Header;