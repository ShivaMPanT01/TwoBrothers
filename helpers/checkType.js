export const isObj = (obj) =>
    typeof obj === "object" && typeof obj !== null && !Array.isArray(obj);

export const isServer = () => typeof window === "undefined";
