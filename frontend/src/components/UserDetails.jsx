import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {detailUser, logoutUser} from "../modules/auth";
import {getPlaylist} from "../modules/playlistManager";

const UserDetails = () => {
    const {user, showUserDetails, userPlaylists} = useSelector(state => state.auth);
    const {progressBar, playlistId} = useSelector(state => state.playlists);
    const {token} = useSelector(state => state.localize);
    const dispatch = useDispatch()

    const spotifyPlaylist = userPlaylists.filter(playlist => playlist.api === 1)
    const deezerPlaylist = userPlaylists.filter(playlist => playlist.api === 2)

    return (
        <div id="kt_offcanvas_toolbar_profile"
             className={[
                 showUserDetails ? 'kt-offcanvas-panel--on' : '',
                 "kt-offcanvas-panel"
             ].join(' ')}
             style={{
                 opacity: "1",
             }}>
            <div className="kt-offcanvas-panel__head" kt-hidden-height="89" >
                <h1 className="kt-offcanvas-panel__title">
                    {token.profile}
                </h1>
                <div className="kt-offcanvas-panel__close" id="kt_offcanvas_toolbar_profile_close"
                     onClick={() => dispatch(detailUser())}>
                    <i className="flaticon2-delete"/>
                </div>
            </div>
            <div className="kt-offcanvas-panel__body kt-scroll ps ps--active-y"
                 style={{
                     overflow: "hidden",
                 }}>
                {user != null ? (
                    <div className="kt-user-card-v3 kt-margin-b-30">
                        <div className="kt-user-card-v3__avatar">
                            <img src={user.avatar} alt={user.pseudo}/>
                        </div>
                        <div className="kt-user-card-v3__detalis">
                            <div className="kt-user-card-v3__name">
                                {user.pseudo}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div/>
                )}
                <div className="kt-widget-1">
                    <h1 className="kt-offcanvas-panel__section kt-margin-t-50">
                        Vos playlist
                    </h1>
                    <h6>
                        Spotify
                    </h6>
                    <div className="kt-widget-1__item">
                        {
                            spotifyPlaylist.length ? spotifyPlaylist
                                .map((playlist, i) => {
                                    return (
                                        <div key={i}>
                                            <button className="btn btn-outline-hover-brand btn-elevate btn-pill"
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
                                        </div>
                                    )
                                }) : (
                                <p>{token.missing_playlist.spotify}</p>
                            )
                        }
                    </div>
                    &nbsp;
                    <h6>
                        Deezer
                    </h6>
                    <div className="kt-widget-1__item">
                        {
                            deezerPlaylist.length ? deezerPlaylist
                                .map((playlist, i) => {
                                    return (
                                        <div key={i}>
                                            <button className="btn btn-outline-hover-brand btn-elevate btn-pill"
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
                                        </div>
                                    )
                                }) : (
                                    <p>{token.missing_playlist.deezer}</p>
                                )
                        }
                    </div>
                </div>
                <div className="kt-margin-t-40">
                    <button type="button" className="btn btn-brand btn-font-sm btn-upper btn-bold"
                        onClick={() => dispatch(logoutUser())}>
                        {token.logout}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserDetails