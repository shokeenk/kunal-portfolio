import { contact, person } from "../data/portfolio.js";
import CopyButton from "./CopyButton.jsx";
import ExternalLink from "./ExternalLink.jsx";
import Icon from "./Icon.jsx";

export default function Contact() {
  const tel = person.phone.replace(/\s+/g, "");
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact">
          <div className="contact-copy">
            <h2 id="contact-title">{contact.heading}</h2>
            <p>{contact.text}</p>
            <ExternalLink className="btn btn-invert" href={person.resume}>
              <Icon name="download" size={16} />
              Download resume
            </ExternalLink>
          </div>
          <dl className="contact-list">
            <div className="contact-item">
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${person.email}`}>{person.email}</a>
                <CopyButton value={person.email} label="email address" />
              </dd>
            </div>
            <div className="contact-item">
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${tel}`}>{person.phone}</a>
                <CopyButton value={tel} label="phone number" />
              </dd>
            </div>
            <div className="contact-item">
              <dt>Based in</dt>
              <dd>{person.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
