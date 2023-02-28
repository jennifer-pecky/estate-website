import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext({
  viewAgency: false,
  contactModal: false,
  setViewAgency: () => {},
  setContactModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [viewAgency, setViewAgency] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        viewAgency,
        setViewAgency,
        contactModal,
        setContactModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
