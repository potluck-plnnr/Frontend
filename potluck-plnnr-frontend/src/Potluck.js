import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const Potluck = () => {
 
    const [host, setHost] = useState()
    const [formState, setFormState] = useState({
        name: '',
        date: '',
        time: '',
        dish: false
    })


    let formSchema = yup.object().shape({
        name: yup.string().required('Please provide your name'),
        date: yup.string().required('Must choose a date.'),
        time: yup.string().required('Must choose a time.'),
        dish: yup.boolean().oneOf([true], 'Must check at least one box!')

});



    const formSubmit = e => {
        e.preventDefault();
        console.log('form submitted',);
        axios.post('https://backend-bw.herokuapp.com/')
            .then(response => {
                setHost(response.data)
                console.log(response.data)
                console.log('form submitted success', host)
             })
        
            .catch(err => console.log('error', err));
    };

    const validateChange = e => {
        e.persist();

    }

    const inputChange = e => {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
        validateChange(e);
    }

    return (
        <div>Host Form
            <form onSubmit={formSubmit}> 
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' onChange={inputChange} value={formState.name}/>
                <label htmlFor='date'>Date</label>
                <input type='date'  min='2018-01-01' max='2030-12-31'/>
                <label htmlFor='time'>Time</label>
                <input type='time'/>
                <label htmlFor='items'>Dishes Reqested</label>
                <div>
                    <input name='dish' type='checkbox'  />Appetizer
                </div>
                <div>
                    <input name='dish' type='checkbox' />Entree
                </div>
                <div>
                    <input name='dish' type='checkbox' />Sides
                </div>
                <div>
                    <input name='dish' type='checkbox' /> Dessert
                </div>
                
               
                <button>Enter</button>
            </form>
        </div>
    )

}

export default Potluck;