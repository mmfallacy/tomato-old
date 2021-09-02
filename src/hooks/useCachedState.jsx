import React, { useState, useEffect } from "react";

/**
 * Custom React Hook that retrieves cached state if available and updates cache on state change.
 * @param {string} name
 * @param {any} defaultValue
 * @returns {object} {state, setter}
 */
const useCachedState = (name, defaultValue) => {
    const [state, setter] = useState(defaultValue);

    /**
     * Retrieve cached if available on mount
     */
    useEffect(() => {
        const item = localStorage.getItem(name);
        if (item) setter(JSON.parse(item));
        else localStorage.setItem(name, JSON.stringify(defaultValue));
    }, []);

    /**
     * On state change, update cache
     */
    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(state));
    }, [state]);

    return [state, setter];
};

export default useCachedState;
