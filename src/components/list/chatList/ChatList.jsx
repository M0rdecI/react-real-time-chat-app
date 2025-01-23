import React, { useState } from 'react';
import './chatList.css';
import AddUser from './addUser/AddUser';

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);

    return (
        <div className='chatList'>
            ChatList
            <div className='search'>
                <div className="searchBar">
                    <img src="/search.png" alt="search-image" />
                    <input type="search" placeholder='Search' />
                </div>
                <img src={addMode ? "/minus.png" : "/plus.png"} 
                alt="" className='add' onClick={() => setAddMode((prev) => !prev)}
                />
            </div>
            <div className="item">
                <img src="/avatar.png" alt="" className='img'/>
                <div className="texts">
                    <span className='name'>User Name</span>
                    <p className='mesage'>Message Typed</p>
                </div>
                <p className='time'>Time</p>
            </div>
            {addMode && <AddUser />}
            {/* <AddUser /> */}
        </div>
    );
}

export default ChatList;