import fetch from "node-fetch";

export const mergeString = (a: string, b: string) => {
    return a + b;
}

export const extraFetch = () => {
    return fetch('127.0.0.1')
}