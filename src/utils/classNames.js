export default function (options) {
    return Object.keys(options)
        .filter(key => options[key] === true)
        .join(' ');
}