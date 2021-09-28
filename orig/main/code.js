numtoranby = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // list of numbers that will be randomised to create the inner HTML of the divs.
bontainer = document.getElementsByClassName("bontainer")[0];
tbclickeders = document.querySelectorAll(".tbclicked"); //all items which have class tbclicked
intab = document.getElementsByClassName("intab")[0]; //endtext
const randnums = []; // list of numbers that are randomised to create the inner HTML of the divs.
const millisecondlist = []; //list of times that tbclickeders were clicked

for (let tbclicker = 0; tbclicker < 12; tbclicker++) {
  var date = new Date();
  var milliseconds = date.getTime(); //time in milliseconds since 1970
  n = 0; //incrementer for summat ig? optimisable
  var vartobeassigned =
    document.getElementsByClassName("tbclicked")[tbclicker].children[0];
  abya = Math.floor(Math.random() * numtoranby.length);
  randnumba = numtoranby[abya];
  numtoranby.splice(abya, 1);
  randnums[tbclicker] = randnumba;
  vartobeassigned.innerHTML = randnumba;
}
// ↑↑↑ creates list of random numbers (stored in randnums) and assigns them to the innerHTML of the various h1s

document.addEventListener("click", function (i) {
  if (i.target.classList.contains("tbclicked")) {
    var aichwuns = i.target.children[0];
    if (aichwuns.innerHTML == n + 1) {
      var newdate = new Date();
      var newmilli = newdate.getTime();
      // console.log(newmilli - milliseconds);
      // i.target.children[0].innerHTML = newmilli - milliseconds;
      millisecondlist[n] = newmilli - milliseconds;
      i.target.style.visibility = "hidden";
      n += 1;
      milliseconds = newmilli;
      if (i.target.children[0].innerHTML == "12") {
        // intab.style.display = "block";
        // bontainer.style.display = "none";
        // intab.insertAdjacentHTML("afterbegin", "bruh");
        const bobby = JSON.stringify(millisecondlist);
        localStorage.setItem("millisecond-list", bobby);
        console.log(localStorage);
        window.location.href = "/results/results.html";
      }
    }
  }
});

// ↑↑↑ on click of a tbclickeders div, visibility:hidden said div. record time since 1970 and compare to last recording. assign difference to newmilli.
// ↑↑↑ if its the div with innerHTML of 12, then display:none bontainer. Then, add the list of times that tbclickeders were clicked to the content of intab.
// ↓↓↓ same thing but its for h1s and their parent elements

document.addEventListener("click", function (i) {
  if (i.target.parentElement.classList.contains("tbclicked")) {
    var aichwuns = i.target.parentElement.children[0];
    if (aichwuns.innerHTML == n + 1) {
      var newdate = new Date();
      var newmilli = newdate.getTime();
      // console.log(newmilli - milliseconds);
      // i.target.innerHTML = newmilli - milliseconds;
      millisecondlist[n] = newmilli - milliseconds;
      i.target.parentElement.style.visibility = "hidden";
      n += 1;
      milliseconds = newmilli;
      if (i.target.innerHTML == "12") {
        // console.log(i.target.children[0]);
        // intab.style.display = "block";
        // bontainer.style.display = "none";
        // console.log(millisecondlist);
        // intab.insertAdjacentHTML("afterbegin", "bruh");
        const bobby = JSON.stringify(millisecondlist);
        localStorage.setItem("millisecond-list", bobby);
        console.log(localStorage);
        window.location.href = "/results/results.html";
        // n = n + millisecondlist[l];
        // n += 1;
        // console.log(millisecondlist[eachtbcitem]);
        // console.log(n - 12);
      }
    }
  }
});

// ↓↓↓ sets position of tbclicked elements

(document.getElementsByClassName("tbclicked")[0].style.gridColumnStart = "1"),
  (document.getElementsByClassName("tbclicked")[0].style.gridRowStart = "1"),
  (document.getElementsByClassName("tbclicked")[1].style.gridColumnStart = "2"),
  (document.getElementsByClassName("tbclicked")[1].style.gridRowStart = "1"),
  (document.getElementsByClassName("tbclicked")[2].style.gridColumnStart = "3"),
  (document.getElementsByClassName("tbclicked")[2].style.gridRowStart = "1"),
  (document.getElementsByClassName("tbclicked")[3].style.gridColumnStart = "1"),
  (document.getElementsByClassName("tbclicked")[3].style.gridRowStart = "2"),
  (document.getElementsByClassName("tbclicked")[4].style.gridColumnStart = "2"),
  (document.getElementsByClassName("tbclicked")[4].style.gridRowStart = "2"),
  (document.getElementsByClassName("tbclicked")[5].style.gridColumnStart = "3"),
  (document.getElementsByClassName("tbclicked")[5].style.gridRowStart = "2"),
  (document.getElementsByClassName("tbclicked")[6].style.gridColumnStart = "1"),
  (document.getElementsByClassName("tbclicked")[6].style.gridRowStart = "3"),
  (document.getElementsByClassName("tbclicked")[7].style.gridColumnStart = "2"),
  (document.getElementsByClassName("tbclicked")[7].style.gridRowStart = "3"),
  (document.getElementsByClassName("tbclicked")[8].style.gridColumnStart = "3"),
  (document.getElementsByClassName("tbclicked")[8].style.gridRowStart = "3"),
  (document.getElementsByClassName("tbclicked")[9].style.gridColumnStart = "1"),
  (document.getElementsByClassName("tbclicked")[9].style.gridRowStart = "4"),
  (document.getElementsByClassName("tbclicked")[10].style.gridColumnStart =
    "2"),
  (document.getElementsByClassName("tbclicked")[10].style.gridRowStart = "4"),
  (document.getElementsByClassName("tbclicked")[11].style.gridColumnStart =
    "3"),
  (document.getElementsByClassName("tbclicked")[11].style.gridRowStart = "4");
