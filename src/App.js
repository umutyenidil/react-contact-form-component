import React, {useEffect} from "react";

import './App.css';
import ContactForm from "./components/ContactForm";

function App() {
    useEffect(() => {
        let link = document.createElement('link');
        link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className='body'>
            <ContactForm/>
        </div>
    );
}

export default App;
