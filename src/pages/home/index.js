import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LangSelector from "../../components/LangSelector";
import { useTranslation } from "../../hooks/useTranslation";
import Typewriter from "typewriter-effect";
import { introdata, meta, skills, dataportfolio } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  const { t, language } = useTranslation();
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setRefreshKey(prev => prev + 1);
  }, [language]);
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <LangSelector />
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x zoom-text">{t(introdata.title)}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    key={refreshKey}
                    options={{
                      strings: [
                        t(introdata.animated.first),
                        t(introdata.animated.second),
                        t(introdata.animated.third),
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x zoom-text">{t(introdata.description)}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      {t("My Portfolio")}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      {t("Contact Me")}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-stack-preview">
          <h3 className="section-label">{t("Skills")}</h3>
          <div className="stack-chips">
            {skills.map((s, i) => (
              <span className="chip" key={i}>
                {s.name}
              </span>
            ))}
          </div>
        </div>

        <div className="home-projects-preview">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <h3 className="section-label mb-0">{t("Featured Projects")}</h3>
            <Link to="/portfolio" className="view-all-link">
              {t("View All Projects")}
            </Link>
          </div>
          <div className="projects-grid">
            {dataportfolio.slice(0, 3).map((p, i) => (
              <Link to="/portfolio" key={i} className="project-card">
                <img src={p.img} alt={p.description} />
                <p>{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
