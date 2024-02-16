import { useState } from "react";
import "./LoginPage.css";
import FrontFlipCardLogin from "../components/FrontFlipCardLogin";
import BackFlipCardLogin from "../components/BackFlipCardLogin";
import { useRedirect } from "../hooks/useRedirect";

const LoginPage = () => {
  useRedirect();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-center min-h-80 ">
      <div className="max-w-sm w-80">
        <div className={"card" + (isFlipped ? " flipped" : "")}>
          <FrontFlipCardLogin handleFlip={handleFlip} />
          <BackFlipCardLogin handleFlip={handleFlip} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
