import { MdOutlineAttachFile } from 'react-icons/md';
import { LuImagePlus } from 'react-icons/lu';
import { LuSend } from 'react-icons/lu';

const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Type Message" />
            <div className="send">
                <MdOutlineAttachFile style={{cursor: 'pointer'}}/>
                <input type="file" id="file" style={{ display: 'none' }} />
                <label htmlFor="file">
                    <LuImagePlus style={{cursor: 'pointer'}} />
                </label>
                <button><span>Send <LuSend /></span></button>
            </div>
        </div>
    )
};

export default Input;