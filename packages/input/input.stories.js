import { storiesOf } from "@storybook/vue3";
import MhInput from "./index";

import "../../assets/storybook/storybook.css";

storiesOf("Input", module).add("Input", () => ({
    components: { MhInput },
    data() {
        return {
            value1: null,
            value2: "",
            value3: "",
            value4: "",
            value5: "",
            value6: "",
            value7: "git config branch.master.mergeoption 212312312",
            value8: "",
            value9: "",
            value10: "",
            value11: "",
            value12: "",
            value13: "",
        };
    },
    template: `
  <div class="storybook-input">
      <h1>Standart</h1>
      <mh-input v-model="value1" email placeholder="e-mail address" class="deneme" />
      <br />
      <br />
      <h1>Label</h1>
      <mh-input v-model="value8" email placeholder="input with label" label="E-mail" />
      <br />
      <h1>Label with tooltip</h1>
      <mh-input v-model="value1" email placeholder="e-mail address" label="Label" tooltip="Lorem ipsum"/>
      <br />
      <br />
      <mh-input v-model="value2" left-icon="system-mail" right-icon="ui-building" />
      <hr />
      <h1>Error</h1>
      <mh-input v-model="value3" has-error error-message="this field is required" />
      <br />
      <br />
      <mh-input v-model="value4" has-error error-message="this field is required" left-icon="arrow-down" right-icon="arrow-up" />
      <hr />
      <h1>Disabled</h1>
      <mh-input v-model="value7" disabled />
      <br />
      <br />
      <mh-input v-model="value5" disabled left-icon="ui-home" right-icon="arrow-up" />
      <hr />
      <h1>Clear</h1>
      <mh-input v-model="value6" allow-clear />
      <br />
      <br />
			<hr />
			<h1>Text Transform</h1>
			<mh-input v-model="value9" text-transform="capitalize" label="capitalize" />
			<mh-input v-model="value10" text-transform="uppercase" label="uppercase"/>
      <br />
      <br />
			<hr />
			<h1>Max Length</h1>
			<mh-input v-model="value11" :max-length="2" />
      <br />
      <br />
			<hr />
			<h1>Mask</h1>
			{{ value12 }}
			<mh-input v-model="value12" :mask="{creditCard: true}" label="creditcard" />
			<mh-input v-model="value13" :mask="{ time: true, timePattern: ['h', 'm'] }" label="time" />
      <br />
      <br />
			<hr />
    </div>
    `,
}));
storiesOf("Input", module).add("Password", () => ({
    components: { MhInput },
    data() {
        return {
            pass1: null,
            pass2: "",
            pass3: "",
            pass4: "",
            pass5: "",
        };
    },
    template: `
  <div class="storybook-input">
      <h1>Standart</h1>
      <mh-input v-model="pass1" input-type="password" />
      <br />
      <br />
      <mh-input v-model="pass2" input-type="password" />
      <hr />
      <h1>Error</h1>
      <mh-input v-model="pass3" input-type="password" has-error error-message="this field is required" />
      <br />
      <br />
      <mh-input v-model="pass4" input-type="password" has-error error-message="this field is required" />
      <hr />
      <h1>Disabled</h1>
      <mh-input v-model="pass5" input-type="password" disabled />
      <br />
      <br />
      <mh-input input-type="password" disabled />
      <br />
      <br />
    </div>
    `,
}));
storiesOf("Input", module).add("Tel", () => ({
    components: { MhInput },
    data() {
        return {
            tel1: "(+90) 506 900 04 91",
            tel2: null,
            tel3: "",
            tel4: "",
        };
    },
    template: `
  <div class="storybook-input">
			<h1>Standart</h1>
      <mh-input v-model="tel1" input-type="tel" id="tel1" />
			<hr />
			<h1>Standart Default Country Code</h1>
      <mh-input v-model="tel4" input-type="tel" country-code="tr" />
			<hr />
			<h1>Error</h1>
			<mh-input v-model="tel2" input-type="tel" has-error error-message="this field is required" id="tel2" />
			<hr />
			<h1>Disabled</h1>
      <mh-input v-model="tel3" input-type="tel" disabled id="tel3" />
			<br />
      <br />
    </div>
    `,
}));