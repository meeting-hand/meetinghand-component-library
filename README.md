# MeetingHand Component Library 
## Install
Initialize the project as follows:

    git clone https://github.com/meeting-hand/meetinghand-component-library.git
    cd meetinghand-component-library
    npm run initialize

This downloads the project into `meetinghand-component-library` folder, installs all dependencies, prepares Lerna monorepo and creates symlinks for internal dependencies. All is now ready for build.

## Create New Package

    npm run new {packageName}

package files will be automatic generation


## Build
Run the following to build all packages:

    npm run build

This runs a production build. In each package you will now find `/dist` folder where package code is bundled.

## StoryBook
Run the following to livepreview all packages:

    npm run storybook

This runs storybook for preview & development. 

## Publish Packages
Lerna will be publish automaticly all packages indipendent versions under the organization scope. For example: [meetinghand](https://www.npmjs.com/settings/meetinghand/packages)

    npm run publish

package files will be automatic generation


## License

MIT

