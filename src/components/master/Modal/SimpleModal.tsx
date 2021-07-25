import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    show       : boolean,
    handleClose: any,
    size       : any,
    id         : number | string
    title      : string,
    children   : any,
}

const SimpleModal = (props: IProps) => {

    const { show, handleClose, size, id = "N/A", title } = props;
    return (
        <Modal
            onClose         = {handleClose}
            size            = {size}
            show            = {show}
            onHide          = {handleClose}
            aria-labelledby = "contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
                <div className="modal_close_btn" onClick={() => handleClose()}>
                    <FontAwesomeIcon className="close_icon" icon={faTimes} />
                </div>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    );
}
export default SimpleModal;