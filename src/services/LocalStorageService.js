import localforage from "localforage";

export const setDataToStorage = (markers, key) => {
    localforage.setItem(key, markers)
}
export const getDataFromStorage = (key) => {
    return localforage.getItem(key)
}