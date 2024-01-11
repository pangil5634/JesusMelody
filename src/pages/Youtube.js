import YouTube from "react-youtube";

export default function Youtube() {
    const VideoLink = "https://www.youtube.com/watch?v=ZXh5CS-pwXU"; // 동영상의 URL
    const videoId = VideoLink.split("v=")[1];
    return (
        <YouTube
            key={videoId}
            videoId={videoId}
            opts={{
                width: "854px",
                height: "480px",
                playerVars: {
                    autoplay: 1,
                    modestbranding: 1,
                    loop: 1,
                }
            }}/>
    );
}