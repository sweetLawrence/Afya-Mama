import React from 'react'


const TestsCard = ({icon, text}) => {
  return (
    <div className='tests-card'>
        {icon}
        {/* <FavoriteIcon style={{color:'#f178ab', fontSize:"2.4em"}}/> */}
        <p>{text}</p>
    </div>
  )
}

export default TestsCard