import React from "react";
import "./Profile.css";
import Map from "../components/Maps/Map.jsx"
import { useState } from "react";
import axios from "axios"

const Profile = ({ tailor }) => {

  const [price, setPrice] = useState(tailor.price);
  const [description, setDescription] = useState(tailor.description);
  const [selectedImage, setSelectedImage] = useState(tailor.image);
  const accessToken = tailor.accessToken;




  const AddPrice = async () => {

    try {
      const res = await axios.put(
        `http://localhost:5000/darzi/setPrice/${tailor._id}`,
        {
          price: price, // Replace with the desired price value
        },
        {
          headers: {
            token: "Bearer " + accessToken,
          },
        }
      );
      console.log('Price set successfully:', res.data.price);
      setPrice(res.data.price);
      tailor.price = res.data.price;

      console.log(res.data.price)
      localStorage.setItem("tailor", JSON.stringify(tailor));

    } catch (error) {
      console.error('Error setting price:', error);
    }

  }

  const AddDescription = async () => {

    try {
      const res = await axios.put(
        `http://localhost:5000/darzi/setDescription/${tailor._id}`,
        {
          description: description, // Replace with the desired price value
        },
        {
          headers: {
            token: "Bearer " + accessToken,
          },
        }
      );
      console.log('Price set successfully:', res.data.description);
      setDescription(res.data.description);
      tailor.description = res.data.description;

      localStorage.setItem("tailor", JSON.stringify(tailor));

    } catch (error) {
      console.error('Error setting description:', error);
    }
  }
  const uploadPic = async () => {

    try {
      const res = await axios.put(
        `http://localhost:5000/darzi/uploadPic/${tailor._id}`,
        {
          image: selectedImage,
        },
        {
          headers: {
            token: "Bearer " + accessToken,
          },
        }
      );
      console.log('Image set successfully:', res);
      setSelectedImage(res.data.image);
      tailor.image = res.data.image;
      console.log(res.data);


      localStorage.setItem("tailor", JSON.stringify(tailor));

    } catch (error) {
      console.error('Error setting description:', error);
    }
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file)
    setSelectedImage(base64);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedImage) {
      uploadPic();
    }
  }

  return (


    <div className="tailor-card">
      <div className="tailor-info">
        <img
          width={"250px"}
          src={selectedImage}
        />

        <div className="tailor-info">
          <form onSubmit={handleSubmit}>
            <input type="file"
              label="Image"
              name="myImage"
              accept=".jpeg,.png,.jpg"
              onChange={handleImageUpload} />
            <button type="submit">Upload</button>
          </form>
        </div>
        <h2>{tailor.firstName}</h2>
        <p>
          <span>Contact:</span> {tailor.phone}
        </p>
        <p>
          <span>Name:</span> {tailor.firstName} {tailor.lastName}
        </p>
        <p>
          <span>Email:</span> {tailor.email}
        </p>
        <p>
          <span>CINC:</span> {tailor.cnic}
        </p>
        <p>
          <span>Address:</span> {tailor.address}
        </p>
        <p>
          <span>Skill:</span> {tailor.skill}
        </p>

        <div className="input-box-describe">
          <textarea type="text" id="my-input"
            placeholder="Description"
            value={description}
            onChange={(e) => { setDescription(e.target.value) }} />
          <button onClick={AddDescription}>Add Description</button>
        </div>
        <div className="foot-note">
          * For any information update contact the Admin at +923155546431
        </div>
      </div>

      <div className="tailor-info">

        <div className="input-box">
          <input type="text" id="my-input" placeholder="SetPrice"
            value={price}
            onChange={(e) => { setPrice(e.target.value) }} />
          <button onClick={AddPrice}>Add Price</button>
        </div>

        <Map tlat={tailor.lat} tlng={tailor.lng} />

      </div>
    </div>
  );
};

export default Profile;
