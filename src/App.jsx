import { useEffect, useState } from 'react'
import './App.css'

import mascotMain from './assets/hemocard/mascote-principal.png'
import mascotHand from './assets/hemocard/mascote-mao.png'
import mascotSave from './assets/hemocard/mascote-salve-vidas.png'

import iconDrop from './assets/hemocard/gota.png'
import iconPerson from './assets/hemocard/pessoa.png'
import iconFrequency from './assets/hemocard/frequencia.png'
import iconShield from './assets/hemocard/seguro.png'
import iconRegister from './assets/hemocard/cadastro.png'
import iconSearch from './assets/hemocard/lupa.png'
import iconCalendar from './assets/hemocard/calendario.png'
import iconTarget from './assets/hemocard/alvo.png'
import iconImpactDrop from './assets/hemocard/impacto-gota.png'
import iconImpactPerson from './assets/hemocard/impacto-pessoa.png'
import iconImpactHeart from './assets/hemocard/impacto-coracao.png'
import iconImpactSeal from './assets/hemocard/impacto-selo.png'

const donationCards = [
  {
    icon: iconDrop,
    title: 'Por que doar?',
    text: 'O sangue não pode ser fabricado. Uma única doação pode ajudar até 4 pessoas e fazer diferença em situações de emergência, cirurgias e tratamentos.',
  },
  {
    icon: iconPerson,
    title: 'Quem pode doar?',
    text: 'Pessoas entre 16 e 69 anos, com boa saúde e peso mínimo de 50 kg, podem ser candidatas à doação.',
  },
  {
    icon: iconFrequency,
    title: 'Com que frequência?',
    text: 'Homens podem doar a cada 60 dias. Mulheres, a cada 90 dias. Sempre com orientação correta.',
  },
  {
    icon: iconShield,
    title: 'É seguro?',
    text: 'Sim. Todo o material utilizado é esterilizado, descartável e o processo é acompanhado por profissionais qualificados.',
  },
]

const steps = [
  {
    icon: iconRegister,
    title: 'Cadastre-se',
    text: 'Crie seu perfil e informe seus dados para descobrir se você está apto a doar.',
  },
  {
    icon: iconSearch,
    title: 'Encontre uma necessidade',
    text: 'Veja campanhas, pedidos urgentes e locais próximos que precisam da sua ajuda.',
  },
  {
    icon: iconCalendar,
    title: 'Agende sua doação',
    text: 'Escolha o melhor dia, horário e ponto de atendimento para doar com praticidade.',
  },
  {
    icon: iconTarget,
    title: 'Gere impacto real',
    text: 'Sua doação pode ajudar até 4 vidas e fortalecer uma rede de esperança.',
  },
]

const impactNumbers = [
  { icon: iconImpactDrop, value: '20+', label: 'vidas salvas por doação' },
  { icon: iconImpactPerson, value: '6000+', label: 'doadores conectados' },
  { icon: iconImpactHeart, value: '9000+', label: 'ações solidárias registradas' },
  { icon: iconImpactSeal, value: '98%', label: 'campanhas e pedidos atendidos' },
]

const testimonials = [
  {
    quote:
      'Doar sangue me fez enxergar que um gesto pequeno pode ter um impacto enorme na vida de alguém. Hoje, doar é parte de quem eu sou.',
    name: 'Ana Paula',
    label: 'Doadora desde 2019',
    initials: 'AP',
  },
  {
    quote:
      'Depois do acidente, precisei de transfusões para continuar jogando futebol. Saber que existiram doadores dispostos a ajudar mudou minha história.',
    name: 'Menino Ney',
    label: 'Receptor de sangue',
    initials: 'MN',
  },
  {
    quote:
      'Doar parece algo simples, e realmente é. Mas a diferença que isso faz para quem precisa é imensa.',
    name: 'Maria José',
    label: 'Doadora há 8 anos',
    initials: 'MJ',
  },
]

const faqItems = [
  {
    question: 'Quem pode doar sangue?',
    answer:
      'Em geral, pessoas entre 16 e 69 anos, com bom estado de saúde e peso mínimo de 50 kg podem doar. Menores de idade precisam de autorização conforme as regras do hemocentro.',
  },
  {
    question: 'Quanto tempo dura a doação?',
    answer:
      'A coleta costuma ser rápida. Considerando cadastro, triagem e orientação, o processo completo geralmente leva menos de uma hora.',
  },
  {
    question: 'Preciso estar em jejum?',
    answer:
      'Não. O ideal é estar bem alimentado, evitando comidas muito gordurosas nas horas anteriores à doação.',
  },
  {
    question: 'Quem tem tatuagem pode doar?',
    answer:
      'Pode, mas normalmente é necessário respeitar um intervalo de segurança após a realização da tatuagem. Consulte sempre a orientação do hemocentro.',
  },
  {
    question: 'Doar sangue dói?',
    answer:
      'A sensação costuma ser apenas uma picada leve no início. A equipe acompanha o doador durante todo o procedimento.',
  },
  {
    question: 'Posso pegar alguma doença doando sangue?',
    answer:
      'Não. O material usado na coleta é esterilizado, descartável e aberto apenas no momento do atendimento.',
  },
  {
    question: 'Quanto sangue é coletado?',
    answer:
      'A coleta costuma ser de aproximadamente 450 ml, volume seguro para pessoas aprovadas na triagem clínica.',
  },
]

function BrandLogo({ light = false }) {
  return (
    <a href="#inicio" className={`brand-logo ${light ? 'brand-logo--light' : ''}`} aria-label="Hemocard - Início">
      <span className="brand-logo-word">
        <span>Hemo</span>Card
      </span>
      <small>mais que um app, uma ponte para a vida</small>
    </a>
  )
}

function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className={`section-header ${light ? 'section-header--light' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

function InfoCard({ icon, title, text }) {
  return (
    <article className="info-card">
      <img src={icon} alt="" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="faq-list">
      {faqItems.map((item, index) => {
        const isOpen = activeIndex === index

        return (
          <div className="faq-item" key={item.question}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <span className="faq-arrow">▾</span>
            </button>
            <div className="faq-answer" data-open={isOpen}>
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function App() {
  const currentYear = new Date().getFullYear()
  const [navSurface, setNavSurface] = useState('red')
  const [activeNav, setActiveNav] = useState('sobre')
  const [heroMascotVisible, setHeroMascotVisible] = useState(false)

  useEffect(() => {
    let frameId = 0

    const updateNavState = () => {
      frameId = 0

      const navProbeY = 42
      const surfaceSections = document.querySelectorAll('[data-nav-surface]')
      const currentSurfaceSection = Array.from(surfaceSections).find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= navProbeY && rect.bottom > navProbeY
      })

      const activeProbeY = Math.min(window.innerHeight * 0.36, 300)
      const navSections = document.querySelectorAll('[data-nav-id]')
      const currentNavSection = Array.from(navSections).find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= activeProbeY && rect.bottom > activeProbeY
      })

      setNavSurface(currentSurfaceSection?.dataset.navSurface ?? 'red')
      setActiveNav(currentNavSection?.dataset.navId ?? 'sobre')
    }

    const scheduleUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(updateNavState)
    }

    updateNavState()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  useEffect(() => {
    let frameId = 0

    const updateHeroMascot = () => {
      frameId = 0
      setHeroMascotVisible(window.scrollY > 24)
    }

    const scheduleUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(updateHeroMascot)
    }

    updateHeroMascot()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.16,
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="hemocard-page">
      <img
        className={`hero-animated-mascot ${heroMascotVisible ? 'is-visible' : ''}`}
        src={mascotMain}
        alt="Mascote Hemo segurando o símbolo do Hemocard"
      />

      <section className="hero-section" id="inicio" data-nav-surface="red" data-nav-id="sobre">
        <header className={`topbar topbar--${navSurface}`} aria-label="Menu principal">
          <BrandLogo light />
          <nav>
            <a href="#sobre" aria-current={activeNav === 'sobre' ? 'page' : undefined}>Sobre</a>
            <a href="#como-funciona" aria-current={activeNav === 'como-funciona' ? 'page' : undefined}>Como funciona</a>
            <a href="#agendamento" aria-current={activeNav === 'agendamento' ? 'page' : undefined}>Agendamento</a>
            <a href="#forum" aria-current={activeNav === 'forum' ? 'page' : undefined}>Fórum</a>
          </nav>
          <a className="topbar-cta" href="#agendamento">Doe Agora</a>
        </header>

        <div className="hero-content">
          <BrandLogo light />
          <h1>
            Vidas se conectam <strong>aqui, com um gesto.</strong>
          </h1>
        </div>
      </section>

      <section className="section section--white about-section" id="sobre" data-nav-surface="white" data-nav-id="sobre">
        <div className="container" data-reveal>
          <SectionHeader
            eyebrow="Sobre a doação"
            title="Antes de doar, entenda o essencial."
            subtitle="Entenda como sua doação pode salvar vidas com segurança."
          />

          <div className="card-grid card-grid--four">
            {donationCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white steps-section" id="como-funciona" data-nav-surface="white" data-nav-id="como-funciona">
        <img className="side-mascot side-mascot--hand" src={mascotHand} alt="Mascote Hemo recebendo uma doação" />
        <div className="container" data-reveal>
          <SectionHeader
            eyebrow="Passo a passo"
            title="Como funciona o HEMOCARD."
            subtitle="Doar sangue pode ser mais simples, humano e conectado do que parece."
          />

          <div className="card-grid card-grid--four">
            {steps.map((step) => (
              <InfoCard key={step.title} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="impact-section" aria-labelledby="impact-title" data-nav-surface="red" data-nav-id="como-funciona">
        <div className="container" data-reveal>
          <SectionHeader eyebrow="Impacto" title="Nosso impacto em números" light />

          <div className="impact-grid" id="impact-title">
            {impactNumbers.map((item) => (
              <article className="impact-card" key={item.label}>
                <img src={item.icon} alt="" aria-hidden="true" />
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <p className="impact-note">Dados apresentados para fins de demonstração visual do projeto.</p>
          <img className="save-mascot" src={mascotSave} alt="Mascote Hemo com balão escrito Salve vidas" />
        </div>
      </section>

      <section className="appointment-section" id="agendamento" data-nav-surface="white" data-nav-id="agendamento">
        <div className="container appointment-layout" data-reveal>
          <div className="appointment-copy">
            <h2>
              Seu gesto pode <span>salvar vidas.</span>
            </h2>
            <p>
              Preencha o formulário e dê o primeiro passo para ajudar quem precisa. Nossa equipe entra em contato para confirmar sua solicitação e orientar os próximos passos.
            </p>
          </div>

          <form className="schedule-card" onSubmit={(event) => event.preventDefault()}>
            <div className="form-icon-wrap">
              <img src={iconPerson} alt="" aria-hidden="true" />
            </div>
            <h3>Agende sua doação</h3>
            <label>
              Nome completo
              <input type="text" placeholder="Seu nome" />
            </label>
            <div className="form-row">
              <label>
                Email
                <input type="email" placeholder="seu_email@email.com" />
              </label>
              <label>
                Telefone
                <input type="tel" placeholder="(xx) 99999-9999" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Tipo sanguíneo
                <select defaultValue="">
                  <option value="" disabled>Selecione</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>Não sei</option>
                </select>
              </label>
              <label>
                Data da doação
                <input type="text" placeholder="dd/mm/aaaa" onFocus={(event) => (event.currentTarget.type = 'date')} />
              </label>
            </div>
            <button type="submit">Agendar minha doação</button>
          </form>
        </div>
      </section>

      <section className="forum-section" id="forum" data-nav-surface="white" data-nav-id="forum">
        <div className="container" data-reveal>
          <SectionHeader eyebrow="Fórum" title="Vidas transformadas por um gesto" />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p>"{item.quote}"</p>
                <div className="testimonial-author">
                  <div className="avatar" aria-hidden="true">{item.initials}</div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.label}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="duvidas" data-nav-surface="red" data-nav-id="forum">
        <div className="container faq-layout" data-reveal>
          <SectionHeader eyebrow="Tire suas dúvidas" title="Sobre a doação" light />
          <Faq />
        </div>
      </section>

      <footer className="site-footer" data-nav-surface="white">
        <div className="container footer-layout">
          <BrandLogo />
          <p>© {currentYear} Hemocard. Projeto acadêmico de conscientização e incentivo à doação de sangue.</p>
        </div>
      </footer>
    </main>
  )
}

export default App
