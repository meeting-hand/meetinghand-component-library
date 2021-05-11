module.exports =  ({ packageName }) => {
  return `{
    "name": "@meetinghand/${packageName}",
    "description": "Meetinghand Component Library Component for ${packageName}",
    "version": "0.0.0",
    "repository": {
        "type": "git",
        "url": "git+https://github.com/meeting-hand/meetinghand-component-library.git"
    },
    "keywords": [
        "vue3",
        "component",
        "library",
        "vue3",
        "lerna",
        "storybook"
    ],
    "homepage": "https://github.com/meeting-hand/meetinghand-component-library#readme",
    "bugs": {
        "url": "https://github.com/meeting-hand/meetinghand-component-library/issues"
    },
    "author": "Fatih Sinan Yaman",
    "main": "./dist/@meetinghand/${packageName}.umd.js",
    "module": "./dist/@meetinghand/${packageName}.es.js",
    "exports": {
        ".": {
            "import": "./dist/@meetinghand/${packageName}.es.js",
            "require": "./dist/@meetinghand/${packageName}.umd.js"
        }
    },
    "scripts": {
        "build": "vite build"
    },
    "publishConfig": {
        "access": "public"
    },
    "files": [
        "dist/*"
    ],
    "dependencies": {
        "vue": "^3.0.5"
    }
}
`;
};
