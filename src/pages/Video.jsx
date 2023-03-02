import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {
    useQuery,
  } from "@tanstack/react-query";
import VideoCard from '../components/VideoCard/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonCard } from '../components/Skeleton/Skeleton';


function Video(props) {
    const {keyword} = useParams();
    const {youtube} = useYoutubeApi();
    const { 
        isLoading, error, data: video
    } = useQuery(['video', keyword], () => youtube.search(keyword), {staleTime: 1000 * 60 * 1})
    
    const [showLoading, setShowLoading] = useState(true);

    //로딩지연시키기
    useEffect(() => {
        let timeoutId;
        timeoutId = setTimeout(() => setShowLoading(false), 1000 * 0.5);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [isLoading]);

    return (
        <>
            {showLoading && <SkeletonCard/>}
            {error && <p>something is wrong </p>}
            {video && 
                <ul className='overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
                    { video.map(video => <VideoCard key={video.id} video={video}/>)}
                </ul>}
        </>
        
    );
}

export default Video;