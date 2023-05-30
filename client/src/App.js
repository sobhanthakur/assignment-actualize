import "./style.css";
import * as XLSX from "xlsx";
import axios from "axios";

function App() {
  const handleFileUpload = async (e) => {
    console.log("reading input file:");
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    console.log(jsonData);
    axios
      .post("http://localhost:5000/api/upload", jsonData)
      .then(() => {
        alert("Record uploaded successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };
  return (
    <div className="App">
      <button className="custom-button">
        <input
          id="upload"
          type="file"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={(event) => {
            handleFileUpload(event);
          }}
          onClick={(event) => {
            event.target.value = null;
          }}
        />
      </button>
    </div>
  );
}

export default App;
