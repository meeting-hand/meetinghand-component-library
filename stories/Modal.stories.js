import { storiesOf } from "@storybook/vue3";
import MhModal from "../src/modal/index";
import MhButton from "../src/button/index";

import "./storybook.scss";

storiesOf("Modal", module).add("Dialog", () => ({
    components: { MhModal, MhButton },
    data() {
        return {
            modal1Status: false,
            modal2Status: false,
            modal3Status: false,
        };
    },
    template: `
    <div class="story-modals">
				<h1 class="mh-heading-2 fw-bold">Headline</h1>
				<mh-modal modal-type="dialog" v-model="modal1Status" :closable="false">
					<h1 class="mh-heading-2 fw-bold">Headline</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					<template v-slot:footer>
							<mh-button type="secondary" >Secondary</mh-button>
							<mh-button style="margin-left: 16px;" >Primary</mh-button>
					</template>
				</mh-modal>
				<mh-button @click="modal1Status=true">Default Modal</mh-button>
				<hr/>

				<h1 class="mh-heading-2 fw-bold" style="margin-top: 16px;">Headline Icon</h1>
				<mh-modal modal-type="dialog" v-model="modal2Status" :closable="false" icon="success">
					<h1 class="mh-heading-2 fw-bold">Headline</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					<template v-slot:footer>
							<mh-button type="secondary" >Secondary</mh-button>
							<mh-button style="margin-left: 16px;" >Primary</mh-button>
					</template>
				</mh-modal>
				<mh-button @click="modal2Status=true">Default Modal 2</mh-button>
				<hr/>
				<h1 class="mh-heading-2 fw-bold" style="margin-top: 16px;">Headline Icon Error</h1>
				<mh-modal modal-type="dialog" v-model="modal3Status" :closable="true" icon="warning">
					<h1 class="mh-heading-2 fw-bold">Headline</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					<template v-slot:footer>
							<mh-button type="secondary" >Secondary</mh-button>
							<mh-button style="margin-left: 16px;" >Primary</mh-button>
					</template>
				</mh-modal>
				<mh-button @click="modal3Status=true">Default Modal 3</mh-button>
		</div>
    `,
}));

storiesOf("Modal", module).add("Modal", () => ({
    components: { MhModal, MhButton },
    data() {
        return {
            modal1Status: false,
            modal2Status: false,
            modal3Status: false,
        };
    },
    template: `
    	<div class="story-modals">
				<mh-modal class="modal1" v-model="modal1Status" :closable="true" dialog-title="Modal Title">
					<p>Lorem Ipsum, dizgi ve bask?? end??strisinde kullan??lan m??g??r metinlerdir. Lorem Ipsum, ad?? bilinmeyen bir matbaac??n??n bir hurufat numune kitab?? olu??turmak ??zere bir yaz?? galerisini alarak kar????t??rd?????? 1500'lerden beri end??stri standard?? sahte metinler olarak kullan??lm????t??r. Be??y??z y??l boyunca varl??????n?? s??rd??rmekle kalmam????, ayn?? zamanda pek de??i??meden elektronik dizgiye de s????ram????t??r. 1960'larda Lorem Ipsum pasajlar?? da i??eren Letraset yapraklar??n??n yay??nlanmas?? ile ve yak??n zamanda Aldus PageMaker gibi Lorem Ipsum s??r??mleri i??eren masa??st?? yay??nc??l??k yaz??l??mlar?? ile pop??ler olmu??tur.      </p>
					<template v-slot:footer>
						<mh-button type="secondary" style="margin-right: 16px;">Text</mh-button>
						<mh-button >Primary</mh-button>
					</template>
				</mh-modal>

				<mh-button @click="modal1Status=true">Default Modal</mh-button>

				<br />
				<hr/>
				<br />

				<mh-modal v-model="modal2Status" dialog-title="Modal Title" size="large" :closable="true" :maskClosable="false">
					<p>Lorem Ipsum, dizgi ve bask?? end??strisinde kullan??lan m??g??r metinlerdir. Lorem Ipsum, ad?? bilinmeyen bir matbaac??n??n bir hurufat numune kitab?? olu??turmak ??zere bir yaz?? galerisini alarak kar????t??rd?????? 1500'lerden beri end??stri standard?? sahte metinler olarak kullan??lm????t??r. Be??y??z y??l boyunca varl??????n?? s??rd??rmekle kalmam????, ayn?? zamanda pek de??i??meden elektronik dizgiye de s????ram????t??r. 1960'larda Lorem Ipsum pasajlar?? da i??eren Letraset yapraklar??n??n yay??nlanmas?? ile ve yak??n zamanda Aldus PageMaker gibi Lorem Ipsum s??r??mleri i??eren masa??st?? yay??nc??l??k yaz??l??mlar?? ile pop??ler olmu??tur.      </p>
					<template v-slot:footer>
						<mh-button type="secondary" >Text</mh-button>
						<mh-button >Primary</mh-button>
					</template>
				</mh-modal>

				<mh-button @click="modal2Status=true">Large Modal</mh-button>
		</div>
    `,
}));