function Login(){

    const ctx = React.useContext(UserContext);  

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const login = (e) => {
        e.preventDefault();
        console.log(email, password);
        ctx.users.push({email,password,balance:100});
        setIsDeposit(true);
    }
    return (
        <Card
        header="Login"
        bgcolor="primary"
        body={(
    
            <>
             Username<br/>
             <input type="input" className="form-control" placeholder="Enter Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
           
                <br/>

               Password<br/>
                <input type="password" className="form-control" placeholder="Enter Password" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>

                <button type="submit" className="btn btn-light" onSubmit={login} href="#">Login</button>
            </>

            )}
        />         
        );
}

         