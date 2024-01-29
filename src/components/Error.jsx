import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-container__title">404</h1>
      <h2 className="error-container__subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className="error-container__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
