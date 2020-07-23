import React from 'react';

const User = () => {

    return (
        <div>User Input Form
            <form>
                <label htmlFor='name'>Name</label>
                    <input type='text' value='name'/>
                <label htmlFor='password'>Password</label>
                    <input type='text' value='password'/>
                               
                <button>Enter</button>
            </form>
        </div>
    )

}

export default User;
