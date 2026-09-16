import { useState } from "react";
import "./App.css";

const domains = [
  {
    number: "01",
    title: "Robot Learning",
    description:
      "Intelligent robots that learn from data, experience and interaction.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Computer Vision",
    description:
      "Helping machines perceive, interpret and understand their surroundings.",
    icon: "◎",
  },
  {
    number: "03",
    title: "Autonomous Systems",
    description:
      "Planning, navigation and control for machines operating independently.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Human-Robot Interaction",
    description:
      "Creating robots that can safely and naturally work alongside people.",
    icon: "◉",
  },
  {
    number: "05",
    title: "Space Robotics",
    description:
      "Robotic systems designed for exploration and operation beyond Earth.",
    icon: "✦",
  },
  {
    number: "06",
    title: "Soft Robotics",
    description:
      "Flexible robotic systems inspired by biological structures and movement.",
    icon: "⬡",
  },
];

const events = [
  {
    month: "RAS",
    date: "01",
    title: "Research & Innovation",
    description:
      "Explore research and technological developments across robotics and automation.",
    type: "RESEARCH",
  },
  {
    month: "RAS",
    date: "02",
    title: "Technical Communities",
    description:
      "Connect with specialized communities working across different areas of robotics.",
    type: "COMMUNITY",
  },
  {
    month: "RAS",
    date: "03",
    title: "Education & Outreach",
    description:
      "Learn through educational activities and programs connected to robotics.",
    type: "LEARNING",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDomain, setActiveDomain] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <div className="logo-box">R</div>
          <span>
            IEEE <strong>RAS</strong>
          </span>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>ABOUT</a>
          <a href="#domains" onClick={closeMenu}>DOMAINS</a>
          <a href="#events" onClick={closeMenu}>EVENTS</a>
          <a href="#community" onClick={closeMenu}>COMMUNITY</a>

          <a
            href="https://www.ieee-ras.org/"
            target="_blank"
            rel="noreferrer"
            className="nav-button"
          >
            IEEE RAS ↗
          </a>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="grid-background"></div>

        <div className="hero-content">

          <div className="eyebrow">
            <span className="green-dot"></span>
            IEEE ROBOTICS & AUTOMATION SOCIETY
          </div>

          <h1>
            BUILD THE
            <br />
            <span>INTELLIGENCE</span>
            <br />
            OF TOMORROW.
          </h1>

          <p>
            Exploring robotics, intelligent systems and automation
            through technology, research and a global community.
          </p>

          <div className="hero-buttons">
            <a href="#domains" className="primary-button">
              EXPLORE RAS →
            </a>

            <a href="#community" className="secondary-button">
              JOIN THE COMMUNITY
            </a>
          </div>

          <div className="hero-bottom">
            <span>ROBOTICS</span>
            <span>•</span>
            <span>AUTOMATION</span>
            <span>•</span>
            <span>INTELLIGENCE</span>
          </div>

        </div>

        {/* ROBOT */}
        <div className="robot-area">

          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>

          <div className="robot-glow"></div>

          <div className="robot">

            <div className="robot-head">

              <div className="robot-ear left-ear"></div>
              <div className="robot-ear right-ear"></div>

              <div className="robot-face">

                <div className="robot-eyes">
                  <span></span>
                  <span></span>
                </div>

                <div className="robot-mouth">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

              </div>

            </div>

            <div className="robot-neck"></div>

            <div className="robot-body">

              <div className="chest">
                <div className="chest-title">RAS</div>

                <div className="bars">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

            </div>

            <div className="robot-arm left-arm"></div>
            <div className="robot-arm right-arm"></div>

          </div>

          <div className="data-box box-one">
            <small>SYSTEM</small>
            98.42%
          </div>

          <div className="data-box box-two">
            <small>AI CORE</small>
            ONLINE
          </div>

          <div className="data-box box-three">
            <small>STATUS</small>
            ACTIVE
          </div>

        </div>

      </section>

      {/* MOVING TICKER */}
      <div className="ticker">
        <div className="ticker-content">
          ROBOTICS <span>✦</span>
          AUTOMATION <span>✦</span>
          ARTIFICIAL INTELLIGENCE <span>✦</span>
          RESEARCH <span>✦</span>
          INNOVATION <span>✦</span>
          ROBOTICS <span>✦</span>
          AUTOMATION <span>✦</span>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="section about">

        <div className="section-number">
          01 / ABOUT IEEE RAS
        </div>

        <div className="two-column">

          <div>
            <div className="small-title">THE SOCIETY</div>

            <h2>
              WHERE
              <br />
              <span>IDEAS MOVE.</span>
            </h2>
          </div>

          <div className="about-text">

            <p className="big-paragraph">
              IEEE Robotics and Automation Society brings together
              people working across robotics and automation.
            </p>

            <p>
              The society supports research, technical communities,
              conferences, education, publications and opportunities
              for members to connect and contribute to the field.
            </p>

            <a
              href="https://www.ieee-ras.org/about-ras"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              DISCOVER IEEE RAS ↗
            </a>

          </div>

        </div>

        <div className="stats">

          <div>
            <strong>R&A</strong>
            <span>ROBOTICS + AUTOMATION</span>
          </div>

          <div>
            <strong>GLOBAL</strong>
            <span>TECHNICAL COMMUNITY</span>
          </div>

          <div>
            <strong>RESEARCH</strong>
            <span>TECHNICAL ACTIVITIES</span>
          </div>

          <div>
            <strong>LEARN</strong>
            <span>EDUCATION + OUTREACH</span>
          </div>

        </div>

      </section>

      {/* DOMAINS */}
      <section id="domains" className="section domains">

        <div className="section-number">
          02 / TECHNICAL AREAS
        </div>

        <div className="domains-heading">

          <div>
            <div className="small-title">EXPLORE THE FIELD</div>

            <h2>
              ONE FIELD.
              <br />
              <span>MANY DIRECTIONS.</span>
            </h2>
          </div>

          <p>
            Robotics combines many disciplines — from perception
            and learning to autonomous machines and interaction
            between humans and robots.
          </p>

        </div>

        <div className="domain-grid">

          {domains.map((domain, index) => (

            <div
              className={`domain-card ${
                activeDomain === index ? "active" : ""
              }`}
              key={domain.number}
              onClick={() =>
                setActiveDomain(
                  activeDomain === index ? null : index
                )
              }
            >

              <div className="domain-top">
                <span>{domain.number}</span>
                <span className="domain-icon">
                  {domain.icon}
                </span>
              </div>

              <h3>{domain.title}</h3>

              <p>{domain.description}</p>

              <div className="card-arrow">↗</div>

            </div>

          ))}

        </div>

      </section>

      {/* EVENTS */}
      <section id="events" className="section events">

        <div className="section-number">
          03 / ACTIVITIES
        </div>

        <div className="events-heading">

          <div>
            <div className="small-title">CONNECT & PARTICIPATE</div>

            <h2>
              MEET.
              <br />
              <span>LEARN. BUILD.</span>
            </h2>
          </div>

          <a
            href="https://www.ieee-ras.org/events/"
            target="_blank"
            rel="noreferrer"
            className="outline-button"
          >
            VIEW IEEE RAS EVENTS ↗
          </a>

        </div>

        <div className="event-list">

          {events.map((event) => (

            <div className="event" key={event.title}>

              <div className="event-date">
                <small>{event.month}</small>
                <strong>{event.date}</strong>
              </div>

              <div className="event-details">
                <small>{event.type}</small>

                <h3>{event.title}</h3>

                <p>{event.description}</p>
              </div>

              <div className="event-arrow">↗</div>

            </div>

          ))}

        </div>

      </section>

      {/* COMMUNITY */}
      <section id="community" className="community">

        <div className="community-background">
          BUILD
        </div>

        <div className="community-content">

          <div className="small-title dark">
            GET INVOLVED
          </div>

          <h2>
            DON'T JUST
            <br />
            WATCH THE FUTURE.
            <br />
            <span>BUILD IT.</span>
          </h2>

          <p>
            Explore IEEE RAS membership, educational opportunities,
            technical communities and activities in robotics and
            automation.
          </p>

          <div className="community-buttons">

            <a
              href="https://www.ieee-ras.org/membership/"
              target="_blank"
              rel="noreferrer"
              className="dark-button"
            >
              EXPLORE MEMBERSHIP →
            </a>

            <a
              href="https://www.ieee-ras.org/education-outreach-and-career/"
              target="_blank"
              rel="noreferrer"
              className="light-button"
            >
              EDUCATION & OUTREACH
            </a>

          </div>

        </div>

        <div className="community-visual">

          <div className="crosshair"></div>

          <div className="community-circle circle-large"></div>
          <div className="community-circle circle-small"></div>

          <div className="target">
            <span>IEEE</span>
            <strong>RAS</strong>
            <small>CONNECTED</small>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-top">

          <div>

            <div className="logo footer-logo">
              <div className="logo-box">R</div>

              <span>
                IEEE <strong>RAS</strong>
              </span>
            </div>

            <p>
              Robotics, automation and intelligent systems —
              connected through a global technical community.
            </p>

          </div>

          <div className="footer-links">

            <div>
              <span>EXPLORE</span>
              <a href="#about">About</a>
              <a href="#domains">Domains</a>
              <a href="#events">Activities</a>
              <a href="#community">Community</a>
            </div>

            <div>
              <span>IEEE RAS</span>

              <a
                href="https://www.ieee-ras.org/"
                target="_blank"
                rel="noreferrer"
              >
                Official Website ↗
              </a>

              <a
                href="https://www.ieee-ras.org/publications/"
                target="_blank"
                rel="noreferrer"
              >
                Publications ↗
              </a>

              <a
                href="https://www.ieee-ras.org/technical-activities/"
                target="_blank"
                rel="noreferrer"
              >
                Technical Activities ↗
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <span>IEEE ROBOTICS & AUTOMATION SOCIETY</span>
          <span>ROBOTICS • AUTOMATION • INNOVATION</span>
        </div>

      </footer>

    </div>
  );
}

export default App;