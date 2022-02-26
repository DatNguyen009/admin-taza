import Axios from 'axios';
import React, { useState } from 'react'

export default function Register() {

  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [sex, setSex] = useState("");
  const [role, setRole] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeDate = (event) => {
    setBirthday(event.target.value)
  }

  const handleChangeSex = (event) => {
    setSex(event.target.value)
  }

  const handleChangeRole = (event) => {
    setRole(event.target.value)
  }



  const handlSubmit = (event) => {
    let randomID = Math.random().toString(36).slice(2,10);
    const today = new Date();
    
    if (name === "" || birthday === "" || sex === "" || role === "") {
      alert("Vui lòng không được bỏ trống!!!")
      return false;
    }
    else{
      try {
        Axios({
          url: "http://localhost:3000/users",
          method: "POST",
          data: {
            id: randomID,
            name: name,
            birthday: birthday,
            sex: sex,
            role: role,
            createdAt: `${today.toISOString()}`,
            updatedAt: `${today.toISOString()}`,
          }
        })
        .then(() => {
          alert("Đăng ký user thành công!!");
          window.location.reload();
        })
      } catch (error) {
          alert("Đăng ký user thất bại!!")
      }
      event.preventDefault();
    }
  }

  return (
    <div className='col-sm-7' style={{margin: "0 auto"}}>
        <h4 className='mt-4 mb-4' style={{textAlign: 'center'}}>Register</h4>

        <form onSubmit={handlSubmit}>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-address-book"></i></span>
              </div>
              <input type="name" name="name" id="name" placeholder='Họ và tên' onChange={handleChangeName} className="form-control input-sm" />
            </div>
            <span className="sp-thongbao" id="tbTen"></span>
          </div>

          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-birthday-cake"></i></span>
              </div>
              <input type="date" name="user_date" id="user_date" value={birthday} className="form-control input-sm"
                placeholder="Ngày sinh" onChange={handleChangeDate}/>
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-users"></i></span>
              </div>
              <select className="form-control" id="sex" onChange={handleChangeSex}>
                <option>Chọn giới tính</option>
                <option value="Male">Nam</option>
                <option value="Female">Nữ</option>
              </select>
            </div>
          </div>  
          
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-briefcase"></i></span>
              </div>
              <select className="form-control" onChange={handleChangeRole}>
                <option>Chọn vai trò</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Register">Register</option>
              </select>
            </div>
          </div>  

          <button className='btn btn-primary' style={{display: "grid", margin: "0 auto"}} >Đăng ký</button>
        </form>
        
    </div>
  )
}
