import React, { ComponentType, useState } from "react";
import { Drawer } from "@mui/material";
import SidebarMenu from "../components/SidebarMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface IProps {}

const withLayout = (Component: ComponentType) => (props: IProps) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <React.Fragment>
      <div className="flex flex-col min-h-screen text-3xl mx-auto max-w-6xl dark:bg-gray-700 text-white">
        <Header setToggleMenu={setToggleMenu} />
        <main className="flex flex-grow">
          <Component {...props} />
        </main>
        <Footer />
      </div>
      <Drawer
        open={toggleMenu}
        onClose={() => setToggleMenu(false)}
      >
        <SidebarMenu toggleMenuFn={setToggleMenu} />
      </Drawer>
    </React.Fragment>
  );
};

export default withLayout;
