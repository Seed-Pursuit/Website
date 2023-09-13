import React from 'react'

const GoToTop = () => {
  return (
    <div>
      <div className="BackToTop w-44 h-40 left-[1273px] top-[573px] absolute shadow flex-col justify-center items-center inline-flex">
        <div className="Plant w-44 h-36 relative shadow-inner flex-col justify-start items-start flex">
          <img className="Plant w-44 h-36" src="https://via.placeholder.com/173x150" alt='logo'/>
        </div>
        <div className="BackToTop w-20 h-4 text-center text-red-400 text-xs font-normal font-['Poppins']">Back to Top</div>
      </div>
    </div>
  )
}

export default GoToTop