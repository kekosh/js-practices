var lastDayOfMonth = require("date-fns/lastDayOfMonth");
var getDay = require("date-fns/getDay");
var argv = require("minimist")(process.argv);

let dateObj = new Date();
let year = dateObj.getFullYear();
let month = dateObj.getMonth() + 1;
let errorMsg = "";

// -mオプション
if ("m" in argv) {
  if (typeof argv["m"] === "number" && argv["m"] >= 1 && argv["m"] <= 12) {
    month = argv["m"];
  } else {
    errorMsg = `cal: ${argv["m"]} is neither a month number (1..12) nor a name`;
  }
}

// -yオプション
if ("y" in argv) {
  if (typeof argv["y"] === "number" && argv["y"] >= 1970 && argv["y"] <= 2100) {
    year = argv["y"];
  } else {
    errorMsg = `cal: ${argv["y"]} is neither a year number (1970..2100) nor a name`;
  }
}

errorMsg == "" ? printCaleder(year, month) : console.log(errorMsg);

function printCaleder(year, month) {
  const DAY_OF_WEEK = ["日", "月", "火", "水", "木", "金", "土"];
  let dateObj = new Date(year, month - 1, 1);
  let header = `      ${month}月 ${year}     `;
  let formatWeek = ["  ", "  ", "  ", "  ", "  ", "  ", "  "];
  let firstDayOfTheMonth = getDay(dateObj); // 月初の曜日
  let endOfTheMonth = lastDayOfMonth(dateObj).getDate(); // 月末日
  let dayIndex = firstDayOfTheMonth;
  let currentDate = 1;

  // ヘッダー出力
  console.log(header);
  console.log(DAY_OF_WEEK.join(" "));

  // 日付部分
  for (var i = 0; i < endOfTheMonth; i++) {
    formatWeek[dayIndex] = String(currentDate).padStart(2, " ");
    dayIndex++;
    currentDate++;

    if (dayIndex > 6 || currentDate > endOfTheMonth) {
      console.log(formatWeek.join(" "));
      formatWeek = ["  ", "  ", "  ", "  ", "  ", "  ", "  "];
      dayIndex = 0;
    }
  }
}
