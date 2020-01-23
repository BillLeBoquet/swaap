import React from 'react'
import {requestLoginUser} from "../modules/auth";
import {useDispatch, useSelector} from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

const SignUp = (props) => {
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.localize);
    const {avatar} = useSelector(state => state.auth);

    return (
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper kt-page" id="kt-wrapper">
            <Header/>
            <div className="kt-container  kt-grid__item kt-grid__item--fluid kt-grid--hor">
                <div className="kt-portlet">
                    <div className="kt-portlet__body">
                        <div id="kt_user_form">
                            <div className="tab-content kt-margin-t-20 kt-margin-b-20">
                                <div className="tab-pane active" id="kt_users_edit_tab_1" role="tabpanel">
                                    <div className="kt-form kt-form--label-right">
                                        <div className="kt-form__body">
                                            <div className="kt-section kt-section--first">
                                                <div className="kt-section__body">
                                                    <div className="row">
                                                        <label className="col-xl-3"></label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <h3 className="kt-section__title kt-section__title-sm">
                                                                {token.login_page.sign_up}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label
                                                            className="col-xl-3 col-lg-3 col-form-label">Avatar</label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <div
                                                                className="kt-avatar kt-avatar--outline kt-avatar--circle-"
                                                                id="kt_user_avatar">
                                                                <div className="kt-avatar__holder"
                                                                     style={{
                                                                         backgroundImage: `url(${avatar})`
                                                                     }}>
                                                                </div>
                                                                <label className="kt-avatar__upload"
                                                                       data-toggle="kt-tooltip" title=""
                                                                       data-original-title="Change avatar">
                                                                    <i className="fa fa-pen"></i>
                                                                    <input type="file" name="profile_avatar"
                                                                           accept=".png, .jpg, .jpeg"/>
                                                                </label>
                                                                <span className="kt-avatar__cancel"
                                                                      data-toggle="kt-tooltip"
                                                                      title="" data-original-title="Cancel avatar">
                                                                    <i className="fa fa-times"/>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-lg-3 col-form-label">
                                                            UserName</label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <input className="form-control" type="text"
                                                                   value=""/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-lg-3 col-form-label">
                                                            Password
                                                        </label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <input className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-9 col-xl-6">
                                                            <h3 className="kt-section__title kt-section__title-sm">
                                                                Personnal informations :
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-lg-3 col-form-label">First
                                                            Name</label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <input className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-lg-3 col-form-label">Last
                                                            Name</label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <input className="form-control" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-lg-3 col-form-label">
                                                            Email Address</label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="la la-at"/>
                                                                    </span>
                                                                </div>
                                                                <input type="text" className="form-control"
                                                                       placeholder="Email"
                                                                       aria-describedby="basic-addon1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kt-portlet__foot">
                        <div className="btn btn-brand">
                            {token.login_page.sign_up}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SignUp