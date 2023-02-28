import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../../util/date';
import ChannelInfor from '../ChannelInfor/ChannelInfor';


function VideoCard({ video, type }) {
    const {title, thumbnails, channelTitle, publishedAt, channelId} = video.snippet;
    const navigate = useNavigate();


    const VideoDetail = () => {
        navigate(`/video/watch/${video.id}`, {state: {video}})
    }
    const isList = type === 'list';

    return (
        <li 
            className={isList ? 'flex gap-1 ml-6 cursor-pointer' : 'cursor-pointer'}
            onClick={VideoDetail}>
            <img className={isList ? 'w-60 mr-2 mb-3 rounded-xl' : 'w-full rounded-xl'} src={thumbnails.medium.url} alt={title}/>
            <div className='flex'>
                <ChannelInfor id={channelId}/>
                <div>
                    <p className='font-semibold my-2 line-clamp-2'>{title}</p>
                    <p className='text-sm opacity-80'>{channelTitle}</p>
                    <span>조회수  회 •</span>
                    <span className='text-sm opacity-80'> {formatAgo(publishedAt, 'ko')}</span>
                </div>
                
            </div>
        </li>
    );
}

export default VideoCard;