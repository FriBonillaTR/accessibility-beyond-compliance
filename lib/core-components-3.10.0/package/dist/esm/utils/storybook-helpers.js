const getPath = (window, path) => {
    if (window.location.host === 'saffron.int.thomsonreuters.com') {
        return `/storybook-preview${path}`;
    }
    return path;
};

export { getPath };
