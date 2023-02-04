import { useState } from 'react'
import { useEffect } from 'react'
import './add-info.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddInfoPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [components, setComponents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3004/components')
      .then(res => res.json())
      .then((data) => setComponents(data))
  }, [])
  return (
    <>
      <h2 className="text-center mt-3">Ввод информации о комплектующих</h2>
      <div className='form'>
        {components.map(c => (
        <div key={c.id} className="d-flex align-items-center mb-3">
          <div className="label mx-3">{c.title}</div>
          <button style={{
            width: '300px'
          }} className="btn btn-primary" onClick={handleShow}>Выбрать</button>
        </div>
        ))}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ввод информации о комплектующих</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex'>
            <h4 className='fw-normal fs-4'>Процессоры</h4>
            <select defaultValue="1" className="ms-4 form-select" aria-label="Default select example">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <h4 className='mt-3 fs-5'>Информация о процессоре</h4>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Количество</label>
            <input type="number" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Цена</label>
            <input type="number" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Дата</label>
            <input type="date" className="form-control" id="exampleInputPassword1"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddInfoPage