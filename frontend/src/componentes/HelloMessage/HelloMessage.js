

import React, {useState, useEffect } from 'react'
import axios from 'axios'

export function HelloMessage () {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/')
          .then(response => setMessage(response.data))
          .catch(error => console.error(error));
      }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default HelloMessage; 