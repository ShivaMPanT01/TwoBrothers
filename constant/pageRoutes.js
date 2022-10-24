export const ONBOARDING_PAGE = "/ob-page";
export const LOGIN_PAGE = "/login";
export const SIGN_UP_PAGE = "/sign-up";
export const LANDING_PAGE = "/";
export const PROFILE_PAGE = (username) =>
    `/profile-page/${username ? username : ""}`;
