var lastDayOfMonth = require("date-fns/lastDayOfMonth");
var getDay = require("date-fns/getDay");

const DAY_OF_WEEK = ["日", "月", "火", "水", "木", "金", "土"];

let dateInstance = new Date();
let year = dateInstance.getFullYear();
let month = dateInstance.getMonth() + 1;
let date = dateInstance.getDate();
let day = dateInstance.getDay();

let header = `      ${month}月 ${year}     `;

//ヘッダー出力
console.log(header);
console.log(DAY_OF_WEEK.join(" "));

// 月初の曜日
let first_day_of_the_month = getDay(new Date(year, month - 1, 1));

// 月末日
let last_day_of_month = lastDayOfMonth(dateInstance).getDate();

// let row_week = ["", "", "", "", "", "", ""];
// let row_week_index = first_day_of_the_month;
// for (let i = 1; i <= last_day_of_month; i++) {
//   row_week[row_week_index] = i;
//   if (row_week_index == 6) {
//     console.log(row_week);
//     row_week_index = 0;
//   } else {
//     row_week_index += 1;
//   }
// }

// 月末日の曜日
// let day_of_the_month = getDay(new Date(year, month - 1, last_day_of_month));
// console.log(DAY_OF_WEEK[day_of_the_month]);
