function createAccount(pin, amount) {
	//let balance = amount;

	function checkBalance(entry){
  	if(entry === pin) return amount;
    
    return 'Invalid PIN.';
  }
  
  function deposit(entry, deposit){
  	if(entry !== pin) return 'Invalid PIN.';
    
    amount+=deposit;
  }
  
  function withdraw(entry, withdrawl){
  	if(entry !== pin) return 'Invalid PIN.';
    
    amount-=withdrawl;
  }
  
  function changePin(oldPin, newPin){
  	if(oldPin !== pin) return 'Invalid PIN.';
    
    pin = newPin;
  }
  
  return {checkBalance, deposit, withdraw, changePin};
}

module.exports = { createAccount };
