// MITASK K

function Vowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count = count + 1;
    }
  }

  return count;
}

console.log(Vowels("string"));

// MITASK J

//function find(str) {
//let string = str.split(" "); // bu stringni "array" qlib beradi

//let quti = ""; // bu uzun sozimnu olib beradi

//for (let i = 0; i < string.length; i++) {
// array ichidagi sozlani aylanadi
//if (string[i].length > quti.length) {
// uzunligini tekshinadi
//quti = string[i]; // uzunn bolsa ishga tushadi
//}
//}

//return quti; // bu uzun sozni qaytaradi
//}

//console.log(find("I came from Uzbekistan"));
// MITASK I

// function mitask(arr) {
//let elit = 0;
//let max = 0;
//let result = 0;

//for (let i = 0; i < arr.length; i++) {
// elit = 0;

//for (let j = 0; j < arr.length; j++) {
// if (arr[i] === arr[j]) {
// elit++;
//}
//}

// if (elit > max) {
// max = elit;
// result = arr[i];
// }
// }

// return result;
// }

// console.log(mitask([1, 2, 3, 4, 5, 4, 6, 4]));

// MITASK H

//function mitask(arr) {
//let result = "";

//for (let i = 0; i < arr.length; i++) {
// if (arr[i] > 0) {
// result = result + arr[i];
//}
//}

//return result;
//}

//console.log(mitask([1, -9, 9]));

// MITASK F

//function findDoublers(mitask) {
//for (let i = 0; i < mitask.length; i++) {
// for (let j = i + 1; j < mitask.length; j++) {
//  if (mitask[i] === mitask[j]) {
//   return true;
//}
// }
//}
//return false;
//}

// console.log(findDoublers("salom"));
// MITASK E

// function mitask(st) {
//   let result = "";

//   for (let i = st.length - 1; i >= 0; i--) {
//     result += st[i];
//   }

//   return result;
// }

// console.log(mitask("mit"));

// MITASK D

// function mitask(a, b) {
//   if (a.length !== b.length) {
//     return false;
//   }
//   return true;
// }

// console.log(mitask("mit", "mit"));

// MITASK C

// const moment = require("moment");
// const vaqt = moment().format("HH.MM");

// class Shop {
//   constructor(osh, shashlik, somsa, cola) {
//     this.osh = osh;
//     this.shashlik = shashlik;
//     this.somsa = somsa;
//     this.cola = cola;
//   }

//   qoldiq() {
//     console.log(
//       ` Hozirgi ${vaqt} da ${this.osh} ta osh , ${this.somsa} ta somsa ,va ${this.shashlik} tashashlik bor,  oxirgi qoshimchasiga ${this.cola} ta cola ham bor`,
//     );
//   }

//   sotish(nomi, soni) {
//     if (nomi === "osh");
//     this.osh -= soni;
//     if (nomi === "shashlik");
//     this.shashlik -= soni;
//     if (nomi === "somsa");
//     this.somsa -= soni;
//     if (nomi === "cola");
//     this.cola -= soni;

//     // console.log(` ${this.nomi} ta ${this.soni} sotildi :)`);
//   }

//   qabul(nomi, soni) {
//     if (nomi === "osh");
//     this.osh += soni;
//     if (nomi === "shashlik");
//     this.shashlik += soni;
//     if (nomi === "somsa");
//     this.somsa += soni;
//     if (nomi === "cola");
//     this.cola += soni;

//     console.log(` ${this.nomi} ta ${this.nomi} qabul qilindi :)`);
//   }
// }

// const shop = new Shop(10, 5, 5, 5);

// shop.qabul(1, 1, 1);
// shop.sotish(1, 1, 1, 1);
// shop.qoldiq();

// MITASK B

// function countDigits(str) {
//   let topish = 0;
//   for (let i = 0; i < str.lenght; i++) {
//     if (!isNaN(str[i]) && str[i] !== "") {
//       topish++;
//     }
//   }
//   return topish;
// }

// const natija = countDigits("a7a94h34949sf9fg9j");
// console.log(natija);

// MITASK A

// let sana = 0;

// function num(gap, world) {
//   for (let i = 0; i < gap.length; i++) {
//     if (gap[i] === world) {
//       sana++;
//     }
//   }
//   return sana;
// }

// console.log(num("engineer", "e"));

// console.log("BekzodRizo: Maslahatlari!");
// const list = [
//   "Yaxshi talaba bo'liing", // 0~20:
//   "tog'ri boshliq tanlang va koproq xato qiling", // 20~30:
//   "uzingizni ishlaringizni boshlang", // 30~40:
//   "siz kuchli bo'lgan narsalarni qiling", // 40~50:
//   "yoshlarga tafsiya bering", // 50~60":
//   "endi dam oling , foydasi yoq endi", // 60~
// ];

// Node.js event loop VA CB function:

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 40) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed hare 2");
// maslahatBering(33, (err, data) => {
//   if (err) console.log("ERROR", err);
//   console.log("javob:", data);
// });
// console.log("passed hare 1");

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 40) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed hare 2");
// maslahatBering(33, (err, data) => {
//   if (err) console.log("ERROR", err);
//   console.log("javob:", data);

// });
// console.log("passed hare 1");

// Asynchronous function:

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return [0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 40) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// .then-catch: bu usul qiyin usul vs tartibsiz usul ekan / Call qismini.
// console.log("passade hare 0");
// maslahatBering(22)
//   .then((data) => {
//     maslahatBering(45)
//       .then((data) => {
//         console.log("Javob:", data);
//       })
//       .catch((err) => {
//         console.log("ERROR:", err);
//       });
//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passad hare 1");

// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
