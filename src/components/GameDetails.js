import React, { useState} from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";



export const GameDetails = () => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const handleInput = () => {
        
    }
    return (
        <>
        <ModalBody>
            <div>Host Name: <Input type="text" placeholder="Host Name" onChange={handleInput()}></Input></div>
            <div>Rounds: <Input type="number" placeholder="Number Of Rounds"></Input></div>
            <div>Points To Win: <Input  type="number" placeholder="Points To Win"></Input></div>
            <div>Round Duration:</div>
            <InputGroup>
            <InputGroupText>
            Minutes:
            </InputGroupText>
            <Input  onKeyDown={true} min="1" max="5"  type="number" placeholder="Maximum 5 minutes"/>
            </InputGroup>
            </ModalBody>
                <ModalFooter>
                    <Button
                    color="primary"
                    onClick={function noRefCheck(){}}>
                        Add Player
                    </Button>
                </ModalFooter>
        </>
    )
}