import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const DataAppContext = React.createContext();

const DataApp = (props) => {
    const initialValues = { loginstatus: false, username: 'User 1', showmenu: false, bgColor: 'white' }
    const [appstate, setAppState] = useState(initialValues);
    const navigate = useNavigate();

    const checkLogin = useCallback(() => {
        let token = localStorage.getItem('jwttoken');
        if (token) {
            setAppState((prevState) => ({ ...prevState, loginstatus: true }));
        } else {
            setAppState((prevState) => ({ ...prevState, loginstatus: false }));
        }
    }, []);

    useEffect(() => {
        checkLogin();
    }, [checkLogin]); // Now checkLogin is a stable dependency

    const login = () => {
        setAppState((prevState) => ({ ...prevState, loginstatus: !prevState.loginstatus }));
    };

    const login_user = () => {
        setAppState((prevState) => ({ ...prevState, loginstatus: true }));
    };

    const logout_user = () => {
        localStorage.removeItem('jwttoken');
        localStorage.removeItem('userid');
        localStorage.removeItem('usertype');
        setAppState((prevState) => ({ ...prevState, loginstatus: false }));
        navigate('/login');
    };

    const showhidemenu = () => {
        setAppState((prevState) => ({ ...prevState, showmenu: !prevState.showmenu }));
    };

    return (
        <DataAppContext.Provider value={{ appstate, login, login_user, logout_user, showhidemenu }}>
            <div className='app-wrapper'>
                {props.children}
            </div>
        </DataAppContext.Provider>
    );
};

export default DataApp;
export { DataAppContext };
