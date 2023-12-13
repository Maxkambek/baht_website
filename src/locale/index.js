import { LANGUANGE } from "../tools/constant";
import { ru } from "./kr";
import { uz } from "./uz";
import { pr_uz } from "./pr_uz";
import { pr_kr } from "./pr_kr";

export const getLanguage = () => {
  return localStorage.getItem(LANGUANGE);
};

export const getText = (word) => {
  return getLanguage() === "uz" ? uz[word] : ru[word];
};

export const getText2 = (word) => {
  return getLanguage() === "ru" ? pr_kr[word] : pr_uz[word];
};
