import React, { Component } from 'react'

export class NewLogin extends Component {
    render() {
        return (
            <div>
                
<div class="login">
    
    <h1>Login</h1>
    <form method="post">
    	<input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
    </form>


</div>
            </div>
        )
    }
}

export default NewLogin
