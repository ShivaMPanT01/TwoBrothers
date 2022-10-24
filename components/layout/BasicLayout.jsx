import React, { Fragment } from "react";
import AuthLayout from "./AuthLayout";

function BasicLayout({ authCheck, children }) {
    const Layout = authCheck ? AuthLayout : Fragment;
    return <Layout>{children}</Layout>;
}

export default BasicLayout;
