'use strict'

console.log('hi');


function init(){
    renderprojects()
}

function renderprojects() {
    var projects = getprojects()

    var strHtmls = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${project.name}.png" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>
        `
    })

    console.log(strHtmls);

    $('.projects').html(strHtmls.join(''))
}