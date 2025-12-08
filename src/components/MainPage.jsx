import React, { useEffect } from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import ic_trip from "../assets/img/ic_trip.png";
import ic_ing from "../assets/img/ic_ing.png";
import ic_report from "../assets/img/ic_report.png";
import ic_mypage from "../assets/img/ic_mypage.jpg";
import { setPageTitle  } from "../util.js";

function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setPageTitle("장정익의 출장관리시스템");
  }, []);
  
  return (
    <div className="main">
      <h2>📑 출장 관리 시스템 📑</h2>
      
      <div className="buttons">
      <button onClick={() => navigate("/create-work")}>
      <img src={ic_trip} />  
      <span>출장 생성</span>
      </button>
      <button onClick={() => navigate("/ing-work")}>
      <img src={ic_ing} />  
      <span>진행 중</span>
      </button>
      <button onClick={() => navigate("/report")}>
      <img src={ic_report} />  
      <span>출장 보고서</span>
      </button>
      <button onClick={() => navigate("/ConfirmPage")}>
      <img src={ic_mypage} />  
      <span>⚙️</span>
      </button>
      </div>
    </div>
  );

  }
export default MainPage;
