import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { useTranslation } from "../../hooks/useTranslation";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "odoo", label: "Odoo" },
];

export const Portfolio = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? dataportfolio
      : dataportfolio.filter((data) => data.category === filter);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="po_filters mb-4">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`po_filter_btn${filter === f.key ? " active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.key === "all" ? t("All") : f.label}
            </button>
          ))}
        </div>
        <div className="mb-5 po_items_ho">
          {filteredData.map((data) => {
            return (
              <div key={data.title} className={`po_item${data.img ? "" : " po_item-noimg"}`}>
                {data.img && <img src={data.img} alt={data.title || data.description} />}
                <div className="content">
                  {data.title && <h4 className="po_title">{data.title}</h4>}
                  <p>{data.description}</p>
                  {data.stack && (
                    <div className="po_stack">
                      {data.stack.map((tech, j) => (
                        <span className="po_tag" key={j}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {data.result && <p className="po_result">{data.result}</p>}
                  {data.link ? (
                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                      view project
                    </a>
                  ) : (
                    <span className="po_private">Projet privé</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
