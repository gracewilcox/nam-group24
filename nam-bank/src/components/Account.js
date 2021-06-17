import { Button, Menu, MenuItem } from '@material-ui/core';
import { React, useState, useEffect }from 'react';
import './Account.css';
import Card from './Card';
import MOCK_DATA from '../MOCK_DATA.json';


function Account() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [acctNum, setAcctNum] = useState(1);
    const [balance, setBalance] = useState(0);
    const [acctName, setAcctName] = useState("Savings #1");


    useEffect(() => {
        //fetch api here, using mock data for now
        let data = MOCK_DATA[acctNum]
        setBalance(data.balance)
    }, [acctNum])


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleSelect = (accountNum, accountName) => {
        setAnchorEl(null);
        setAcctNum(accountNum);
        setAcctName(accountName)
    };

  return (
    <div >
        <div>
        <Button style={{backgroundColor: "white"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Select Account
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleSelect(acctNum, acctName)}
            >
            <MenuItem onClick={ () => handleSelect(1, "Savings #1")}> Savings #1 </MenuItem>
            <MenuItem onClick={ () => handleSelect(2, "Savings #2")}> Savings #2 </MenuItem>
            <MenuItem onClick={ () => handleSelect(3, "Checking")}> Checking </MenuItem>
        </Menu>
          </div>
          <div class="card">
              <Card />
              </div>
          {/*
        <div>
            <h1>
                {acctName}
            </h1>
        </div>
        <div>
            <h1>
                Current Balance
            </h1>
            <h2>
                ${balance}
            </h2>
          </div>
          */}
    </div>
    
  );
}

export default Account;
