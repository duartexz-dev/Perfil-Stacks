function Card() {
  return (
    <div>
      <h1 className="d-flex justify-content-center align-items-center">
        Arthur Duarte
      </h1>

      <div className="card-stacks d-flex justify-content-center align-items-center gap-4 py-3">
        <img
          src="https://cdn.simpleicons.org/javascript/F7DF1E"
          alt="JavaScript"
          width="50"
          height="50"
          className="img-fluid"
        />

        <img
          src="https://cdn.simpleicons.org/react/61DAFB"
          alt="React"
          width="50"
          height="50"
          className="img-fluid"
        />

        <img
          src="https://cdn.simpleicons.org/bootstrap/7952B3"
          alt="Bootstrap"
          width="50"
          height="50"
          className="img-fluid"
        />

        <img
          src="https://cdn.simpleicons.org/css/1572B6"
          alt="CSS"
          width="50"
          height="50"
          className="img-fluid"
        />

        <img
          src="https://cdn.simpleicons.org/html5/E34F26"
          alt="HTML"
          width="50"
          height="50"
          className="img-fluid"
        />
      </div>

      <details class="detalhes">
        <summary className="btn btn-primary d-flex justify-content-center align-items-center">
          About me
        </summary>

        <h4 id="#descripitions" className="fw-normal">
          Hi! I'm Arthur, a passionate Full-Stack Developer in training from
          Brazil. I enjoy creating modern, responsive, and user-friendly web
          applications using HTML, CSS, JavaScript, React, and Bootstrap. I'm
          constantly learning new technologies and improving my programming
          skills through personal projects and real-world challenges.
          <br />
          <br />
          My goal is to become a professional software developer, building
          innovative solutions that make people's lives easier. I'm always eager
          to learn, collaborate, and take on new opportunities to grow as a
          developer.
        </h4>
      </details>
    </div>
  );
}

export default Card;
