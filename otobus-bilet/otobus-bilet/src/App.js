import logo from "./logo.svg";
import "./App.css";
import BiletEkrani from "./Components/BiletEkrani/BiletEkrani";
import { useState } from "react";
import { data } from "./data";
import AdminEkrani from "./Components/AdminEkrani/AdminEkrani";

function App() {
  const [seferler, setSeferler] = useState(data);
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div>
      <button onClick={() => setShowAdmin(!showAdmin)}>
        {showAdmin == true ? "Bilet Ekrani" : "Admin Paneli"}
      </button>

      {showAdmin == false ? (
        <BiletEkrani seferler={seferler} setSeferler={setSeferler} />
      ) : (
        <AdminEkrani seferler={seferler} setSeferler={setSeferler} setShowAdmin={setShowAdmin} />
      )}
    </div>
  );
}

export default App;
