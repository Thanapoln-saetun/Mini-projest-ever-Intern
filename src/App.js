import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer,HomeRegister, Edit, Details } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";






const App = () => {
  const [{ Items }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllItems().then((data) => {
      dispatch({
        type: actionType.SET_ITEMS,
        Items: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/HomeRegister" element={<HomeRegister />} />
            <Route path="HomeRegister/edit/:id" element={<Edit />} />
            <Route path="HomeRegister/view/:id" element={<Details />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
