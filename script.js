// function myFunction() {
//     var year = document.getElementsByClassName("scheme");
//     if (year === 2012) {
      
//     }
//   }

function upStream(){
   // document.body.department.visibility= "visible";
    document.getElementsByClassName('department')[0].style.visibility = "visible"; //.style.visibility='visible';

}
function upDepartment(){
    document.getElementsByClassName('semester')[0].style.visibility = "visible";
   
}


function myFunction() {
    upStream();
    upDepartment();
    console.log("MuFnCalled")

    var dept = document.getElementById("branch").value;
    var sem = document.getElementById("sem").value;
    var scheme = document.getElementById("scheme").value;
    console.log(dept);
    console.log(sem);
    console.log(scheme);

  }