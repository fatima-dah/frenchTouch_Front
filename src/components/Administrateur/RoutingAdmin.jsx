import AdminHome from "../Administrateur/Adminhome/AdminHome";
// import AdminGift from "../Administrateur/Adminprestation/AdminGift";
// import AdminNotice from "../Administrateur/Adminbook/Notice";
import AdminBook from "../Administrateur/Adminbook/AdminBook";
import AdminAbout from "../Administrateur/Adminabout/AdminAbout";
import AdminPalette from "../Administrateur/Adminpalette/AdminPalette";
import AdminShop from "../Administrateur/Adminshop/AdminShop";
import AdminPrestation from "../Administrateur/Adminprestation/AdminPrestation";
import AdminReserve from "../Administrateur/Adminreserve/AdminReserve";




export var AdminRoutes = [
  {
    path: "/admin/home",
    name: "Dashbord Accueil",
    icon: "mdi mdi-adjust",
    component: AdminHome,
  },
  {
    path: "/admin/about",
    name: "Gestion Commentaires",
    icon: "mdi mdi-toggle-switch",
    status: "admin",
    component: AdminAbout,
  },
  {
    path: "/admin/book",
    name: "Gestion Book",
    icon: "mdi mdi-comment-processing-outline",
    statusnam: "admin",
    component: AdminBook,
  },
  {
    path: "/admin/palette",
    name: "Gestion Palette",
    icon: "mdi mdi-image-filter-vintage",
    status: "admin",
    component: AdminPalette,
  },
  {
    path: "/admin/shop",
    name: "Gestion Shop",
    icon: "mdi mdi-credit-card-multiple",
    status: "admin",
    component: AdminShop,
  },
  {
    path: "/admin/prestation",
    name: "Gestion Prestations",
    icon: "mdi mdi-pencil-circle",
    status: "admin",
    component: AdminPrestation,
  },
  {
    path: "/admin/reserve",
    name: "Gestion Reserve",
    icon: "mdi mdi-pencil-circle",
    status: "admin",
    component: AdminReserve,
  },
  {
    path: "/admin",
    pathTo: "/admin/home",
    name: "Dashboard",
    redirect: true,
  },
];

export default AdminRoutes;