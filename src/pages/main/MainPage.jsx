import { useEffect, useState } from "react";
import Future from "./components/Future";
import Header from "./components/Header";
import Social from "./components/Social";
import Target from "./components/Target";
import Loader from "../../components/Loader";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Target />
          <Future />
          <Social />
        </>
      )}
    </>
  );
};

export default MainPage;
