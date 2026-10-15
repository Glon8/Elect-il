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

export const paramsReplacement = (params) => history.replaceState({}, '', `${location.pathname}?${params.toString()}`);

export const verify = (string, pattern, maxLength) => string == "" || string.length <= maxLength && pattern.test(string);

export const yearVerify = (string) => typeof string === 'string' && string.length === 4 && /^\d{4}$/.test(string);

export const nowDate = () => {
    return new Date()
        .toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
        .replace(/\//g, '-');
};

export const yearExtract = (date) => {
    const validDate = dateVerify(date);

    if (validDate) return date.split('-')[2];
    else return String(new Date().getFullYear());
}

export const dateVerify = (string) => typeof string === 'string' && string.length === 10 && /^\d{2}-\d{2}-\d{4}$/.test(string);