import Portal from '../ReactPortal'
import './ModalStyles.css'

const Modal = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null
  return (
    <Portal wrapperId='react-portal-modal-container'>
      <div className='modal'>
        <button onClick={handleClose} className='close-btn'>
          Close
        </button>
        <div className='modal-content'>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
