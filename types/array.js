module.exports = (multipleCheckProps, checkProp, cardProp) => {
    if (multipleCheckProps) return false;

    if (checkProp.startsWith("~")) {
        let includesAll = true;
        let arr = checkProp.slice(1).toUpperCase().split(",");

        arr.forEach(elem => {
            includesAll = includesAll && (
                cardProp
                .includes(
                    elem.replace(/ /g, "_")
                )
            );
        });

        return includesAll;
    } else {
        let arr = checkProp.toUpperCase().split(",");

        if (cardProp.length != arr.length) return false;

        for (let i = 0; i < cardProp.length; i++) {
            if (!cardProp.includes(arr[i].replace(/ /g, "_"))) return false;
        }

        return true;
    }
};