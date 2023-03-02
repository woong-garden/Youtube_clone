import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {BsYoutube,BsSearch} from 'react-icons/bs';

function Navbar(props) {
    const {keyword} = useParams();
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/video/${text}`);
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    useEffect(() => setText(keyword || ''), [keyword])

    return (
        <header className='w-full flex p-4 text-2xl border-zinc-600 mb-4'>
            <Link to='/' className='flex items-center'>
                <BsYoutube className='text-4xl text-brand'/>
                <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
            </Link>
            <form className='w-full flex justify-center' onSubmit={handleSubmit}>
                <input className='w-7/12 p-2 ouline-none bg-black text-gray-50 rounded-l-3xl border border-zinc-600' type="text" placeholder='검색' onChange={handleChange} value={text}/>
                <button className='bg-zinc-600 px-4 rounded-r-3xl'>
                    <BsSearch/>
                </button>
            </form>
        </header>
    );
}

export default Navbar;