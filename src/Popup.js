import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';

/*
    Modal Popup to show result and ask to save the game
*/

export default function Popup({popup, currentGuessNum, result, handleSave, handleReset}) {
    return (
        <div>
            <Modal show={popup}>
                <ModalHeader>
                    <ModalTitle>{result}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>Number of Guesses: {currentGuessNum-1}</p>
                    <p><button onClick={handleSave} className='btn btn-outline-success'>Save</button> <button onClick={handleReset} className='btn btn-outline-danger'>Reset</button></p>
                </ModalBody>
            </Modal>
        </div>
    )
}