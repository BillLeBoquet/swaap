import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPlaylist} from "../modules/playlistManager";
import {toggleSearch} from "../modules/search";

const Playlist = (props) => {
    const {playlist, api} = props
    const {progressBar, playlistId} = useSelector(state => state.playlists)
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.localize);

    return (
        <div className="col-xl-4 justify-content-lg-center" align="center">
            <div className="kt-widget-2__item">
                {
                    playlist.image ? (
                        <div className="kt-media kt-media--xl">
                            <img src={playlist.image} alt={playlist.name}/>
                        </div>
                    ) : (
                        <div/>
                    )
                }
                <div className="kt-widget-2__item-title"
                     style={{
                         maxWidth: 150,
                         whiteSpace: 'nowrap',
                         textOverflow: 'ellipsis',
                         overflow: 'hidden'
                     }}
                >
                    {playlist.name}
                </div>
                {
                    playlist.id === playlistId ? (
                        <div>
                            {
                                (progressBar > 0 && progressBar < 100) ? (
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
                                <button className="btn btn-elevate btn-brand"
                                        onClick={() => dispatch(toggleSearch())}
                                >
                                    {token.display_playlist}
                                </button>
                                )
                            }
                        </div>
                    ) : (
                        <button className="btn btn-elevate btn-outline-hover-brand btn-icon"
                            onClick={() => dispatch(getPlaylist({
                                    api: api,
                                    id: playlist.id,
                                    image: playlist.image,
                                })
                            )}
                        >
                            <i className="fa fa-download"/>
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Playlist