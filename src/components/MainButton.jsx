import React from "react";
import { useNavigate } from "react-router-dom";

function MainButton() {
  const navigate = useNavigate();

  return (
    <button className="home-btn" onClick={() => navigate("/")} >  
     🏠
    </button>
  );
}

export default MainButton;