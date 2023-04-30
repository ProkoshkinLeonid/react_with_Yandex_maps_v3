import {useRef} from 'react'
import { Modal } from "./components/Modal/Modal"
import { ModalRef } from './types'

export const  App = () => {

  const modalRef = useRef<ModalRef>(null)

  console.log(modalRef);

  return (
    <>
      <div>
        1232
      </div>
      <Modal ref={modalRef}>
        <div>
          123213
        </div>
        </Modal>
    </>
  )
}

export default App


