// A-task node js event loop va callbackfunctionlarni ornatamiz
// ===============================================================================
// ===============================================================================
// console.log("Jack MA maslahatlari ");
// const list = [
//   "yaxshi talaba boling ", //0-20
//   "togri boshliq tanglang va kopro hato qling", //20-30
//   "uzingizni ishingizni boshlang",//30 -40
//   "sizga bolgan narsalarni qiling",// 40-50
//   "yoshlarga investitsiya qiling",// 60-70
//   "endi dam oling foydasi yoq endi", -80-90
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//     callback(null, list[5]);
//   }
// }

// maslahatBering(55, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });
// ===============================================================================
// ===============================================================================
// ===============================================================================
//

// B TASK
// ASYNC functionlarni qollash

// console.log("Jack MA maslahatlari ");
// const list = [
//   "yaxshi talaba boling ", //0-20
//   "togri boshliq tanglang va kopro hato qling", //20-30
//   "uzingizni ishingizni boshlang",
//   "sizga bolgan narsalarni qiling",
//   "yoshlarga investitsiya qiling",
//   "endi dam oling foydasi yoq endi",
// ];

// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a < 20 && a <= 30) callback(null, list[1]);
//   else if (a < 30 && a <= 40) callback(null, list[2]);
//   else if (a < 40 && a <= 50) callback(null, list[3]);
//   else if (a < 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log(data);
//   }
// });
// console.log("passed here 1");

// ASYNC FUNCTION
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number", null);
//   else if (a <= 20) return list[0];
//   else if (a < 20 && a <= 30) return list[1];
//   else if (a < 30 && a <= 40) return list[2];
//   else if (a < 40 && a <= 50) return list[3];
//   else if (a < 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// setTimeout(function () {
//   callback(null, list[5]);
// }, 5000);
// callback(null, list[5]);

// console.log("passed here 0");
// maslahatBering(70)
//   .then((data) => {
//     console.log(`javob:`, data);
//   })
//   .catch((err) => {
//     console.log(`ERROR:`, err);
//   });
// console.log("passed here 1");

//CALL via then/catch
// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================
// // TASK C HOMEWORK
// const countLetter = (a, b) => {
//   a = a.toLowerCase();
//   b = b.toLowerCase();

//   let count = 0;
//   for (const char of b) {
//     // ✅ Cleaner loop
//     if (char === a) count++;
//   }
//   return count;
// };

// console.log(countLetter("e", "Engineer")); // Output: 3
// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

// TASK D HOMEWORK
function countDigits(inputString) {
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] >= "0" && inputString[i] <= "9") {
      count++;
    }
  }
  return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));

// ==========================================================================================
// ==========================================================================================
