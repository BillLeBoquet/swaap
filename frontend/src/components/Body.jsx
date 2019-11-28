import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {detailUser} from "../modules/auth";
import PlaylistManager from "./PlaylistManager";
import {getPlaylist} from "../modules/playlistManager";
import Tracks from "./Tracks";

const Body = () => {
    const {playlistsDeezer, playlistsSpotify, playlistsSaved, showUserDetails} = useSelector(state => state.auth);
    const {progressBar, playlistId} = useSelector(state => state.playlists);
    const {token} = useSelector(state => state.localize);
    const {searchBar} = useSelector(state => state.search)
    const dispatch = useDispatch()
    const {tracks, api} = useSelector(state => state.search)

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

    return (
        <div className="kt-container kt-grid__item kt-grid__item--fluid kt-grid--hor" id="kt-content">
            <PlaylistManager/>
            <div className="kt-container  kt-grid__item kt-grid__item--fluid">
                <div className="row">
                    <div className="col">
                            <div className="kt-portlet">
                                <div className="kt-portlet__head">
                                    <div className="kt-portlet__head-label">
                                        <h3 className="kt-portlet__head-title">{token.your_playlists}</h3>
                                    </div>
                                </div>
                                <div className="kt-portlet__body">
                                    <div className="kt-section__content">
                                        <div className="kt-section__content">
                                            {playlistsSaved !== null ?
                                                playlistsSaved
                                                    .map((playlist, i) => {
                                                        return (
                                                            <button key={playlist.name} className="btn btn-outline-hover-brand btn-elevate btn-pill">
                                                                {playlist.name}
                                                            </button>
                                                        )
                                                    }
                                            ) : (
                                                <div className="kt-section__content">
                                                    <Tracks items={getTrackToDisplay(tracks)} api={api} isPlaylist={false}/>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="kt-portlet">
                            <div className="kt-portlet__head">
                                <div className="kt-portlet__head-label">
                                    <h3 className="kt-portlet__head-title">{token.spotify}</h3>
                                </div>
                            </div>
                            <div className="kt-portlet__body">
                                <div className="kt-section__content">
                                    <div className="kt-section__content">
                                        {
                                            playlistsSpotify.length ? playlistsSpotify
                                                .map((playlist, i) => {
                                                    return (
                                                        <button key={playlist.name} className="btn btn-outline-hover-brand btn-elevate btn-pill"
                                                                onClick={() => dispatch(getPlaylist({
                                                                        api: 1,
                                                                        id: playlist.id,
                                                                    })
                                                                )}>
                                                            {playlist.name}
                                                            {
                                                                playlist.id === playlistId ? (
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
                                                                ) : (
                                                                    <div/>
                                                                )
                                                            }
                                                        </button>
                                                    )
                                                }) : (
                                                <p>{token.missing_playlist.spotify}</p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="kt-portlet">
                            <div className="kt-portlet__head">
                                <div className="kt-portlet__head-label">
                                    <h3 className="kt-portlet__head-title">{token.deezer}</h3>
                                </div>
                            </div>
                            <div className="kt-portlet__body">
                                <div className="kt-section__content">
                                    <div className="kt-section__content">
                                        {
                                            playlistsDeezer.length ? playlistsDeezer
                                                .map((playlist, i) => {
                                                    return (
                                                        <button key={playlist.name} className="btn btn-outline-hover-brand btn-elevate btn-pill"
                                                                onClick={() => dispatch(getPlaylist({
                                                                    api: 2,
                                                                    id: playlist.id,
                                                                }))}>
                                                            {playlist.name}
                                                            {
                                                                playlist.id === playlistId ? (
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
                                                                ) : (
                                                                    <div/>
                                                                )
                                                            }
                                                        </button>
                                                )
                                                }) : (
                                                <p>{token.missing_playlist.deezer}</p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showUserDetails ? (
                <div className="kt-offcanvas-panel-overlay"
                     onClick={() => dispatch(detailUser())}
                />
            ) : (
                <div/>
            )}
            {searchBar ? (
                <div className={[
                    searchBar ? 'show' : '',
                    "modal-backdrop fade"
                ].join(' ')}/>
            ) : (
                <div/>
            )}

        </div>
    )
}

export default Body