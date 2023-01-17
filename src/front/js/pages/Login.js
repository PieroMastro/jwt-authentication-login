import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {

    const { store, actions } = useContext(Context);
    const { email, setEmail } = useState("");
    const { password, setPassword } = useState("");

    return (
        <React.Fragment>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label
                            for="exampleInputEmail1" className="form-label">Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Please insert your email"
                            value={email}
                            onChange={() => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            for="exampleInputPassword1" className="form-label">Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Please insert your password"
                            value={password}
                            onChange={() => setPassword(e.target.value)}
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