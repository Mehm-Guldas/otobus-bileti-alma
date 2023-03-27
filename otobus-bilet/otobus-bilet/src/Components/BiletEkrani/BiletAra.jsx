import React, { useState } from "react";
import { sehirler } from "../../data";
import "./BiletEkrani.css";
const BiletAra = (props) => {
  const { arananSefer, setArananSefer } = props;

  return (
    <div className="bilet-ara">
      <h2>Bilet Ara</h2>
      <select
        placeholder="Nerden"
        value={arananSefer.nerden.value}
        onChange={(e) =>
          setArananSefer({
            ...arananSefer,
            nerden: sehirler.find((x) => x.value == e.target.value),
          })
        }
      >
        {sehirler.map((x, index) => (
          <option value={x.value} key={index}>
            {x.name}
          </option>
        ))}
      </select>
      <select
        placeholder="Nereye"
        value={arananSefer.nereye.value}
        onChange={(e) =>
          setArananSefer({
            ...arananSefer,
            nereye: sehirler.find((x) => x.value == e.target.value),
          })
        }
      >
        {sehirler.map((x, index) => (
          <option value={x.value} key={index}>
            {x.name}
          </option>
        ))}
      </select>
      <input
        type="date"
        placeholder="Tarih"
        value={new Date(arananSefer.tarih).toISOString().substring(0, 10)}
        onChange={(e) =>
          setArananSefer({ ...arananSefer, tarih: e.target.value })
        }
      />
    </div>
  );
};

export default BiletAra;
