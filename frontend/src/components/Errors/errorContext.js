import {createContext, useState, useContext} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ErrorContext = createContext();

export const ErrorProvider = ({children}) => {
    const [error, setError] = useState(null);

    const showError = (message) => {
        setError(message);
        toast.error(message);
    };

    return (
        <ErrorContext.Provider value={{error, setError: showError}}>
            <ToastContainer/>
            {children}
        </ErrorContext.Provider>
    );
};

export const useError = () => useContext(ErrorContext);
