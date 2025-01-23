import React from 'react'
import './userInfo.css'
const UserInfo = () => {
  return (
    <div className='userInfo'>
        {/* UserInfo */}
        <div className='user'>
          <img src="../../public/avatar.png" alt="" />
          <h2>User Name</h2>
        </div >
        <div className='icons'>
          <img src="../../public/more.png" alt="" />
          <img src="../../public/video.png" alt="" />
          <img src="../../public/edit.png" alt="" />
        </div>
    </div>
  )
}

export default UserInfo