import React from 'react'

import { Routes, Route } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "./components";

function Darzii() {
    return (
        <>
            <div id="main">
                <Sidebar>
                    <Routes>
                        <Route path="/" element={<DynamicItem page="homepage" />} />
                        {dummyData &&
                            dummyData.map((item, index) => (
                                <Route
                                    key={index}
                                    path={item.path}
                                    element={<DynamicItem page={item.name} />}
                                />
                            ))}
                    </Routes>
                </Sidebar>
            </div>        </>
    )
}

export default Darzii