import React from 'react'

export default function Card(props) {
    const {title, countUserRole} = props;
    return (
        <div className="col-xl-3 col-md-6">
            <div className="card   mb-4">
                <div className="card-body" >
                    <img src={title === "Admin" ? 'https://img.icons8.com/external-others-phat-plus/64/000000/external-admin-encryption-outline-others-phat-plus.png' : title === "Manager" ? 'https://img.icons8.com/ios/50/000000/manager.png' : 'https://img.icons8.com/ios/50/000000/user--v1.png'} width="30" alt='logo role'/>
                    <span className='pl-2'>{title}</span>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <p className="small">{countUserRole}</p>
                    <div className="small "><i className="fa fa-angle-right"></i></div>
                </div>
            </div>
        </div>

    )
}
