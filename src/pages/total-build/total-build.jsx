import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { cartStateSubject } from '../../cart-state/cart-state'
function TotalBuildPage() {
  const cartState = cartStateSubject.value;
  const summarySum = Object.values(cartState).reduce((sum, c) => 
    sum + parseInt(c.price.replace(' ', '')),
  0);


  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBackClick = () => {
    navigate('/');
  }

  return (
    <div className='container  w-50'>
       <h2 className="text-center mt-3">Ваша конфигурация</h2>
      <table className="table table-striped" >
        <tbody>
          {Object.values(cartState).map((c) => (
            <tr key={c.typeTitle}>
              <td>{c.typeTitle}</td>
              <td>{c.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-end fs-5'>Общая сумма вместе с сборкой: <span className='fw-bold fs-3'>{summarySum + 1000} р</span></p>
      <div className='d-flex justify-content-end'>
        <button onClick={handleBackClick} className='btn btn-outline-secondary'>Продолжить выбор</button>
        <button onClick={handleShow} className='ms-3 btn btn-primary'>Купить компьютер</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Данные покупателя</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Телефон</label>
            <input type="tel" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Адрес доставки</label>
            <input type="text" className="form-control" id="exampleInputPassword1"/>
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
    </div>
  )
}

export default TotalBuildPage;