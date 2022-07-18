import React from 'react'
import { BiUpArrow } from 'react-icons/bi';
import {BiDownArrow} from 'react-icons/bi';

const Example = () => {
  return (
    <div style={{
      display: "flex", textAlign: "center", cursor: "pointer", position: "absolute",
      right: "0px",
      top: "10px"
    }}>
      <span style={{ paddingTop: "5px", marginRight: "10px" }}>Example</span>
      <BiUpArrow style={{ color: "var(--color-primary)", lineHeight: "15px", marginTop: "10px", fontSize: "10px", parding: "0" }}>
        </BiUpArrow>
        <BiDownArrow style={{color: "var(--color-primary)", lineHeight: "15px",marginTop: "10px", fontSize: "10px",parding: "0",display:"none"}}>
        </BiDownArrow>
    </div>
  )
}
export default Example

