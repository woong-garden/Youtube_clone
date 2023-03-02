import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContext';

function ChannelInfor({ id, name }) {
    const {youtube} = useYoutubeApi();
    const {error, isLoading, data:url} = useQuery(['channel', id], ()=> youtube.channelImageURL(id), {staleTime: 1000 * 60 * 5});

    return (
        <div className='flex my-4 mb-8 items-center'>
            {isLoading && <div className='w-12 h-12 rounded-full bg-white'></div>}
            {error && <p>something is wrong </p>}
            {url && 
                <img className='w-12 h-12 rounded-full' src={url} alt={name} />
                }
            <p className='text-lg font-medium ml-2'>{name}</p>
        </div>
    );
}

export default ChannelInfor;