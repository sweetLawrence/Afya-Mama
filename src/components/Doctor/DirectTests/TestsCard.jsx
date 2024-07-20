import React from "react";

const TestsCard = ({ icon, text, openTestModal }) => {
  return (
    <div className="tests-card" onClick={() => openTestModal(text)}>
      {icon}
      {/* <FavoriteIcon style={{color:'#f178ab', fontSize:"2.4em"}}/> */}
      <p>{text}</p>
    </div>
  );
};

export default TestsCard;
