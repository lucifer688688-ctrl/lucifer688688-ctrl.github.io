"use client";

import { useState, type FormEvent } from "react";

const services = [
  {
    index: "01",
    title: "AI 应用开发",
    description:
      "围绕真实业务场景，设计并交付可集成、可迭代的智能应用与工作流。",
  },
  {
    index: "02",
    title: "企业 AI 赋能",
    description:
      "让模型、知识、数据与既有系统协同工作，形成可管理的企业智能能力。",
  },
  {
    index: "03",
    title: "长期运营服务",
    description:
      "从上线后的评估、优化到持续运营，让 AI 能力稳定创造业务价值。",
  },
];

const process = [
  ["01", "场景共研", "从实际业务流程与目标出发，确定可验证的 AI 切入点。"],
  ["02", "方案设计", "统筹模型、数据、知识与系统边界，形成可落地的实施路径。"],
  ["03", "工程交付", "将方案接入现有业务系统，持续打磨安全、稳定的使用体验。"],
  ["04", "运营优化", "以业务指标为依据，持续评估、迭代和扩展 AI 应用能力。"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeContact = () => {
    setContactOpen(false);
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="无限维度首页">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/infinite-dimension-mark.jpg" alt="无限维度无限符号标识" />
          <span>无限维度</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          菜单
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"} id="main-navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>服务</a>
          <a href="#method" onClick={() => setMenuOpen(false)}>方法</a>
          <a href="#product" onClick={() => setMenuOpen(false)}>产品</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>关于我们</a>
        </nav>
        <button className="button button-small" type="button" onClick={() => setContactOpen(true)}>
          联系我们
        </button>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-visual"
          src="/images/ai-enterprise-architecture.png"
          alt="企业人工智能应用架构视觉"
        />
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <p className="eyebrow">INFINITE DIMENSION AI</p>
          <h1 id="hero-title">让人工智能成为企业可用、可管、可持续进化的能力。</h1>
          <p className="hero-copy">
            无限维度专注 AI 应用开发与企业智能化赋能，从业务场景出发，建设真正进入日常工作的智能系统。
          </p>
          <div className="hero-actions">
            <button className="button" type="button" onClick={() => setContactOpen(true)}>
              咨询解决方案 <span aria-hidden="true">→</span>
            </button>
            <a className="text-link" href="#services">了解我们的能力 <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-footnote page-width">
          <span>AI 应用开发</span>
          <span>企业智能化赋能</span>
          <span>系统集成与长期运营</span>
        </div>
      </section>

      <section className="intro page-width" id="about" aria-labelledby="intro-title">
        <p className="section-kicker">ABOUT INFINITE DIMENSION</p>
        <div className="intro-grid">
          <h2 id="intro-title">不止提供模型能力，更负责把能力变成企业的工作成果。</h2>
          <p>
            我们关注模型之外的业务流程、数据基础、系统集成与组织协同，让每一项 AI 投入都具备明确的业务目标和可持续的演进路径。
          </p>
        </div>
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="section-kicker">CORE SERVICES</p>
              <h2 id="services-title">从业务洞察到稳定运行的完整能力。</h2>
            </div>
            <button className="text-link button-reset" type="button" onClick={() => setContactOpen(true)}>
              获取服务说明 <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.index}>
                <span className="service-index">{service.index}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="method page-width" id="method" aria-labelledby="method-title">
        <div className="section-heading method-heading">
          <div>
            <p className="section-kicker">HOW WE WORK</p>
            <h2 id="method-title">以业务价值为起点，逐步建立 AI 能力。</h2>
          </div>
          <p>每一步都聚焦可交付、可衡量和可持续，而非停留在概念验证。</p>
        </div>
        <ol className="process-list">
          {process.map(([index, title, description]) => (
            <li key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="product-section" id="product" aria-labelledby="product-title">
        <div className="page-width product-layout">
          <div>
            <p className="section-kicker">PRODUCT IN PROGRESS</p>
            <h2 id="product-title">无限维度 AI 志愿</h2>
            <p>
              面向高考志愿决策场景的智能辅助产品，结合位次、历史录取与规则信息，帮助用户形成更清晰的志愿方案。
            </p>
            <span className="product-status">产品入口即将接入官网</span>
          </div>
          <div className="product-stage" aria-label="无限维度 AI 志愿产品预留区域">
            <div className="product-stage-mark">∞</div>
            <p>AI 志愿</p>
            <span>从数据到决策的智能辅助</span>
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="page-width contact-layout">
          <div>
            <p className="section-kicker">START A CONVERSATION</p>
            <h2>让 AI 从概念走进你的业务现场。</h2>
          </div>
          <button className="button button-light" type="button" onClick={() => setContactOpen(true)}>
            预约沟通 <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-layout">
          <a className="brand brand-footer" href="#top" aria-label="回到无限维度首页">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/infinite-dimension-mark.jpg" alt="无限维度无限符号标识" />
            <span>无限维度</span>
          </a>
          <p>人工智能应用开发 · 企业 AI 赋能 · 长期技术服务</p>
          <p>备案信息取得后展示</p>
        </div>
      </footer>

      {contactOpen && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={closeContact}>
          <section
            className="contact-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="dialog-close" type="button" onClick={closeContact} aria-label="关闭咨询表单">×</button>
            {submitted ? (
              <div className="submitted-state">
                <p className="section-kicker">REQUEST RECEIVED</p>
                <h2 id="contact-title">我们已收到你的咨询需求。</h2>
                <p>请保留联系方式，团队将根据你填写的场景准备后续沟通。</p>
                <button className="button" type="button" onClick={closeContact}>完成</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="section-kicker">SOLUTION CONSULTATION</p>
                <h2 id="contact-title">说说你希望 AI 解决的问题。</h2>
                <label>
                  称呼
                  <input name="name" required autoComplete="name" placeholder="如何称呼你" />
                </label>
                <label>
                  联系方式
                  <input name="contact" required autoComplete="email" placeholder="手机或邮箱" />
                </label>
                <label>
                  业务场景
                  <textarea name="scenario" required rows={4} placeholder="例如：知识库问答、流程自动化、智能客服、行业应用" />
                </label>
                <button className="button" type="submit">提交咨询需求 <span aria-hidden="true">→</span></button>
              </form>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
