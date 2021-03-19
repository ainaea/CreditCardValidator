// All valid credit card numbers
const valid1 = "4539 6779 0801 6808";
const valid2 = "5535 7667 6875 1439";
const valid3 = "3716 1201 9985 236";
const valid4 = "6011 1443 4068 2905";
const valid5 = "4539 4049 6786 9666";

// All invalid credit card numbers
const invalid1 = "4532 7787 7109 1795";
const invalid2 = "5795 5933 9213 4643";
const invalid3 = "3757 9608 4459 914";
const invalid4 = "6011 1279 6177 7935";
const invalid5 = "5382 0197 7288 3854";

// Can be either valid or invalid
const notCertain1 = "3448 0196 8305 414";
const notCertain2 = "5466 1008 6162 0239";
const notCertain3 = "6011 3770 2096 2656 203";
const notCertain4 = "4929 8771 6921 7093";
const notCertain5 = "4913 5404 6307 2523";

// An array of all the arrays above

const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, notCertain1, notCertain2, notCertain3, notCertain4, notCertain5]

// Add your functions below:

function transformStrArr(entryStr) {
    if(entryStr.length == 0 || typeof(entryStr) != "string"){return 'Invalid string'}
    return entryStr.replace(/\s+/g, '').split('');
}

// console.log(valid5,transformStrArr(valid5));


function validateCard(entryArr) {
    if (entryArr.length == 0){return 'Invalid data'}
    var sum = 0;
    for (let i=0; i < entryArr.length; i++){
       var arrElement = entryArr[entryArr.length -1 -i];
       if ( i % 2 == 0 ){
            sum += parseInt(arrElement);
       }else {
           sum += parseInt(arrElement > 4? (2*arrElement)-9: (2*arrElement))
       }
    }
    return (sum % 10) == 0? true: false;
}

// console.log(validateCard(transformStrArr(invalid3)));


function findInvalidCards(nestedArr) {
    var invalidCards = [];
    for (let i=0; i < nestedArr.length; i++){
        // var refinedArr = ;
        validateCard(transformStrArr(nestedArr[i]))? null: invalidCards.push(nestedArr[i]);

     }
     return invalidCards;
}

// console.log(findInvalidCards([invalid5, invalid2, invalid4]));


function idInvalidCardIssuers(nestedArr) {
    var faultyIssuers = []
    for (let i=0; i < nestedArr.length; i++){
        var issuer;
        switch (true) {
            case nestedArr[i][0] == 3:
                issuer = 'Amex (American Express)'
                break;
            case nestedArr[i][0] == 4:
                issuer = 'Visa'
                break;
            case nestedArr[i][0] == 5:
                issuer = 'MasterCard'
                break;
            case nestedArr[i][0] == 6:
                issuer = 'Discover'
                break;
        
            default:
                alert(`Issuer of Card ${nestedArr[i]} not found`);
                break;
        }
        faultyIssuers.indexOf(issuer) == -1? faultyIssuers.push(issuer): null;
     }
     return faultyIssuers
}

// console.log(idInvalidCardIssuers(batch));