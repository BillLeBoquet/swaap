import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestLoginUser, logoutUser} from '../modules/auth';
import {requestSearchTrack, toggleSearch} from '../modules/search';
import Tracks from "./Tracks";

const Header = () => {
    const {user, loading} = useSelector(state => state.auth);
    const {searchBar, searchValue, tracks} = useSelector(state => state.search);
    const dispatch = useDispatch()
    return (
        <div id="kt_header" className="kt-header kt-grid__item kt-grid kt-grid--ver  kt-header--fixed ">

            <div className="kt-header__brand   kt-grid__item" id="kt_header_brand">
                Swaap
            </div>

            <button className="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn">
                <i className="la la-close"/>
            </button>
            <div className="kt-header-menu-wrapper kt-grid__item" id="kt_header_menu_wrapper">
                <div id="kt_header_menu" className="kt-header-menu kt-header-menu-mobile ">
                    <ul className="kt-menu__nav ">
                    </ul>
                </div>
            </div>
            <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
                {!searchBar ? (
                    <div className="kt-header__topbar-item kt-header__topbar-item--search">
                        <div className="kt-header__topbar-wrapper" id="kt_offcanvas_toolbar_search_toggler_btn"
                             onClick={() => dispatch(toggleSearch())}>
                            <span className="kt-header__topbar-icon"><i className="flaticon2-search"></i></span>
                        </div>
                    </div>
                ) : (
                    <form className="kt-quick-search__form">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="flaticon2-search-1"/>
                                </span>
                            </div>
                            <input type="text" className="form-control kt-quick-search__input"
                                   placeholder="Type here..." name="query" value={searchValue}
                                   onChange={event => dispatch(requestSearchTrack(event.target.value))}/>
                                   <div className="input-group-append"
                                onClick={() => dispatch(toggleSearch())}>
                                    <span className="input-group-text">
                                        <i className="la la-close kt-quick-search__close"/>
                                     </span>
                                </div>
                        </div>
                    </form>
                )} {loading ? (
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
                {(tracks.dataDeezer.length !== 0) ? (
                    <div>
                        <span>Deezer</span>
                    </div>
                ) : (tracks.dataSpotify.length !== 0) ? (
                    <div>
                        <Tracks items={tracks.dataSpotify}/>
                    </div>
                ) : (
                    <div>
                        <span>Empty</span>
                    </div>)}
            </div>
        </div>
    )
};

export default Header;