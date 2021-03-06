import React from 'react'

export default function ModalConfirm(props) {
    const {title, idUser} = props;
    console.log(idUser);
  return (
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
                <p>{title}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                <button type="button" className="btn btn-primary">Xóa</button>
            </div>
            </div>
        </div>
    </div>
  )
}
