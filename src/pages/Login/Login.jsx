import React from 'react'

export default function Login() {
  return (
    <div className='col-sm-7 mt-4 mb-4' style={{margin: "0 auto"}}>
      <h4 style={{textAlign: 'center'}}>Đăng nhập</h4>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-address-book"></i></span>
          </div>
          <input type="text" name="account" id="account" className="form-control input-sm"
            placeholder="Tài khoản" />
        </div>
      </div>

      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-key"></i></span>
          </div>
          <input type="text" name="pass" id="pass" className="form-control input-sm"
            placeholder="Mật khẩu" />
        </div>
      </div>

      <button className='btn btn-primary' style={{display: "grid", margin: "0 auto"}}>Đăng nhập</button>
    </div>
  )
}
