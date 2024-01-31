import Home from "../home/Home";
import About from "../About/About";
import Calculator from "../Calculator/Calculator";
import Contacts from "../contacts/Contacts";

export const publicRoutes = [
  { path: "/", component: Home, exact: true },
  { path: "/home", component: Home, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/calc", component: Calculator, exact: true },
  { path: "/contacts", component: Contacts, exact: true },
];

export const privateRoutes = [{}];
