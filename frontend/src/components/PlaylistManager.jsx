import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import Tracks from "./Tracks";
import {requestSearchTrack, toggleSearch, selectApi, resetSearch} from "../modules/search";
import {resetPlaylist, saveNewPlaylist, updatePlaylistName} from "../modules/playlistManager";

const PlaylistManager = () => {
    const {tracks, searchBar, searchValue, api} = useSelector(state => state.search)
    const {playlists, progressBar, playlistName, playlistImage, playlistId, trackCorrelation} = useSelector(state => state.playlists)
    const {user} = useSelector(state => state.auth);
    const {token} = useSelector(state => state.localize)
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
        <div className={[
            searchBar ? 'show' : '',
            "modal fade"
        ].join(' ')}
             role="dialog" aria-modal="true"
             style={{
                 display: "block",
                 zIndex: !searchBar ? "-1" : "1050",
             }}>
            <div className="modal-dialog modal-xl" role="document" style={{
                top: '10%'
            }}>
                <div className="modal-content" style={{
                    maxHeight: '620px'
                }}>
                    <div className="kt-portlet">
                        <div className="kt-portlet__head">
                            <div className="kt-portlet__head-label">
                                <h1 className="kt-portlet__head-title">{token.search}</h1>
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
                            <div className="form-group" style={{
                                marginBottom: '-1rem'
                            }}>
                                <div className="kt-radio-inline">
                                    <div className="btn-toolbar justify-content-between">
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
                                        <button type="button" className="btn btn-outline-info"
                                            onClick={() => dispatch(resetSearch())}>
                                            {token.button_reset_search}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {
                                (progressBar > 0 && progressBar < 100) ?
                                    (
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
                                    ) : (
                                        <div/>
                                    )
                            }
                            &nbsp;
                            &nbsp;
                            <div className="row">
                                <Tracks items={getTrackToDisplay(tracks)} api={api} isPlaylist={false} trackCorrelation={trackCorrelation}/>
                                <Tracks items={getPlaylistToDisplay(playlists)} api={api} isPlaylist={true} trackCorrelation={trackCorrelation}/>
                            </div>
                            <div className="kt-section">
                                <div className="kt-section__info">
                                    <div className="kt-quick-search kt-quick-search--offcanvas" id="kt_quick_search_offcanvas" >
                                        <div className="kt-quick-search__form row" style={{
                                            marginBottom: '-2rem'
                                        }}>
                                            <div className="kt-media kt-media--xl">
                                                <img src={playlistImage} alt={playlistName}/>
                                            </div>
                                            &nbsp;
                                            &nbsp;
                                            <div className="input-group" style={{width: "90%"}}>
                                                <input type="text" className="form-control"
                                                       placeholder={token.playlist_title_placeholder} name="query"
                                                       value={playlistName}
                                                       onChange={(event) => dispatch(updatePlaylistName(event.target.value))}
                                                       style={{
                                                           top: "60%"
                                                       }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kt-portlet__foot modal-footer justify-content-between">
                            <div className="kt-widget__toolbar">
                                <button type="button" className="btn btn-outline-brand"
                                        onClick={() => dispatch(toggleSearch())}>{token.button_close}</button>
                                &nbsp;
                                &nbsp;
                                <button type="button" className="btn btn-brand"
                                    onClick={() => dispatch(saveNewPlaylist({
                                        playlist: {
                                            tracks : playlists,
                                            name : playlistName,
                                            img : playlistImage,
                                            id : playlistId,
                                        },
                                        userId : user.id,
                                    }))}>{token.button_save_playlist}</button>
                            </div>
                            <button type="button" className="btn btn-outline-info"
                                    onClick={() => dispatch(resetPlaylist())}>{token.button_reset_playlist}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PlaylistManager
