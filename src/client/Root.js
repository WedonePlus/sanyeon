import { BrowserRouter, Route, Routes } from "react-router-dom";
import URL from "../context/URL";
import App from "./App";

const Root = () => (
    <BrowserRouter>
        <Routes>
            <Route path={URL.MAIN} element={<App tab={URL.MENUTYPE_MAIN}></App>}></Route>

            <Route path={URL.BRAND_INFO} element={<App tab={URL.MENUTYPE_BRANDINFO}></App>}></Route>
            <Route path={URL.BRAND_BI} element={<App tab={URL.MENUTYPE_BI}></App>}></Route>
            <Route path={URL.BRAND_CLIENT} element={<App tab={URL.MENUTYPE_CLIENT}></App>}></Route>
            <Route path={URL.BRAND_PORTFOLIO} element={<App tab={URL.MENUTYPE_PORTFOLIO}></App>}></Route>

            <Route path={URL.WORK_SALES_AGENT} element={<App tab={URL.MENUTYPE_SALESAGENT}></App>}></Route>
            <Route path={URL.WORK_MARKETING} element={<App tab={URL.MENUTYPE_MARKETING}></App>}></Route>
            <Route path={URL.WORK_CONSULTING} element={<App tab={URL.MENUTYPE_CONSULTING}></App>}></Route>

            <Route path={URL.APT_INFO} element={<App tab={URL.MENUTYPE_APTINFO}></App>}></Route>

            <Route path={URL.SERVICE_NOTICE} element={<App tab={URL.MENUTYPE_NOTICE}></App>}></Route>
            <Route path={URL.SERVICE_NOTICE_DETAIL} element={<App tab={URL.MENUTYPE_NOTICE_DETAIL}></App>}></Route>
            <Route path={URL.SERVICE_CUSTOMER} element={<App tab={URL.MENUTYPE_CUSTOMER}></App>}></Route>
            <Route path={URL.SERVICE_WAY} element={<App tab={URL.MENUTYPE_WAY}></App>}></Route>
        </Routes>
    </BrowserRouter>
)
export default Root;
