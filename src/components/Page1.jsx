import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Page1.css";
import { setPageTitle  } from "../util.js";

function Page1() {
  const navigate = useNavigate();

  const [tripName, setTripName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [purpose, setPurpose] = useState("");

  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [meetingLocation, setMeetingLocation] = useState("");

  const [days, setDays] = useState(0);

  useEffect(() => {
    if (startDate && endDate ) {
      const diff = 
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
      
      setDays(diff);
    }
  },[startDate, endDate])

  const handleSubmit = () => {
    const data = {
      tripName,
      location,
      startDate,
      endDate,
      purpose,
      days,
      meeting: {
        meetingTitle,
        meetingDate,
        meetingTime,
        meetingLocation,
      },
    };
    localStorage.setItem("tripData", JSON.stringify(data));
    navigate("/create-work/confirm", { state: data });
  };

  useEffect(() => {
    setPageTitle("출장 정보 입력");
  }, []);

  return (
    <div className="page1">
      <h2>출장 정보 입력 💼</h2>
      <input type ="date" onChange={(e) => setStartDate(e.target.value)} />
      <input type ="date" onChange={(e) => setEndDate(e.target.value)} />
       {days > 0 && <p>총 {days}일 출장입니다</p>}
      <input placeholder="출장명" onChange={(e) => setTripName(e.target.value)} />
      <input placeholder="출장지" onChange={(e) => setLocation(e.target.value)} />
      <input placeholder="출장 목적" onChange={(e) => setPurpose(e.target.value)} />

      <h3>미팅 정보</h3>
      <input placeholder="미팅 제목" onChange={(e) => setMeetingTitle(e.target.value)} />
      <input type="date" onChange={(e) => setMeetingDate(e.target.value)} />
      <input type="time" onChange={(e) => setMeetingTime(e.target.value)} />
      <input placeholder="미팅 장소" onChange={(e) => setMeetingLocation(e.target.value)} />
      <br/>
      <button onClick={handleSubmit}>입력 완료</button>
    </div>
  );

}

export default Page1;