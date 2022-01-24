module.exports = function toReadable (number) {
    let array1 = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
    let array2 = ["","ten","twenty","thirty","forty",'fifty','sixty','seventy','eighty','ninety']
    let a =  number.toString().split('')
    if (number / 10 <= 2) {
      return array1[number]
    } else if (number / 10 > 2 && number / 10 < 10) {
        if (a[1] != "0") {return array2[Number(a[0])] +" " + array1[Number(a[1])]}
        else {return array2[Number(a[0])]}
    } else if (number / 10 >= 10) {
        if (a[1] == "0" && a[2] == "0") {
          return array1[Number(a[0])] + " " + "hundred"
      } else if (a[1] == "0" && a[2] != "0") {
          return array1[Number(a[0])] + " " + "hundred" + " " + array1[Number(a[2])]
      } else if (a[1] != "0" && a[2] == "0"){
          return array1[Number(a[0])] + " " + "hundred" + " " + array2[Number(a[1])]
      } else if (a[1] != "0" && Number(a[1]) < 2 && a[2] != "0") {
            return array1[Number(a[0])] + " " + "hundred" + " " + array1[Number(a[1] + a[2])]
         }
       else  {
         return array1[Number(a[0])] + " " + "hundred" + " " + array2[Number(a[1])] + " " + array1[Number(a[2])]
      }
    }
}
