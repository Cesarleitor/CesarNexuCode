import './PartnerCard.css'

function PartnerCard({
  name,
  description,
  url,
}) {
  return (
    <article className="partner-card">

      <div className="partner-card__content">

        <span className="partner-card__eyebrow">
          Parceiro
        </span>

        <h3 className="partner-card__name">
          {name}
        </h3>

        <p className="partner-card__description">
          {description}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="partner-card__link"
        >
          Visitar parceiro
          <span aria-hidden="true">→</span>
        </a>

      </div>

    </article>
  )
}

export default PartnerCard