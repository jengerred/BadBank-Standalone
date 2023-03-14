function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [type, setType]         = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({ name, type, email, password, balance: 0 });
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setType('');
    setShow(true);
  }

  const checking = document.getElementById("checking");
  const savings = document.getElementById("savings");

  function disableCheck() {
    if(savings.checked){
    checking.disabled = true;
    }
    else{
      checking.disabled = false;
  }
}

function disableSave() {
  if(checking.checked)
  savings.disabled = true;
  else{
    savings.disabled = false;
}
}

  return (
    <Card 
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? ( 
              <>
        
              Name<br/>
              <input type="input"  className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address   
              <br/>
             
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
              
              <div id="emailHelp" className="form-text"><p className="white-text">We'll never share your email with anyone else.</p></div>
            
              <br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
              <div id="passwordHelpBlock" className="form-text"><p className="white-text">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
              </p></div>
              <br/>
              
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="checking" value="Checking Account"  onClick={disableSave} onChange={e => setType(e.currentTarget.value)}/>
                <label className="form-check-label">
                Checking
                </label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Savings Account" id="savings" onClick={disableCheck} onChange={e => setType(e.currentTarget.value)}/>
                <label className="form-check-label">
                 Savings
                </label>
              </div>
            <br/>

              <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
            </>

            ):(

              <>
              <h5>Success!!</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              <br/>
              
              <button className="login"><a  href="#/login/">Login</a></button>
           
              </>

            )}
    />
  )
}