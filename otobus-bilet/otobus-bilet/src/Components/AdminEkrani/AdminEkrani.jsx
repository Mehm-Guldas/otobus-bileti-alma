import React, { useEffect, useState } from "react";
import YeniSeferEkle from "./YeniSeferEkle";

const AdminEkrani = (props) => {
  const [adminBilgi, setAdminBilgi] = useState({ username: "", password: "" });
  const [yeniSefer, setYeniSefer] = useState({
    id: Math.random(),
    firma: "",
    fiyat: "",
    saat: "",
    nerden: "",
    nereye: "",
    tarih: "",
    koltuklar: [
      { id: 1, satinAlindi: 0 },
      { id: 2, satinAlindi: 0 },
      { id: 3, satinAlindi: 0 },
      { id: 4, satinAlindi: 0 },
      { id: 5, satinAlindi: 0 },
      { id: 6, satinAlindi: 0 },
      { id: 7, satinAlindi: 0 },
      { id: 8, satinAlindi: 0 },
      { id: 9, satinAlindi: 0 },
      { id: 10, satinAlindi: 0 },
      { id: 11, satinAlindi: 0 },
      { id: 12, satinAlindi: 0 },
    ],
  });

  const onSeferEkle = () => {
    if (
      yeniSefer.firma !== "" &&
      yeniSefer.fiyat !== "" &&
      yeniSefer.saat !== "" &&
      yeniSefer.nerden !== "" &&
      yeniSefer.nereye !== "" &&
      yeniSefer.tarih !== ""
    ) {
      props.setSeferler([...props.seferler, yeniSefer]);
      alert("Yeni sefer basariyla eklendi!");
      props.setShowAdmin(false);
    } else {
      alert("Bos alan birakilamaz!");
    }
  };

  useEffect(() => {
    console.log("Yeni SEFER", yeniSefer);
  }, [yeniSefer]);

  return (
    <div>
      {adminBilgi.username == "mehmet" && adminBilgi.password == "1234" ? (
        <div>
          <YeniSeferEkle
            onClick={onSeferEkle}
            setYeniSefer={setYeniSefer}
            yeniSefer={yeniSefer}
          />
        </div>
      ) : (
        <div>
          <input
            value={adminBilgi.username}
            placeholder="username"
            onChange={(e) =>
              setAdminBilgi({ ...adminBilgi, username: e.target.value })
            }
          />
          <input
            value={adminBilgi.password}
            placeholder="password"
            onChange={(e) =>
              setAdminBilgi({ ...adminBilgi, password: e.target.value })
            }
          />
        </div>
      )}
    </div>
  );
};

export default AdminEkrani;
