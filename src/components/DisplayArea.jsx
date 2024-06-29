    import React from 'react'
    import "../styles/dashboard.css";

    const DisplayArea = ({selectedComponent}) => {
        console.log(selectedComponent)
    return (
        <div className='display-area'>{selectedComponent}</div>
    )
    }

    export default DisplayArea