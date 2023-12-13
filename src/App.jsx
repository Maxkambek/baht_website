import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  AfterDivorce,
  AgePage,
  ChildProblem,
  ChildrenPage,
  CreatePasswordPage,
  CurrentProblem,
  DivorceProblem,
  EducationPage,
  EndQuestionsPage,
  FamilyStatusPage,
  FirstLastNamePage,
  HusbandProblem,
  LocationPage,
  MainPage,
  MoralProblem,
  NoMarriageProblem,
  PassportPage,
  PhoneNumberPage,
  PhoneVerifyPage,
  RalativeProblem,
  RegistrationPhonePage,
  SexProblem,
  SocialStatus,
  StartQuestionsModalpage,
  WelcomeNotePage,
  WorkProblem,
} from "./pages";
import {
  HundredQuestionsLayout,
  NavigationLayout,
  ScrollToTop,
} from "./components";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Library from "./components/library";
import Benef from "./components/Benef";
import Buy from "./components/Buy";
import Login from "./pages/login/Login";
import Pay from "./pages/payme/Pay";
import Parol from "./pages/payme/Parol";
import About from "./components/About";
import Footer from "./components/Footer";
import Cabinet from "./components/Cabinet";
import ResultPage from "./pages/workproblem/ResultPage";
import Elon from "./components/Elon";
import { StylesProvider } from "@mui/styles";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import PrarabotkaLayout from "./components/PrarabotkaLayout";
import Prarobotka1 from "./Prorabotka/Prarobotka1";
import Buy2 from "./components/Buy2";
import Agreement from "./components/Agreement";
import { Dashboard } from "@mui/icons-material";
import DashboardPage from "./pages/main/DashboardPage";
import Prarobotka2 from "./Prorabotka/Prarobotka2";
import Prarobotka3 from "./Prorabotka/Prarobotka3";
import Prarobotka4 from "./Prorabotka/Prarobotka4";
import Prarobotka5 from "./Prorabotka/Prarobotka5";
import WhatPro from "./Prorabotka/WhatPro";
import ResultPage2 from "./pages/workproblem/ResultPage2";
import { useEffect } from "react";
import DisablePrintScreen from "./components/DisablePrintScreen";

const App = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <HashRouter>
          <Provider store={store}>
            <ScrollToTop />
            <DisablePrintScreen />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/agreement" element={<Agreement />} />
              <Route path="/cabinet" element={<Cabinet />} />
              <Route path="/about" element={<About />} />
              <Route path="/library" element={<Library />} />
              <Route path="/benef" element={<Benef />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/buy2" element={<Buy2 />} />
              <Route path="/dashboard" element={<Cabinet />} />
              <Route path="/register" element={<RegistrationPhonePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/phone-verify" element={<PhoneVerifyPage />} />
              <Route path="/create-password" element={<CreatePasswordPage />} />
              <Route path="/welcome-note" element={<WelcomeNotePage />} />

              <Route element={<NavigationLayout />}>
                <Route
                  path="/first-last-name"
                  element={<FirstLastNamePage />}
                />
                <Route path="/age" element={<AgePage />} />
                <Route path="/passport" element={<PassportPage />} />
                <Route path="/location" element={<LocationPage />} />
                <Route path="/phone-number" element={<PhoneNumberPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/family-status" element={<FamilyStatusPage />} />
                <Route path="/children" element={<ChildrenPage />} />
                <Route path="/social-status" element={<SocialStatus />} />

                <Route path="/moral-problem" element={<MoralProblem />} />
                <Route path="/relative-problem" element={<RalativeProblem />} />
                <Route path="/current-problem" element={<CurrentProblem />} />
                <Route path="/husband-problem" element={<HusbandProblem />} />
                <Route path="/divorce-problem" element={<DivorceProblem />} />
                <Route
                  path="/after-divorce-problem"
                  element={<AfterDivorce />}
                />
                <Route
                  path="/no-marriage-problem"
                  element={<NoMarriageProblem />}
                />
                <Route path="/sex-problem" element={<SexProblem />} />
                <Route path="/child-problem" element={<ChildProblem />} />
                <Route path="/work-problem" element={<WorkProblem />} />
              </Route>

              <Route path="/result-page" element={<ResultPage />} />
              <Route path="/result-page-2" element={<ResultPage2 />} />
              <Route path="/elon" element={<Elon />} />

              <Route path="/end-questions" element={<EndQuestionsPage />} />
              <Route
                path="/start-questions-modal"
                element={<StartQuestionsModalpage />}
              />
              <Route path="/pay" element={<Pay />} />
              <Route path="/parol" element={<Parol />} />
              <Route
                path="/hundred-questions-start"
                element={<HundredQuestionsLayout />}
              />

              <Route element={<PrarabotkaLayout />}>
                <Route path="/prorabotka-1" element={<Prarobotka1 />} />
                <Route path="/what-pro" element={<WhatPro />} />
                <Route path="/prorabotka-2" element={<Prarobotka2 />} />
                <Route path="/prorabotka-3" element={<Prarobotka3 />} />
                <Route path="/prorabotka-4" element={<Prarobotka4 />} />
                <Route path="/prorabotka-5" element={<Prarobotka5 />} />
              </Route>
            </Routes>
            <ToastContainer />
          </Provider>
        </HashRouter>
      </StyledEngineProvider>
    </>
  );
};

export default App;
