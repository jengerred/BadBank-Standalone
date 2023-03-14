const Deposit = ({ onChange, isDeposit }) => {

  onload = () => setIsDeposit(true);
  return (
  
    <Card
    header="Deposit Amount"
    bgcolor="success"
    body={(
          
            <label className="label huge">
               <Balance></Balance>
        <input
          type="number"
          width="200"
          /*onChange={handleChange}*/
          placeholder="$ Enter Deposit Amount Here"
        ></input>
        <br/> <br/>
     
        <input
          className="submit"
          type="submit"
          width="200"
          value="Submit"
          /*onSubmit={handleSubmit}*/
        ></input>

       
</label>
          )}
   />
   
    );
};







