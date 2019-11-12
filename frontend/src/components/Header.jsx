import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestLoginUser, logoutUser} from '../modules/auth';
import {toggleSearch} from '../modules/search';

const Header = () => {
    const {user, loading} = useSelector(state => state.auth);
    const dispatch = useDispatch()

    return (
        <div id="kt_header" className="kt-header kt-grid__item kt-grid kt-grid--ver  kt-header--fixed ">
            <div className="kt-header__brand   kt-grid__item" id="kt_header_brand">

            </div>
            <div className="kt-header-menu-wrapper kt-grid__item" id="kt_header_menu_wrapper">
                <div id="kt_header_menu" className="kt-header-menu kt-header-menu-mobile ">
                    <ul className="kt-menu__nav ">
                    </ul>
                </div>
            </div>
            <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
                <div className="kt-header__topbar-item kt-header__topbar-item--search">
                    <div className="kt-header__topbar-wrapper" id="kt_offcanvas_toolbar_search_toggler_btn"
                         onClick={() => dispatch(toggleSearch())}>
                        <span className="kt-header__topbar-icon"><i className="flaticon2-add-1"></i></span>
                    </div>
                </div>
                { loading ? (
                    <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
                        <div className="kt-header__topbar-item kt-header__topbar-item--user"
                             id="kt_offcanvas_toolbar_profile_toggler_btn">
                            <div className="kt-header__topbar-username">
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : user ? (
                    <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
                        <div className="kt-header__topbar-item kt-header__topbar-item--user"
                             onClick={() => dispatch(logoutUser())}
                             id="kt_offcanvas_toolbar_profile_toggler_btn">
                            <div className="kt-header__topbar-welcome">
                                Hi,
                            </div>
                            <div className="kt-header__topbar-username">
                                {user.name}
                            </div>
                            <div className="kt-header__topbar-wrapper">
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
                        <div className="kt-header__topbar-item kt-header__topbar-item--user"
                             onClick={() => dispatch(requestLoginUser())}
                             id="kt_offcanvas_toolbar_profile_toggler_btn">
                            <div className="kt-header__topbar-username">
                                <i className="fa fa-sign-in-alt"/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Header;