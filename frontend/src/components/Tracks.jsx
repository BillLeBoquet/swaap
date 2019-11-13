import React from 'react';
import {useDispatch} from "react-redux";
import {addTrackToPlaylist, removeResultFromPlaylilst} from "../modules/playlistManager";

const Tracks = (props) => {
    const tracks = props.items
    const {api, isPlaylist} = props
    const dispatch = useDispatch()
    return (
        <div className="kt-portlet__space-x col-xl-6">{tracks.map((track, i) => {
            return (
                <div className="kt-widget kt-widget--general-2" key={i}>
                    <div className="kt-portlet__body kt-portlet__body--fit" >
                        <div className={[
                            !isPlaylist ? 'btn-outline-hover-brand' : 'btn-outline-hover-danger',
                            "kt-widget__top btn "
                        ].join(' ')}>
                            <div className="kt-widget__wrapper" align="left">
                                <div className="kt-media kt-media--lg kt-media--circle">
                                    <img src={track.album.image} alt={track.name}/>
                                </div>
                                <div className="kt-widget__label">
                                    <p className="kt-widget__title"
                                        style={{
                                            maxWidth: 200,
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {track.name}
                                    </p>
                                    <p className="kt-widget__desc"
                                        style={{
                                            maxWidth: '190px',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {track.album.name}
                                    </p>
                                </div>
                                <div className="kt-widget__toolbar">
                                    {
                                        !isPlaylist ? (
                                            <button type="button" className="btn btn-outline-brand btn-icon btn-circle"
                                                    onClick={() => dispatch(addTrackToPlaylist({
                                                        track,
                                                        api
                                                    }))}>
                                                <i className="flaticon2-add-1"/>
                                            </button>
                                        ) : (
                                            <button type="button" className="btn btn-outline-danger btn-icon btn-circle"
                                                    onClick={() => dispatch(removeResultFromPlaylilst({
                                                        id: track.id,
                                                        api
                                                    }))}>
                                                <i className="fa fa-times"/>
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>)
}

export default Tracks;