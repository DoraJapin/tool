export const set = (key, value) => {
    window.localStorage[key] = value;
}
export const get = (key, defaultValue) => {
    return window.localStorage[key] || defaultValue;
}
export const setObject = (key, value) => {
    window.localStorage[key] = JSON.stringify(value);
}
export const getObject = (key) => {
    return JSON.parse(window.localStorage[key] || '{}');
}

