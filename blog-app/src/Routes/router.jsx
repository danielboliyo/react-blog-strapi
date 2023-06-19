import { Suspense, lazy } from 'react';
import TopBar from '../components/TopBar/TopBar';
import Footer from '../components/Footer/Footer';
import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';
import Alerts from '../components/Alerts/Alerts';

const Home = lazy(() => import('../views/Home/Home'));
const CreateBlog = lazy(() => import('../views/CreateBlog/CreateBlog'));
const About = lazy(() => import('../views/About/About'));
const Blog = lazy(() => import('../views/Blog/Blog'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/explore" />
    },
    {
        path: '/',
        element: (
            <>
                <TopBar />
                <Alerts />
                <Outlet />
                <Footer />
            </>
        ),
        children: [
            {
                path: 'explore',
                element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>
            },
            {
                path: 'create',
                element: <Suspense fallback={<div>Loading...</div>}><CreateBlog /></Suspense>
            },
            {
                path: 'about',
                element: <Suspense fallback={<div>Loading...</div>}><About /></Suspense>
            },
            {
                path: 'blog',
                element: <Suspense fallback={<div>Loading...</div>}><Blog /></Suspense>
            }
        ]
    }
]);

export default router;
