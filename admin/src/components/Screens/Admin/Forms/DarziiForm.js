import React, { useEffect, useState } from "react";
import { AreaDropdownBlack } from "../Areas";
import "./Form.css";
import axios from "axios";
import Map from "../../Maps/Map";
import { FaChevronLeft } from "react-icons/fa";
import { AuthContext } from "../../../../context/authContext/AuthContext"
import { useContext } from "react";

const DarziiForm = () => {

  const [DarziCoordinates, setDarziCoordinates] = useState(null);


  const { user } = useContext(AuthContext);


  const accessToken = user.accessToken;
  const [formData, setFormData] = useState({


    tailorId: "",
    userName: "",
    tailorName: "",
    phone: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cinc: "",
    address: "",
    skill: "",
    location: "",

  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/registerDarzi",
        formData,
        {
          headers: {
            token: "Bearer " + accessToken,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('Clicked coordinates:', DarziCoordinates);
  }, [DarziCoordinates])


  return (
    <div className="formCard D">
      <form onSubmit={handleSubmit}>
        <h2> <a href="/darzii/">

          <FaChevronLeft />
        </a>
        </h2>

        <h1>Darzii Registration Form</h1>
        <table>

          <tr>
            <td>
              <label htmlFor="tailorId">Tailor Id</label>
            </td>
            <td>
              <input
                type="text"
                name="tailorId"
                id="tailorId"
                value={formData.tailorId}
                onChange={handleChange}
              />
            </td>

            <td>
              <label htmlFor="userName">UserName</label>
            </td>
            <td>
              <input
                type="text"
                name="userName"
                id="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </td>
          </tr>


          <tr>

            <td>
              <label htmlFor="tailorName">Tailor Name</label>
            </td>
            <td>
              <input
                type="text"
                name="tailorName"
                id="tailorName"
                value={formData.tailorName}
                onChange={handleChange}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="firstName">First Name</label>
            </td>
            <td>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </td>

            <td>
              <label htmlFor="lastName">Last Name</label>
            </td>
            <td>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="email">Email</label>
            </td>
            <td>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </td>
            <td>
              <label htmlFor="password">Password</label>
            </td>
            <td>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="phone">Phone</label>
            </td>
            <td>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </td>
            <td>
              <label htmlFor="cnic">CNIC</label>
            </td>
            <td>
              <input
                type="text"
                name="cnic"
                id="cnic"
                value={formData.cnic}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="address">Address</label>
            </td>
            <td>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />
            </td>
            <td>
              <label htmlFor="skill">Skill</label>
            </td>
            <td>
              <input
                type="text"
                name="skill"
                id="skill"
                value={formData.skill}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="area">Location Selected</label>
            </td>
            <td>
              {DarziCoordinates ? DarziCoordinates.lat.toString() : <></>}<p></p>
              {DarziCoordinates ? DarziCoordinates.lng.toString() : <></>}
            </td>
          </tr>
          <tr>
            <button type="submit">Submit</button>
          </tr>
        </table>

        <Map DarziCoordinates={DarziCoordinates}
          setDarziCoordinates={setDarziCoordinates} />
      </form>
    </div>
  );
};

export default DarziiForm;
