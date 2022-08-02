import React, { useState } from "react";
import { SupabaseGateway } from "../gateways/SupaBaseGateway";

const UploadDownload = () => {
  const [url, setUrl] = useState("");
  const download = async () => {
    // Use the JS library to create a bucket.
    try {
      const { data, error } = await SupabaseGateway.sbClient.storage
        //.getBucket("test")
        .from("test")
        .download("Studio1.jpg");
      if (error) throw error;

      setUrl(URL.createObjectURL(data));
    } catch (error) {
      console.log(error);
    }
  };
  const uploadAvatar = async (event) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }
      const file = event.target.files[0];
      //const fileExt = file.name.split(".").pop();
      const fileName = file.name;
      //  const fileName = `${Math.random()}.${fileExt}`;

      const filePath = `${fileName}`;

      let { error: uploadError } = await SupabaseGateway.sbClient.storage
        .from("test")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      //onUpload(filePath);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="form-widget">
      <input type="file" id="single" accept="image/*" onChange={uploadAvatar} />
      <img
        src={url ? url : `https://place-hold.it/180x200`}
        width="180"
        height={"200"}
        alt="IMG"
      />
      <button onClick={() => download()}>Read</button>
    </div>
  );
};
export default UploadDownload;
