const withStyles = require('@webdeb/next-styles');

module.exports = withStyles({
    sass: true,
    modules: true,
    images: {
        domains: ['https://next-js-development.netlify.app','http://localhost:3000'],
    }
});