import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import FindJob from '../Pages/FindJob';
import PostDetail from '../Pages/PostDetail';
import CompanyReview from '../Pages/CompanyReview';
import User from '../Pages/User/User';
import InfoUser from '../Pages/User/InfoUser';

const routesHome = [
    {
        exact: true,
        path: "/",
        component: Home,
    },
    {
        exact: false,
        path: "/home",
        component: Home,
    },
    {
        exact: false,
        path: "/about",
        component: About,
    },
    {
        exact: false,
        path: "/contact",
        component: Contact,
    },
    {
        exact: false,
        path: "/find-job",
        component: FindJob,
    },
    {
        exact: false,
        path: "/company-review",
        component: CompanyReview,
    },
    {
        exact: false,
        path: "/post/:id",
        component: PostDetail,
    },
];
const routesUser = [
    {
        exact: true,
        path: "/user",
        component: User,
    },
    {
        exact: false,
        path: "/user/info",
        component: InfoUser,
    },
];
export { routesHome, routesUser };