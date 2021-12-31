import { storiesOf } from "@storybook/vue3";
import SubmissionPreview from "./index";

storiesOf("SubmissionPreview", module).add("SubmissionPreview!", () => ({
    components: { SubmissionPreview },
    data() {
        return {
            authors: [{
                city: "Ernestmouth",
                country: "Central African Republic",
                email: "grimes.lea@parisian.net",
                firstname: "Vicky",
                id: 6,
                institution: "Hirthe-Heidenreich",
                isPresenter: false,
                lastname: "Weber",
                order: 0,
                phone: "(+1) 1 319 495 1312",
                title: "Assoc Dr.",
            }, {
                email: "benedict.ryan@gmail.com",
                firstname: "Otto",
                id: 7,
                isPresenter: true,
                lastname: "Raynor",
                order: 1,
                phone: "(+1) 1 595 712 4907",
                title: "Dr"
            }, {
                city: "West Stephanyton",
                email: "edmond.stroman@yahoo.com",
                firstname: "Will",
                id: 13,
                institution: "Leannon, Torphy and Toy",
                isPresenter: false,
                lastname: "Koch",
                order: 7,
                phone: "(+1) 697 258 1508",
                title: "Dr"
            }],
            body: [{ value: { name: 'File' } }],
            keywords: ["example"],
            references: ["example"]

        };
    },
    template: `
      <SubmissionPreview type="text" topic="Topic 1" title="Title" :authors="authors" :body="body" :keywords="keywords" :references="references"/>
      <br/>
      <SubmissionPreview type="file" :body="body"/>
    `,
}));