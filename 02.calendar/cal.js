const DAY_OF_WEEK = ["日", "月", "火", "水", "木", "金", "土"];

let dateInstance = new Date();
let year = dateInstance.getFullYear();
let month = dateInstance.getMonth() + 1;
let date = dateInstance.getDate();
let day = dateInstance.getDay();

let header = `      ${month}月 ${year}     `;
console.log(header);
console.log(header_of_the_day(DAY_OF_WEEK));
// console.log(`${year}/${month}/${date}(${DAY_OF_WEEK[day]})`);

function header_of_the_day(days) {
  let header_str = "";
  days.forEach((day) => {
    header_str += day + " ";
  });

  return header_str.trimEnd();
}
