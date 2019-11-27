import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import Tracks from "./Tracks";
import {requestSearchTrack, toggleSearch, selectApi} from "../modules/search";
import {updatePlaylistName} from "../modules/playlistManager";
import {detailUser} from "../modules/auth";

const Body = () => {
    const {tracks, isDataAvailable, searchBar, searchValue, api} = useSelector(state => state.search);
    const {playlists, isPlaylistEmpty, progressBar, playlistName} = useSelector(state => state.playlists);
    const {showUserDetails} = useSelector(state => state.auth);
    const {token} = useSelector(state => state.localize);
    const dispatch = useDispatch()

    function getTrackToDisplay(tracks){
        switch (api) {
            case 1:
                return tracks.dataSpotify
            case 2:
                return tracks.dataDeezer
            default:
                return []
        }
    }

    function getPlaylistToDisplay(playlist){
        switch (api) {
            case 1:
                return playlist.map((item) => item.dataSpotify)
            case 2 :
                return playlist.map((item) => item.dataDeezer)
            default :
                return []
        }
    }

    return (
        <div className="kt-container kt-grid__item kt-grid__item--fluid kt-grid--hor" id="kt-content">
            {
            searchBar ? (
                <div className="kt-portlet" role="document">
                    <div className="kt-portlet__head">
                        <div className="kt-portlet__head-label">
                            <h3 className="kt-portlet__head-title">{token.search}</h3>
                        </div>
                        <button type="button" className="close" aria-label="Close"
                                onClick={() => dispatch(toggleSearch())}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="kt-portlet__body">
                        <div className="kt-quick-search kt-quick-search--offcanvas" id="kt_quick_search_offcanvas" >
                            <div className="kt-quick-search__form">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="flaticon2-search-1"/>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control kt-quick-search__input"
                                           placeholder={token.search_placeholder} name="query" value={searchValue}
                                           onChange={event => dispatch(requestSearchTrack(event.target.value))}/>
                                </div>
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
                            {
                                (progressBar > 0 && progressBar < 100) ?
                                    (
                                        <div className="row">
                                            <div className="kt-section"
                                                 style={{
                                                     width: "100%",
                                                 }}
                                            >
                                                <div className="kt-section__content kt-section__content--border">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped kt-bg-brand" role='progressbar'
                                                             style={{
                                                                 width: progressBar + '%',
                                                             }}
                                                             aria-valuenow={progressBar}
                                                             aria-valuemin="0"
                                                             aria-valuemax="100"
                                                        >
                                                            {progressBar | 0}%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                    <div className="row">
                                        {
                                            isDataAvailable ? (
                                                <Tracks items={getTrackToDisplay(tracks)} api={api} isPlaylist={false}/>
                                            ) : (
                                                <div/>
                                            )
                                        }
                                        {
                                            !isPlaylistEmpty ? (
                                                <Tracks items={getPlaylistToDisplay(playlists)} api={api} isPlaylist={true}/>
                                            ) : (
                                                <div/>
                                            )
                                        }
                                    </div>
                                )
                            }
                        <div className="kt-section">
                            <div className="kt-section__info">
                                <div className="kt-quick-search kt-quick-search--offcanvas" id="kt_quick_search_offcanvas" >
                                    <div className="kt-quick-search__form">
                                        <div className="input-group">
                                            <input type="text" className="form-control kt-quick-search__input"
                                                   placeholder={token.playlist_title_placeholder} name="query"
                                                   value={playlistName}
                                                   onChange={(event) => dispatch(updatePlaylistName(event.target.value))}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kt-portlet__foot modal-footer">
                        <button type="button" className="btn btn-outline-brand"
                                onClick={() => dispatch(toggleSearch())}>{token.button_close}</button>
                        <button type="button" className="btn btn-brand">{token.button_save_playlist}</button>
                    </div>
                </div>
            ) : (
                <div/>
            )}
            {showUserDetails ? (
                <div className="kt-offcanvas-panel-overlay"
                     onClick={() => dispatch(detailUser())}
                />
            ) : (
                <div/>
            )}
        </div>
    )
}

export default Body