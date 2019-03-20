const validate = (a,b) => {
  if(isNaN(a) || isNaN(b)){
    return false
  }
  return true
}
module.exports={ validate }
