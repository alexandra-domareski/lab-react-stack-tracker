import { Link, useParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();

  const technologie = technologies.find((oneTech) => oneTech.slug === slug);

  if (!technologie) return <p>Technology not found</p>;

  return (
    <div className="details-page">
      <h1 className="details-title">Technology Details</h1>

      <div className="tech-profile">
        <div className="tech-image">
          <img
            src={technologie.image}
            alt={technologie.name}
            className="tech-logo-details"
          />
        </div>

        <div className="tech-content">
          <h2 className="tech-name-2">{technologie.name}</h2>

          <h3>About</h3>
          <p className="tech-description">{technologie.description}</p>
        </div>
      </div>

      <Link to={-1} className="btn back-button">
        ← Back to Company
      </Link>
    </div>
  );
}

export default TechnologyPage;
