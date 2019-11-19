import React, { Component } from 'react';
import './Aside.css'
import userImage from '../userImage.png';
import TextField from '@material-ui/core/TextField';
import PrivateMessageBoxx from '../PrivateMessageBox/PrivateMessageBox'
export default class Aside extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                openPrivateBox: false,
                roomNotification: this.props.roomNotification,
                yousername: this.props.username,
                otherUser:''
        
            };
    }

    handleClosePrivateBox = () => {
        this.setState({
            openPrivateBox: false
        })
    }

    handleOpenPrivateBox = (e) => {
        let otherUser = e.currentTarget.dataset.value;
    
        this.setState({
            openPrivateBox: true,
            otherUser:otherUser
        })
    }

    handleSearch = (e) => {

        let currentList = [];

        let newList = [];


        if (e.target.value !== "") {

            currentList = this.props.roomNotification;

            newList = currentList.filter(notification => {

                const lc = notification.sender.split('~')[0].toLowerCase();

                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = this.props.roomNotification;
        }

        this.setState({
            roomNotification: newList
        });
    }

    render() {
        return (
            <aside>
                <div className="vr"></div>
                <TextField
                    id="search full-width"
                    label="Search members"
                    type="search"
                    onChange={this.handleSearch}
                    margin="normal"
                />
                <ul >
                    {this.state.roomNotification.map((notification, i) =>


                        this.state.yousername.toLowerCase().trim() === notification.sender.split('~')[0].toLowerCase().trim()
                            ? ""
                            : <a href = "#"><li key={i} onClick={this.handleOpenPrivateBox} data-value={notification.sender.split('~')[0].toLowerCase().trim()}>

                                <img src={userImage} alt="Default-User" id="userImage" />

                                <div>
                                    <div>
                                        <h2 style={{ textAlign: "left", float: "left" }}>{notification.sender.split('~')[0]}</h2>

                                    </div>
                                    <br />
                                    <h3>
                                        {notification.status === 'online' || notification.status === 'typing...' ? <span className="status green"></span> : <span className="status orange"></span>}
                                        {notification.status}
                                    </h3>

                                    {/* <h3>
                                        <a href="#" style={{ textDecoration: "none", color: "mediumpurple" }}
                                            onClick={this.handleOpenPrivateBox}>Private message</a>
                                    </h3> */}
                                </div>
                            </li></a>
                    )} </ul>

                {this.state.openPrivateBox ?

                    <PrivateMessageBoxx open={this.state.openPrivateBox} handleClose={this.handleClosePrivateBox}
                        notifications={this.props.roomNotification} youser={this.state.yousername} otherUser = {this.state.otherUser} />
                : ""}

            </aside>
        )
    }
}
