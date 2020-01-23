import React from 'react'
import {
	Redirect
} from 'react-router-dom'
import {requestLoginUser} from "../modules/auth";
import {useDispatch, useSelector} from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

const Login = (props) => {
	const dispatch = useDispatch()
	const { from } = props.location.state || { from: { pathname: '/private/' } }
	const {user} = useSelector(state => state.auth);
    const {token} = useSelector(state => state.localize);

	if (user !== null) {
		return <Redirect to={from} />
	}

	return (
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper kt-page">
            <Header />
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt-wrapper">
                <div className="kt-container kt-grid__item kt-grid__item--fluid kt-grid--hor"
                     style={{
                         maxWidth: "650px"
                     }}
                >
                    <div className="kt-portlet justify-content-lg-center"
                         style={{
                             height: "350px"
                         }}
                    >
                        <div className="kt-portlet__head justify-content-lg-center">
                            <div className="kt-portlet__head-label">
                                <div style={{
                                    fontWeight: "500",
                                    fontSize: "19.5px"
                                }}/>
                                <h3>SWAAP</h3>
                            </div>
                        </div>
                        &nbsp;
                        <div className="kt-form" style={{
                            width: "75%",
                            margin: "2rem auto",
                        }}>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder={token.login_page.username}
                                       name="username"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" placeholder={token.login_page.password}
                                       name="password"/>
                            </div>
                            &nbsp;
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <div className="kt-link kt-link--brand " style={{
                                    paddingTop: "15px"
                                }}>
                                    {token.login_page.forgot_password}
                                </div>
                                <div>
                                    <div className="btn btn-pill btn-outline-brand"
                                         id="kt_login_submit"
                                         onClick={() => props.history.push('/public/signup/')}>
                                        {token.login_page.sign_up}
                                    </div>
                                    &nbsp;
                                    &nbsp;
                                    <div className="btn btn-brand btn-elevate btn-pill"
                                         id="kt_login_submit"
                                         onClick={() => dispatch(requestLoginUser())}>
                                        {token.login_page.sign_in}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login