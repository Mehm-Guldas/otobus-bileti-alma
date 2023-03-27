import React, { useState } from "react";
import YolcuBilgisi from "../YolcuBilgisi/YolcuBilgisi";
import "./BiletEkrani.css";
import Koltuk from "./Koltuk";
const Koltuklar = (props) => {
  const { setKoltukSec, sefer } = props;

  const [secilenKoltuk, setSecilenKoltuk] = useState();

  const [yolcuBilgisi, setYolcuBilgisi] = useState({
    ad: "",
    soyad: "",
    email: "",
    kart: "",
    tarih: "",
    cvc: "",
  });

  const satinAl = () => {
    if (
      yolcuBilgisi.ad !== "" &&
      yolcuBilgisi.soyad !== "" &&
      yolcuBilgisi.email !== "" &&
      yolcuBilgisi.kart !== "" &&
      yolcuBilgisi.tarih !== "" &&
      yolcuBilgisi.cvc !== ""
    ) {
      let seferlerTemp = [...props.seferler];

      seferlerTemp.forEach((x) => {
        if (x.id == sefer.id) {
          let seferTmp = x;

          let yeniKoltuklar = [...seferTmp.koltuklar];
          yeniKoltuklar.forEach((y) => {
            let koltuk = y;
            if (koltuk.id == secilenKoltuk.id) {
              koltuk.satinAlindi = 1;
            }
            return koltuk;
          });

          seferTmp.koltuklar = yeniKoltuklar;

          return seferTmp;
        }
        return x;
      });

      props.setSeferler(seferlerTemp);

      //koltugu tum seferlerden guncelle

      alert(
        sefer.firma +
          "\n" +
          "Fiyat: " +
          sefer.fiyat +
          "\n" +
          sefer.nerden +
          "-" +
          sefer.nereye +
          "  " +
          new Date(sefer.tarih).toLocaleDateString() +
          " - " +
          sefer.saat +
          "\n" +
          yolcuBilgisi.ad +
          " " +
          yolcuBilgisi.soyad +
          " isimli yolcu " +
          secilenKoltuk.id +
          " numarali bileti satin almistir\n\n" +
          yolcuBilgisi.email +
          " email adresine bilet bilgileri gonderilmistir."
      );

      setKoltukSec(false);
    } else {
      alert("Bos alan birakilamaz!");
    }
  };

  const onClick = (koltuk) => {
    console.log(sefer, koltuk);
    if (koltuk.id === secilenKoltuk?.id && koltuk?.satinAlindi == 0) {
      setSecilenKoltuk();
    } else if (koltuk?.satinAlindi == 1) {
      alert("Bu koltuk zaten alinmis!");
    } else {
      setSecilenKoltuk(koltuk);
    }
  };

  return (
    <div>
      <div className="koltuklar">
        {sefer.koltuklar.map((x) => (
          <Koltuk
            key={x.id}
            secilenKoltuk={secilenKoltuk}
            onClick={() => onClick(x)}
            koltuk={x}
          />
        ))}
      </div>
      <br />
      {secilenKoltuk !== undefined ? (
        <div>
          <YolcuBilgisi
            yolcuBilgisi={yolcuBilgisi}
            setYolcuBilgisi={setYolcuBilgisi}
          />
          <br />
          <button onClick={() => satinAl()}>Satin Al</button>
        </div>
      ) : null}
    </div>
  );
};

export default Koltuklar;
