import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import FindJob from '../Pages/FindJob';
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
    //     path: "/courses",
    //     component: CoursesPage,
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
    }
    // {
    //     exact: false,
    //     path: "/course/:id",
    //     component: DetailCourse,
    // },
];
export { routesHome, }