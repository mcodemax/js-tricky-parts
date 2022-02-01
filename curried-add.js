function curriedAdd(total) {
  function ret(input){
  	if(input === undefined) return total;
    
    total+=input;
    return ret;
  }
  
  if(total === undefined){
    return 0;
  }
  
  return ret;
}

module.exports = { curriedAdd };
