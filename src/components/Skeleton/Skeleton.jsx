import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./skeleton.css";

//스켈레톤 ui
export function SkeletonCard() {
    return (
        <ul className='overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {Array.from({ length: 20 }).map((_, index) => (
            <li>
              <div className=" bg-zinc-900 rounded-lg shadow-md">
                <Skeleton className='skeleton-img' height={180} />
                <div className="mt-4 flex">
                    <div>
                        <Skeleton className='skeleton-channel-img'/>
                    </div>
                    <div className=' skeleton-text-wrap'>
                        <Skeleton className='skeleton-text' height={20}/>
                        <Skeleton className='skeleton-text' height={20}/>
                    </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
    );
}