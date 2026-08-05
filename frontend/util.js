const location = window.location;
const history = window.history;

export const pathReplacement = (path, ind) => {
    const params = location.search;

    const parts = location.pathname.split('/');

    parts[ind] = path;

    if (!params) history.replaceState({}, '', parts.join('/'));
    else history.replaceState({}, '', [parts.join('/') + params].join('?'));
}

export const getPath = (ind) => location.pathname.split('/')[ind];

export const paramsReplacement = (params) => {
    const parts = location.pathname.split('?');

    parts[1] = params;

    history.replaceState({}, '', parts.join('?'));
}