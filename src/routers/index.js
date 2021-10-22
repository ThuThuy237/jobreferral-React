import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import FindJob from '../Pages/FindJob';
import PostDetail from '../Pages/PostDetail';
import CompanyReview from '../Pages/CompanyReview';

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
    // {
    //     exact: false,
    //     path: "/r-register",
    //     component: RegisterRecruiter,
    // },
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
export { routesHome, }