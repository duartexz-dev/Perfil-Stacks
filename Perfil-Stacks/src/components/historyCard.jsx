import "./Career.css";
import "./Career.js";

function Career() {
  return (
    <main className="career">
      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-bg"></div>

        <div className="hero-content">
          <span className="hero-tag">Developer Journey</span>

          <h1 className="text">Arthur Duarte</h1>

          <h2>Transforming curiosity into code.</h2>

          <p>
            My journey began out of curiosity about computers, technology, and
            games. Today, I continue to evolve to become a Full Stack Developer
            specialized in interfaces, artificial intelligence, and modern
            systems.
          </p>
        </div>
      </section>

      {/* ================= INTERESTS ================= */}

      <section className="interests">
        <h2 className="title">Areas of Interest</h2>

        <div className="hex-grid">
          <div className="hex">
            <span>💻</span>
            <h3>Programming</h3>
          </div>

          <div className="hex">
            <span>🎮</span>
            <h3>Gaming</h3>
          </div>

          <div className="hex">
            <span>🧮</span>
            <h3>Mathematics</h3>
          </div>

          <div className="hex">
            <span>🔬</span>
            <h3>Science</h3>
          </div>

          <div className="hex">
            <span>🚀</span>
            <h3>Space</h3>
          </div>

          <div className="hex">
            <span>🤖</span>
            <h3>AI</h3>
          </div>
        </div>
      </section>

      {/* ================= ROADMAP ================= */}

      <section className="roadmap">
        <h2 className="title">Learning Roadmap</h2>

        <div className="timeline">
          <div className="step">
            <div className="circle">1</div>

            <div className="card">
              <h2>Month 1</h2>

              <h3>First Steps</h3>

              <p>
                I started studying through the Mimo platform. I learned HTML,
                page structure, semantic tags, images, links, forms, and code
                organization.
              </p>

              <ul>
                <li>HTML</li>

                <li>Page Structure</li>

                <li>First contact with programming</li>
              </ul>

              <div className="mini-project">
                <h4>First Project</h4>

                <p>
                  My first portfolio. Just 46 lines of code. Extremely simple,
                  but it was where everything started.
                </p>
              </div>
            </div>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="circle">2</div>

            <div className="card">
              <h2>Month 2</h2>

              <h3>HTML + CSS</h3>

              <p>
                I started learning CSS and discovered how to turn a simple page
                into something beautiful.
              </p>

              <ul>
                <li>Flexbox</li>

                <li>Padding</li>

                <li>Margin</li>

                <li>Hover</li>

                <li>Transitions</li>

                <li>Colors</li>

                <li>Layouts</li>
              </ul>

              <div className="mini-project">
                <h4>Projects</h4>

                <p>
                  I began recreating interfaces, including pages inspired by
                  Apple and various design studies.
                </p>
              </div>
            </div>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="circle">3</div>

            <div className="card">
              <h2>Month 3</h2>

              <h3>JavaScript</h3>

              <p>
                My first contact with JavaScript. I learned logic, variables,
                functions, events, and DOM manipulation. I hadn't mastered the
                language yet, but I started to understand how to add
                interactivity to websites.
              </p>

              <ul>
                <li>Variables</li>

                <li>Functions</li>

                <li>DOM</li>

                <li>Events</li>

                <li>If / Else</li>
              </ul>
            </div>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="circle">4</div>

            <div className="card">
              <h2>Month 4</h2>

              <h3>Real JavaScript</h3>

              <p>
                This was where I really started to understand JavaScript. I
                began developing much more complex systems, components, and
                effects.
              </p>

              <ul>
                <li>Interactivity</li>

                <li>Animations</li>

                <li>Systems</li>

                <li>Logic</li>

                <li>Organization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section className="projects">
        <h2 className="title">Project Evolution</h2>

        <div className="project-grid">
          <div className="project-card">
            <span className="badge">Late 2025</span>

            <h2>MoneyFree</h2>

            <p>
              My biggest project of 2025. A programming course platform created
              to gather knowledge in a single place. It was there that I started
              thinking about organization, user experience, and visual identity.
            </p>
          </div>

          <div className="project-card">
            <span className="badge">Evolution</span>

            <h2>NexusPay</h2>

            <p>
              Inspired by PicPay. The first version was simple. A month later, I
              recreated practically the entire project. New interface. Much
              better organized code. Completely different layout.
            </p>
          </div>

          <div className="project-card">
            <span className="badge">2026</span>

            <h2>DevTask</h2>

            <p>
              A course platform created to improve my organization and practice
              new concepts.
            </p>
          </div>

          <div className="project-card">
            <span className="badge">Current</span>

            <h2>CodeFlow</h2>

            <p>
              The evolution of DevTask. Now utilizing Artificial Intelligence, a
              more modern design, better architecture, and new features.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MICRO PROJECTS ================= */}

      <section className="micro">
        <h2 className="title">Other Projects</h2>

        <div className="micro-grid">
          <div className="micro-card">
            <h3>CentralOS</h3>

            <p>
              A futuristic system inspired by AI interfaces for project
              organization and productivity.
            </p>
          </div>

          <div className="micro-card">
            <h3>Focus</h3>

            <p>
              A project developed almost entirely in pure JavaScript, using my
              own logic to build features.
            </p>
          </div>

          <div className="micro-card">
            <h3>Stack Profile</h3>

            <p>
              My developer profile, developed using React, Bootstrap, and
              components.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIAS ================= */}

      <section className="skills">
        <h2 className="title">My Evolution</h2>

        <div className="skill">
          <span>HTML</span>

          <div className="progress">
            <div className="value html"></div>
          </div>
        </div>

        <div className="skill">
          <span>CSS</span>

          <div className="progress">
            <div className="value css"></div>
          </div>
        </div>

        <div className="skill">
          <span>JavaScript</span>

          <div className="progress">
            <div className="value js"></div>
          </div>
        </div>

        <div className="skill">
          <span>ReactJS</span>

          <div className="progress">
            <div className="value react"></div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}

      <section className="stats">
        <div className="stat">
          <h1>6+</h1>

          <p>Main Projects</p>
        </div>

        <div className="stat">
          <h1>20+</h1>

          <p>Mini Projects</p>
        </div>

        <div className="stat">
          <h1>4</h1>

          <p>Mastered Technologies</p>
        </div>

        <div className="stat">
          <h1>∞</h1>

          <p>Will to Learn</p>
        </div>
      </section>

      {/* ================= GOAL ================= */}

      <section className="goal">
        <h2>Goal</h2>

        <p>
          My goal is to constantly evolve until I become a Full Stack Developer.
          I want to create complete platforms, intelligent systems, futuristic
          interfaces, utilize Artificial Intelligence, and develop solutions
          that truly make a difference.
        </p>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <h2>Arthur Duarte</h2>

        <p>Constantly evolving.</p>
      </footer>
    </main>
  );
}

export default Career;
