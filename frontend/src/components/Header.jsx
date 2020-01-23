import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestLoginUser, detailUser} from '../modules/auth';
import {toggleSearch} from '../modules/search';
import {changeLocale} from "../modules/localize";

const Header = () => {
    const {user, loading, avatar} = useSelector(state => state.auth);
    const {token, flag} = useSelector(state => state.localize);
    const dispatch = useDispatch()

    return (
        <div id="kt_header" className="kt-header kt-grid__item kt-grid kt-grid--ver  kt-header--fixed " style={{
            zIndex: '1051'
        }}>
            <div className="kt-header__brand kt-grid__item" id="kt_header_brand">
                <div>
                    <img alt="Logo" src="/dist/assets/media/logos/logo-1.png"/>
                </div>
            </div>
            <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
                { user ?
                    (
                        <div className="kt-header__topbar-item kt-header__topbar-item--search">
                            <div className="kt-header__topbar-wrapper" id="kt_offcanvas_toolbar_search_toggler_btn"
                                 onClick={() => dispatch(toggleSearch())}>
                                <span className="kt-header__topbar-icon"><i className="flaticon2-add-1"/></span>
                            </div>
                        </div>
                    ) : (
                        <div/>
                    )
                }
                <div className="kt-header__topbar-item kt-header__topbar-item--langs">
                    <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px"
                         aria-expanded="false">
                        <span className="kt-header__topbar-icon">
                            <img alt={flag} src={flag}/>
                        </span>
                    </div>
                    <div
                        className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround"
                        x-placement="bottom-end"
                        style={{
                            position: 'absolute',
                            transform: 'translate3d(-126px, 76px, 0px)',
                            top: '0px',
                            left: '0px',
                            willChange: 'transform',
                        }}>
                        <ul className="kt-nav kt-margin-t-10 kt-margin-b-10">
                            <li className="kt-nav__item kt-nav__item--active">
                                <div className="kt-nav__link" onClick={() => dispatch(changeLocale(1))}>
                                    <span className="kt-nav__link-icon"><img
                                        src="/dist/assets/media/flags/019-france.svg"
                                        alt={token.french}/></span>
                                    <span className="kt-nav__link-text">{token.french}</span>
                                </div>
                            </li>
                            <li className="kt-nav__item">
                                <div className="kt-nav__link" onClick={() => dispatch(changeLocale(2))}>
                                    <span className="kt-nav__link-icon"><img
                                        src="/dist/assets/media/flags/020-flag.svg"
                                        alt={token.english}/></span>
                                    <span className="kt-nav__link-text">{token.english}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
                    { loading ? (
                        <div className="kt-header__topbar-item kt-header__topbar-item--user"
                             id="kt_offcanvas_toolbar_profile_toggler_btn">
                            <div className="kt-header__topbar-username">
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only"/>
                                </div>
                            </div>
                        </div>
                    ) : user ? (
                        <div className="kt-header__topbar-item kt-header__topbar-item--user"
                             id="kt_offcanvas_toolbar_profile_toggler_btn">
                            <div className="kt-header__topbar-welcome">
                                {token.hi}
                            </div>
                            <div className="kt-header__topbar-username">
                                {user.pseudo}
                            </div>
                            <div className="kt-header__topbar-wrapper"
                                onClick={() => dispatch(detailUser())}>
                                <img alt="Pic" src={avatar}/>
                            </div>
                        </div>
                    ) : (
                        <div/>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Header;