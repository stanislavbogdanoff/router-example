import { Link } from "react-router-dom";

const Navbar = ({ userData }) => {
  return (
    <header>
      <h2>React Router App</h2>

      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          {userData.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>User #{user.id}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
