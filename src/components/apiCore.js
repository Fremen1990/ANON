import {API, API_EXTERNAL} from "../config";
import queryString from "query-string";



export const getArticles = (sortBy) => {
    return fetch(`${API_EXTERNAL}/articles?sort_by=${sortBy}&order=desc&limit=6`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const read = (articleId) => {
    return fetch(`${API_EXTERNAL}/article/${articleId}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const getCategories = () => {
    return fetch(`${API_EXTERNAL}/categories`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};



export const getCategory = (categoryId) => {
    return fetch(`${API_EXTERNAL}/category/${categoryId}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};


export const getFilteredArticles = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters,
    };

    return fetch(`${API_EXTERNAL}/articles/by/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

export const listRelated = (articleId) => {
    return fetch(`${API_EXTERNAL}/products/related/${articleId}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};
