import { Button, Menu, MenuItem } from '@material-ui/core';
import { React, useState, useEffect } from 'react';
import './Account.css';
import Card from './Card';
import MOCK_DATA from '../MOCK_DATA.json';


function Account() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [acctNum, setAcctNum] = useState(4729597439765);
    const [balance, setBalance] = useState(2305.43);
    const [acctName, setAcctName] = useState("Checking #1");
    const [acctType, setAcctType] = useState(false);

    const [accounts, setAccounts] = useState([]);



    useEffect(() => {
        //fetch api here, using mock data for now
        fetch('https://snd9r2dic5.execute-api.us-east-1.amazonaws.com/dev/db').then((response) => {
            //setAccounts(response.json());
            response.json().then((data) => {
                setAccounts(data);
                console.log(data)
            });
        })
    }, [])


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSelect = async (accountNum, accountName) => {
        setAnchorEl(null);
        console.log(accounts)

        async function getBalance(num) {
            console.log(num)
            const response = await fetch(`https://snd9r2dic5.execute-api.us-east-1.amazonaws.com/dev/db/${num}`);
            let responseJson = await response.json();
            console.log(responseJson)
            return responseJson;
        }

        let data = await getBalance(accountNum)
        setBalance(data.balance);
        setAcctName(data.name);
        setAcctType(data.is_checking);
        setAcctNum(data.acct_id);
    };

    return (
        <div >
            <div>
                <Button style={{ backgroundColor: "white", marginTop: "20px" }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Select Account
        </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => handleSelect(acctNum, acctName)}
                >
                    {accounts.map((account, acctIndex) => {
                        const { acct_id, balance, is_checking, name } = account;
                        return (
                            <MenuItem onClick={() => handleSelect(acct_id, name)}> {name} ({acct_id}) </MenuItem>
                        )
                    })}
                </Menu>
            </div>
            <div class="card">
                <Card name={acctName} number={acctNum} type={acctType} balance={balance} />
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