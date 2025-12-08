import { useEffect, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmPage.css";
import MainButton from "./MainButton";
import { setPageTitle  } from "../util.js";

function ConfirmPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
 
  useEffect(() => {
    setPageTitle("정보 저장 페이지");
  }, []);

  if (!state) {
    return <div className="confirm">전달된 정보가 없습니다.</div>;
  }

const meetingSummary = useMemo(() => {
    return `${state.meeting.meetingDate} ${state.meeting.meetingTime} @ ${state.meeting.meetingLocation}`;
  }, [state.meeting]);

  const goNext = useCallback(() => {
    navigate("/ing-work", { state });
  }, [navigate, state]);

  return (
    <div className="confirm">
      <MainButton />
      <h2>입력 정보 확인 ✔️</h2>
      <div className="work-info">
         <p> 출장명: {state.tripName}</p>
         <p> 출장지: {state.location}</p>
         <p> 출발일: {state.startDate}</p>
         <p> 도착일: {state.endDate}</p>
         <p> 출장 목적: {state.purpose}</p>
      </div>    
      <div className="meeting-info">
        <h3>미팅 정보</h3>
        {/* <p> 제목: {state.meeting.meetingTitle}</p>
        <p> 날짜: {state.meeting.meetingDate}</p>
        <p> 시간: {state.meeting.meetingTime}</p>
        <p> 장소: {state.meeting.meetingLocation}</p> */}
        <p> 제목 : {state.meeting.meetingTitle}</p>
        <p>{meetingSummary}</p>
      </div>

      <div className="button-area">
         <button onClick={goNext}>다음</button>
      </div>
    </div>
  );
}

export default ConfirmPage;
