import React, { Component } from "react";

import mainscreenpng from "../images/mainscreen.png";
import { useLocation } from "react-router-dom";
import {
    Form,
    FormGroup,
    Input,
    Card,
    CardImg,
    CardColumns,

} from "reactstrap";
import reactDom from "react-dom";


function Mainscreen () {

    const location = useLocation(); //history.push() ile gönderilen
    //state bilgilerini görebilmemizi sağlıyor.


    return (
        <div
            style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "30%",
            }}
        >
            <CardColumns>
                <Card
                    body
                    inverse
                    style={{
                        backgroundColor: "#1e1e1e",
                        borderColor: "373737",
                        boxShadow: "3px 3px 3px 3px #000000",
                        borderRadius: "15px",
                    }}
                >
                    <CardImg alt="Card image cap" src={mainscreenpng} top width="500px" />

                    <hr></hr>
                    <Form inline textAlign="center" >
                        <FormGroup
                            className="mb-2 me-sm-2 mb-sm-0"
                            style={{
                                textAlign: "center",
                            }}
                        >
                            <Input

                                color="danger"
                                id="userAnswer"
                                name="userAnswer"
                                placeholder={location.state.name} //state içerisinden name'i alıyor
                                type="text"
                                style={{
                                    textAlign: "center",
                                    backgroundColor: "transparent",
                                    borderColor: "#df4759",
                                    boxShadow: "3px 3px 3px 3px #000000",
                                    borderRadius: "15px",
                                    color: "white",
                                }}
                                disabled
                            />
                            <br></br>
                            <Input

                                color="danger"
                                id="userAnswer"
                                name="userAnswer"
                                placeholder={location.state.email} //state içerisinden maili alıyor
                                type="text"
                                style={{
                                    textAlign: "center",
                                    backgroundColor: "transparent",
                                    borderColor: "#df4759",
                                    boxShadow: "3px 3px 3px 3px #000000",
                                    borderRadius: "15px",
                                    color: "white",
                                }}
                                disabled
                            />
                            <br></br>
                            <Input

                                color="danger"
                                id="userAnswer"
                                name="userAnswer"
                                placeholder={location.state.id} //state içerisinden id'yi alıyor
                                type="text"
                                style={{
                                    textAlign: "center",
                                    backgroundColor: "transparent",
                                    borderColor: "#df4759",
                                    boxShadow: "3px 3px 3px 3px #000000",
                                    borderRadius: "15px",
                                    color: "white",
                                }}
                                disabled
                            />
                            <br></br>

                        </FormGroup>
                        <br></br>


                        <hr></hr>

                    </Form>
                    <br></br>
                </Card>
            </CardColumns>
        </div>
    );

}

export default Mainscreen;
