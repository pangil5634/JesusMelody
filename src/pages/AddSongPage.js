import {useState} from "react";
import styled from "styled-components";

function AddSongPage() {

    // 추가하려고 하는 정보 데이터
    const [songData, setSongData] = useState(
        {songName: '', singerName: '', songURL: ''}
    );

    // 입력 값이 바뀌었을 때 데이터를 수정하는 핸들러
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setSongData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // 추가 버튼이 클릭되었을 때 입력된 내용을 확인하는 핸들러
    const handleAddButtonClick = () => {

        if (!songData.songName || !songData.singerName || !songData.songURL) {
            alert("모든 필드를 채워주세요.");
            return;
        }
        const confirmationMessage = `데이터를 등록하시겠습니까?\n
        노래 제목: ${songData.songName}\n
        가수 이름: ${songData.singerName}\n
        영상 URL: ${songData.songURL}`;

        if (window.confirm(confirmationMessage)) {
            // 여기에 데이터 등록 등의 로직을 추가할 수 있습니다.
            alert("데이터 등록 완료");
            console.log("데이터 등록 완료!");
        } else {
            console.log("데이터 등록 취소");
        }
    };

    return (
        <div>
            <h1>AddSongPage입니다.</h1>
            <InputArea
                songData={songData}
                handleInputChange={handleInputChange}
                handleAddButtonClick={handleAddButtonClick}/>
        </div>
    );
}
export default AddSongPage;

// 입력을 위한 Div 컴포넌트
const InputArea = (e) => {
    return (
        <InputAreaDiv>
            <InputDiv
                title="노래 제목"
                name="songName"
                value={e.songData.songName}
                onChange={e.handleInputChange}
                placeholder="Song Name"/>
            <InputDiv
                title="가수 이름"
                name="singerName"
                value={e.songData.singerName}
                onChange={e.handleInputChange}
                placeholder="Singer Name"/>
            <InputDiv
                title="영상 URL"
                name="songURL"
                value={e.songData.songURL}
                onChange={e.handleInputChange}
                placeholder="Song URL"/>
            <AddButtonDiv handleAddButtonClick={e.handleAddButtonClick}>등록하기</AddButtonDiv>
        </InputAreaDiv>
    );
}

// InputArea 컴포넌트의 Div 스타일
const InputAreaDiv = styled.div `
    width: 700px;
    height: 500px;
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #434141;
    color: white;
`;

// InputArea 컴포넌트 내의 입력을 위한 컴포넌트
const InputDiv = (e) => {
    return (
        <InputDivInner>
            <Label>{e.title}</Label>
            <Input
                type="text"
                name={e.name}
                value={e.value}
                onChange={e.onChange}
                placeholder={e.placeholder}/>
        </InputDivInner>
    );
}

// InputDiv 컴포넌트의 Div 스타일
const InputDivInner = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;

    &:first-child {
        margin: 0px 0px 10px 0px;
    }
    &:last-child {
        margin: 10px 0px 0px 0px;
    }
`;

// InputDiv의 Label 스타일
const Label = styled.label `
    width: 20%;
    height: auto;
    display: flex;
    align-items: center;
    margin: 0%;
    font-size: 20px;
    font-weight: bold;
`;

// InputDiv의 Input 스타일
const Input = styled.input `
    width: 80%;
    height: auto;
    padding: 5px;
    font-size: 20px;
`;

// InputArea 컴포넌트 내의 버튼 컴포넌트
const AddButtonDiv = (e) => {
    return (
        <AddButtonDivInner>
            <AddButton onClick={e.handleAddButtonClick}>등록하기</AddButton>
        </AddButtonDivInner>
    );
}

// AddButtonDiv 컴포넌트의 Div 스타일
const AddButtonDivInner = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

// AddButtonDiv 내에 있는 '등록하기' 버튼 스타일
const AddButton = styled.button `
    width: auto;
    height: 50px;
    padding: 10px 25px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: black;
    border: none;

    &:hover {
        background-color: gray;
        color: black;
    }
`;
