import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="errorContainer">
      <h1 className="errorContainer__title">404</h1>
      <h2 className="errorContainer__subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className="errorContainer__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
