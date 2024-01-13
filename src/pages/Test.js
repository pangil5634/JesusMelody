import {useEffect, useState} from "react";
import Youtube from "./Youtube";
import db from "../firebase";
import {fetchData} from "../api/firebaseAPI";
import { Button } from "@mui/material";

export default function Test() {
    const [myData, setMyData] = useState();
    const [selectNumber, setSelectNumber] = useState(0);

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            const data = await fetchData("songData");
            setMyData(data);
        };

        fetchDataAndSetState();
        // console.log("myData", myData);
    }, []); // 빈 의존성 배열을 전달하여 컴포넌트가 마운트될 때만 useEffect가 실행되도록 설정

    const selectNumberByButton = (number) => {
        setSelectNumber(number);
    }

    return (
        <div>
            <h1>테스트 페이지입니다.</h1>
            {
                myData && myData.map((data, index) => (
                    <Button onClick = { () => selectNumberByButton(index)} key={index}>{data.songName}</Button>
                ))
            }
            <Youtube songLink={myData ? myData[selectNumber].songLink : null} />
        </div>
    );
}
