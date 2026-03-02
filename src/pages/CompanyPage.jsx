import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const company = companies.find(
    (oneCompany) => oneCompany.slug === companySlug,
  );

  if (!company) return <p>Company not found</p>;

  return (
    <div className="details-page">
      <h1 className="details-title">Company Profile</h1>

      <div className="company-profile">
        <div className="company-image">
          <img src={company.logo} alt={company.name} className="company-logo" />
        </div>

        <div className="company-content">
          <h2 className="company-name">{company.name}</h2>

          <h3>About</h3>
          <p className="company-description">{company.description}</p>
        </div>
      </div>
      <ul className="tech-list">
        {company.techStack.map((tech) => (
          <li key={tech.slug} className="tech-item">
            <Link to={`/tech/${tech.slug}`} className="tech-link">
              <img src={tech.image} alt={tech.name} className="tech-logo" />
              <span className="tech-name">{tech.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
