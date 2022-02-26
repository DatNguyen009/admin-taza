import React, { useEffect, useState } from 'react'
import CardUser from './../../components/CardUser/CardUser';
import  Axios  from 'axios';

export default function UserManager() {

  const [listUser, setListUser] = useState();

  useEffect(() => {
    try {
      Axios({
        url: "http://localhost:3000/users",
        method: "GET"
      })
      .then(res => setListUser(res.data))
    } catch (error) {
      console.log(error);
    }
  }, [])
  
  return (
    <CardUser title="Danh sách user" page="UserManager" listUser={listUser}/>
  )
}
