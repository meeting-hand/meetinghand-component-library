import MhButton from "../src/button/src/index.vue";
import "./storybook.scss";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: "Button",
    component: MhButton,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        type: {
            control: { type: "select" },
            options: [
                "primary",
                "secondary",
                "text",
                "iconic",
                "social",
                "menu",
                "list",
                "tab",
                "tabBar",
            ],
        },
        size: {
            control: { type: "select", required: false },
            options: ["default", "large", "normal", "small", "tiny", "text"],
        },
        icon: {
            type: { name: "select", required: false },
            options: ["system-search", "system-close", "ui-bell", "arrow-up"],
        },
        iconAlignment: {
            type: { name: "select", required: false },
            options: ["left", "right"],
        },
        disabled: {
            type: { name: "select", required: false },
            options: [false, true],
        },
        wait: {
            type: { name: "select", required: false },
            options: [false, true],
        },
        submit: {
            type: { name: "select", required: false },
            options: [false, true],
        },
        circular: {
            type: { name: "select", required: false },
            options: [false, true],
        },
        socialMedia: {
            type: { name: "select", required: false },
            options: ["google", "facebook", "apple"],
        },
        color: {
            type: { name: "string", required: false },
        },
        iconColor: {
            type: { name: "string", required: false },
        },
        value: {
            type: { name: "string", required: false },
        },
    },
};

export const Index = () => ({
    components: { MhButton },
    template: `
    <div class="storybook-button">
        <h1>Buttons</h1>
        <mh-button type="primary">Primary</mh-button>
        <mh-button type="secondary">Secondary</mh-button>
        <mh-button type="text">Text</mh-button>
        <mh-button type="iconic" icon="system-other-options" />
        <mh-button type="social" icon="social-google" social-media="google" >Social</mh-button>
        <mh-button type="menu" icon="system-plus">Menu</mh-button>
        <mh-button type="list" icon="system-plus">List</mh-button>
        <mh-button type="tab">Tab</mh-button>
        <mh-button type="tabBar" isActive>TabBar</mh-button>
    </div>
    `,
});

export const Primary = () => ({
    components: { MhButton },
    template: `
  <div class="storybook-button">
    <h1>Large</h1>
      <mh-button type="primary" size="large">
        Large
      </mh-button>
      <mh-button type="primary" size="large" icon="system-plus">
        Large Left Icon
      </mh-button>
      <mh-button type="primary" size="large" icon="arrow-up" icon-alignment="right">
        Large Right Icon
      </mh-button>
      <hr />
      <h1>Default</h1>
      <mh-button type="primary">
        Button
      </mh-button>
      <mh-button type="primary" icon="arrow-down">
        Icon Left
      </mh-button>
      <mh-button type="primary" icon="arrow-up" icon-alignment="right">
        Icon Right
      </mh-button>
      <hr />
      <h1>Disabled</h1>
      <mh-button type="primary" disabled size="large">
        Large size
      </mh-button>
      <mh-button type="primary" disabled>
        Default size
      </mh-button>
      <mh-button type="primary" icon="arrow-down" disabled>
        Icon Left
      </mh-button>
      <mh-button type="primary" icon="arrow-up" icon-alignment="right" disabled>
        Icon Right
      </mh-button>
      <hr />
      <h1>Wait</h1>
      <mh-button type="primary" size="large" wait>
        Large size
      </mh-button>
      <mh-button type="primary" wait>
        Default size
      </mh-button>
      <hr />
      <h1>Green</h1>
      <mh-button type="primary" size="large" color="green" >
        Green
      </mh-button>
      <mh-button type="primary" size="large" color="green" disabled>
        Green Disabled
      </mh-button>
      <mh-button type="primary" size="large" color="green" wait>
        Green Wait
      </mh-button>
      <hr />
      <h1>Red</h1>
      <mh-button type="primary"  color="red">
        Alert
      </mh-button>
      <mh-button type="primary" icon="arrow-up" icon-alignment="right" color="red">
        Alert
      </mh-button>
      <mh-button type="primary"  color="red" disabled>
      Alert
      </mh-button>
      <mh-button type="primary"  color="red" wait>
      Alert
      </mh-button>
      <br/><br />
      </div>
    `,
});

export const Secondary = () => ({
    components: { MhButton },
    template: `
    <div class="storybook-button">
    
      <h1>Large</h1>
      <mh-button type="secondary" size="large">
        Large
      </mh-button>
      <mh-button type="secondary" size="large" icon="arrow-up">
        Large Left Icon
      </mh-button>
      <mh-button type="secondary" size="large" icon="arrow-up" icon-alignment="right">
        Large Right Icon
      </mh-button>
      <hr />
      <h1>Default</h1>
      <mh-button type="secondary">
        Default size
      </mh-button>
      <mh-button type="secondary" icon="arrow-down">
        Icon Left
      </mh-button>
      <mh-button type="secondary" icon="arrow-up" icon-alignment="right">
        Icon Right
      </mh-button>
      <hr />
      <h1>Disabled</h1>
      <mh-button type="secondary" disabled size="large">
        Large size
      </mh-button>
      <mh-button type="secondary" disabled>
        Default size
      </mh-button>
      <mh-button type="secondary" icon="arrow-down" disabled>
        Icon Left
      </mh-button>
      <mh-button type="secondary" icon="arrow-up" icon-alignment="right" disabled>
        Icon Right
      </mh-button>
      <hr />
      <h1>Wait</h1>
      <mh-button type="secondary" size="large" wait>
        Large size
      </mh-button>
      <mh-button type="secondary" wait>
        Default size
      </mh-button>
      <hr />
      <h1>Error</h1>
      <mh-button type="secondary" icon="arrow-up" icon-alignment="right" color="red">
      Icon Right
    </mh-button>
      <mh-button type="secondary" icon="arrow-up" icon-alignment="right" color="red" disabled>
      Icon Right
    </mh-button>
    <h1>Green</h1>
      <mh-button type="secondary" icon="arrow-up" icon-alignment="right" color="green">
      Icon Right
    </mh-button>
    <br /><br />
    </div>
    `,
});

export const Text = () => ({
    components: { MhButton },
    template: `
    <div class="storybook-button">

      <h1>Default</h1>
      <mh-button type="text">
        Default size
      </mh-button>
      <mh-button type="text" icon="arrow-down">
        Icon Left
      </mh-button>
      <mh-button type="text" icon="arrow-up" icon-alignment="right">
        Icon Right
      </mh-button>
      <hr />
      <h1>Disabled</h1>
      <mh-button type="text" disabled>
        Default size
      </mh-button>
      <mh-button type="text" icon="arrow-down" disabled>
        Icon Left
      </mh-button>
      <mh-button type="text" icon="arrow-up" icon-alignment="right" disabled>
        Icon Right
      </mh-button>
      <hr />
      <h1>Wait</h1>
      <mh-button type="text" wait>
        Default size
      </mh-button>
      <hr />
      <h1>Error</h1>
      <mh-button type="text" icon="arrow-up" icon-alignment="right" color="red">
        Icon Right
      </mh-button>
      <br/><br/>
      </div>
    `,
});

export const Iconic = () => ({
    components: { MhButton },
    template: `
     <div class="storybook-button">

      <h1>Normal</h1>
      <mh-button type="iconic" icon="system-other-options" size="default"/>
        <hr/>
      <h1>Circular</h1>
      <mh-button type="iconic" icon="system-other-options" circular />
      <hr/>
      <h1>Small</h1>
      <mh-button type="iconic" icon="system-other-options" size="small" />
			<mh-button type="iconic" icon="system-other-options" circular size="small" />
      <hr/>
      <h1>Tiny</h1>
      <mh-button type="iconic" icon="system-close" size="tiny" />
			<hr/>
      <h1>Error</h1>
      <mh-button type="iconic" icon="system-other-options" size="default" color="red" />
			<mh-button type="iconic" icon="system-other-options" circular color="red" />
      <hr/>
      <h1>Disabled</h1>
      <mh-button type="iconic" icon="system-other-options" size="default" disabled />
      <br/><br />
      </div>
			<mh-button icon="package-participant" type="iconic" size="default" />
			<br/><br />
			<h1>Wait</h1>
      <mh-button type="iconic" icon="system-other-options" size="default" wait />
			<br />
			<mh-button type="iconic" icon="system-other-options" circular wait />
      <br />
			<mh-button type="iconic" size="text" icon="system-like" circular >
      Text
      </mh-button>
      <br/><br />     
    `,
});

export const Social = () => ({
    components: { MhButton },
    template: `
    <div class="storybook-button">

      <h1>Google</h1>
      <mh-button type="social" icon="social-google" social-media="google" >
        Google
      </mh-button>
			<hr />
      <h1>Facebook</h1>
      <mh-button type="social" icon="social-facebook" social-media="facebook">
        Facebook
      </mh-button>
			<hr />
      <h1>Apple</h1>
      <mh-button type="social" icon="social-apple" social-media="apple">
        Apple
      </mh-button>
			<hr />
      </div>
    `,
});

export const Menu = () => ({
    components: { MhButton },
    template: `
    <div class="storybook-button">

      <h1>Aligment Left</h1>
      <mh-button type="menu" icon="system-plus">
        Button
      </mh-button>
			<hr />
      <h1>Aligment Right</h1>
      <mh-button type="menu" icon="system-plus" icon-alignment="right">
        Button
      </mh-button>
			<hr />
      <h1>Disabled</h1>
      <mh-button type="menu" icon="system-plus" icon-alignment="right" disabled>
        Button
      </mh-button>
			<hr />
      <h1>Wait</h1>
      <mh-button type="menu" icon="system-plus" icon-alignment="right" wait>
        Button
      </mh-button>
      </div>
    `,
});

export const List = () => ({
    components: { MhButton },
    template: `
     <div class="storybook-button">

      <h1>Aligment Left</h1>
      <mh-button type="list" icon="system-plus">
        Button
      </mh-button>
			<hr />
      <h1>Aligment Right</h1>
      <mh-button type="list" icon="system-plus" icon-alignment="right">
        Button
      </mh-button>
			<hr />
      <h1>Disabled</h1>
      <mh-button type="list" icon="system-plus" icon-alignment="right" disabled>
        Button
      </mh-button>
      <mh-button type="list" icon="system-plus" icon-alignment="right" wait>
        Button
      </mh-button>
			<hr />
      </div>
    `,
});

export const Tab = () => ({
    components: { MhButton },
    template: `
    <div class="storybook-button">

      <h1>Tab Rounded</h1>
      <mh-button type="tab">
        Button
      </mh-button>
      <hr />
      <mh-button type="tab" :isActive="true">
        Button
      </mh-button>
      <hr />
      <h1>Disabled</h1>
      <mh-button type="tab" disabled>
        Button
      </mh-button>
      <hr />
      <mh-button type="tab" icon="system-close" isActive>
      Button
      </mh-button>
			<hr />
			<h1>Icon</h1>
      <mh-button type="tab" icon="system-close">
      Button
      </mh-button>

      </div>
    `,
});

export const TabBar = () => ({
    components: { MhButton },
    template: `
    <div class="storybook-button">
        <h1>Tab Bar</h1>
        <mh-button type="tabBar" isActive>
        Button
        </mh-button>
        <mh-button type="tabBar">
        Button
        </mh-button>
    </div>
    `,
});