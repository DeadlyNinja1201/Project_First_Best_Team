/* randNum(max);
a helper function to return whole number randoms
@param max {int} the max in the random range
@return {int} a random number of 1 or more
*/
function randNum(max) {return Math.floor(Math.random()*max)+1}
/* uniqueIndex(max, number)
a helper function to get unique numbers out of a range so as to avoid reuse.
@param max {int} the max number in the number in the range +1
@param number {int} the number of responses to return
@return {array} an array of the selected number
*/
function uniqueIndex(max, number){
    var array = [];
    var numbers = [];
    array.length = max;
    for(var i = 0; i < number; i++){
        var num = randNum(max);
        if (array[num] !== "") {
        numbers[i] = num;
        }
        else{
        var num = randNum(max);
        i--;
        }
        array[num] = "";
}
return numbers;
}
/* andEval(condition1, condition2)
takes two conditions and makes a new condition out of them based on their combined
and state and combines the text of the two conditions. Cleans up text some
@param condition1 {object} an object with str and bool keys
@param condition2 {object} an object with str and bool keys
@return {object} an object with str and bool keys
*/
function andEval(condition1,condition2){
  var retObj = {};
  retObj.str = condition1.str + " and " + condition2.str;
  retObj.negated = condition1.negated;
  retObj.bool = condition1.bool && condition2.bool;
  return retObj;
}
/* orEval(condition1, condition2)
takes two conditions and makes a new condition out of them based on their combined
or state and combines the text of the two conditions. Cleans up text some
@param condition1 {object} an object with str and bool keys
@param condition2 {object} an object with str and bool keys
@return {object} an object with str and bool keys
*/
function orEval(condition1,condition2){
  var retObj = {};
  retObj.str = condition1.str + " or " + condition2.str;
  retObj.negated = condition1.negated;
  retObj.bool = condition1.bool || condition2.bool;
  return retObj;
}
/* notEval(condition)
takes a condition, negates it's value, adds the text "it is not the case that" to the
front of it, sets the negated key to true
@param condtion {object} an object with str and bool keys
@return {object} an object with str, bool, and negated keys
*/
function notEval(condition){
  return {str: "It is not the case that " + condition.str, bool: !condition.bool, negated: !condition.negated};
}
/* makeQuestion(conditions, maxDepth=3, negate=.2)
takes an array of condition objects formated {str: text, bool: bool, negated: bool}
and uses it make a question of depths between 1 - maxDepth combined statement length
@param condition {array} an array of objects formatted as listed above
@param maxDepth {int} number of conditionals to be put together at max
@param negate {float} chance of a negation happening
@return a new object with the same general format
*/
function makeQuestion(conditions, maxDepth=randNum(3), negate=.2){
    var neg = "neg";
    var or = "or";
    var and = "and";
    var array = [neg,and,and,or,or];
    var condiArray = [];
    for(var i = 0; i < maxDepth; i++){
        var randNeg = array[Math.floor(Math.random()*array.length)];
        var condi = conditions[randNum(conditions.length)];
        var condi2 = conditions[randNum(conditions.length)];
        console.log(maxDepth);
        if (randNeg == neg) {
            condiArray[i] = notEval(condi);
        }
        condi = conditions[randNum(conditions.length)];
        condi2 = conditions[randNum(conditions.length)];
        if (randNeg == and) {
            condiArray[i] = andEval(condi,condi2);
    }
        condi = conditions[randNum(conditions.length)];
        condi2 = conditions[randNum(conditions.length)];
        if (randNeg == or) {
            condiArray[i] = orEval(condi,condi2);
    }
    }
    console.log(condiArray)
    var testCondi1 = condiArray[0];
    var testCondi2 = condiArray[1];
    var testCondi3 = condiArray[2];
    var negatedd = false;
    if (testCondi1.negated == true) {
      negatedd = true;
}
    if (testCondi2 !== undefined && testCondi2.negated == true) {
      negatedd = true;

}
     if (testCondi3 !== undefined && testCondi3.negated == true) {
        negatedd = true;
}

    if (condiArray.length == 2) {
          return {str:testCondi1.str + " " + testCondi2.str, negated:negatedd, bool:testCondi1.bool && testCondi2.bool};
}
    if (condiArray.length == 3) {
          return {str:testCondi1.str + " " + testCondi2.str + " " + testCondi3.str,negated:negatedd, bool:testCondi1.bool && testCondi2.bool && testCondi3.bool};
}
    if (condiArray.length == 1) {
          return {str:testCondi1.str, negated:negatedd, bool:testCondi1.bool};
}
}
/* makeSentence(condition)
Makes a (likely run-on) sentence out of a conditional stored in an object with the keys str, bool, and negated.
It does the following: if negated then it capitalized the i in "it is not the case" and adds a period to the end of the str.
If it is not negated then it adds the phrase "It is the case " to the start of the str and adds a period to the end of the string.
@param condition {array} an array of objects formatted as listed above
@return {object} a new object with the same general format
*//*mk for loop cz we want to determin && or || fr look one time... use i fr iterator... way 1.i and i +1... 2. i and i-1
if is the case... make loop with langth -2 instead of minus 1... use of continue if i = 0...
way 3. for i in length of the array using pop to pop of the end of the array will have to treat the last on different from the
other last ones?... first thing check if is negated make the return object equal to the first thing following the first thing
there ar emore than one things inside of it figure out && or ||, and go through way three. have ret obj new item ret obj
return ret obj...
*/
function makeSentence(condition) {
}
