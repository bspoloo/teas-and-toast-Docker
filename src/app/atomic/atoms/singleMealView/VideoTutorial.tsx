import exp from "constants";

type VideoProps = {
    src: string,
    height?: string,
    width?: string
    containerStyle?: string,
    videStyle?: string
}

const VideoTutorial = ({src, containerStyle,videStyle, height, width}: VideoProps) => {
    console.log("src "+ src);
    const videoId = src.split('v=')[1];
    console.log("videoId "+ videoId);
    return (
        <div className={`${containerStyle}`}>
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className={videStyle}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
}

export default VideoTutorial;