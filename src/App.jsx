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

const App = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <HashRouter>
          <Provider store={store}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/cabinet" element={<Cabinet />} />
              <Route path="/about" element={<About />} />
              <Route path="/library" element={<Library />} />
              <Route path="/benef" element={<Benef />} />
              <Route path="/buy" element={<Buy />} />
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
              {/* <Route element={<HundredQuestionsLayout />}>
              <Route path="/hundred-questions-start" element={<HundredQuestionsStartPage />} />
              <Route path="/hundred-questions-start-2" element={<HundredQuestionsStartPage2 />} />
            </Route> */}
            </Routes>
            <ToastContainer />
          </Provider>
        </HashRouter>
      </StyledEngineProvider>
    </>
  );
};

export default App;
