function convertToRoman(num) {
    let finalArr = [];
    let decimalArr = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let romanArr = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    while (num > 0){
        let targetNumIndex = decimalArr.findIndex(current => current <= num);
        let targetRom = romanArr[targetNumIndex];
        finalArr.push(targetRom);
        num = num - decimalArr[targetNumIndex];
    }
    return finalArr.join('');
}

console.log(convertToRoman(83));
console.log(convertToRoman(3999));
console.log(convertToRoman(798));