import React, { useState, useRef, useEffect } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [txt, setTxt] = useState("");

  const emojiPickerRef = useRef(null); // Ref for the emoji picker
  const emojiButtonRef = useRef(null); // Ref for the emoji button

  // Close the emoji picker if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        emojiPickerRef.current && 
        !emojiPickerRef.current.contains(e.target) && 
        emojiButtonRef.current && 
        !emojiButtonRef.current.contains(e.target)
      ) {
        setEmojiOpen(false);  // Close picker when clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up on unmount
    };
  }, []);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [txt]);

  const handleEmojiClick = (e) => {
    setTxt((prev) => prev + e.emoji); // Append emoji to the text
  };

  return (
    <div className='chat'>
        {/* Chat-Header */}
        <div className="chat-header">
          <div className="chat-header-left">
            <img src="/avatar.png" alt="" className='chat-header-avatar'/>
            <div className="texts">
              <span className='chat-header-name'>User Name</span>
              <p className='chat-header-status'>Lorem ipsum, dolor sit amet consectetur.</p>
            </div>
          </div>
          {/* Icons */}
          <div className="chat-header-right"> 
            <img src="/phone.png" alt="" className='chat-header-icon'/>
            <img src="/video.png" alt="" className='chat-header-icon'/>
            <img src="/info.png" alt="" className='chat-header-icon'/>
          </div>
        </div>

        {/* Chat-Body */}
        <div className="chat-body">

          <div className="chat-body-message sent">
            <div className="chat-body-message-text">
              <p className='chat-body-message-content'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorem vel, dolorum eos quo sint quis officiis ratione id harum! 
                Neque maiores eaque quaerat consectetur consequuntur ea voluptas, 
                ducimus dolor delectus?
              </p>
              <span className='chat-body-message-time'>10:30 AM</span>
            </div>
          </div>

          <div className="chat-body-message received">
            <img src="/avatar.png" alt="" className='chat-body-message-avatar'/>
            <div className="chat-body-message-text">
              <p className='chat-body-message-content'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorem vel, dolorum eos quo sint quis officiis ratione id harum! 
                Neque maiores eaque quaerat consectetur consequuntur ea voluptas, 
                ducimus dolor delectus?
              </p>
              <span className='chat-body-message-time'>10:32 AM</span>
            </div>  
          </div>

          <div className="chat-body-message sent">
            <div className="chat-body-message-text">
              <p className='chat-body-message-content'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorem vel, dolorum eos quo sint quis officiis ratione id harum! 
                Neque maiores eaque quaerat consectetur consequuntur ea voluptas, 
                ducimus dolor delectus?
              </p>
              <span className='chat-body-message-time'>10:30 AM</span>
            </div>
          </div>

          <div className="chat-body-message received">
            <img src="/avatar.png" alt="" className='chat-body-message-avatar'/>
            <div className="chat-body-message-text">
              <p className='chat-body-message-content'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorem vel, dolorum eos quo sint quis officiis ratione id harum! 
                Neque maiores eaque quaerat consectetur consequuntur ea voluptas, 
                ducimus dolor delectus?
              </p>
              <span className='chat-body-message-time'>10:32 AM</span>
            </div>  
          </div>

          <div className="chat-body-message sent">
            <div className="chat-body-message-text">
              <img src="/bg.jpg" alt="" />
              <p className='chat-body-message-content'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorem vel, dolorum eos quo sint quis officiis ratione id harum! 
                Neque maiores eaque quaerat consectetur consequuntur ea voluptas, 
                ducimus dolor delectus?
              </p>
              <span className='chat-body-message-time'>10:37 AM</span>
            </div>
          </div>
          <div ref={endRef}></div>
        </div>

        {/* Chat-Footer */}
        <div className="chat-footer">
          <div className="chat-footer-icon-container">
            <img src="/img.png" alt="" />
            <img src="/camera.png" alt="" />
            <img src="/mic.png" alt="" />
            <img src="/attachment.png" alt="" />
          </div>
          <input 
            type="text" 
            value={txt} 
            placeholder="Type a message..." 
            onChange={e => setTxt(e.target.value)} 
          />
          <div className="emoji">
            <img 
              ref={emojiButtonRef} 
              src="/emoji.png" 
              alt="emoji" 
              onClick={() => setEmojiOpen((prev) => !prev)} 
            />
            <div className="emoji-picker" ref={emojiPickerRef}>
              {emojiOpen && <EmojiPicker onEmojiClick={handleEmojiClick} />}
            </div>
          </div>
          <button className='sendBtn'>Send</button>
        </div>
    </div>
  );
}

export default Chat;
