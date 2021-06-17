import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css';
import AddTransactionDialog from './AddTransactionDialog';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 350,
        height: 300
    },
    bullet: {
        display: 'inline-block',
        margin: '0px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard({ name, number, type, balance }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                {/*acc number is hardcoded for now */}
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Account Number: {number}
        </Typography>
                <div class="space1"></div>
                <Typography variant="h5" component="h2">
                    Account Name: {name}
                </Typography>
                {/*acc type is hardcoded for now */}
                <Typography className={classes.pos} color="textSecondary">
                    Account Type: {type}
        </Typography>
                {/*acc balance is hardcoded for now */}
                <Typography variant="body2" component="p">
                    Balance: ${balance}
                </Typography>
            </CardContent>
            <div class="space"></div>
            <CardActions class="buttons">
                <Button size="small">Add Transaction</Button>
                <Button size="small">Delete Account</Button>
            </CardActions>
        </Card>
    );
}
