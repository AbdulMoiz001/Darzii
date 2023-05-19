import React from "react";
import "./Profile.css";
import Map from "../components/Maps/Map.jsx"
import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";


const Profile = ({ tailor }) => {

  const [price, setPrice] = useState(tailor.price);
  const [description, setDescription] = useState(tailor.description);

  const accessToken = tailor.accessToken;




  const AddPrice = async () => {
    try {
      console.log(tailor)
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


  return (


    <div className="tailor-card">
      <div className="tailor-info">
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

        <div class="input-box-describe">
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

        <div class="input-box">
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
