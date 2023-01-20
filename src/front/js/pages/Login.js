import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {

    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        };

        fetch("https://3001-4geeksacade-reactflaskh-mj0jhk5kx9a.ws-us83.gitpod.io/api/token", options)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("There was an error")
            })
            .then()
            .catch(error => {
                console.error("There was an error", error)
            })
    };

    return (
        <React.Fragment>
            <div className="container">
                <h1 className="text-center">LOGIN</h1>
                <form>
                    <div className="mb-3">
                        <label
                            className="form-label">Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Please insert your email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            className="form-label">Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Please insert your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button
                        type="login"
                        className="btn btn-success"
                        onClick={handleClick}>
                        Login
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};