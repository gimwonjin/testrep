import React from 'react';
import FileInput from '../FileInput';

function ReviewFrom(props) {
    return (
        <div>
            <from className='ReviewFrom'>
                <FileInput />
                <input type='text' placeholder='제목을 입력해주세요.'/>
                
            </from>
        </div>
    );
}

export default ReviewFrom;