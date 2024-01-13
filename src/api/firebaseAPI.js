import db from "../firebase";
import { collection, query, getDocs, orderBy } from "firebase/firestore";

export const fetchData = async (collectionName) => {
    try {
        const postsCollection = collection(db, collectionName);
        const q = query(postsCollection, orderBy('songName', 'asc'));
        const querySnapshot = await getDocs(q);

        const dataArray = [];

        querySnapshot.forEach((doc) => {
            // 각 문서의 데이터를 배열에 추가
            dataArray.push(doc.data());
        });

        // 최종적으로 배열 반환
        return dataArray;
    } catch (error) {
        console.error("Error fetching data:", error);
        // 에러 발생 시 빈 배열 또는 다른 적절한 값 반환
        return [];
    }
}
