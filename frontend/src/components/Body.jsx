import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import Tracks from "./Tracks";
import {requestSearchTrack, toggleSearch, selectApi} from "../modules/search";
import Footer from "./Footer";

const Body = () => {
    const {tracks, isDataAvailable, searchBar, searchValue, api} = useSelector(state => state.search);
    const {playlists, isPlaylistEmpty, loadingAddTrack} = useSelector(state => state.playlists);
    const dispatch = useDispatch()

    function getTrack(tracks){
        switch (api) {
            case 1:
                return tracks.dataSpotify
            case 2:
                return tracks.dataDeezer
            default:
                return null
        }
    }

    function getPlaylist(playlist){
        console.log('playlist')
        console.log(playlist)
        switch (api) {
            case 1:
                return playlist.map((item) => item.dataSpotify)
            case 2 :
                return playlist.map((item) => item.dataDeezer)
            default :
                return null
        }
    }

    return (
        <div className="kt-container kt-grid__item kt-grid__item--fluid">
            {
                searchBar ? (
                        <div className="kt-portlet" role="document">
                                <div className="kt-portlet__head">
                                    <div className="kt-portlet__head-label">
                                        <h3 className="kt-portlet__head-title">Search</h3>
                                    </div>
                                    <button type="button" className="close" aria-label="Close"
                                            onClick={() => dispatch(toggleSearch())}>
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="kt-portlet__body">
                                    <div className="kt_offcanvas_toolbar_search kt-scroll ps ps--active-y" >
                                        <div className="kt-offcanvas-panel__body">
                                            <div className="kt-quick-search kt-quick-search--offcanvas" id="kt_quick_search_offcanvas" >
                                                <div className="kt-quick-search__form">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="flaticon2-search-1"/>
                                                            </span>
                                                        </div>
                                                        <input type="text" className="form-control kt-quick-search__input"
                                                               placeholder="Type here..." name="query" value={searchValue}
                                                               onChange={event => dispatch(requestSearchTrack(event.target.value))}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="kt-radio-inline">
                                                        <div className="kt-widget__toolbar">
                                                            &nbsp;
                                                            &nbsp;
                                                            <button className={[
                                                                api === 1 ? 'btn-brand' : 'btn-secondary',
                                                                "btn btn-circle btn-sm btn-icon"
                                                            ].join(' ')}
                                                                    onClick={() => dispatch(selectApi(1))}>
                                                                <i className="socicon-spotify"></i>
                                                            </button>
                                                            &nbsp;
                                                            &nbsp;
                                                            <button className={[
                                                                api === 2 ? 'btn-brand' : 'btn-secondary',
                                                                "btn btn-circle btn-sm btn-icon"
                                                            ].join(' ')}
                                                                    onClick={() => dispatch(selectApi(2))}>
                                                                <i className="socicon-deezer"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">

                                                    {
                                                        !loadingAddTrack ? (
                                                            <div className="kt-container  kt-grid__item kt-grid__item--fluid" >
                                                                <div className="row">
                                                                    {
                                                                        isDataAvailable ? (
                                                                            <Tracks items={getTrack(tracks)} api={api} isPlaylist={false}/>
                                                                        ) : (
                                                                            <div/>
                                                                        )
                                                                    } {
                                                                    !isPlaylistEmpty ? (
                                                                        <Tracks items={getPlaylist(playlists)} api={api} isPlaylist={true}/>
                                                                    ) : (
                                                                        <div/>
                                                                    )
                                                                }
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div/>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-brand" data-dismiss="modal"
                                            onClick={() => dispatch(toggleSearch())}>Close</button>
                                    <button type="button" className="btn btn-brand">Save playlist</button>
                                </div>
                            </div>
                ) : (
                    null
                )
            }
            <Footer />
        </div>
    )
}

export default Body