import { MdMoreHoriz } from 'react-icons/md';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { HiOutlineUserPlus } from 'react-icons/hi2';
import Messages from './Messages'; 
import Input from './Input';

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat-info">
                <span>Harsha</span>
                <div className="chat-icons">
                    <HiOutlineUserPlus style={{cursor: "pointer"}} />
                    <HiOutlineVideoCamera style={{cursor: "pointer"}}/>
                    <MdMoreHoriz style={{cursor: "pointer"}}/>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
};

export default Chat;