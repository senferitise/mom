alltime = 0;
slowtime = 0;
quicktime = 1000000;
avgtime = 0;

let importmilli = localStorage.getItem("millisecond-list");
// console.log(localStorage.getItem("millisecond-list"));
let millisecondlist = JSON.parse(importmilli);
/////////////////////////////////////// console.log(millisecondlist);

for (let l = 0; l < 12; l++) {
  alltime = alltime + millisecondlist[l];
  if (millisecondlist[l] > slowtime) {
    slowtime = millisecondlist[l];
  }
  if (millisecondlist[l] < quicktime) {
    quicktime = millisecondlist[l];
  }
}
avgtime = parseInt(alltime / 12);
alltime = " " + alltime / 1000 + " seconds";
slowtime = " " + slowtime / 1000 + " seconds";
quicktime = " " + quicktime / 1000 + " seconds";
avgtime = " " + avgtime / 1000 + " seconds";

document
  .getElementsByClassName("alltime")[0]
  .insertAdjacentHTML("beforeend", alltime);
document
  .getElementsByClassName("slowtime")[0]
  .insertAdjacentHTML("beforeend", slowtime);
document
  .getElementsByClassName("quicktime")[0]
  .insertAdjacentHTML("beforeend", quicktime);

document
  .getElementsByClassName("avgtime")[0]
  .insertAdjacentHTML("beforeend", avgtime);
