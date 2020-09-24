regexMatch = (pattern, value) => RegExp(pattern).test(value);
regexIsValid = (pattern) => {
    try {
        "".match(new RegExp(pattern));
        return true;
    } catch (err) {
        return false;
    }
}
regexSplit = (pattern, s) => s.split(RegExp(pattern));

module.exports = {
    "regex.match": regexMatch,
    "regex.is_valid": regexIsValid,
    "regex.split": regexSplit
};
