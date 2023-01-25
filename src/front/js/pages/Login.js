import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {

    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const sendData = (event) => {
        event.preventDefault();
        actions.login(email, password);
    };

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined) {
            navigate("/");
        }
    }, [store.token]);

    const handleClick = () => {
        actions.login(email, password);
    };

    return (
        <React.Fragment>
            <div className="container login w-50 mt-2">
                <h1 className="text-center display-6">LOGIN</h1>
                {!(store.token && store.token != "" && store.token != undefined) && (
                    <div>
                        <form>
                            <div className="mb-3">
                                <label
                                    className="form-label">Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Please entere your email"
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
                                    placeholder="Please enter your password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="login"
                                    className="btn btn-success w-25 me-2"
                                    onClick={handleClick}>
                                    Login
                                </button>
                                <Link to="/signup" className="text-center">
                                    <button
                                        className="btn btn-warning w-25">
                                        Not registered? Signup
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};