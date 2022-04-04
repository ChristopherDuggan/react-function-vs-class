import { useState } from 'react';
import Functional from './Functional'
import Class from './Class';
import './App.css';

function App() {
    const time = new Date().toLocaleTimeString()    
    const [type, setType] = useState('functional')

    if ( type === 'functional') {
        return (
            <Functional time={time} setType={setType}/>
        );
    } else {
        return (
            <Class time={time} setType={setType}/>
        )
    }
}

export default App;
