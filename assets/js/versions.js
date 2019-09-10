var text="";
var xhr = new XMLHttpRequest(),
  method = "GET",
  url = "https://api.github.com/repos/qlack/QLACK-Java/releases";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    
     var myObj = JSON.parse(xhr.responseText);
     for (x in myObj) {
        text+=  "<section class='no-border-bottom'><div class='container'> <header class='section-header'>";
        text += " <span>" + myObj[x].published_at.slice(0,10) + "</span>";
        text +=  "<h2> Version "+myObj[x].tag_name+"</h2>"
        text +=  "<p class='version-body'>"+ myObj[x].body+"</p>"
        text += "  </header> </div> </section>";
   }
    
    document.getElementById("versions").innerHTML = text;
      console.log(myObj[x].tag_name);
  }
};
xhr.send();