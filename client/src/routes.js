import Dashboard from "views/Dashboard.jsx";
import TableList from "./views/ListUser.jsx";
import PRODUITS from "views/PRODUITS.jsx";
import CLIENTS from "views/CLIENTS.jsx";
import FORNUSSEURS from "views/FORNUSSEURS.jsx";
import Stock from "views/Stock.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa fa-pie-chart",
    component: Dashboard,
    layout: "/admin",
    direction: "Magazinier"
  },
  {
    path: "/table",
    name: "ListUser",
    icon: "fa fa-id-card",
    component: TableList,
    layout: "/admin",
    direction: "admin"
  },
  {
    path: "/STOCKS",
    name: "STOCK",
    icon: "fa fa-stack-exchange",
    component: Stock,
    layout: "/admin",
    direction: "Magazinier"
  },

  {
    path: "/PRODUITS",
    name: "PRODUITS",
    icon: "fa fa-product-hunt",
    component: PRODUITS,
    layout: "/admin",
    direction: "Magazinier"
  },
  {
    path: "/CLIENTS",
    name: "CLIENTS",
    icon: "fa fa-group",
    component: CLIENTS,
    layout: "/admin",
    direction: "admin"
  },
  {
    path: "/FORNUSSEURS",
    name: "FORNUSSEURS",
    icon: "fa fa-truck",
    component: FORNUSSEURS,
    layout: "/admin",
    direction: "admin"
  }
];

export default dashboardRoutes;
