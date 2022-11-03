
// ---
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  
  // search method that returns any matches from the list of movies
  // for example, a search of "the" returns any items on the list which 
  // includes "the" in its name.
  function search_movie() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput'); // user input
    filter = input.value.toUpperCase(); // change user input to upper case
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li'); // get list name
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h3")[0]; // we get the value from h3 tag
      txtValue = a.textContent || a.innerText;
        
    // if a match is found, display it
    //  if indexOf(filter) is > -1, then it means an item is found which matches 
    //  the input from user 
      if (txtValue.toUpperCase().indexOf(filter) > -1) { 
        li[i].style.display = "";
      }
    // if its negative, it means no such item is in the list
    // so we hide the list items that dont match
      else {  
        li[i].style.display = "none";  // corresponds to 'display: none'
      }
    }
  }


  // a method that mimmics the website sending a respons to the user
  // after user clicks on 'send' button
  let sent = button => {
    // s is our message
    let s = "Thanks for reaching out. Your query was recieved.";
    s+= "\nWe will contact you as soon as possible."
    alert(s); // displays an alert box with a message and an Ok button.
  }


  // function that displays what is checked into the screnn
  // it is displayed in a h4 tag.
  function getCheckboxValue() {
    var l1 = document.getElementById("spider");
    var l2 = document.getElementById("northman");
    var l3 = document.getElementById("deadpool");
    var l4 = document.getElementById("rushhour");
    var l5 = document.getElementById("StarisBorn");
    var l6 = document.getElementById("notebook");
    var l7 = document.getElementById("lastdance");
    var l8 = document.getElementById("chinahustle");
    var l9 = document.getElementById("it");
    var l10 = document.getElementById("us");

     
    var res = "";
    
    if (l1.checked == true){
      var pl1 = document.getElementById("spider").value;
      res = pl1; 
    } 
    else if (l2.checked == true){
      var pl2 = document.getElementById("northman").value;
      res = res + pl2 + ","; 
    }
    else if (l3.checked == true){
    document.write(res);
      var pl3 = document.getElementById("deadpool").value;
      res = res + pl3 + ","; 
      console.log("spider checked")
    }
    else if (l4.checked == true){
      var pl4 = document.getElementById("rushhour").value;
      res = res + pl4 + ","; 
    }
    else if (l5.checked == true){
      var pl5 = document.getElementById("StarisBorn").value;
      res += pl5 + ","; 
    }
    else if (l6.checked == true){
      var pl6 = document.getElementById("notebook").value;
      res += pl6; 
    } 

    else if (l7.checked == true){
      var pl6 = document.getElementById("lastdance").value;
      res += pl6; 
    } 
    else if (l8.checked == true){
      var pl6 = document.getElementById("chinahustle").value;
      res += pl6; 
    } 
    else if (l9.checked == true){
      var pl6 = document.getElementById("it").value;
      res += pl6; 
    } 
    else if (l10.checked == true){
      var pl6 = document.getElementById("us").value;
      res += pl6; 
    } 
  
    else {
    return document.getElementById("result").innerHTML = "You have not selected anything";
    }
    document.getElementById("result").innerHTML = "You have selected " + res;
  
  }