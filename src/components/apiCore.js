import {API} from "../config";
import queryString from "query-string";


export const list = (params) => {
    const query = queryString.stringify(params);

    console.log("query", query);
    return fetch(`${API}/articles?${query}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const getArticles = (sortBy) => {
    return fetch(`${API}/articles?sort_by=${sortBy}&order=desc&limit=99`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

// ${categoryId}?sort_by=${sortBy}&order=desc&limit=99
//?sort_by=${sortBy}&order=desc&limit=99

export const getArticlesByCategory = (sortBy) => {

    return fetch(`${API}/articles/byCategory/618fcaa225f312d839fd7e8e?sort_by=${sortBy}&order=desc&limit=99`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const read = (articleId) => {
    return fetch(`${API}/article/${articleId}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};



export const getCategory = (categoryId) => {
    return fetch(`${API}/category/${categoryId}`, {
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

    return fetch(`${API}/articles/by/search`, {
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

export const listRelatedCategory = (categoryId, sortBy,limit) => {
    return fetch(`${API}/articles/byCategory/${categoryId}?sort_by=${sortBy}&order=desc&limit=${limit}`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};
