function CardProject() {
  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold mb-5">Featured Projects</h2>

      <div className="row g-4">
        {/* Projeto 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img
              src="./images/img-nexuspay.png"
              className="card-img-top"
              alt="Nexus Pay"
            />

            <div className="card-body">
              <h4 className="card-title">Nexus Pay</h4>

              <p className="card-text">
                A finance website where users can simulate investments, organize
                a virtual portfolio and learn about fixed-income investments
                through free lessons.
              </p>

              <h6>Technologies</h6>

              <span className="badge bg-primary me-2">React</span>
              <span className="badge bg-warning text-dark me-2">
                JavaScript
              </span>
              <span className="badge bg-success me-2">Bootstrap</span>

              <hr />

              <h6>Development</h6>

              <p>
                Created using React, JavaScript and Bootstrap. The website was
                built to improve financial education through investment
                simulations.
              </p>

              <a
                href="https://duartexz-dev.github.io/NexusPay/"
                className="btn btn-primary me-2"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/duartexz-dev/NexusPay"
                className="btn btn-dark"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img
              src="./images/img-focus.png"
              className="card-img-top"
              alt="Focus"
            />

            <div className="card-body">
              <h4 className="card-title">Focus</h4>

              <p className="card-text">
                A productivity platform with task management, goals,
                authentication and the Pomodoro Technique.
              </p>

              <h6>Technologies</h6>

              <span className="badge bg-danger me-2">HTML</span>
              <span className="badge bg-warning text-dark me-2">
                JavaScript
              </span>
              <span className="badge bg-success me-2">Bootstrap</span>

              <hr />

              <h6>Development</h6>

              <p>
                Built using React and Bootstrap with a relaxing UI inspired by
                beige, green and brown colors.
              </p>

              <a
                href="https://duartexz-dev.github.io/Focus/"
                className="btn btn-primary me-2"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/duartexz-dev/Focus"
                className="btn btn-dark"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Projeto 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img
              src="./images/img-Code.flow.png"
              className="card-img-top"
              alt="CodeFlow"
            />

            <div className="card-body">
              <h4 className="card-title">CodeFlow</h4>

              <p className="card-text">
                An AI-powered platform that offers programming courses,
                mini-games and coding challenges.
              </p>

              <h6>Technologies</h6>

              <span className="badge bg-primary me-2">Antigravity </span>
              <span className="badge bg-info me-2">Gemini</span>
              <span className="badge bg-secondary me-2">ChatGPT</span>

              <hr />

              <h6>Development</h6>

              <p>
                Developed with the support of AI tools like ChatGPT, Gemini and
                Claude to create an interactive learning platform.
              </p>

              <a
                href="https://duartexz-dev.github.io/Code.Flow/"
                className="btn btn-primary me-2"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/duartexz-dev/Code.Flow"
                className="btn btn-dark"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardProject;
