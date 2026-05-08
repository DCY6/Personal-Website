import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  Mail,
  MessageCircle,
  PenTool,
  PlayCircle,
  Sparkles,
} from 'lucide-react'
import portraitImage from './assets/berber-portrait.png'
import './App.css'

const navItems = [
  { href: '#about', label: '个人简介' },
  { href: '#portfolio', label: '作品集' },
  { href: '#contact', label: '联系方式' },
]

const projects = [
  {
    title: '交互式作品展示',
    description: '实现了一个基于多模态端到端模型的智能客服系统，详情见github',
    icon: BriefcaseBusiness,
    tags: ['React', 'FastApi', 'RAG'],
    href: 'https://github.com/DCY6/Multimodal-End-to-End-Model-Intelligent-Customer-Service-System',
  },
  {
    title: '数据可视化看板',
    description: '把复杂指标整理成可扫描的卡片、图表和状态提示，适合课程项目或实习成果展示。',
    icon: Code2,
    tags: ['Dashboard', 'Charts', 'Product'],
  },
  {
    title: '个人知识笔记',
    description: '围绕学习路径、技术文章和思考记录搭建的内容模块。',
    icon: BookOpen,
    tags: ['Writing', 'Notes', 'Web'],
    href: 'https://github.com/DCY6/AI-Study-Notes',
  },
]

const hobbies = [
  ['端游', 'fps，moba，卡牌肉鸽'],
  ['健身跑步'],
  ['轻音乐'],
  ['代码设计'],
]

function App() {
  return (
    <div>
      <header className="site-shell site-header" aria-label="主导航">
        <a className="brand-mark" href="#top" aria-label="返回首页">
          <span className="brand-pin">
            <PenTool size={20} strokeWidth={3} />
          </span>
          berber的个人网页
        </a>
        <nav>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="site-shell">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <span className="eyebrow">正在整理中的个人网站</span>
            <h1 id="hero-title">
              <span className="hero-greeting">你好，</span>
              <span className="hero-name">我是 berber!</span>
            </h1>
            <p className="hero-copy">
              我关注后端开发、ai实践和产品体验。这里会放我的项目、练习、笔记，ai应用实践方面的想法。
            </p>
            <div className="hero-actions">
              <a className="button" href="#portfolio">
                看作品 <ArrowRight size={22} strokeWidth={3} />
              </a>
              <a className="button secondary" href="#contact">
                联系我 <MessageCircle size={22} strokeWidth={3} />
              </a>
              <svg className="hero-arrow" viewBox="0 0 180 80" aria-hidden="true">
                <path d="M10 14 C62 74, 96 72, 142 35" />
                <path d="M134 22 L151 34 L135 47" />
              </svg>
            </div>
          </div>

          <aside className="portrait-note" aria-label="个人速写卡片">
            <div className="portrait-frame">
              <img className="portrait-image" src={portraitImage} alt="berber 的个人头像" />
            </div>
            <ul className="note-list">
              <li>
                <span className="rough-icon">
                  <Sparkles size={18} strokeWidth={3} />
                </span>
                喜欢学习和实践ai新兴技术
              </li>
              <li>
                <span className="rough-icon">
                  <Code2 size={18} strokeWidth={3} />
                </span>
                技能：后端开发 / ai应用开发
              </li>
            </ul>
            <span className="bounce-dot" aria-hidden="true" />
          </aside>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="section-heading">
            <h2 id="about-title" className="section-title">
              个人简介
            </h2>
          </div>
          <div className="about-grid">
            <article className="paper-card padded tilt-left">
              <h3 className="card-title">我在做什么</h3>
              <p className="body-large">
                我正在搭建自己的作品集合，把学习、项目实践和技术思考整理成一个可持续更新的空间。
              </p>
              <div className="tag-row" aria-label="技能标签">
                <span className="tag">后端开发</span>
                <span className="tag">ai应用开发</span>
                <span className="tag">项目复盘</span>
                <span className="tag">学习记录</span>
              </div>
            </article>

            <div className="hobby-panel">
              <h2 className="section-title hobby-title">兴趣爱好</h2>
              <div className="stats" aria-label="兴趣爱好">
                {hobbies.map(([title, detail]) => (
                  <div className="stat" key={title}>
                    <div>
                      <strong>{title}</strong>
                      {detail ? <span>{detail}</span> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section" aria-labelledby="portfolio-title">
          <div className="section-heading">
            <h2 id="portfolio-title" className="section-title">
              作品集
            </h2>
          </div>
          <div className="portfolio-grid">
            {projects.map((project, index) => {
              const Icon = project.icon

              return (
                <a
                  className={`paper-card project-card ${index % 2 ? 'tilt-right' : 'tilt-left'}`}
                  href={project.href}
                  key={project.title}
                  rel={project.href ? 'noreferrer' : undefined}
                  target={project.href ? '_blank' : undefined}
                >
                  <div className="project-sketch">
                    <Icon size={44} strokeWidth={2.8} />
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="section-heading">
            <h2 id="contact-title" className="section-title">
              联系方式
            </h2>
          </div>
          <div className="contact-panel">
            <div className="contact-links">
              <div className="contact-link contact-text">
                <span className="rough-icon">
                  <Mail size={18} strokeWidth={3} />
                </span>
                512172945@qq.com
              </div>
              <a
                className="contact-link"
                href="https://space.bilibili.com/295221938?spm_id_from=333.1007.0.0"
                target="_blank"
                rel="noreferrer"
              >
                <span className="rough-icon">
                  <PlayCircle size={18} strokeWidth={3} />
                </span>
                我的B站主页
              </a>
              <a className="contact-link" href="https://github.com/DCY6" target="_blank" rel="noreferrer">
                <span className="rough-icon">
                  <GitBranch size={18} strokeWidth={3} />
                </span>
                GitHub / berber
              </a>
              <a className="contact-link" href="#top">
                <span className="rough-icon">
                  <PenTool size={18} strokeWidth={3} />
                </span>
                回到 berber 的草稿纸顶部
              </a>
            </div>

            <article className="paper-card padded contact-note">
              <h3 className="card-title">欢迎交流</h3>
              <p className="body-large">
                如果你有关于后端开发、AI应用实践、项目合作或技术交流的想法，欢迎通过上面的方式联系我。
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-shell site-footer">
        <span>© 2026 berber</span>
        <span>用 React、Vite 和一张有点歪的草稿纸制作</span>
      </footer>
    </div>
  )
}

export default App
