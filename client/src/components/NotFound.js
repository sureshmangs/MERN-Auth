import React from 'react';
import NotFoundImage from '../images/error404.jpg';

function NotFound() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="text-center">
                <img src={NotFoundImage} className="mx-auto img-fluid d-block " alt="NotFound" />
            </div>
        </div>
    )
}

export default NotFound
