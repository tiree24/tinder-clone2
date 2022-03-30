import colorLogo from "../images/Tinder-logo.png";
import whiteLogo from "../images/tinder-white5.png";

const Nav = ({ minimal, setShowModal, showModal, setSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setSignUp(false);
  };
  const authToken = false;
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} />
      </div>
      {!authToken && !minimal && (
        <button className="nav-button" onClick={handleClick} disabled={showModal}>
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
