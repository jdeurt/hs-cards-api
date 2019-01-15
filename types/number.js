module.exports = (multipleCheckProps, checkProp, cardProp) => {
    if (multipleCheckProps) {
        let valid = false;
        multipleCheckProps.forEach(checkProp => {
            if (checkProp.startsWith(">=")) {
                checkProp = checkProp.slice(2);
                checkProp = parseInt(checkProp);

                valid = valid || (cardProp >= checkProp);
            } else if (checkProp.startsWith("<=")) {
                checkProp = checkProp.slice(2);
                checkProp = parseInt(checkProp);

                valid = valid || (cardProp <= checkProp);
            } else if (checkProp.startsWith(">")) {
                checkProp = checkProp.slice(1);
                checkProp = parseInt(checkProp);

                valid = valid || (cardProp > checkProp);
            } else if (checkProp.startsWith("<")) {
                checkProp = checkProp.slice(1);
                checkProp = parseInt(checkProp);

                valid = valid || (cardProp < checkProp);
            } else if (checkProp.match(/^\d+~/g)) {
                let differential = checkProp.match(/^\d+(?=~\d+$)/g)[0];
                differential = parseInt(differential);

                checkProp = checkProp.match(/(?<=^\d+~)\d+$/g)[0];
                checkProp = parseInt(checkProp);

                valid = valid || (cardProp >= checkProp - differential && cardProp <= checkProp + differential);
            } else {
                checkProp = parseInt(checkProp);

                valid = valid || (cardProp == checkProp);
            }
        })

        return valid;
    }

    if (checkProp.startsWith(">=")) {
        checkProp = checkProp.slice(2);
        checkProp = parseInt(checkProp);

        return (cardProp >= checkProp);
    } else if (checkProp.startsWith("<=")) {
        checkProp = checkProp.slice(2);
        checkProp = parseInt(checkProp);

        return (cardProp <= checkProp);
    } else if (checkProp.startsWith(">")) {
        checkProp = checkProp.slice(1);
        checkProp = parseInt(checkProp);

        return (cardProp > checkProp)
    } else if (checkProp.startsWith("<")) {
        checkProp = checkProp.slice(1);
        checkProp = parseInt(checkProp);

        return (cardProp < checkProp);
    } else if (checkProp.match(/^\d+~/g)) {
        let differential = checkProp.match(/^\d+(?=~\d+$)/g)[0];
        differential = parseInt(differential);

        checkProp = checkProp.match(/(?<=^\d+~)\d+$/g)[0];
        checkProp = parseInt(checkProp);

        return (cardProp >= checkProp - differential && cardProp <= checkProp + differential);
    } else {
        checkProp = parseInt(checkProp);

        return (cardProp == checkProp);
    }
};