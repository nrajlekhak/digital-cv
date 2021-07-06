const projects = document.querySelectorAll('.collapse-btn');

projects.forEach(project => {
  project.addEventListener('click', collapse);
});

function collapse(e) {
  e.preventDefault();
  if (e.toElement.tagName == 'I') {
    let project = e.target.parentElement.parentElement.parentElement;
    e.target.classList.toggle('fa-caret-down');
    e.target.classList.toggle('fa-caret-right');
    project.classList.toggle('collapse');
    
  } else if (e.toElement.tagName == 'A') {
    let project = e.target.parentElement.parentElement;
    project.classList.toggle('collapse');
    e.target.children[0].classList.toggle('fa fa-caret-down');
    e.target.children[0].classList.toggle('fa fa-caret-right');
  }

  
}