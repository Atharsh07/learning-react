import React  from 'react';
import {useState, useEffect} from 'react'

const Fetch = () => {
    const[data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/users');
            const data = res.json();
            setData(data);
        }
        fetchData();
    }, []);
``
  return (
    <div>
        <ul>
            {
                data.map((todo)=> (
                    <li key={todo.id}>todo.title</li>
                ))
            }
        </ul>
    </div>
  );
};

export default Fetch;
