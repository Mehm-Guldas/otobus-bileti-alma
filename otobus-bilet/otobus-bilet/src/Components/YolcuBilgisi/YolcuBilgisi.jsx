import React, { useState } from "react";
import "./YolcuBilgisi.css";

const YolcuBilgisi = (props) => {
  const { yolcuBilgisi, setYolcuBilgisi } = props;

  return (
    <div className="yolcu-bilgisi">
      <input
        value={yolcuBilgisi.ad}
        placeholder="ad"
        onChange={(e) =>
          setYolcuBilgisi({ ...yolcuBilgisi, ad: e.target.value })
        }
      />

      <input
        value={yolcuBilgisi.soyad}
        placeholder="soyad"
        onChange={(e) =>
          setYolcuBilgisi({ ...yolcuBilgisi, soyad: e.target.value })
        }
      />

      <input
        value={yolcuBilgisi.email}
        placeholder="email"
        onChange={(e) =>
          setYolcuBilgisi({ ...yolcuBilgisi, email: e.target.value })
        }
      />

      <input
        value={yolcuBilgisi.kart}
        placeholder="kart"
        onChange={(e) =>
          setYolcuBilgisi({ ...yolcuBilgisi, kart: e.target.value })
        }
      />

      <input
        value={yolcuBilgisi.tarih}
        placeholder="son kullanma tarihi"
        onChange={(e) =>
          setYolcuBilgisi({ ...yolcuBilgisi, tarih: e.target.value })
        }
      />

      <input
        value={yolcuBilgisi.cvc}
        placeholder="cvc"
        onChange={(e) =>
          setYolcuBilgisi({ ...yolcuBilgisi, cvc: e.target.value })
        }
      />
    </div>
  );
};

export default YolcuBilgisi;
