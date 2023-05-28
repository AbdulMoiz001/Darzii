import React, { useContext, useEffect, useState } from "react";
import "./css/Product.css";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../../../context/authContext/AuthContext";
import axios from "axios";
import { useLocation } from "react-router-dom";

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
function EditProduct() {

    const { user } = useContext(AuthContext);
    const accessToken = user.accessToken;


    const location = useLocation();
    const propString = new URLSearchParams(location.search).get('item');
    const o_data = JSON.parse(decodeURIComponent(propString));

    const classes = useStyles();

    const [newItem, setNewItem] = useState();
    const [newItemQuantity, setNewItemQuantity] = useState();
    const [newItemPrice, setNewItemPrice] = useState();

    const [previewImage, setPreviewImage] = useState();
    const [product, setProduct] = useState([]);





    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/product/getproduct/${o_data}`,
                    {
                        headers: {
                            token: "Bearer " + accessToken,
                        },
                    }
                );
                setProduct(res.data);
                setPreviewImage(res.data.image);
                setNewItem(res.data.name);
                setNewItemQuantity(res.data.countInStock);
                setNewItemPrice(res.data.price);
            } catch (err) {
                console.log(err);
            }
        };

        fetchProduct();
    }, []);

    useEffect(() => {
        if (product) {
            setPreviewImage(product.image);
            setNewItem(product.name);
            setNewItemQuantity(product.countInStock);
            setNewItemPrice(product.price);
        }
    }, [product]);


    const UpdateItem = async (e) => {
        e.preventDefault();
        const newItemObject = {
            name: newItem,
            quantity: newItemQuantity,
            price: newItemPrice,
            image: previewImage,
        };


        try {
            const res = await axios.put(
                `http://localhost:5000/product/updateProduct/${o_data}`,
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

    }

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

            {product ?
                (<div className={classes.contentWrapper}>
                    <label htmlFor="upload-photo-input">
                        <input
                            type="file"
                            label="Image"
                            name="myImage"
                            accept=".jpeg,.png,.jpg"
                            onChange={handleImageUpload}
                            value=""
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
                        onClick={(e) => UpdateItem(e)}
                        className={classes.addButton}
                    >
                        Update
                    </Button>
                </div>)
                :
                <></>
            }

        </div>
    );
}

export default EditProduct;
