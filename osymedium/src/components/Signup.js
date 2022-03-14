import React, {Component, useEffect,useState} from "react";
import signuppng from "../images/signup.png";
import { Link,useHistory } from "react-router-dom";
import alertify from "alertifyjs"

import {
    Button,
    Form,
    FormGroup,
    Input,
    Card,
    CardImg,
    CardColumns,

} from "reactstrap";

import * as Axios from 'axios';


function Signup() {
    const history = useHistory();


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    const redirectToLogin = () => {
        history.push('/')
    }

    const signup = ()=>{

        //Input ile set edilen bilgileri API'ye gönderiyor.
        Axios.get("https://osyherokudbapp.herokuapp.com/createUser/"+name+"/"+email+"/"+password,{
            name: name,
            email: email,
            password: password,
        }).then((response)=>{
            if(response) {
                //Her şey doğru girildiyse kayıt başarılı
                alertify.success("Successfully signed up!")
                redirectToLogin()

            }
            else{
                alertify.error("Please check your information")
            }


        })
    }


    const inputPassword = event => {

        setPassword(event.target.value ); //Girilen şifreyi password'e set ediyor
    };
    const inputEmail = event => {
        setEmail(event.target.value ); //Girilen maili mail'e set ediyor
    };
    const inputName = event => {
        setName(event.target.value ); //Girilen adı name'e set ediyor
    };

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

                    <CardImg alt="Card image cap" src={signuppng} top width="500px" />

                    <hr></hr>
                    <Form inline  >
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Input
                                onChange={inputName} //karakteri algılıyor ve set ediyor
                                color="danger"
                                placeholder="Name"
                                type="text"
                                style={{
                                    backgroundColor: "transparent",
                                    borderColor: "#df4759",
                                    boxShadow: "3px 3px 3px 3px #000000",
                                    borderRadius: "15px",
                                    color: "white",
                                }}
                            />
                            <br></br>
                            <Input
                                onChange={inputEmail} //karakteri algılıyor ve set ediyor
                                color="danger"
                                placeholder="Email"
                                type="email"
                                style={{
                                    backgroundColor: "transparent",
                                    borderColor: "#df4759",
                                    boxShadow: "3px 3px 3px 3px #000000",
                                    borderRadius: "15px",
                                    color: "white",
                                }}
                            />
                            <br></br>
                            <Input
                                onChange={inputPassword} //karakteri algılıyor ve set ediyor
                                color="danger"
                                placeholder="Password"
                                type="password"
                                style={{
                                    backgroundColor: "transparent",
                                    borderColor: "#df4759",
                                    boxShadow: "3px 3px 3px 3px #000000",
                                    borderRadius: "15px",
                                    color: "white",
                                }}
                            />
                            <br></br>
                            <Link
                                to="./" //Bir hesabın varsa Login sayfasına gitmeyi sağlıyor
                                style={{
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                Do you have an account?
                            </Link>
                        </FormGroup>
                        <br></br>

                        <hr></hr>
                        <Button
                            color="danger"
                            style={{
                                width: "100%",
                                borderColor: "373737",
                                borderRadius: "15px",
                                color: "white",
                            }}
                            onClick={signup}
                        >
                            SIGNUP
                        </Button>
                    </Form>
                    <br></br>


                </Card>
            </CardColumns>
        </div>
    );

}

export default Signup;
