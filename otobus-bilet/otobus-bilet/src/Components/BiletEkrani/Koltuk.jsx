import React from "react";
import "./BiletEkrani.css";
const Koltuk = (props) => {
  const { koltuk, onClick, secilenKoltuk } = props;

  return (
    <div
      className="koltuk"
      style={{
        backgroundColor:
          koltuk.satinAlindi == 1
            ? "red"
            : secilenKoltuk?.id == koltuk.id
            ? "gray"
            : "green",
      }}
      onClick={onClick}
    >
      {koltuk.id}
    </div>
  );
};

export default Koltuk;
