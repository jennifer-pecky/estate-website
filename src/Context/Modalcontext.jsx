import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext({
  viewAgency: false,
  contactModal: false,
  homeModal: false,
  setViewAgency: () => {},
  setContactModal: () => {},
  setHomeModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [viewAgency, setViewAgency] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [homeModal, setHomeModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        viewAgency,
        setViewAgency,
        contactModal,
        setContactModal,
        homeModal,
        setHomeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
