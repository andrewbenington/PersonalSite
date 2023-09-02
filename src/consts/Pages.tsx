import {
    About,
    Classes,
    Experience,
    Projects,
    Skills,
    VLCProject,
} from "../pages";

interface Page {
    name: string;
    hideMobileName?: boolean;
    path: string;
    component: JSX.Element;
    excludeFromHeader?: boolean;
}

const Pages: Page[] = [
    {
        name: "About",
        hideMobileName: true,
        path: "/",
        component: <About />,
    },
    {
        name: "Experience",
        path: "/experience",
        component: <Experience />,
    },
    {
        name: "Skills",
        path: "/skills",
        component: <Skills />,
    },
    {
        name: "Projects",
        path: "/projects",
        component: <Projects />,
    },
    {
        name: "VLC Project",
        path: "/projects/vlc-project",
        component: <VLCProject />,
        excludeFromHeader: true,
    },
    {
        name: "Classes",
        path: "/classes",
        component: <Classes />,
    },
];

export default Pages;
