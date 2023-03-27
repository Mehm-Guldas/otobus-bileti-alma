import React, { useEffect, useState } from "react";
import { sehirler } from "../../data";
import BiletAra from "./BiletAra";
import "./BiletEkrani.css";
import Sefer from "./Sefer";

const BiletEkrani = (props) => {
  const [arananSefer, setArananSefer] = useState({
    nerden: sehirler[3],
    nereye: sehirler[3],
    tarih: new Date(),
  });

  const onClick = (sefer) => {
    console.log(sefer);
  };

  useEffect(() => {
    console.log(arananSefer);
  }, [arananSefer]);

  return (
    <div>
      <BiletAra arananSefer={arananSefer} setArananSefer={setArananSefer} />

      {props.seferler
        .filter(
          (x) =>
            x.nerden == arananSefer.nerden.value &&
            x.nereye == arananSefer.nereye.value &&
            new Date(x.tarih).toLocaleDateString() ==
              new Date(arananSefer.tarih).toLocaleDateString()
        )
        .map((item, index) => (
          <Sefer seferler={props.seferler} setSeferler={props.setSeferler} sefer={item} key={item.id} onClick={() => onClick(item)} />
        ))}
    </div>
  );
};

export default BiletEkrani;
