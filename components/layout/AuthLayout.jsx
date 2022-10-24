import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
    LANDING_PAGE,
    ONBOARDING_PAGE,
    PROFILE_PAGE,
} from "../../constant/pageRoutes";

const CustomRedirect = ({ to }) => {
    const router = useRouter();
    useEffect(() => {
        router.push(to);
    }, [to, router]);

    return <></>;
};

function AuthLayout({ children }) {
    const authProps = useSelector((state) => state.auth);
    const router = useRouter();
    const currentPath = router?.pathname;

    const isUserLoggedIn = authProps?.user?.id || authProps?.user?._id;
    const isOnboarded = authProps?.user?.isOnboarded;
    const userName = authProps?.user?.username;
    const allowedPaths = [LANDING_PAGE, PROFILE_PAGE];
    const isOnboardedPath = currentPath === ONBOARDING_PAGE;

    // if User is not LoggedIn and tries to Access Onboarding Pages
    if (!isUserLoggedIn && isOnboardedPath) {
        return <CustomRedirect to={LANDING_PAGE} />;
    }

    // if (isUserLoggedIn && isOnboarded && isOnboardedPath) {
    //    return <CustomRedirect to={Route.ProfilePage(userName)} />
    // }
    if (!isUserLoggedIn && !allowedPaths.includes(currentPath)) {
        return <CustomRedirect to={LANDING_PAGE} />;
    }

    // Login Scenario
    if (isOnboardedPath && isUserLoggedIn && isOnboarded) {
        return <CustomRedirect to={PROFILE_PAGE(userName)} />;
    }

    if (isUserLoggedIn && !isOnboarded && !isOnboardedPath) {
        return <CustomRedirect to={ONBOARDING_PAGE} />;
    }

    return children;
}

export default connect(mapStateToProps)(AuthLayout);
