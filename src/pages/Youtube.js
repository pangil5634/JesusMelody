import YouTube from "react-youtube";

// 유튜브 Link를 Parameter로 받아서 iFrame 형식으로 보여주는 컴포넌트
export default function Youtube({ songLink }) {
    // console.log("songLink", songLink);
    
    const VideoLink = songLink || "https://www.youtube.com/watch?v=a5OajHLAhWM"; // songLink가 없으면 기본값 사용
    const videoId = songLink ? songLink.split("v=")[1] : "a5OajHLAhWM";

    return (
        <YouTube
            key={videoId}
            videoId={videoId}
            opts={{
                width: "854px",
                height: "480px",
                playerVars: {
                    autoplay: 0,
                    modestbranding: 1,
                    loop: 1
                }
            }}
        />
    );
}
