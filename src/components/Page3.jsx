import React, { useState, useEffect, useMemo} from "react";
import "./Page3.css"
import { setPageTitle  } from "../util.js";

function Page3() {
  const [templateFile, setTemplateFile] = useState(null);
  const [templateName, setTemplateName] = useState("");
  const [receipts, setReceipts] = useState([]);
  
  const handleTemplateChange = (e) => {
    const file = e.target.files[0];
    setTemplateFile(file);
  };

  const handleReceiptChange = (e) => {
    const files = Array.from(e.target.files);
    setReceipts(files);
  };

  useEffect(() => {
    if (templateFile) {
      setTemplateName(templateFile.name);
    }
  }, [templateFile]);

  const receiptSummary = useMemo(() => {
    if (receipts.length === 0) return "업로드된 영수증 없음";
    return `${receipts.length}개의 영수증 업로드 완료`;
  }, [receipts]);

   useEffect(() => {
      setPageTitle("출장 보고서 작성");
    }, []);

  return (
    <div className= "page3">
      <h2> 보고서 페이지 📄</h2>
      <div className="temp-upload">
        <h3>보고서 양식 업로드</h3>
        <input type="file"  accept=".doc,.docx,.pdf" onChange={handleTemplateChange} />
        <p>선택된 파일 : {templateName || "없음" }</p> 
      </div>

      <div className="receipt-upload">
        <h3>영수증 업로드</h3>
        <input type="file"  accept="image/*" multiple onChange={handleReceiptChange} />
        <p>{receiptSummary}</p> 
      </div>
      <div className="create-report">
        <button className="report-btn">보고서 생성</button>
      </div>
    </div>
  );
}

export default Page3;