const str = "city2";
const city = {
  city1: "Moscow",
  city2: "N.Novgorod"
}
function getProperty(str, city) {
  if (str in city) {
    return true;
  } else {
    return false;
  }
}
console.log(getProperty(str, city))