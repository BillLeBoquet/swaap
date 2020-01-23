import React from 'react'

const NotFoundPage = () => {
    return (
        <div className="kt-bg-light kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader-mobile--fixed kt-aside--enabled kt-aside--left kt-aside--fixed kt-aside--offcanvas-default">
            <div className="kt-grid kt-grid--ver kt-grid--root">
                <div className="kt-error404-v1">
                    <div className="kt-error404-v1__content">
                        <div className="kt-error404-v1__title">404</div>
                        <div className="kt-error404-v1__desc"><strong>OOPS!</strong> Something went wrong here.</div>
                    </div>
                    <div className="kt-error404-v1__image">
                        <img src="/dist/assets/media/misc/404-bg1.jpg"
                             className="kt-error404-v1__image-content" alt="" title=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage