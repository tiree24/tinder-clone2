import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [SignUp, setSignUp] = useState(true);

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
    setSignUp(true);
  };
  return (
    <div className="overlay">
      <Nav minimal={false} setShowModal={setShowModal} showModal={showModal} setSignUp={setSignUp} />
      <div className="home">
        <h1 className="primary-title">Swipe Right®</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} SignUp={SignUp} />}
      </div>
    </div>
  );
};

export default Home;
