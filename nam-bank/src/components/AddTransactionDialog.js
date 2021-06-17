import TextField from '@material-ui/core/TextField';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { React, useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function FormDialog({ onClose, selectedValue, open }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [type, setType] = useState("Deposit");
    const [amount, setAmount] = useState(0);

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    const handleSubmit = () => {
        //setOpen(false);
        {/*need to add code to submit info via API*/ }
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSelect = (type) => {
        setAnchorEl(null);
        setType(type);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To be filled with transaction options like transaction type and amount.
          </DialogContentText>
                    {/*add a menu with two options - deposit and withdrawal*/}
                    <div>
                        <Button style={{ backgroundColor: "white" }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Select Transaction Type
        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={() => handleSelect(type)}
                        >
                            <MenuItem onClick={() => handleSelect("Deposit")}> Deposit </MenuItem>
                            <MenuItem onClick={() => handleSelect("Withdrawal")}> Withdrawal </MenuItem>
                        </Menu>
                    </div>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Transaction Amount"
                        type="number"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}