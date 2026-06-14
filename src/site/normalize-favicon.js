module.exports = (favicon) => {
    if (!favicon) return "";
    if (favicon.startsWith("<link") || favicon.startsWith("<script")) return favicon;
    if (favicon.startsWith("http")) {
        return `<link rel="icon" href="${favicon}">`;
    }
    return `<link rel="icon" href="${favicon}">`;
};
