import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div>
      <h1 className="page-title">
        StackTracker: Discover Tech Stacks Used by Top Companies
      </h1>

      <div className="companies-container">
        {companies.map((oneCompany) => {
          return (
            <Link
              to={`/company/${oneCompany.slug}`}
              key={oneCompany.id}
              className="card-link"
            >
              <div className="company-card">
                <img
                  src={oneCompany.logo}
                  alt={oneCompany.name}
                  className="company-logo"
                />
                <p className="company-name">{oneCompany.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
