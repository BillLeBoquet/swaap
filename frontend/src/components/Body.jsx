import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {detailUser} from "../modules/auth";
import PlaylistManager from "./PlaylistManager";
import Playlist from "./Playlist";
import SavedPlaylist from "./SavedPlaylist";

const Body = () => {
    const {playlistsDeezer, playlistsSpotify, playlistsSaved, showUserDetails} = useSelector(state => state.auth);
    const {token} = useSelector(state => state.localize);
    const {searchBar} = useSelector(state => state.search)
    const dispatch = useDispatch()

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
                                    <div className="kt-widget-2">
                                        <div className="kt-widget-2__content kt-portlet__space-x">
                                            <div className="row">
                                                {playlistsSaved !== null ?
                                                    playlistsSaved
                                                        .map((playlist) => {
                                                                return (
                                                                    <SavedPlaylist playlist={playlist} key={playlist.id}/>
                                                                )
                                                            }
                                                        ) : (
                                                        <div/>
                                                    )}
                                            </div>
                                        </div>
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
                                        <div className="kt-widget-2">
                                            <div className="kt-widget-2__content kt-portlet__space-x">
                                                <div className="row">
                                                    {
                                                        playlistsSpotify.length ? playlistsSpotify
                                                            .map((playlist) => {
                                                                return (
                                                                        <Playlist playlist={playlist} key={playlist.id} api={1}/>
                                                                    )
                                                                }
                                                            ) : (
                                                            <p>{token.missing_playlist.spotify}</p>
                                                        )}
                                                </div>
                                            </div>
                                        </div>
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
                                        <div className="kt-widget-2">
                                            <div className="kt-widget-2__content kt-portlet__space-x">
                                                <div className="row">
                                                    {
                                                        playlistsDeezer.length ? playlistsDeezer
                                                            .map((playlist, i) => {
                                                                return (
                                                                        <Playlist playlist={playlist} key={playlist.id} api={2}/>
                                                                    )
                                                                }
                                                            ) : (
                                                            <p>{token.missing_playlist.deezer}</p>
                                                        )}
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