import "../src/style/lib/scss/reset.scss";
import "../src/style/lib/scss/ant.scss";
import "../src/style/lib/scss/colors.scss";
import "../src/style/lib/scss/typography.scss";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};