import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import ChannelInfor from "../components/ChannelInfor/ChannelInfor";
import RelatedVideos from "../components/RelatedVideos/RelatedVideos";
import { formatAgo } from "../util/date";

function VideoDetail(props) {
    const {
    state: { video },
    } = useLocation();

    const { title, channelId, channelTitle, publishedAt, description } =
    video.snippet;

    useEffect(() => {
        console.log("CALL THE API...")
      },[]);

    return (
        <section className="flex flex-col lg:flex-row">
            <article className="basis-4/6">
                <iframe
                    id="player"
                    type="text/html"
                    width="100%"
                    height="640"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameborder="0"
                    title={title}
                />
                <div className="py-5">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <ChannelInfor id={channelId} name={channelTitle} />
                    <div className="bg-black/50	p-3 text-black rounded-xl">
                        {/* <span>조회수 {video.statistics.viewCount}회</span> */}
                        <span>  </span>
                        <span>{formatAgo(publishedAt, "ko")}</span>
                        <pre className="whitespace-pre-wrap">{description}</pre>
                    </div>
                    
                </div>
            </article>
            <section className="basis-2/6">
                <RelatedVideos id={video.id} />
            </section>
        </section>
    );
}

export default VideoDetail;
