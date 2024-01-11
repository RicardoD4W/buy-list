import { useState } from "react";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";

const DrawerNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla"
        size={"100vw"}
      >
        <button onClick={() => setIsOpen(false)}>Hello World</button>
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
