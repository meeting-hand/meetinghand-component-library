import { storiesOf } from "@storybook/vue3";
import SubmissionPreview from "./index";

storiesOf("SubmissionPreview", module).add("SubmissionPreview!", () => ({
    components: { SubmissionPreview },
    data() {
        return {
            authors: [
                {
                    city: "Ankara",
                    country:"Turkey",
                    email: "edmond.stroman@yahoo.com",
                    firstname: "Emre Kaan",
                    id: 1,
                    institution: "MeetingHand",
                    isPresenter: false,
                    lastname: "Şurgun",
                    order: 1,
                    phone: "(+1) 697 258 1508",
                    title: "Dr"
                },
                {
                city: "Ernestmouth",
                country: "Central African Republic",
                email: "grimes.lea@parisian.net",
                firstname: "Vicky",
                id: 2,
                institution: "Hirthe-Heidenreich",
                isPresenter: false,
                lastname: "Weber",
                order: 2,
                phone: "(+1) 1 319 495 1312",
                title: "Assoc Dr.",
            },
            {
                city: "Istanbul",
                country:"Turkey",
                email: "edmond.stroman@yahoo.com",
                firstname: "Tolga",
                id: 3,
                institution: "MeetingHand",
                isPresenter: false,
                lastname: "Koç",
                order: 3,
                phone: "(+1) 697 258 1508",
                title: "Dr"
            },
            {
                email: "benedict.ryan@gmail.com",
                firstname: "Otto",
                id: 4,
                isPresenter: true,
                lastname: "Raynor",
                order: 4,
                phone: "(+1) 1 595 712 4907",
                title: "Dr"
            }, {
                city: "West Stephanyton",
                email: "edmond.stroman@yahoo.com",
                firstname: "Will",
                id: 5,
                institution: "Leannon, Torphy and Toy",
                isPresenter: false,
                lastname: "Koch",
                order: 5,
                phone: "(+1) 697 258 1508",
                title: "Dr"
            },
            {
                city: "Ankara",
                country:"Turkey",
                email: "edmond.stroman@yahoo.com",
                firstname: "Fatih Sinan",
                id: 6,
                institution: "MeetingHand",
                isPresenter: false,
                lastname: "Yaman",
                order: 6,
                phone: "(+1) 697 258 1508",
                title: "Dr"
            },
            {
                city: "Ankara",
                country:"Turkey",
                email: "edmond.stroman@yahoo.com",
                firstname: "Ahmet",
                id: 7,
                institution: "Arber",
                isPresenter: false,
                lastname: "Yılmaz",
                order: 7,
                phone: "(+1) 697 258 1508",
                title: "Dr"
            },],
            body: [{ value: { name: 'File' } }],
            keywords: null,
            references: null

        };
    },
    template: `
      <SubmissionPreview type="text" topic="Topic 1" title="Title" :authors="authors" :body="body" :keywords="keywords" :references="references"/>
      <br/>
      <SubmissionPreview type="file" :body="body"/>
    `,
}));