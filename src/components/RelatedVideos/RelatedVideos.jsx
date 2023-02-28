import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import VideoCard from '../VideoCard/VideoCard';

function RelatedVideos({ id }) {
    const {youtube} = useYoutubeApi();
    const {error, isLoading, data: video} = useQuery(['related', id], ()=> youtube.relatedVideos(id));

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>something is wrong </p>}
            {video && 
                <ul>
                    { video.map(video => <VideoCard key={video.id} video={video} type='list' />)}
                </ul>}
        </>
    );
}

export default RelatedVideos;