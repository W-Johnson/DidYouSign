import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import './Header.scss'
import {Col, Container} from "react-bootstrap";
import AddBtn from "../AddBtn/AddBtn";

export default function Header() {

    return (
        <Container fluid className="App-header">
            <Col className={"app-title"}>
                <HelpOutlineIcon className="App-logo" style={{width: "4em", height: "4em"}}/>
                <h1>Did you sign?</h1>
            </Col>
            <Col >
            <AddBtn/>
            </Col>
        </Container>
    )

}