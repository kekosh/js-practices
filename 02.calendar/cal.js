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
let format_week = ["  ", "  ", "  ", "  ", "  ", "  ", "  "];
let day_index = first_day_of_the_month;
let current_date = 1;

for (var i = 0; i < last_day_of_month; i++) {
  format_week[day_index] =
    String(current_date).length == 1 ? ` ${current_date}` : `${current_date}`;
  current_date++;
  day_index++;
  if (day_index > 6) {
    console.log(format_week.join(" "));
    format_week = ["  ", "  ", "  ", "  ", "  ", "  ", "  "];
    day_index = 0;
  }
}

// 月末日の曜日
// let day_of_the_month = getDay(new Date(year, month - 1, last_day_of_month));
// console.log(DAY_OF_WEEK[day_of_the_month]);
