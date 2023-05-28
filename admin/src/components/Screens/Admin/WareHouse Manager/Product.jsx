import React, { useContext, useState } from "react";
import "./css/Product.css";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../../../context/authContext/AuthContext";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  productContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  dashboardWrapper: {
    maxWidth: "100%",
    padding: "16px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    marginBottom: "1rem",
    marginLeft: "19rem",
    width: "50%",
  },
  inputRoot: {
    fontSize: "1.2rem",
    padding: "0.6rem",
  },
  labelRoot: {
    fontSize: "1rem",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    marginTop: "16px",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px",
    border: "1px solid #ccc",
    marginBottom: "8px",
  },
  itemImage: {
    maxWidth: "100px",
    maxHeight: "100px",
    marginRight: "16px",
  },
  addButton: {
    marginLeft: "15rem",
    marginTop: "1rem",
    marginBottom: "2rem",
  },
}));

const Product = () => {
  const { user } = useContext(AuthContext);

  const accessToken = user.accessToken;

  const classes = useStyles();
  const [newItem, setNewItem] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");

  const [previewImage, setPreviewImage] = useState(null);

  const handleAddItem = async (e) => {
    e.preventDefault();
    const newItemObject = {
      name: newItem,
      quantity: newItemQuantity,
      price: newItemPrice,
      image: previewImage,
    };

    //_-----------------------------------------API here

    try {
      const res = await axios.post(
        "http://localhost:5000/product/addProduct",
        newItemObject,
        {
          headers: {
            token: "Bearer " + accessToken,
          },
        }
      );
      console.log(res);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }

    console.log(newItemObject);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setPreviewImage(base64);
  };

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

  return (
    <div className="productBox">
      <Typography
        variant="h4"
        className={classes.title}
        style={{ fontSize: "1.7rem", marginLeft: "13rem" }}
      >
        Welcome to the Warehouse Manager Portal
      </Typography>

      <div className={classes.contentWrapper}>
        <label htmlFor="upload-photo-input">
          <input
            type="file"
            label="Image"
            name="myImage"
            accept=".jpeg,.png,.jpg"
            onChange={handleImageUpload}
          />
        </label>

        {previewImage && (
          <img
            src={previewImage}
            alt="Product"
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
              marginRight: "16px",
            }}
          />
        )}

        <TextField
          label="Product Name"
          type="text"
          variant="outlined"
          className={classes.textField}
          InputProps={{
            classes: {
              root: classes.inputRoot,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
            },
          }}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <TextField
          label="Quantity"
          type="number"
          variant="outlined"
          className={classes.textField}
          InputProps={{
            classes: {
              root: classes.inputRoot,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
            },
          }}
          value={newItemQuantity}
          onChange={(e) => setNewItemQuantity(parseInt(e.target.value))}
        />

        <TextField
          label="Price"
          type="number"
          variant="outlined"
          className={classes.textField}
          InputProps={{
            classes: {
              root: classes.inputRoot,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
            },
          }}
          value={newItemPrice}
          onChange={(e) => setNewItemPrice(parseInt(e.target.value))}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={(e) => handleAddItem(e)}
          className={classes.addButton}
        >
          Add Items
        </Button>
      </div>
    </div>
  );
};

export default Product;
