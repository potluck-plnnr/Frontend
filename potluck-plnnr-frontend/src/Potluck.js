import React from 'react';

const Potluck = () => {

    return (
        <div>Attendee Form
            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' value='name' />
                <label htmlFor='items'>Role</label>
                <select name='items'>
                    <option value='appetizer'>Appetizer</option>
                    <option value='entree'>Entree</option>
                    <option value='side'>Sides</option>
                    <option value='dessert'>Dessert</option>
                </select>
            </form>
        </div>
    )

}

export default Potluck;