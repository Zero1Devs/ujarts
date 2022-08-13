import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import Title from "../../../components/Title";
import FrontOfHouseLayOut from "../../../layouts/FrontOfHouseLayOut";
const Scan_Qr_Code = () => {
  const [data, setData] = useState("No result");

  return (
    <FrontOfHouseLayOut>
      <Title width="300px">Guest List</Title>
      <h3 border="2px solid blue">{data}</h3>
      <div style={{ width: "50%" }}>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
        />
      </div>
    </FrontOfHouseLayOut>
  );
};
export default Scan_Qr_Code;
