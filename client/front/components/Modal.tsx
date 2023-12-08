import React, { ReactNode } from 'react';

interface ModalProps {
    title: string;
    onClose: () => void;
    sidebarOpen: boolean;
    children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, sidebarOpen, children }) => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', maxWidth: '400px' }}>
                <h2>{title}</h2>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
