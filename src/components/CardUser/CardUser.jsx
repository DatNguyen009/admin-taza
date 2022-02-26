import Axios from 'axios';
import React, { useState } from 'react'
import {Link} from "react-router-dom"

export default function CardUser(props) {
    let {title, page, listUser} = props;
    const [filterUser, setfilterUser] = useState([listUser])
    const [idUser, setIdUser] = useState("")

    const handleChangeSearch = (e) => {
        let keyword = e.target.value;
        const result = listUser.filter((item) => {
            return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        });

        setfilterUser(result)
    }

    const handleConfirmUser = (id) => {
        setIdUser(id)
    }

    const handleDeleteUser = () => {
        try {
            Axios({
                url: "http://localhost:3000/users/" + idUser,
                method: "DELETE"
            }).then(() => {
                alert("Xóa User thành công!!");
                window.location.reload();
            })
        } catch (error) {
            alert("Xóa User thất bại!!");
            console.log(error);
        }
    }

    
  return (
     
    <div className='cardUser mt-3'>
        
        <div className="card text-center">
            <div className="card-header myCardHeader">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-left text-primary font-weight-bold">{title}</h3>
                    </div>
                    {page === "UserManager" ? 
                    (<div class="col-md-6 text-right">
                        <Link to="/Register"><button
                            className="btn btn-primary"
                        >
                            Thêm user
                        </button></Link>
                    </div>)
                    : ''}
                    
                </div>
            </div>

            <div className="card-body">
                <div className="row mb-3" >
                    {page === "UserManager" ? 
                    (<div className="col">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Tên user" id="searchName" onChange={handleChangeSearch}/>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="btnTimNV"><i className="fa fa-search"></i></span>
                            </div>
                        </div>
                    </div>)
                    : ''}
                </div>
                <table className="table table-bordered table-hover myTable">
                    <thead className="text-primary">
                        <tr>
                            <th className="nowrap">
                                <span className="mr-1">ID</span>
                                <i className="fa fa-arrow-up" id="SapXepTang"></i>
                                <i className="fa fa-arrow-down" id="SapXepGiam"></i>
                            </th>
                            <th>Họ và tên</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>Ngày tạo</th>
                            <th>Role</th>
                            <th><em className="fa fa-cog"></em></th>
                        </tr>
                    </thead>
                    <tbody id="tableDanhSach">
                    {
                        filterUser[0] !== undefined ?
                            filterUser?.map((item, index) => (
                                <tr key={"cardUser" + index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.createdAt.slice(0,10)}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className='btn btn-warning'>Edit</button>
                                        <button className='btn btn-danger mt-1' onClick={() => handleConfirmUser(item.id)} data-toggle="modal" data-target="#ModalConfirm">Remove</button>
                                    </td>
                                </tr>
                            )) : listUser?.map((item, index) => (
                                <tr key={"cardUser" + index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.createdAt.slice(0,10)}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className='btn btn-warning'>Edit</button>
                                        <button className='btn btn-danger mt-1' onClick={() => handleConfirmUser(item.id)} data-toggle="modal" data-target="#ModalConfirm">Remove</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <div className="modal fade" id="ModalConfirm"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Thông báo</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Bạn có chắc chắn muốn xóa hay không?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    <button type="button" className="btn btn-primary" onClick={() => handleDeleteUser(idUser)}>Xóa</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
