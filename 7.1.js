const userMorozov = {
    Имя: 'Андрей',
    Фамилия: 'Морозов',
    Возраст: '28'
}
function GetKey(userMorozov){
  for (let key in userMorozov) {
    if(userMorozov.hasOwnProperty)
    console.log(key + ':' + userMorozov[key]);
  }
}
 GetKey(userMorozov);
