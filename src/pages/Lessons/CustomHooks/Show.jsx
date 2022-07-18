import React from 'react'
import {BiDownArrow} from 'react-icons/bi';

const ShowHide = () => {

  return (
    <div style={{display: "flex", textAlign: "center",cursor:"pointer"}}>
      <span style={{color: "var(--color-primary)",paddingTop: "5px",marginRight: "10px"}}>Show</span>
      <div style={{
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      backgroundColor: "#f0f2f5",
      }}><BiDownArrow style={{color: "var(--color-primary)", lineHeight: "15px",marginTop: "8px", fontSize: "14px",parding: "0"}}>
        </BiDownArrow></div>
    </div>
  )
}

export default ShowHide;