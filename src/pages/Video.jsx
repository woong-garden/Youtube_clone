import React from 'react';
import { useParams } from 'react-router-dom';
import {
    useQuery,
  } from "@tanstack/react-query";
import VideoCard from '../components/VideoCard/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';


function Video(props) {
    const {keyword} = useParams();
    const {youtube} = useYoutubeApi();
    const { 
        isLoading, error, data: video
    } = useQuery(['video', keyword], () => youtube.search(keyword), {staleTime: 1000 * 60 * 1})
    

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>something is wrong </p>}
            {video && 
                <ul className='overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
                    { video.map(video => <VideoCard key={video.id} video={video}/>)}
                </ul>}
        </>
        
    );
}

export default Video;