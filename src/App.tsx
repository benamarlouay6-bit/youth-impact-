import { FormEvent, useEffect, useRef, useState } from "react"
import youthLogo from "./assets/youth-impact-logo.png"
import associationLockup from "./assets/youth-impact-association-lockup.png"
import campaignHero from "./assets/campaign-hero.png"
import campaignEvents from "./assets/campaign-events.png"
import campaignImpact from "./assets/campaign-impact.png"
import campaignMethodology from "./assets/campaign-methodology.png"
import campaignAbout from "./assets/campaign-about.png"
import mediaKit from "./assets/youth-impact-media-kit.pdf"

type IconName = "arrow" | "calendar" | "chevron" | "close" | "mail" | "map" | "menu" | "music" | "play" | "sport" | "ticket" | "user"

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    music: (
      <>
        <path d="M9 18V5l10-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="16" cy="16" r="3" />
      </>
    ),
    play: (
      <>
        <path d="m9 7 8 5-8 5Z" />
        <circle cx="12" cy="12" r="10" />
      </>
    ),
    sport: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 4 4 3 4-3M4 10l4 3-2 5M20 10l-4 3 2 5M8 13h8" />
      </>
    ),
    ticket: (
      <>
        <path d="M3 8a3 3 0 0 0 0 6v4h18v-4a3 3 0 0 0 0-6V4H3Z" />
        <path d="M13 7h4M13 11h4M13 15h4M9 4v14" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

const clubs = [
  {
    id: "sakiet-ezzit",
    school: "Lycée Pilote Sakiet Ezzit",
    event: "Movie Night",
    category: "Cinéma & Divertissement",
    icon: "play" as IconName,
    description:
      "Une soirée cinéma imaginée par les lycéens pour rassembler leur communauté autour d’un objectif concret.",
  },
  {
    id: "mannouba",
    school: "Lycée Pilote Mannouba",
    event: "Manouba Tghanni",
    category: "Événement musical",
    icon: "music" as IconName,
    description:
      "Un rendez-vous musical porté par les jeunes talents du lycée au service d’un projet collectif.",
  },
  {
    id: "borj-baccouche",
    school: "Lycée Pilote Borj Baccouche",
    event: "Tournoi sportif",
    category: "Sport & Compétition",
    icon: "sport" as IconName,
    description:
      "Une compétition conviviale qui transforme l’énergie sportive en ressources pour le lycée.",
  },
  {
    id: "ibn-abi-dhiaf",
    school: "Lycée Ibn Abi Dhiaf Mannouba",
    event: "Événement d’opéra",
    category: "Culture & Arts",
    icon: "music" as IconName,
    description:
      "Une expérience culturelle singulière conçue pour mobiliser le public et soutenir l’établissement.",
  },
  {
    id: "menzah-9",
    school: "Lycée Menzah 9",
    event: "Tournoi sportif",
    category: "Sport & Compétition",
    icon: "sport" as IconName,
    description:
      "Le sport devient un levier d’engagement, de cohésion et d’amélioration de la vie scolaire.",
  },
  {
    id: "hrairia-2",
    school: "Lycée Hrairia 2",
    event: "Événement musical",
    category: "Musique & Spectacle",
    icon: "music" as IconName,
    description:
      "Une scène ouverte et fédératrice pour créer ensemble un impact durable au sein du lycée.",
  },
]

const navItems = [
  ["accueil", "Accueil"],
  ["projet", "Le projet"],
  ["clubs", "Nos clubs"],
  ["impacts", "Nos impacts"],
  ["equipe", "Équipe"],
  ["partenaires", "Partenaires"],
  ["contact", "Contact"],
]

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string
  title: string
  text?: string
  light?: boolean
}) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  )
}

function ClubLogoPlaceholder({ school }: { school: string }) {
  return (
    <div
      className="club-logo-placeholder"
      aria-label={`Logo officiel de ${school} à ajouter`}
    >
      <span>YC</span>
      <small>
        Logo officiel
        <br />à ajouter
      </small>
    </div>
  )
}

function EventModal({
  club,
  onClose,
}: {
  club: typeof clubs[number]
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const handleKey = (event: KeyboardEvent) =>
      event.key === "Escape" && onClose()
    document.addEventListener("keydown", handleKey)
    document.body.classList.add("modal-open")
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.classList.remove("modal-open")
    }
  }, [onClose])

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <article
        aria-labelledby="event-title"
        aria-modal="true"
        className="event-modal"
        role="dialog"
      >
        <button
          ref={closeRef}
          className="modal-close"
          onClick={onClose}
          type="button"
        >
          <Icon name="close" />
          <span className="sr-only">Fermer</span>
        </button>

        <div className="event-hero">
          <div className="event-hero__content">
            <button className="back-link" onClick={onClose} type="button">
              <span aria-hidden="true">←</span> Retour aux clubs
            </button>
            <div className="event-club-id">
              <ClubLogoPlaceholder school={club.school} />
              <div>
                <p>Youth Club</p>
                <strong>{club.school}</strong>
              </div>
            </div>
            <p className="event-category">{club.category}</p>
            <h2 id="event-title">{club.event}</h2>
            <p>{club.description}</p>
          </div>
          <div className="event-poster-placeholder">
            <Icon name={club.icon} size={48} />
            <strong>Affiche de l’événement</strong>
            <span>Visuel à ajouter</span>
          </div>
        </div>

        <div className="event-body">
          <div className="event-main">
            <p className="eyebrow">L’événement</p>
            <h3>Une idée qui finance un changement concret</h3>
            <p>
              Les élèves conçoivent et organisent cet événement afin de
              mobiliser leur communauté. L’objectif d’investissement sera défini
              à partir des besoins identifiés dans le lycée.
            </p>
            <div className="objective-box">
              <span>Objectif d’investissement</span>
              <strong>À renseigner avec le club</strong>
              <p>
                Le montant collecté et son affectation seront publiés dès
                validation.
              </p>
            </div>
            <h3>Après l’événement</h3>
            <p>
              Les résultats, les photos d’impact et les témoignages seront
              documentés ici une fois les informations vérifiées.
            </p>
          </div>
          <aside className="event-sidebar">
            {[
              ["calendar", "Date & heure", "À confirmer"],
              ["map", "Lieu", "À confirmer"],
              ["ticket", "Tarif", "À confirmer"],
              ["user", "Responsable", "À renseigner"],
            ].map(([icon, label, value]) => (
              <div className="event-info-row" key={label}>
                <Icon name={icon as IconName} />
                <div>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              </div>
            ))}
            <div className="status-line">
              <span className="status-dot" />
              Statut à confirmer
            </div>
            <button className="button button--disabled" disabled type="button">
              Billetterie bientôt disponible
            </button>
            <p className="placeholder-note">
              Instagram et lien d’inscription à ajouter.
            </p>
          </aside>
        </div>
      </article>
    </div>
  )
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("accueil")
  const [selectedClub, setSelectedClub] = useState<typeof clubs[number] | null>(
    null,
  )
  const [formState, setFormState] = useState<"idle" | "error" | "ready">("idle")

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting)
        if (current) setActiveSection(current.target.id)
      },
      { rootMargin: "-30% 0px -60% 0px" },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navigate = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setFormState(form.checkValidity() ? "ready" : "error")
    if (!form.checkValidity()) form.reportValidity()
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <header className="navbar">
        <button
          className="brand-button"
          onClick={() => navigate("accueil")}
          type="button"
        >
          <img alt="Youth Impact" src={youthLogo} />
        </button>
        <nav
          aria-label="Navigation principale"
          className={mobileOpen ? "nav-links nav-links--open" : "nav-links"}
        >
          {navItems.map(([id, label]) => (
            <button
              className={
                activeSection === id ? "nav-link nav-link--active" : "nav-link"
              }
              key={id}
              onClick={() => navigate(id)}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          className="nav-cta"
          onClick={() => navigate("clubs")}
          type="button"
        >
          <span>Les événements</span>
          <Icon name="arrow" />
        </button>
        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="menu-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
        >
          <Icon name={mobileOpen ? "close" : "menu"} />
        </button>
      </header>

      <main id="contenu">
        <section className="hero" id="accueil">
          <div className="hero-path" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-copy">
            <p className="hero-kicker">
              <span /> Association YOUTH CLUBs présente
            </p>
            <img className="hero-logo" alt="Youth Impact" src={youthLogo} />
            <h1>
              Des idées aux actions,
              <br />
              des actions à <em>l’impact.</em>
            </h1>
            <p className="hero-description">
              Des lycéens identifient les besoins de leur école, créent des
              événements et transforment les fonds collectés en projets qui
              comptent vraiment.
            </p>
            <div className="hero-actions">
              <button
                className="button button--yellow"
                onClick={() => navigate("projet")}
                type="button"
              >
                Découvrir le projet <Icon name="arrow" />
              </button>
              <button
                className="button button--ghost"
                onClick={() => navigate("clubs")}
                type="button"
              >
                Découvrir les événements
              </button>
            </div>
            <p className="hero-slogan">Par les lycéens, pour leurs lycées.</p>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                alt="Visuel de campagne Youth Impact, un jeune avance vers une porte lumineuse"
                src={campaignHero}
              />
            </div>
            <div className="hero-stamp">
              <strong>06</strong>
              <span>
                clubs
                <br />
                participants
              </span>
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            Défiler <span />
          </div>
        </section>

        <section className="concepts">
          {[
            [
              "01",
              "Identifier",
              "Écouter les élèves et comprendre les vrais besoins du lycée.",
            ],
            [
              "02",
              "Mobiliser",
              "Imaginer des événements capables de fédérer toute une communauté.",
            ],
            [
              "03",
              "Transformer",
              "Investir les fonds dans un projet utile, visible et durable.",
            ],
          ].map(([number, title, text]) => (
            <article className="concept-card" key={number}>
              <span className="concept-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span className="concept-arrow">
                <Icon name="chevron" />
              </span>
            </article>
          ))}
        </section>

        <section className="mission section" id="projet">
          <div className="mission-collage">
            <div className="poster-card poster-card--back">
              <img
                alt="Campagne Youth Impact sur la méthodologie"
                src={campaignMethodology}
              />
            </div>
            <div className="poster-card poster-card--front">
              <img
                alt="Campagne : qu’est-ce que Youth Impact ?"
                src={campaignAbout}
              />
            </div>
            <div className="mission-tag">
              Ideas <span>→</span> impact
            </div>
          </div>
          <div className="mission-copy">
            <SectionHeading
              eyebrow="Notre mission"
              title="Donner aux lycéens le pouvoir d’agir."
              text="Youth Impact transforme les élèves en acteurs de leur environnement. Ils observent, décident, organisent et rendent visible le changement qu’ils ont créé."
            />
            <blockquote>
              “Une initiative pensée par les jeunes, menée par les jeunes et
              ancrée dans les besoins réels de leur école.”
            </blockquote>
            <a
              className="text-link"
              href={mediaKit}
              target="_blank"
              rel="noreferrer"
            >
              Consulter le media kit <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="journey section">
          <SectionHeading
            eyebrow="La méthode Youth Impact"
            title="Une idée. Trois phases. Un impact réel."
            text="Un parcours simple, piloté localement par chaque club et documenté à chaque étape."
          />
          <div className="journey-track">
            {[
              [
                "01",
                "Identifier les besoins",
                "Enquêtes, écoute des élèves, analyse des problèmes et choix d’un objectif commun.",
                "Observer · Écouter · Choisir",
              ],
              [
                "02",
                "Organiser et mobiliser",
                "Choix du format, campagne, préparation et accueil des participants pour lever des fonds.",
                "Créer · Communiquer · Réunir",
              ],
              [
                "03",
                "Investir et mesurer",
                "Financement du projet retenu, documentation des résultats et partage de l’impact.",
                "Investir · Mesurer · Partager",
              ],
            ].map(([number, title, text, tags]) => (
              <article className="journey-card" key={number}>
                <div className="journey-topline">
                  <span>Phase</span>
                  <strong>{number}</strong>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <small>{tags}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="communication section">
          <div className="communication-copy">
            <SectionHeading
              eyebrow="Le récit du projet"
              title="Quatre temps pour rendre l’action visible."
              text="Les trois phases de projet sont accompagnées par quatre étapes de communication distinctes."
              light
            />
          </div>
          <div className="communication-timeline">
            {[
              ["01", "Enquêtes & Équipe"],
              ["02", "Campagne de l’événement"],
              ["03", "Jour J"],
              ["04", "L’impact réel"],
            ].map(([number, label]) => (
              <div className="communication-step" key={number}>
                <span>{number}</span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="events-preview section">
          <SectionHeading
            eyebrow="Des événements qui rassemblent"
            title="Créer l’énergie. Financer le changement."
            text="Chaque club choisit un format qui lui ressemble pour attirer, engager et mobiliser."
          />
          <div className="event-format-grid">
            {[
              [
                "play",
                "Cinéma",
                "Movie Night",
                "Une projection, une communauté réunie.",
              ],
              [
                "music",
                "Musique & arts",
                "Scène ouverte",
                "Des talents locaux au service d’une idée.",
              ],
              [
                "sport",
                "Sport",
                "Tournoi",
                "L’esprit d’équipe transformé en impact.",
              ],
            ].map(([icon, category, title, text], index) => (
              <article
                className={`format-card format-card--${index + 1}`}
                key={category}
              >
                <div className="format-icon">
                  <Icon name={icon as IconName} size={30} />
                </div>
                <p>{category}</p>
                <h3>{title}</h3>
                <span>{text}</span>
              </article>
            ))}
            <img
              className="event-campaign-image"
              alt="Campagne Youth Impact sur les types d’événements"
              src={campaignEvents}
            />
          </div>
        </section>

        <section className="clubs section" id="clubs">
          <div className="clubs-heading-row">
            <SectionHeading
              eyebrow="Nos Youth Clubs"
              title="Six clubs. Six projets. Une même ambition."
              text="Découvrez les initiatives portées par les lycéens dans chaque établissement participant."
            />
            <p className="data-note">
              <span>i</span> Les informations non fournies sont clairement
              indiquées.
            </p>
          </div>
          <div className="club-grid">
            {clubs.map((club, index) => (
              <button
                className="club-card"
                key={club.id}
                onClick={() => setSelectedClub(club)}
                type="button"
              >
                <div className="club-card__top">
                  <ClubLogoPlaceholder school={club.school} />
                  <span className="club-index">0{index + 1}</span>
                </div>
                <p className="club-designation">Youth Club</p>
                <h3>{club.school}</h3>
                <div className="club-event">
                  <span className="club-event__icon">
                    <Icon name={club.icon} />
                  </span>
                  <div>
                    <small>{club.category}</small>
                    <strong>{club.event}</strong>
                  </div>
                </div>
                <p className="club-description">{club.description}</p>
                <span className="club-link">
                  Découvrir le projet <Icon name="arrow" />
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="impact section" id="impacts">
          <div className="impact-heading">
            <SectionHeading
              eyebrow="Nos impacts"
              title="L’événement est un début. L’impact reste."
              text="Les fonds collectés sont destinés à des investissements créatifs qui améliorent durablement la vie scolaire."
              light
            />
            <img
              alt="Campagne Youth Impact : créer l’impact"
              src={campaignImpact}
            />
          </div>
          <div className="impact-grid">
            {[
              [
                "01",
                "Tableau éducatif numérique",
                "Enrichir les supports de cours et favoriser des apprentissages interactifs.",
              ],
              [
                "02",
                "Bibliothèque de classe",
                "Créer un espace accessible qui donne envie de lire, chercher et partager.",
              ],
              [
                "03",
                "Jardin scolaire",
                "Faire grandir un lieu vivant, collectif et propice au bien-être.",
              ],
            ].map(([number, title, text]) => (
              <article className="impact-card" key={number}>
                <span>{number}</span>
                <div className="impact-illustration" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <small>Statut : à confirmer</small>
              </article>
            ))}
          </div>
          <div className="report-template">
            <div>
              <p className="eyebrow">Rapport d’impact</p>
              <h3>Des résultats transparents, club par club.</h3>
            </div>
            <div className="report-metrics">
              {[
                "Événement organisé",
                "Montant collecté",
                "Investissement réalisé",
                "Bénéficiaires",
              ].map((label) => (
                <div key={label}>
                  <strong>—</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <p className="report-note">
              Données, photos avant/après et témoignages à publier après
              vérification.
            </p>
          </div>
        </section>

        <section className="team section" id="equipe">
          <SectionHeading
            eyebrow="Équipe nationale"
            title="Une équipe au service des idées des jeunes."
            text="Les profils de coordination seront publiés dès validation par l’Association YOUTH CLUBs."
          />
          <div className="team-grid">
            {[1, 2, 3].map((item) => (
              <article className="profile-card" key={item}>
                <div className="profile-photo">
                  <Icon name="user" size={42} />
                </div>
                <p>Profil à compléter</p>
                <h3>Nom et prénom</h3>
                <span>Rôle national à renseigner</span>
              </article>
            ))}
          </div>
        </section>

        <section className="partners section" id="partenaires">
          <div>
            <SectionHeading
              eyebrow="Partenaires & sponsors"
              title="Faire grandir l’impact, ensemble."
              text="Entreprises, institutions et organisations peuvent apporter leurs expertises, leurs ressources et leur soutien aux initiatives des lycéens."
            />
            <button
              className="button button--blue"
              onClick={() => navigate("contact")}
              type="button"
            >
              Devenir partenaire <Icon name="arrow" />
            </button>
          </div>
          <div className="partner-board">
            <div className="partner-primary">
              <img
                alt="Youth Impact, Association YOUTH CLUBs"
                src={associationLockup}
              />
              <span>Initiative officielle</span>
            </div>
            {[1, 2, 3].map((item) => (
              <div className="partner-placeholder" key={item}>
                <span>Logo partenaire</span>
                <small>à ajouter</small>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Construisons la suite</p>
            <h2>
              Une idée à partager ?<br />
              <em>Parlons-en.</em>
            </h2>
            <p>
              Vous êtes un lycée, un élève, une organisation ou un partenaire
              potentiel ? Écrivez à l’équipe nationale Youth Impact.
            </p>
            <div className="contact-pending">
              <Icon name="mail" />
              <div>
                <span>Contact officiel</span>
                <strong>Adresse à renseigner</strong>
              </div>
            </div>
            <p className="hashtags">
              #YOUTHCLUBS &nbsp; #YouthImpact
              <br />
              #YouthEmpowerment &nbsp; #Youth_in_action
              <br />
              #Youth_in_motion
            </p>
          </div>
          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Nom complet
                <input name="name" placeholder="Votre nom" required />
              </label>
              <label>
                E-mail
                <input
                  name="email"
                  placeholder="vous@exemple.com"
                  required
                  type="email"
                />
              </label>
            </div>
            <label>
              Sujet
              <input
                name="subject"
                placeholder="Comment pouvons-nous vous aider ?"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="Parlez-nous de votre projet..."
                required
                rows={5}
              />
            </label>
            <button className="button button--yellow" type="submit">
              Vérifier mon message <Icon name="arrow" />
            </button>
            {formState === "error" && (
              <p className="form-status form-status--error">
                Merci de compléter correctement tous les champs.
              </p>
            )}
            {formState === "ready" && (
              <p className="form-status form-status--ready">
                Votre message est prêt. L’envoi en ligne sera activé dès qu’une
                adresse officielle sera connectée.
              </p>
            )}
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img
            alt="Youth Impact, Association YOUTH CLUBs"
            src={associationLockup}
          />
          <p>Des idées aux actions, des actions à l’impact.</p>
          <strong>Par les lycéens, pour leurs lycées.</strong>
        </div>
        <div className="footer-links">
          <p>Navigation</p>
          {navItems.slice(0, 6).map(([id, label]) => (
            <button key={id} onClick={() => navigate(id)} type="button">
              {label}
            </button>
          ))}
        </div>
        <div className="footer-links">
          <p>Suivre le mouvement</p>
          <span>Instagram — lien à ajouter</span>
          <span>Facebook — lien à ajouter</span>
          <button onClick={() => navigate("contact")} type="button">
            Nous contacter
          </button>
        </div>
        <div className="footer-bottom">
          <span>© Youth Impact — Association YOUTH CLUBs</span>
          <span>Fait en Tunisie, avec et pour les jeunes.</span>
        </div>
      </footer>

      {selectedClub && (
        <EventModal club={selectedClub} onClose={() => setSelectedClub(null)} />
      )}
    </div>
  )
}
