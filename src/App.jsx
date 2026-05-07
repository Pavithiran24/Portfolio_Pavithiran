import { useEffect } from 'react'
import profilePhoto from './assets/Pavithiran24.jpeg'

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (elements.length === 0) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <header className="cover" id="cover">
        <div className="cover-grid">
          <div
            className="cover-copy"
            data-reveal
            style={{ '--reveal-delay': '0ms' }}
          >
            <div className="badge">Professional Portfolio</div>
            <h1>Thevarasa Pavithiran</h1>
            <p className="subtitle">
              B.Sc. (Hons) in Information Technology
            </p>
            <div className="meta">
              <span>Final-Year Undergraduate</span>
              <span>SLIIT</span>
              <span>PPW Assignment</span>
            </div>
            <p className="cover-desc">
              A modern portfolio curated for academic evaluation and future
              software engineering opportunities.
            </p>
            <div className="cover-actions">
              <a className="btn primary" href="#about">
                Explore Portfolio
              </a>
              <a className="btn ghost" href={`${import.meta.env.BASE_URL}PavithiranCV--.pdf`} download="PavithiranCV.pdf">
                Download CV
              </a>
            </div>
          </div>
          <div
            className="cover-card"
            data-reveal
            style={{ '--reveal-delay': '120ms' }}
          >
            <div className="profile">
              <div className="profile-ring">
                <div className="profile-core">
                  <img
                    className="profile-photo"
                    src={profilePhoto}
                    alt="Thevarasa Pavithiran"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="profile-details">
                <h3>Information Technology</h3>
                <p>Personal and Professional Writing (PPW)</p>
                <div className="chips">
                  <span>Software Engineering</span>
                  <span>AI & ML</span>
                  <span>Full Stack</span>
                </div>
              </div>
            </div>
            <div className="cover-stats">
              <div>
                <h4>University</h4>
                <p>Sri Lanka Institute of Information Technology (SLIIT)</p>
              </div>
              <div>
                <h4>Assignment</h4>
                <p>Professional Portfolio</p>
              </div>
              <div>
                <h4>Module</h4>
                <p>Personal and Professional Writing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="page-tag">Page 01</div>
      </header>

      <section className="toc" id="toc" data-reveal>
        <div className="section-head">
          <div className="section-title">
            <span className="section-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M6 6h12M6 12h12M6 18h8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>
              <p className="eyebrow">Navigation</p>
              <h2>Table of Contents</h2>
            </div>
          </div>
          <div className="page-tag">Page 02</div>
        </div>
        <div className="toc-grid">
          <a href="#about">01. Introduction About Myself</a>
          <a href="#reflection">02. Reflective Journal</a>
          <a href="#career">03. Career Development Plan</a>
          <a href="#cv">04. Curriculum Vitae</a>
          <a href="#certifications">05. Certifications</a>
          <a href="#contact">06. Contact</a>
        </div>
      </section>

      <section className="about" id="about" data-reveal>
        <div className="section-head">
          <div className="section-title">
            <span className="section-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 9a7 7 0 0 1 14 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>
              <p className="eyebrow">Introduction</p>
              <h2>About Myself</h2>
            </div>
          </div>
          <div className="page-tag">Page 03</div>
        </div>
        <div className="about-grid">
          <p>
            I am a final-year Information Technology undergraduate at SLIIT
            with a strong passion for software engineering and artificial
            intelligence. My academic journey has given me hands-on experience
            in full-stack development, and I am especially interested in
            Machine Learning, IoT, and intelligent systems. I aim to grow into a
            professional Software Engineer who builds impactful digital
            products. I value teamwork, clear communication, and structured
            problem solving, and I continuously seek opportunities that enhance
            both my technical skills and professional presence.
          </p>
          <div className="about-cards">
            <div className="info-card">
              <h3>Focus Areas</h3>
              <ul>
                <li>Full-stack web engineering</li>
                <li>AI-powered product innovation</li>
                <li>Research-driven learning</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Strengths</h3>
              <ul>
                <li>Collaborative team player</li>
                <li>Analytical problem solver</li>
                <li>Adaptable to new tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="reflection" id="reflection" data-reveal>
        <div className="section-head">
          <div className="section-title">
            <span className="section-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M6 4h9l3 3v13H6zM9 12h6M9 16h6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>
              <p className="eyebrow">Reflection</p>
              <h2>PPW Learning Journal</h2>
            </div>
          </div>
          <div className="page-tag">Page 04</div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">01</div>
            <div>
              <h3>Communication Foundations</h3>
              <p>
                PPW highlighted the importance of structured communication. I
                learned how clarity and tone affect professional relationships
                and project success.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">02</div>
            <div>
              <h3>Professional Email and Report Writing</h3>
              <p>
                I practiced writing concise emails and formal reports, focusing
                on purpose, audience, and clarity to meet professional
                expectations.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">03</div>
            <div>
              <h3>Presentation and Collaboration</h3>
              <p>
                PPW improved my confidence in presentations and team
                discussions. I learned to present ideas with structure and
                respond effectively to feedback.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">04</div>
            <div>
              <h3>Career Readiness</h3>
              <p>
                The module strengthened my CV preparation, interview readiness,
                time management, and long-term career planning. I now approach
                professional development with clear goals and discipline.
              </p>
            </div>
          </div>
        </div>
        <blockquote>
          "Growth happens when knowledge meets action and reflection turns into
          better decisions."
        </blockquote>
      </section>

      <section className="career" id="career" data-reveal>
        <div className="section-head">
          <div className="section-title">
            <span className="section-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M5 19h14M7 16l3-4 3 3 4-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="eyebrow">Roadmap</p>
              <h2>Career Development Plan</h2>
            </div>
          </div>
          <div className="page-tag">Page 05</div>
        </div>
        <div className="career-grid">
          <div className="career-column">
            <h3>Short-Term Goals</h3>
            <ul>
              <li>Complete the degree successfully</li>
              <li>Strengthen React.js and backend skills</li>
              <li>Gain industry experience through internships</li>
              <li>Improve communication and leadership</li>
            </ul>
          </div>
          <div className="career-column">
            <h3>Medium-Term Goals</h3>
            <ul>
              <li>Become a Full Stack Software Engineer</li>
              <li>Work on AI and ML projects</li>
              <li>Develop cloud computing knowledge</li>
              <li>Deliver scalable real-world systems</li>
            </ul>
          </div>
          <div className="career-column">
            <h3>Long-Term Goals</h3>
            <ul>
              <li>Grow into a Senior Software Engineer or Tech Lead</li>
              <li>Build innovative AI-based solutions</li>
              <li>Start a software company or tech startup</li>
              <li>Mentor future developers</li>
            </ul>
          </div>
        </div>
        <div className="career-timeline">
          <div className="timeline-card">
            <h4>2026</h4>
            <p>Graduate and transition into full-time engineering roles.</p>
          </div>
          <div className="timeline-card">
            <h4>2027 - 2029</h4>
            <p>Contribute to scalable platforms and deepen AI expertise.</p>
          </div>
          <div className="timeline-card">
            <h4>2030+</h4>
            <p>Lead teams and build new AI-driven products and ventures.</p>
          </div>
        </div>
        <div className="skill-roadmap">
          <div className="skill-card">
            <h3>Technical Skill Growth</h3>
            <div className="progress">
              <span>React.js</span>
              <div className="bar"><i style={{ width: '86%' }}></i></div>
            </div>
            <div className="progress">
              <span>Backend Development</span>
              <div className="bar"><i style={{ width: '78%' }}></i></div>
            </div>
            <div className="progress">
              <span>Machine Learning</span>
              <div className="bar"><i style={{ width: '70%' }}></i></div>
            </div>
          </div>
          <div className="skill-card">
            <h3>Professional Growth</h3>
            <div className="chart">
              <div><span>Communication</span><b>85%</b></div>
              <div><span>Leadership</span><b>75%</b></div>
              <div><span>Problem Solving</span><b>90%</b></div>
              <div><span>Teamwork</span><b>88%</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cv" id="cv" data-reveal>
        <div className="section-head">
          <div className="section-title">
            <span className="section-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M7 4h10v16H7zM9 8h6M9 12h6M9 16h4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>
              <p className="eyebrow">Professional Profile</p>
              <h2>Curriculum Vitae</h2>
            </div>
          </div>
          <div className="page-tag">Page 06</div>
        </div>
        <div className="cv-grid">
          <div className="cv-card">
            <h3>Contact</h3>
            <p><strong>Email:</strong> thevarasapavi@gmail.com</p>
            <p><strong>Phone:</strong> +94 76 297 3456</p>
            <p><strong>Location:</strong> Jaffna, Sri Lanka</p>
          </div>
          <div className="cv-card">
            <h3>Education</h3>
            <p>B.Sc. (Hons) in Information Technology – SLIIT</p>
            <p>Expected Graduation: 2026</p>
          </div>
          <div className="cv-card">
            <h3>Experience</h3>
            <ul>
              <li>Full Stack Engineer Intern - Navicode</li>
              <li>Software Engineer Intern - Teceze Consultancy Services</li>
            </ul>
          </div>
          <div className="cv-card">
            <h3>Projects</h3>
            <ul>
              <li>AI Pest Prediction System</li>
              <li>Vehicle Sales Management System</li>
              <li>ERP System</li>
              <li>Hotel Management System</li>
              <li>Online Customer Care System</li>
            </ul>
          </div>
          <div className="cv-card">
            <h3>Skills</h3>
            <div className="skills-grid">
              <span>React.js</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>Laravel</span>
              <span>MongoDB</span>
              <span>MERN Stack</span>
              <span>Git/GitHub</span>
              <span>TensorFlow</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications" id="certifications" data-reveal>
        <div className="section-head">
          <div className="section-title">
            <span className="section-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M6 4h12v9a5 5 0 0 1-10 0V4Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M9 18v3l3-2 3 2v-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>
              <p className="eyebrow">Credentials</p>
              <h2>Certifications</h2>
            </div>
          </div>
          <div className="page-tag">Page 07</div>
        </div>
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-icon">WD</div>
            <h3>Web Design</h3>
            <p>University of Moratuwa</p>
            <span>Certificate Placeholder</span>
          </div>
          <div className="cert-card">
            <div className="cert-icon">JS</div>
            <h3>JavaScript Specialist</h3>
            <p>Developers Stack Academy</p>
            <span>Certificate Placeholder</span>
          </div>
          <div className="cert-card">
            <div className="cert-icon">DSA</div>
            <h3>Data Structures and Algorithms</h3>
            <p>Bootcamp (Python)</p>
            <span>Certificate Placeholder</span>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact" data-reveal>
        <div>
          <h3>Let us connect</h3>
          <p>
            Ready to contribute to innovative software engineering projects and
            research-driven technology.
          </p>
        </div>
        <div className="footer-contact">
          <a href="mailto:thevarasapavi@gmail.com">thevarasapavi@gmail.com</a>
          <span>+94 76 297 3456</span>
          <span>Jaffna, Sri Lanka</span>
        </div>
        <div className="footer-note">
          <span>Portfolio of Thevarasa Pavithiran</span>
          <span>PPW | SLIIT | 2026</span>
        </div>
        <div className="page-tag">Page 08</div>
      </footer>
    </div>
  )
}

export default App
