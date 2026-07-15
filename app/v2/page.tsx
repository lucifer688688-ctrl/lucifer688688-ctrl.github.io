"use client";

import { useState, type FormEvent } from "react";
import styles from "./page.module.css";

const capabilities = [
  ["01", "战略与场景洞察", "识别可验证的业务切入点，明确业务目标、数据边界与落地优先级。"],
  ["02", "解决方案设计", "让模型、知识、数据与既有系统在同一条业务链路中协同工作。"],
  ["03", "工程化落地", "将方案接入真实工作流，关注安全、稳定、可管理与持续迭代。"],
  ["04", "持续运营与优化", "基于实际使用反馈优化应用，让 AI 能力持续服务于业务目标。"],
];

const solutions = [
  ["AI 应用定制", "由我们把个人灵感、专业经验或业务需求，交付成可使用的 AI 工具与应用。", "需求梳理 · 定制开发 · 上线运营"],
  ["企业知识中枢", "让制度、产品、项目与服务知识可检索、可追溯，并进入员工的真实工作界面。", "知识梳理 · 权限边界 · 智能问答"],
  ["流程自动化", "围绕跨系统、重复性和高频协作环节，设计可复用的 AI 工作流与人工复核机制。", "流程诊断 · 智能编排 · 结果复核"],
  ["智能服务助手", "将业务规则、专业知识和服务标准组织为面向客户与员工的智能服务能力。", "业务规则 · 多轮协作 · 服务运营"],
];

const deliveryItems = [
  "业务场景与优先级清单",
  "模型、知识、数据与系统的实施路径",
  "可进入现有工作流的应用或集成方案",
  "上线后的评估、运营与迭代机制",
];

export default function VersionTwoPreview() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeDialog = () => {
    setDialogOpen(false);
    setSubmitted(false);
  };

  const submitConsultation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
          <a className={styles.brand} href="#top" aria-label="无限维度第 2 版预览首页">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/infinite-dimension-mark.jpg" alt="无限维度无限符号标识" />
          <span>无限维度</span>
        </a>
        <nav className={styles.nav} aria-label="第 2 版预览导航">
          <a href="#top">首页</a>
          <a href="#ai-apps">AI 应用定制</a>
          <a href="#solutions">解决方案</a>
          <a href="#method">方法</a>
          <a href="#product">产品</a>
          <a href="#about">关于我们</a>
        </nav>
        <button className={styles.headerButton} type="button" onClick={() => setDialogOpen(true)}>委托制作应用</button>
      </header>

      <section className={styles.hero} id="top" aria-labelledby="v2-hero-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.heroImage} src="/images/ai-workshop-v2.png" alt="企业团队讨论人工智能流程方案" />
        <div className={styles.heroWash} />
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>面向个人、团队与企业的 AI 应用交付</p>
          <h1 id="v2-hero-title">把复杂需求<br />交付成真正可用的 <span>AI 应用</span></h1>
          <p className={styles.heroCopy}>你只需要说清楚问题和目标，需求梳理、方案设计、开发接入与持续优化，由无限维度负责完成。</p>
          <div className={styles.heroActions}>
            <button className={styles.primaryButton} type="button" onClick={() => setDialogOpen(true)}>让我们帮你做应用 <span aria-hidden="true">→</span></button>
            <a className={styles.secondaryLink} href="#ai-apps">了解定制服务 <span aria-hidden="true">→</span></a>
          </div>
          <p className={styles.heroNote}>不卖一段代码，交付一个能被使用、维护和持续优化的应用。</p>
        </div>
        <div className={`${styles.insightCard} ${styles.insightTop}`}>
          <span>流程自动化</span>
          <strong>业务效率</strong>
          <small>基于真实流程识别可优化环节</small>
        </div>
        <div className={`${styles.insightCard} ${styles.insightBottom}`}>
          <span>模型与知识</span>
          <strong>稳定协同</strong>
          <small>让智能能力进入既有系统</small>
        </div>
      </section>

      <section className={styles.intro} aria-labelledby="v2-intro-title">
        <p className={styles.eyebrow}>ENTERPRISE AI CAPABILITIES</p>
        <h2 id="v2-intro-title">从真实问题出发，把 AI 变成你的专属能力。</h2>
        <p>个人用户、创业团队和企业都可以委托我们完成 AI 应用的设计与落地，不需要自己学习开发工具，也不需要承担试错成本。</p>
      </section>

      <section className={styles.appStudio} id="ai-apps" aria-labelledby="v2-app-studio-title">
        <div className={styles.appStudioCopy}>
          <p className={styles.eyebrow}>AI APP DELIVERY</p>
          <h2 id="v2-app-studio-title">你提供问题，我们负责把它变成应用。</h2>
          <p>从需求访谈、产品原型到模型接入、部署上线和后续维护，交给专业团队完成。你获得的是一项真正能帮助你工作、服务客户或验证业务的 AI 应用。</p>
          <button className={styles.primaryButton} type="button" onClick={() => setDialogOpen(true)}>委托我们制作 <span aria-hidden="true">→</span></button>
        </div>
        <div className={styles.appAudience} aria-label="AI 应用制作适用人群">
          <article><span>个人与专业人士</span><strong>把个人经验、内容与工作流程，沉淀成专属 AI 助手或服务工具。</strong></article>
          <article><span>创业团队</span><strong>把产品想法快速做成可验证的 MVP，减少自学工具和反复试错。</strong></article>
          <article><span>机构与门店</span><strong>将专业流程、知识与服务标准，交付为面向用户的智能应用。</strong></article>
          <article><span>企业客户</span><strong>完成模型、知识、系统与权限的集成，建立长期可运营的 AI 能力。</strong></article>
        </div>
      </section>

      <section className={styles.solutions} id="solutions" aria-labelledby="v2-solutions-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>SOLUTION AREAS</p>
          <h2 id="v2-solutions-title">从一个场景开始，逐步沉淀你的专属智能能力。</h2>
          </div>
          <p className={styles.headingCopy}>从个人工具到复杂业务系统，我们负责把技术复杂度挡在交付之后。</p>
        </div>
        <div className={styles.solutionGrid}>
          {solutions.map(([title, description, tags], index) => (
            <article className={styles.solutionCard} key={title}>
              <span className={styles.solutionIndex}>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <small>{tags}</small>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.method} id="method" aria-labelledby="v2-method-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>HOW WE WORK</p>
            <h2 id="v2-method-title">每一步都围绕真正能被使用的成果。</h2>
          </div>
            <button className={styles.quietButton} type="button" onClick={() => setDialogOpen(true)}>获取服务说明 <span aria-hidden="true">→</span></button>
        </div>
        <ol className={styles.capabilityGrid}>
          {capabilities.map(([index, title, description]) => (
            <li key={index}>
              <span className={styles.stepNumber}>{index}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.delivery} aria-labelledby="v2-delivery-title">
        <div>
          <p className={styles.eyebrow}>WHAT YOU RECEIVE</p>
          <h2 id="v2-delivery-title">你不需要成为开发者，也能拥有自己的 AI 应用。</h2>
          <p>我们把使用目标、技术路径、产品体验与后续运营放在同一条交付链路中，让个人工具、服务应用或企业系统都能持续演进。</p>
        </div>
        <ul>
          {deliveryItems.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
        </ul>
      </section>

      <section className={styles.assurance} aria-labelledby="v2-assurance-title">
        <p className={styles.eyebrow}>DELIVERY PRINCIPLES</p>
          <h2 id="v2-assurance-title">把好用、可靠和可持续放在同等位置。</h2>
        <div className={styles.assuranceGrid}>
          <article><strong>场景对齐</strong><span>先确认使用者与实际问题，再选择模型与功能边界。</span></article>
          <article><strong>数据边界</strong><span>明确知识来源、权限范围与数据使用方式。</span></article>
          <article><strong>体验与集成</strong><span>兼顾使用体验，以及与既有工具、角色和流程的协同。</span></article>
          <article><strong>持续运营</strong><span>为上线后的评估、反馈和迭代预留机制。</span></article>
        </div>
      </section>

      <section className={styles.product} id="product" aria-labelledby="v2-product-title">
        <div>
          <p className={styles.eyebrow}>PRODUCT IN PROGRESS</p>
          <h2 id="v2-product-title">无限维度 AI 志愿</h2>
          <p>面向高考志愿决策场景的智能辅助产品，结合位次、历史录取与规则信息，帮助用户形成更清晰的志愿方案。</p>
          <span>产品入口即将接入官网</span>
        </div>
        <div className={styles.productVisual} aria-label="无限维度 AI 志愿产品预留区域">
          <div className={styles.productMark}>∞</div>
          <p>AI 志愿</p>
          <small>数据、规则与决策辅助</small>
        </div>
      </section>

      <section className={styles.contact} id="about" aria-labelledby="v2-contact-title">
        <div>
          <p className={styles.eyebrow}>START A CONVERSATION</p>
          <h2 id="v2-contact-title">把你的问题交给我们，把时间留给真正重要的事。</h2>
        </div>
          <button className={styles.primaryButton} type="button" onClick={() => setDialogOpen(true)}>委托制作应用 <span aria-hidden="true">→</span></button>
      </section>

      <footer className={styles.footer}>
        <span>无限维度 · AI 应用定制 · 企业 AI 赋能 · 持续运营</span>
        <span>第 2 版视觉预览</span>
      </footer>

      {dialogOpen && (
        <div className={styles.backdrop} role="presentation" onMouseDown={closeDialog}>
          <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="v2-dialog-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className={styles.closeButton} type="button" aria-label="关闭咨询表单" onClick={closeDialog}>×</button>
            {submitted ? (
              <div className={styles.successState}>
                <p className={styles.eyebrow}>REQUEST RECEIVED</p>
                <h2 id="v2-dialog-title">我们已收到你的咨询需求。</h2>
                <p>请保留联系方式，团队会根据你的业务场景准备后续沟通。</p>
                <button className={styles.primaryButton} type="button" onClick={closeDialog}>完成</button>
              </div>
            ) : (
              <form onSubmit={submitConsultation}>
                <p className={styles.eyebrow}>SOLUTION CONSULTATION</p>
                <h2 id="v2-dialog-title">说说你希望 AI 解决的问题。</h2>
                <label>称呼<input required name="name" placeholder="如何称呼你" /></label>
                <label>联系方式<input required name="contact" placeholder="手机或邮箱" /></label>
                <label>业务场景<textarea required name="scenario" rows={4} placeholder="例如：知识库问答、流程自动化、智能客服、行业应用" /></label>
                <button className={styles.primaryButton} type="submit">提交咨询需求 <span aria-hidden="true">→</span></button>
              </form>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
