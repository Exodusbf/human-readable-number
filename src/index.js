module.exports = function toReadable (number) {
    let singleDigits = ['','one','two','three','four','five','six','seven','eight','nine'];
    let exteptionDigits = ['ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let doubleDigits = ['', '','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let newMassive = ('');
    newMassive += (number.toString().split(','));
    
    if (newMassive.length == 1 && newMassive[0] == 0) {
        return  ('zero').trim();
    }
    
    else if (newMassive.length == 1 && newMassive[0] !== 0 ) {
        return (singleDigits[newMassive[0]]);
    }

    if (newMassive.length == 2 && newMassive[0] >= 2) {
        return (doubleDigits[newMassive[0]] + ' ' + singleDigits[newMassive[1]]).trim();
    }
    
    else if (newMassive.length == 2 && newMassive[0] == 1) { 
        return exteptionDigits[newMassive[1]].trim();
    }

    if (newMassive.length == 3 && newMassive[1] >= 2) {
        return (singleDigits[newMassive[0]] + ' hundred ' + doubleDigits[newMassive[1]] + ' ' + singleDigits[newMassive[2]]).trim();
    }

    else if (newMassive.length == 3 && newMassive[1] == 1) {
        return (singleDigits[newMassive[0]] + ' hundred ' + exteptionDigits[newMassive[2]]).trim();
    }

    else if (newMassive.length == 3 && newMassive[1] == 0) {
        return (singleDigits[newMassive[0]] + ' hundred ' + singleDigits[newMassive[2]]).trim();
    }
}
