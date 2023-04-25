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
  