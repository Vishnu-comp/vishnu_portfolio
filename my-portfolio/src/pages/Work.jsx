import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import Particle from "../components/Particle";
import WorkCard from "../components/Work/WorkCard";
import {
  COMPANY,
  CATEGORIES,
  WORK_ITEMS,
  SHOW_DRAFT_BANNER,
} from "../components/Work/workData";

import "../components/Work/Work.css";

const ALL = "All";

const Work = () => {
  const [filter, setFilter] = useState(ALL);
  const [openSlug, setOpenSlug] = useState(null);
  const [view, setView] = useState("grid");

  const filters = useMemo(
    () => [
      ALL,
      ...CATEGORIES.filter((cat) =>
        WORK_ITEMS.some((item) => item.category === cat)
      ),
    ],
    []
  );

  const items = useMemo(
    () =>
      filter === ALL
        ? WORK_ITEMS
        : WORK_ITEMS.filter((item) => item.category === filter),
    [filter]
  );

  const toggle = (slug) => setOpenSlug((prev) => (prev === slug ? null : slug));

  return (
    <Container fluid className="work-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="yellow">at {COMPANY}</strong>
        </h1>

        <p className="work-subheading">
          Systems I shipped at {COMPANY} — matching logic, partner portal
          modules, integrations and internal tooling. Tap an entry to read how it
          was built.
        </p>

        {SHOW_DRAFT_BANNER && (
          <p className="work-draft-note">
            Draft copy: replace the write-ups in{" "}
            <code>src/components/Work/workData.js</code> with the real details
            from your Notion page, then set <code>SHOW_DRAFT_BANNER = false</code>.
          </p>
        )}

        <div className="work-toolbar">
          <div className="work-filters">
            {filters.map((name) => (
              <button
                key={name}
                type="button"
                className={`work-pill${filter === name ? " active" : ""}`}
                onClick={() => {
                  setFilter(name);
                  setOpenSlug(null);
                }}
              >
                {name}
                <span className="work-pill-count">
                  {name === ALL
                    ? WORK_ITEMS.length
                    : WORK_ITEMS.filter((i) => i.category === name).length}
                </span>
              </button>
            ))}
          </div>

          <div className="work-view-toggle">
            <button
              type="button"
              className={`work-pill small${view === "grid" ? " active" : ""}`}
              onClick={() => setView("grid")}
            >
              Grid
            </button>
            <button
              type="button"
              className={`work-pill small${view === "timeline" ? " active" : ""}`}
              onClick={() => setView("timeline")}
            >
              Timeline
            </button>
          </div>
        </div>

        {view === "grid" ? (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {items.map((item) => (
              <Col key={item.slug} md={6} className="project-card">
                <WorkCard item={item} open={openSlug === item.slug} onToggle={toggle} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="work-timeline">
            {items.map((item) => {
              const open = openSlug === item.slug;
              return (
                <div key={item.slug} className={`work-tl-row${open ? " open" : ""}`}>
                  <button
                    type="button"
                    className="work-tl-dot"
                    onClick={() => toggle(item.slug)}
                    aria-label={`Toggle ${item.title}`}
                  >
                    <AiOutlineFundProjectionScreen />
                  </button>
                  <div className="work-tl-body">
                    <div className="work-tl-head" onClick={() => toggle(item.slug)}>
                      <span className="work-tl-num">{item.id}</span>
                      <div className="work-tl-title">
                        <h3>{item.title}</h3>
                        <span className="work-meta-inline">{item.category}</span>
                      </div>
                      <span className="work-tl-toggle">{open ? "Hide" : "Read"}</span>
                    </div>
                    <p className="work-tagline">{item.tagline}</p>
                    {open && (
                      <div className="work-tl-details">
                        <div className="work-detail-block">
                          <h4>The problem</h4>
                          <p>{item.problem}</p>
                        </div>
                        <div className="work-detail-block">
                          <h4>What I built</h4>
                          <p>{item.approach}</p>
                        </div>
                        <div className="work-detail-block">
                          <h4>Impact</h4>
                          <p>{item.impact}</p>
                        </div>
                        <div className="work-chips">
                          {item.tech.map((tech) => (
                            <span key={tech} className="work-chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <p className="work-footnote">
          Showing {items.length} of {WORK_ITEMS.length} entries
          {filter !== ALL ? ` in ${filter}` : ""}.
        </p>
      </Container>
    </Container>
  );
};

export default Work;
