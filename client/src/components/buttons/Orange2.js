import React from 'react'

const Orange2 = (props) => {
    return (
        <div>
            <div className="w-[196px] h-[43px] relative">
                <div className="w-[196px] h-[43px] absolute left-[-1px] top-[-1px] rounded-tl-[20px] rounded-br-[20px] bg-[#fb7a5a]" >
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Orange2