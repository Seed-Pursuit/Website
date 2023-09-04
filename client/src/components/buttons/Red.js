import React from 'react';

function Red(props) {
    return (
        <div className="red-code grid bg-[rgb(239,98,108)] rounded-[29px] outline outline-[rgb(34,24,28)] outline-1 outline-offset-[-1px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative min-h-[58px] hover:shadow-2xl hover:-translate-x-2 hover:-translate-y-2 transition duration-300 ease-in-out">
            <div className='p-3'>
                {props.text}
            </div>
        </div>
    );
}

export default Red;
