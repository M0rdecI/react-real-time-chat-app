import React from 'react'
import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>Detail
        <div className="user">
          <img src="/avatar.png" alt="" />
          <h2>User Name</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="info">

          <div className="option">
            <div className="title">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="arrow-up" />
            </div>
          </div>

          <div className="option">
            <div className="title">
              <span>Privacy & Help</span>
              <img src="./arrowUp.png" alt="arrow-up" />
            </div>
          </div>

          <div className="option">
            <div className="title">
              <span>Shared Photos</span>
              <img src="./arrowDown.png" alt="arrow-up" />
            </div>
          </div>

          <div className="photos">
            <div className="photoItems">
              <div className="photoDetails">
              <img src="https://cdn.pixabay.com/photo/2013/03/12/17/54/hurricane-92968_640.jpg" alt="" className='imgs'/>
              <span>photo_name.jpg</span>
              </div>
              <img src="./download.png" alt="download" className='download' />
            </div>
          </div>
          <div className="photos">
            <div className="photoItems">
              <div className="photoDetails">
              <img src="https://cdn.pixabay.com/photo/2022/08/07/08/32/difference-7370144_640.png" alt="" className='imgs'/>
              <span>photo_name.jpg</span>
              </div>
              <img src="./download.png" alt="download" className='download' />
            </div>
          </div>
          <div className="photos">
            <div className="photoItems">
              <div className="photoDetails">
              <img src="https://cdn.pixabay.com/photo/2013/03/12/17/54/hurricane-92968_640.jpg" alt="" className='imgs'/>
              <span>photo_name.jpg</span>
              </div>
              <img src="./download.png" alt="download" className='download' />
            </div>
          </div>

          <div className="option">
            <div className="title">
              <span>Shared Files</span>
              <img src="./arrowUp.png" alt="arrow-up" />
            </div>
          </div>
          <button>Block User</button>
          <button className='logout'>Log Out</button>
        </div>
    </div>
  )
}

export default Detail