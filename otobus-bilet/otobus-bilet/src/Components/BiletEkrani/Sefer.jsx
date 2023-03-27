import React, { useState } from "react";
import "./BiletEkrani.css";
import Koltuklar from "./Koltuklar";

const Sefer = (props) => {
  const { onClick, sefer } = props;

  const [koltukSec, setKoltukSec] = useState(false);

  return (
    <div onClick={onClick} className="sefer-item">
      <h1>
        {sefer.nerden} - {sefer.nereye}
      </h1>
      <h2>{sefer.firma}</h2>
      <h2>
        {new Date(sefer.tarih).toLocaleDateString()} - {sefer.saat}
      </h2>

      {koltukSec == true ? (
        <Koltuklar
          seferler={props.seferler}
          setSeferler={props.setSeferler}
          sefer={sefer}
          setKoltukSec={setKoltukSec}
        />
      ) : (
        <button
          onClick={() => {
            setKoltukSec(true);
          }}
        >
          Koltuk Sec
        </button>
      )}
    </div>
  );
};

export default Sefer;
