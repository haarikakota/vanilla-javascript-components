fetch("./index.json")
  .then((response) => response.json())
  .then(({ projects }) => {
    populateProjectInfo(projects);
  });

function populateProjectInfo(projects) {
  projects.forEach((app) => {
    let element = `
		<div class="col" data-aos="fade-up" >
			<div class="card" data-aos="fade-up">
				<img src="${app.image_path}" class="card-img-top" alt="${app.name}">
				<div class="card-body">
					<h5 class="card-title">${app.name}</h5>
					<a href="${app.url}" class="btn btn-primary">Visit App</a>
				</div>
			</div>
		</div>
	  `;
    document
      .getElementById("app-container")
      .insertAdjacentHTML("beforeend", element);
  });
}

AOS.init({
  delay: 200,
  duration: 1500,
  once: false,
  mirror: false,
});
