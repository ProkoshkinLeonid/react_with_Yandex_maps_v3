import React, {useState, forwardRef, useImperativeHandle} from 'react'
import {createPortal} from 'react-dom'
import { stylesCss } from './Modal.css'
import { ModalRef } from '../../types'

interface ModalProps {
    children: JSX.Element
}

export const Modal = forwardRef(({ children }: ModalProps, ref: React.Ref<ModalRef> | undefined) => {

    const [isModalOpened, setIsModalOpened] = useState(false)


    useImperativeHandle(
      ref,
      () => ({
        openModal: () => setIsModalOpened(true),
        closeModal: () => setIsModalOpened(false),
        isModalOpened,
      }),
      [isModalOpened],
    )
    
    return <>
        <button onClick={() => setIsModalOpened(false)}> 
            Закрыть
        </button>
        {isModalOpened && createPortal(<div className={stylesCss.modalContainer}>
            {children}
        </div>, document.body)}
    </>

})

Modal.displayName = 'Modal'