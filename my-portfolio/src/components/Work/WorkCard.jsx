import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

/**
 * Same look as ProjectCard (project-card-view), with an inline "View details"
 * disclosure and tech chips instead of a screenshot.
 */
const WorkCard = ({ item, open, onToggle }) => {
  const hasLinks = Boolean(item.links && (item.links.gh || item.links.demo));

  return (
    <Card
      className="project-card-view work-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <Card.Subtitle className="work-meta">
            Work {item.id} · {item.category}
          </Card.Subtitle>

          <Card.Title className="work-title">{item.title}</Card.Title>

          <Card.Text className="work-tagline">{item.tagline}</Card.Text>

          <div className={`work-details${open ? " open" : ""}`}>
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
          </div>
        </div>

        <div style={{ marginTop: "18px" }}>
          <div className="work-chips">
            {item.tech.map((tech) => (
              <span key={tech} className="work-chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="work-actions">
            <Button
              variant="primary"
              onClick={() => onToggle(open ? null : item.slug)}
              aria-expanded={open}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {open ? <AiOutlineUp /> : <AiOutlineDown />} &nbsp;
              {open ? "Hide details" : "View details"}
            </Button>

            {hasLinks && (
              <span className="work-links">
                {item.links.gh && (
                  <Button
                    variant="primary"
                    href={item.links.gh}
                    target="_blank"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <BsGithub />
                  </Button>
                )}
                {item.links.demo && (
                  <Button
                    variant="primary"
                    href={item.links.demo}
                    target="_blank"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CgWebsite />
                  </Button>
                )}
              </span>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WorkCard;
