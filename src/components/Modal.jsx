import React, { useEffect } from 'react'

export default function Modal({ useShowModal,inputRef }) {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        inputRef.current.blur()
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);
    return (<>
        <div className='blurry_bg'></div>
        <div className="modal_container">
            <h1>404 Not Found</h1>
            <h2 className='modelMidSentence'>GitHub account with the given Username does not exist!</h2>
            <input type="button" value="Understood" className='modalBtn' onClick={() => useShowModal(false)} />
        </div>
    </>
    )
}
