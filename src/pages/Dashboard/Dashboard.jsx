import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card';

export default function Dashboard() {
  const [listUser, setListUser] = useState([]);
 
  useEffect(() => {
    Axios({
      url: "http://localhost:3000/users",
      method: "GET"
    })
    .then(res => setListUser(res.data))
  }, [])

  let countRoleAdmin = listUser.filter((item) => {
    return item.role === 'Admin';
  }).length

  let countRoleManager = listUser.filter((item) => {
    return item.role === 'Manager';
  }).length

  let countRoleRegister = listUser.filter((item) => {
    return item.role === 'Register';
  }).length

  
  

  return (
    <div>
    <div className='dashboard mt-3'>
    <div className="card">
      <div className="card-header myCardHeader">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-left text-primary font-weight-bold">Thống kê số lượng User Role</h3>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div style={{display: 'flex', justifyContent: "space-between"}}>
          <Card title="Admin" countUserRole={countRoleAdmin}/>
          <Card title="Manager" countUserRole={countRoleManager}/>
          <Card title="Register" countUserRole={countRoleRegister}/>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

