function LoginPage(){

    return (
        <div>
            <h3>Login</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" className="form-control" 
                                                        placeholder="UserName" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" 
                                                    placeholder="Password" />
                </div>
                <br />
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;