import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import MainButton from "./MainButton";
import { setPageTitle  } from "../util.js";

function Page2() {
  const { state } = useLocation();
  const savedData = JSON.parse(localStorage.getItem("tripData"));
 
  const data = state || savedData;

      useEffect(() => {
      setPageTitle("진행 중인 출장");
    }, []);

  if (!data) return <div>입력 데이터가 없습니다</div>;
 


  return (
    <div className="ing-work">
      <MainButton />
      <h2>진행 중인 출장 정보</h2>

      <p>출장명: {data.tripName}</p>
      <p>출장지: {data.location}</p>
      <p>기간: {data.startDate} ~ {data.endDate} (총 {data.days}일)</p>
      <p>목적: {data.purpose}</p>

      <h3>미팅 정보</h3>
      <p>제목: {data.meeting.meetingTitle}</p>
      <p>날짜: {data.meeting.meetingDate}</p>
      <p>시간: {data.meeting.meetingTime}</p>
      <p>장소: {data.meeting.meetingLocation}</p>
    </div>
  );
}
export default Page2;