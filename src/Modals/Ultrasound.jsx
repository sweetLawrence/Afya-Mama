import React, { useState } from "react";
import axiosInstance from "../utils/axios";
import axios from "axios";
import calculateGestationalAgeAndTrimester from "../utils/calculate";
import { Toaster, toast } from "sonner";

const Ultrasound = ({ setUltrasound, patient }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const { trimester, weeks } = calculateGestationalAgeAndTrimester(
    patient?.lmp,
    patient?.date_of_birth
  );

  const date_obj = new Date();
  const today_date = `${date_obj.getFullYear()}-${String(
    date_obj.getMonth() + 1
  ).padStart(2, "0")}-${String(date_obj.getDate()).padStart(2, "0")}`;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (image) {
      try {
        // Create a new FormData object and append the image file
        const formData = new FormData();
        formData.append("ultrasound_image", image); // "file" should be the correct key for your API

        // Make the POST request with the FormData
        const response = await axios.post(
          "https://offering.pockethost.io/api/collections/Ultrasound/records",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const { collectionId, id, ultrasound_image } = response.data;
        const ultrasound_image_url = `https://offering.pockethost.io/api/files/${collectionId}/${id}/${ultrasound_image}`;
        console.log(ultrasound_image_url);

        const final_transmission = {
          patientId: patient?.id,
          url: ultrasound_image_url,
          trimester,
          week: weeks,
          date: today_date,
        };
        const saveUrlResponse = await axiosInstance.post(
          "/patients/ultrasound",
          final_transmission
        );
        console.log(saveUrlResponse);
        if (saveUrlResponse.status === 200) {
          toast.success("Ultrasound Image Uploaded Successfully");
          setImage(null);
          setPreview(null);
          setUltrasound(false);
        }

        //     console.log(response);
        //     alert("Image uploaded successfully!");
        //
      } catch (error) {}
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <div className="d-modal ultrasound">
      <div className="modal-content">
        <h3>Upload Ultrasound Image</h3>
        <p>
          {patient?.first_name} {patient?.last_name}
        </p>
        <div className="input-box">
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Ultrasound Preview" />
          </div>
        )}
        <button onClick={handleUpload}>Upload</button>
      </div>
      <Toaster richColors position="bottom-center" />
    </div>
  );
};

export default Ultrasound;
