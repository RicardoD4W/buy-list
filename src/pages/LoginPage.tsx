import { useState } from "react";
import "./LoginPage.css";
import FrontFlipCardLogin from "../components/FrontFlipCardLogin";
import BackFlipCardLogin from "../components/BackFlipCardLogin";
import { useRedirect } from "../hooks/useRedirect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  useRedirect();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-center min-h-80 ">
      <ToastContainer />
      <div className="w-full max-w-md px-3">
        <div className={"card" + (isFlipped ? " flipped" : "")}>
          <FrontFlipCardLogin handleFlip={handleFlip} />
          <BackFlipCardLogin handleFlip={handleFlip} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
