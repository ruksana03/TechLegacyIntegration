export const formatDate = (timestamp) => {
    const options = { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric" };
    return new Date(timestamp).toLocaleString(undefined, options);
};