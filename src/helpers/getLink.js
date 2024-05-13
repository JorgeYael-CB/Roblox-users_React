export const getUrl = (userId, url) => {
    const id = userId; // Your Linkvertise User ID
    const linkUrl = btoa(url);

    const monetizarLink = `https://linkvertise.com/${id}/545.746236706649/dynamic?r=${linkUrl}&o=sharing`;
    return monetizarLink;
};