import { storiesOf } from "@storybook/vue3";
import MhModal from "./index";
import MhButton from "../button/index";

import "../../assets/storybook/modal.css";

storiesOf("Modal", module).add("Modal!", () => ({
  components: { MhModal, MhButton },
  data(){
    return {
      modal1Status: false,
      modal2Status: false,
      modal3Status: false,
    }
  },
  template: `
    <h1>Default</h1>
      <mh-modal title="Title" v-model="modal1Status">
      <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.      </p>
      <template v-slot:footer>
      Burasi Footer
      </template>
      </mh-modal>
      <mh-button @click="modal1Status=true">Default Modal</mh-button>
      
      <hr />  

      <h1>Modal 2</h1>
      <mh-modal size="large" title="Title" v-model="modal2Status" icon="warning">
      <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.      </p>
      <template v-slot:footer>
      Burasi Footer
      </template>
      </mh-modal>
      <mh-button @click="modal2Status=true">Large Modal</mh-button>
      <hr />  
      
      <h1>Modal 3</h1>
     
      <mh-modal size="center" title="Title" v-model="modal3Status" icon="success">
      <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.      </p>
     
      </mh-modal>

      
      <mh-button @click="modal3Status=true">Center Modal</mh-button>
    `,
}));

    