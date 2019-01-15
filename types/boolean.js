module.exports = (multipleCheckProps, checkProp, cardProp) => {
    if (multipleCheckProps) {
        let valid = false;
        multipleCheckProps.forEach(checkProp => {
            if (cardProp) {
                valid = valid || (checkProp == "true" || checkProp == "1");
            } else {
                valid = valid || (checkProp == "false" || checkProp == "0");
            }
        })

        return valid;
    }

    if (cardProp) {
        return (checkProp == "true" || checkProp == "1");
    } else {
        return (checkProp == "false" || checkProp == "0");
    }
};