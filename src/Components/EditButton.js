import React, { useState }  from "react";
import pencil from "../img/pencil.png";
import Modal  from "react-overlays/Modal";
import "./EditButton.css"


function EditButton(){
    //____новое значение___ф обновления____хук______переменная
    const [showModal, setShowModal] = useState(false);
    //setDescription заставляет Реакт перепарсить весь компонент, обновляя знач-я

    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    var handleClose = () => setShowModal(false);//кнопка "закрыть"

    var handleSave = () => setShowModal(false);//кнопка "сохранить"

    return(
        <div>
            <button 
            className="editButton"
            onClick={() => setShowModal(true)}
            >
                <img 
                    src={pencil} height={30} alt="editPencil"
                ></img>
            </button>
        
            <Modal
                className="editWindow"
                show={showModal}
                onHide={handleClose}
                renderBackdrop={renderBackdrop}
            >
                <div>
                    <div className="modalHeader">
                        <h2 className="modalTitle">The task is...</h2>
                    </div>

                    <div className="modalInputs">
                        <div className="modalThesis">
                            <input 
                                type="text" 
                                placeholder="Thesis..."
                                maxLength="30"
                            />
                        </div>
                        <div className="modalDesc">
                            <textarea 
                                type="text" 
                                placeholder="Describe the task..."
                                cols="40"
                                rows="4"
                                maxLength="80"
                            />
                        </div>
                    </div>
                    
                    <div className="modalFooter">
                        <div>
                            <button className="modalSaveButton" onClick={handleSave}>
                                Save
                            </button>
                        </div>

                        <div>
                            <button className="modalCloseButton" onClick={handleClose}>
                                Close
                            </button>
                        </div>
                        
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default EditButton

