const Withdraw = ({ onChange, isDeposit }) => {
  const choice = ["Amount of Withdraw"];


  return (
    
     <Card
        header="Withdraw Amount"
        bgcolor="danger"
        body={(
      <label className="label huge">
         <h3>{choice[Number(!isDeposit)]}</h3>

      <input
        type="number"
        width="200"
        onChange={onChange}
        placeholder="$ Enter Withdrawal Amount Here"
      ></input>
      <br/> <br/>
      <input
        className="submit"
        type="submit"
        width="200"
        value="Submit"
      ></input>
      <div className="balance">
        <Balance></Balance>
      </div>
    </label>
    
               )}
    />         
  );
 
};
