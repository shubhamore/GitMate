import React, { useEffect } from 'react'

export default function Modal({ useShowModal2,inputRef }) {
    useEffect(() => {
        inputRef.current.blur()
    }, []);
    return (<>
        <div className='blurry_bg'></div>
        <div className="modal_container">
            <h1>No Profiles Found</h1>
            <h2 className='modelMidSentence'>There are no profiles to delete. Please add a profile to the app first.</h2>
            <input type="button" value="Understood" className='modalBtn' onClick={() => useShowModal2(false)} />
        </div>
    </>
    )
}
