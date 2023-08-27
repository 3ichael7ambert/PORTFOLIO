// Function to show/hide project sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains("hide")) {
      section.classList.remove("hide");
    } else {
      section.classList.add("hide");
    }
  }
  
  // Add event listeners to project headings
  const projectHeadings = document.querySelectorAll(".project-heading");
  projectHeadings.forEach(function (heading) {
    heading.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project");
      toggleSection(projectId);
    });
  });


///external xml
function getData(file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      displayData(this.responseXML);
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}

function displayData(xml) {
  var items = xml.getElementsByTagName("item");
  var output = "<ul>";
  for (var i = 0; i < items.length; i++) {
    var title = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    var description = items[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
    output += "<li><strong>" + title + "</strong>: " + description + "</li>";
  }
  output += "</ul>";
  document.getElementById("data").innerHTML = output;
}
