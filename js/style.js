  
  //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
function closenav(){
  document.getElementById("mysidenav").style.width="0px";
  document.getElementById("closebtn").style.display="none";
  document.getElementById("main").style.display="block";
}
function opennav(){
  document.getElementById("mysidenav").style.width="280px";
  document.getElementById("closebtn").style.display="block";
  document.getElementById("closebtn").style.visibility="visible";
  document.getElementById("main").style.position="fixed";
  document.getElementById("mysidenav").style.position="fixed";

}
