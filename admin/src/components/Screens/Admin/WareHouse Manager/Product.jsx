import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemSecondaryAction, ListItemText, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CloudUploadOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    dashboardWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(4),
        width: '80%',
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(4),
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
    addButton: {
        marginTop: theme.spacing(2),
    },
}));

const Product = () => {
    const classes = useStyles();
    const [newItem, setNewItem] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState(1);
    const [newItemProductId, setNewItemProductId] = useState('');
    const [newItemPrice, setNewItemPrice] = useState(0);
    const [updateIndex, setUpdateIndex] = useState(-1);

    const [clothingItems, setClothingItems] = useState([]);
    const [newItemImage, setNewItemImage] = useState(null);
    const [previewImage] = useState(null);

    const handleAddItem = () => {
        const newItemObject = {
            name: newItem,
            quantity: newItemQuantity,
            productId: newItemProductId,
            price: newItemPrice,
            image: newItemImage,
        };
        setClothingItems([...clothingItems, newItemObject]);
        setNewItem('');
        setNewItemQuantity(1);
        setNewItemProductId('');
        setNewItemPrice(0);
        setNewItemImage(null);
    };

    useEffect(() => {
        // Retrieve clothing items from local storage when the component mounts
        const storedItems = localStorage.getItem('clothingItems');
        if (storedItems) {
            setClothingItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        // Store clothing items in local storage whenever it changes
        localStorage.setItem('clothingItems', JSON.stringify(clothingItems));
    }, [clothingItems]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageDataURL = reader.result;
                setNewItemImage(imageDataURL);
            };
            reader.readAsDataURL(file);
        } else {
            // Handle invalid file selection
            alert('Please select a valid image file (JPEG or PNG).');
            // Reset the file input
            e.target.value = null;
        }
    };

    const handleDeleteItem = (index) => {
        setClothingItems([...clothingItems.slice(0, index), ...clothingItems.slice(index + 1)]);
    };

    const handleUpdateItem = () => {
        const updatedItemObject = {
            name: newItem,
            quantity: newItemQuantity,
            productId: newItemProductId,
            price: newItemPrice,
            image: newItemImage,
        };
        setClothingItems([...clothingItems.slice(0, updateIndex), updatedItemObject, ...clothingItems.slice(updateIndex + 1)]);
        setNewItem('');
        setNewItemQuantity(1);
        setNewItemProductId('');
        setNewItemPrice(0);
        setNewItemImage(null);
        setUpdateIndex(-1);
    };

    return (

        <div className='warehouseBox'>

            <div className={classes.dashboardWrapper}>
                <Typography variant="h4">Welcome to the Warehouse Manager Portal</Typography>
                <Typography variant="h4">Clothing Items</Typography>
                <div className={classes.contentWrapper}>
                    <TextField
                        label="Product ID"
                        variant="outlined"
                        className={classes.textField}
                        value={newItemProductId}
                        onChange={(e) => setNewItemProductId(e.target.value)}
                    />
                    <TextField
                        label="Product Name"
                        variant="outlined"
                        className={classes.textField}
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                    <TextField
                        label="Quantity"
                        type="number"
                        variant="outlined"
                        className={classes.textField}
                        value={newItemQuantity}
                        onChange={(e) => setNewItemQuantity(parseInt(e.target.value))}
                    />
                    <TextField
                        label="Price"
                        type="number"
                        variant="outlined"
                        className={classes.textField}
                        value={newItemPrice}
                        onChange={(e) => setNewItemPrice(parseInt(e.target.value))}
                    />

                    <input
                        accept="image/jpeg, image/png"
                        style={{ display: 'none' }}
                        id="upload-photo-input"
                        type="file"
                        onChange={handleImageChange}
                    />

                    <label htmlFor="upload-photo-input">
                        <Button
                            variant="contained"
                            color="default"
                            component="span"
                            startIcon={<CloudUploadOutlined />}
                            className={classes.addButton}
                        >
                            Upload Photo
                        </Button>
                    </label>

                    {previewImage && (
                        <img
                            src={previewImage}
                            alt="Product"
                            style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '16px' }}
                        />
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={updateIndex !== -1 ? handleUpdateItem : handleAddItem}
                        className={classes.addButton}
                    >
                        {updateIndex !== -1 ? 'Update Item' : 'Add Item'}
                    </Button>

                    <List className={classes.list}>
                        {clothingItems.map((item, index) => (
                            <ListItem key={index}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt="Product"
                                            style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '16px' }}
                                        />
                                    )}
                                    <ListItemText
                                        primary={item.name + ' - ' + item.quantity}
                                        secondary={'Product ID: ' + item.productId + ' | Price: ' + item.price}
                                        primaryTypographyProps={{ noWrap: true }}
                                        secondaryTypographyProps={{ noWrap: true }}
                                    />
                                </div>
                                <ListItemSecondaryAction>
                                    <Button color="primary" onClick={() => setUpdateIndex(index)}>
                                        Update
                                    </Button>
                                    <Button color="secondary" onClick={() => handleDeleteItem(index)}>
                                        Delete
                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        </div>
    );
};

export default Product;