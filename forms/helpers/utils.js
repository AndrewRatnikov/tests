import * as Yup from 'yup';

export const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

export const schema =  Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(1).required(),
});

const localStorageKey = 'testLogin';

export const saveDataToLocalStorage = (data) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
};

export const loadDataFromLocalStorage = () => JSON.parse(localStorage.getItem(localStorageKey));
