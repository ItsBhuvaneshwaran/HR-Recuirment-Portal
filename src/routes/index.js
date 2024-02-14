import React from "react"
import { Route, Routes, Navigate, Router } from "react-router-dom"
import routes from "./routes"
import * as Layout from '../layout'

const AppRoutes = () => {

    const toCamelCase = (input) =>
        // /(?:^\w|[A-Z]|\b\w)/g  --> rejects to test the string based on our requirement
        input.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
            index === 0 ? letter.toLowerCase() : letter.toUpperCase()
        ).replace(/\s+/g, '');


    const getReactElement = (route) => {
        //route is variable to pass element,  it shout any word
        let screen = toCamelCase(route);
        //toCamelCase
        return React.createElement
            (require(`../pages/${screen}`).default);
        //
    }

    return (
        <div>
            <Routes>
                {
                    routes.map(({
                        layout,
                        path,
                        childrens
                    }, parentIndex) => {
                        if (childrens) {
                            const LayoutComponent = Layout[layout];

                            return (

                                childrens.map(({
                                    childPath,
                                    element
                                }, childIndex) => {
                                    return (<>
                                        <Route
                                            key={`${parentIndex}_${childIndex}`}
                                            // let a = "aa"  
                                            // and let b="cc"
                                            //  let c=a+ " " + b  --> for this we write `$`
                                            //  `${parentIndex}_${childIndex}`

                                            path={`${path}${childPath}`}
                                            exact
                                            element={
                                                <div>
                                                    <LayoutComponent>
                                                        {getReactElement(element)}
                                                        {/* route=element */}
                                                    </LayoutComponent>
                                                </div>
                                            }
                                        />
                                        <Route
                                            path="*"
                                            element={
                                                <div>
                                                    <LayoutComponent>
                                                        {getReactElement("NotFound")} {/* Assuming you have a NotFound element */}
                                                    </LayoutComponent>
                                                </div>
                                            }
                                        />

                                        {/* Redirect from root URL to /auth/login */}
                                        <Route path="/" element={<Navigate to="/auth/login" />} />
                                    </>

                                    )
                                })
                            )
                        }
                    })
                }
            </Routes>
        </div>
    )
}
export default AppRoutes;

