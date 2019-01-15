module.exports = (multipleCheckProps, checkProp, cardProp, ) => {
    if (multipleCheckProps) {
        let valid = false;
        multipleCheckProps.forEach(checkProp => {
            if (checkProp.startsWith("~")) {
                valid = valid || (
                    cardProp
                    .toLowerCase()
                    .replace(/\[x\]|<b>|<\/b>|<i>|<\/i>|<i>|<\/i>/g, "")
                    .replace(/\n/g, " ")
                    .includes(
                        checkProp
                        .slice(1)
                        .toLowerCase()
                    )
                );
            }

            valid = valid || (
                cardProp
                .toLowerCase()
                .replace(/\[x\]|<b>|<\/b>|<i>|<\/i>/g, "")
                .replace(/\n/g, " ") ==
                checkProp.toLowerCase()
            );
        });

        return valid;
    }

    if (checkProp.startsWith("~")) {
        return (
            cardProp
            .toLowerCase()
            .replace(/\[x\]|<b>|<\/b>|<i>|<\/i>/g, "")
            .replace(/\n/g, " ")
            .includes(
                checkProp
                .slice(1)
                .toLowerCase()
            )
        );
    }

    let isRegex = checkProp.match(/^\/.+\/[a-zA-Z]*$/);
    if (isRegex) {
        try {
            let str = checkProp.match(/(?<=\/).+(?=\/)/g)[0];
            let flags = checkProp.match(/\/[a-zA-Z]*$/g)[0].slice(1);
            new RegExp(str, flags);
        } catch (err) {
            isRegex = false;
        }
    }

    if (isRegex) {
        let str = checkProp.match(/(?<=\/).+(?=\/)/g)[0];
        let flags = checkProp.match(/\/[a-zA-Z]*$/g)[0].slice(1);
        return !!cardProp.match(new RegExp(str, flags));
    }

    return (
        cardProp
        .toLowerCase()
        .replace(/\[x\]|<b>|<\/b>|<i>|<\/i>/g, "")
        .replace(/\n/g, " ") ==
        checkProp.toLowerCase()
    );
};