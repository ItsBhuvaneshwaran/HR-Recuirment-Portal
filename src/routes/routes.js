const routes = [
    {
        layout: "AuthLayout",
        path: "/auth",
        childrens: [
            {
                element: "Login",
                childPath: "/login",
            },
            {
                element: "Register",
                childPath: "/register"
            },
            {
                element: "ForgotPassword",
                childPath: "/forgotpassword"
            },
        ],
    },
    {
        layout: "MainLayout",
        path: "/main",
        childrens: [
            {
                element: "Home",
                childPath: "/home"
            },  
            
            {
                element: "Industry",
                childPath: "/industry"
            },
            {
                element: "Department",
                childPath: "/department"
            },
            {
                element: "Designation",
                childPath: "/designation"
            },
            {
                element: "KeySkills",
                childPath: "/Keyskills"
            },
            {
                element: "Role",
                childPath: "/role"
            },
            {
                element: "About",
                childPath: "/about"
            },
            {
                element: "Profile",
                childPath: "/profile"
            },            
            {
                element: "Autopage",
                childPath: "/autopage"
            },
            {
                element: "OptionMenuBar",
                childPath: "/optionmenubar"
            },
            {
                element: "CandidateMenuBar",
                childPath: "/candidatemenuBar"
            },
            // {
            //     element: "CandidateView",
            //     childPath: "/candidateview"
            // },
            // {
            //     element: "CandidateInsert",
            //     childPath: "/Candidateinsert"
            // },
        ]
    },

];

export default routes;