const musicians = ["John", "Paul", "George", "Ringo"];
const instruments = ["guitar", "guitar", "bass", "drums"];
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}
theBeatlesPlay(musicians, instruments);

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(arr) {
  var result= []; 
  var i = 0; 
  while(i < arr.length) {
    result.push(arr[i] + '!!!')
    i++; 
  }
  return result; 
}

johnLennonFacts(facts);