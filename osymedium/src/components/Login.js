import React, {Component, useEffect,useState} from "react";
import loginpng from "../images/login.png";
import { Link,useHistory } from "react-router-dom";
import alertify from "alertifyjs";

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


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("") //Girilen maili tutacak olan kısım
    const [password, setPassword] = useState("") //Girilen şifreyi tutacak olan kısım



    const redirectToMain = (data) => {
        history.push('/main',{name:data.name,email:data.email,id:data.id}) //Başarılı girişte kullanılacka olan fonksiyon
    }

    const login = ()=>{

        //Input olarak girilen değerleri API'ye gönderip veri var mı yok mu kontrol ediyoruz.
        Axios.get("https://osyherokudbapp.herokuapp.com/getUser/'"+email+"'/'"+password+"'",{
            email: email,
            password: password,
        }).then((response)=>{
            if(response.data.length <=0) {
            //API'den veri gelmiyorsa giriş bilgileri yanlış demektir.
                alertify.error("Please check your information")
            }
            else{

                alertify.success("Successfully logged in!")
                redirectToMain(response.data[0]) //API'den gelen verinin ilki ile Mainscreen'e verileri gönderir.
            }
        })
    }


    const inputPassword = event => {

        setPassword(event.target.value );
    };

    const inputEmail = event => {
        setEmail(event.target.value );
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
                    <CardImg alt="Card image cap" src={loginpng} top width="500px" />

                    <hr></hr>
                    <Form inline  >
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Input
                                onChange={inputEmail} //karakterleri algılıyor ve set ediyor
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
                                onChange={inputPassword} //karakterleri algılıyor ve set ediyor
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
                            <Link //Eğer hesabın yoksa hesap oluşturmak için SignUp sayfasına yönlendiriyor.
                                to="./signup"
                                style={{
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                Don't you have an account?
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
                            onClick={login} //API'den gelen data'nın uzunluğuna göre değerlendirme yapan fonksiyon login
                        >
                            LOGIN
                        </Button>
                    </Form>
                    <br></br>


                </Card>
            </CardColumns>
        </div>
    );

}

export default Login; //App.js'te kullandığımız gibi dışarıdan erişimi sağlıyor.
