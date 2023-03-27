import React from "react";
import { sehirler } from "../../data";
import "./AdminEkrani.css";
const YeniSeferEkle = (props) => {
  const { yeniSefer, setYeniSefer, onClick } = props;

  return (
    <div className="yeni-sefer-ekle">
      <span className="yeni-sefer-baslik">Firma</span>
      <input
        value={yeniSefer.firma}
        placeholder="firma"
        onChange={(e) => setYeniSefer({ ...yeniSefer, firma: e.target.value })}
      />
      <span className="yeni-sefer-baslik">Firma</span>
      <input
        value={yeniSefer.fiyat}
        placeholder="fiyat"
        onChange={(e) => setYeniSefer({ ...yeniSefer, fiyat: e.target.value })}
      />
      <span className="yeni-sefer-baslik">Saat</span>
      <input
        value={yeniSefer.saat}
        placeholder="saat"
        onChange={(e) => setYeniSefer({ ...yeniSefer, saat: e.target.value })}
      />
      <span className="yeni-sefer-baslik">Nerden</span>
      <select
        placeholder="nerden"
        value={yeniSefer.nerden}
        onChange={(e) =>
          setYeniSefer({
            ...yeniSefer,
            nerden: e.target.value,
          })
        }
      >
        {sehirler.map((x, index) => (
          <option value={x.value} key={index}>
            {x.name}
          </option>
        ))}
      </select>
      <span className="yeni-sefer-baslik">Nereye</span>
      <select
        placeholder="nereye"
        value={yeniSefer.nereye}
        onChange={(e) =>
          setYeniSefer({
            ...yeniSefer,
            nereye: e.target.value,
          })
        }
      >
        {sehirler.map((x, index) => (
          <option value={x.value} key={index}>
            {x.name}
          </option>
        ))}
      </select>
      <span className="yeni-sefer-baslik">Tarih</span>
      <input
        type="date"
        value={yeniSefer.tarih}
        placeholder="tarih"
        onChange={(e) => setYeniSefer({ ...yeniSefer, tarih: e.target.value })}
      />
      <button onClick={onClick}>Ekle</button>
    </div>
  );
};

export default YeniSeferEkle;
