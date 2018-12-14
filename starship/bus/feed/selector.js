export const selectStarship = (starships, pathname) => {
    if (!starships.length) {
        return {};
    }

    const name = pathname.substring(7);

    const starship = starships.find(
        (element) => element.name.replace(/ /g, '-').toLowerCase() === name,
    );

    return starship;
};
