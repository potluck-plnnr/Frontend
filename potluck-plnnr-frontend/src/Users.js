import React from 'react';

const User = () => {

    return (
        <div>User Input Form
            <form>
                <label htmlFor='name'>Name</label>
                    <input type='text' value='name'/>
                <label htmlFor='password'>Password</label>
                    <input type='text' value='password'/>
                <label htmlFor='role'>Role</label>
                <select namee='role'>
                    <option value='organizer'>Organizer</option>
                    <option value='guest'>Guest</option>
                    <option value='other'>Other</option>
                </select>
                <button>Enter</button>
            </form>
        </div>
    )

}

export default User;
