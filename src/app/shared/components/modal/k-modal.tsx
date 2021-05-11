import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export interface KModalButtonProps {
    text: string;
    color: 'primary' | 'secondary';
    onClick: () => void;
}

interface KModalProps {
    body: React.ReactNode;
    isOpen: boolean;
    header?: React.ReactNode;
    buttons?: KModalButtonProps[];
    backdrop?: boolean;
    onCancel?: () => void
}

const KModal: React.FunctionComponent<KModalProps> = (
    {
        header,
        body,
        buttons,
        backdrop = false,
        isOpen,
        onCancel
    }) => {
    return (
        <Modal isOpen={isOpen} toggle={onCancel} backdrop={backdrop}>
            {header &&
            <ModalHeader toggle={onCancel}>
                {header}
            </ModalHeader>
            }
            <ModalBody>
                {body}
            </ModalBody>
            {buttons &&
            <ModalFooter>
            {buttons.map(button => <Button color={button.color}
                                               onClick={button.onClick}>{button.text}</Button>)}
                </ModalFooter>
            }
        </Modal>
    )
}


export default KModal;
