var lastDayOfMonth = require("date-fns/lastDayOfMonth");
var getDay = require("date-fns/getDay");
var argv = require("minimist")(process.argv);

let dateObj = new Date();
let year = dateObj.getFullYear();
let month = dateObj.getMonth() + 1;
let error_msg = "";

// -mオプション
if ("m" in argv) {
  if (typeof argv["m"] === "number") {
    argv["m"] < 1 || argv["m"] > 12
      ? (error_msg = `cal: ${argv["m"]} is neither a month number (1..12) nor a name`)
      : (month = argv["m"]);
  } else {
    argv["m"] === true
      ? (error_msg = "cal: option requires an argument -- m")
      : (error_msg = `cal: ${argv["m"]} is neither a month number (1..12) nor a name`);
  }
}

// -yオプション
if ("y" in argv) {
  if (typeof argv["y"] === "number") {
    argv["y"] < 1970 || argv["y"] > 2100
      ? (error_msg = `cal: ${argv["y"]} is neither a year number (1970..2100) nor a name`)
      : (year = argv["y"]);
  } else {
    argv["y"] === true
      ? (error_msg = "cal: option requires an argument -- y")
      : (error_msg = `cal: ${argv["y"]} is neither a year number (1970..2100) nor a name`);
  }
}

error_msg == "" ? printCaleder(year, month) : console.log(error_msg);

function printCaleder(year, month) {
  const DAY_OF_WEEK = ["日", "月", "火", "水", "木", "金", "土"];
  let dateObj = new Date(year, month - 1, 1);
  let header = `      ${month}月 ${year}     `;
  let format_week = ["  ", "  ", "  ", "  ", "  ", "  ", "  "];
  let first_day_of_the_month = getDay(dateObj); // 月初の曜日
  let last_day_of_month = lastDayOfMonth(dateObj).getDate(); // 月末日
  let day_index = first_day_of_the_month;
  let current_date = 1;

  // ヘッダー出力
  console.log(header);
  console.log(DAY_OF_WEEK.join(" "));

  // 日付部分
  for (var i = 0; i < last_day_of_month; i++) {
    format_week[day_index] =
      String(current_date).length == 1 ? ` ${current_date}` : `${current_date}`;
    day_index++;
    current_date++;

    if (day_index > 6) {
      console.log(format_week.join(" "));
      format_week = ["  ", "  ", "  ", "  ", "  ", "  ", "  "];
      day_index = 0;
    }

    if (current_date > last_day_of_month) {
      console.log(format_week.join(" "));
    }
  }
}
