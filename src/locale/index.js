import { LANGUANGE } from "../tools/constant";
import { ru } from "./kr";
import { uz } from "./uz";

export const getLanguage = () => {
  return localStorage.getItem(LANGUANGE);
};

export const getText = (word) => {
  return getLanguage() === "uz" ? uz[word] : ru[word];
};
