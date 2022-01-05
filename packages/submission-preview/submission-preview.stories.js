import { storiesOf } from "@storybook/vue3";
import SubmissionPreview from "./index";

storiesOf("SubmissionPreview", module).add("SubmissionPreview!", () => ({
    components: { SubmissionPreview },
    data() {
        return {
            authors: [{
                    city: "Ankara",
                    country: "Turkey",
                    email: "edmond.stroman@yahoo.com",
                    firstname: "Emre Kaan",
                    id: 3,
                    institution: "MeetingHand",
                    isPresenter: false,
                    lastname: "Şurgun",
                    order: 10,
                    phone: "(+1) 697 258 1508",
                    title: "Dr",
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
                    country: "Turkey",
                    email: "edmond.stroman@yahoo.com",
                    firstname: "Tolga",
                    id: 3,
                    institution: "MeetingHand",
                    isPresenter: false,
                    lastname: "Koç",
                    order: 3,
                    phone: "(+1) 697 258 1508",
                    title: "Dr",
                },
                {
                    email: "benedict.ryan@gmail.com",
                    firstname: "Otto",
                    id: 4,
                    isPresenter: false,
                    lastname: "Raynor",
                    order: 4,
                    phone: "(+1) 1 595 712 4907",
                    title: "Dr",
                },
                {
                    city: "West Stephanyton",
                    email: "edmond.stroman@yahoo.com",
                    firstname: "Will",
                    id: 5,
                    institution: "Leannon, Torphy and Toy",
                    isPresenter: false,
                    lastname: "Koch",
                    order: 5,
                    phone: "(+1) 697 258 1508",
                    title: "Dr",
                },
                {
                    city: "Ankara",
                    country: "Turkey",
                    email: "edmond.stroman@yahoo.com",
                    firstname: "Fatih Sinan",
                    id: 6,
                    institution: "MeetingHand",
                    isPresenter: false,
                    lastname: "Yaman",
                    order: 6,
                    phone: "(+1) 697 258 1508",
                    title: "Dr",
                },
                {
                    city: "Ankara",
                    country: "Turkey",
                    email: "edmond.stroman@yahoo.com",
                    firstname: "Ahmet",
                    id: 7,
                    institution: "Arber",
                    isPresenter: false,
                    lastname: "Yılmaz",
                    order: 7,
                    phone: "(+1) 697 258 1508",
                    title: "Dr",
                },
                {
                    city: "Istanbul",
                    country: "Turkey",
                    email: "edmond.stroman@yahoo.com",
                    firstname: "Tolga",
                    id: 3,
                    institution: "MeetingHand",
                    isPresenter: false,
                    lastname: "Koç",
                    order: 3,
                    phone: "(+1) 697 258 1508",
                    title: "Dr",
                },
                {
                    city: "Istanbul",
                    country: "Turkey",
                    email: "edmond.stroman@yahoo.com",
                    firstname: "Tolga",
                    id: 3,
                    institution: "MeetingHand",
                    isPresenter: false,
                    lastname: "Koç",
                    order: 3,
                    phone: "(+1) 697 258 1508",
                    title: "Dr",
                },
                {
                    city: "Istanbul",
                    country: "Turkey",
                    email: "edmond.stroman@yahoo.com",
                    firstname: "Tolga",
                    id: 3,
                    institution: "MeetingHand",
                    isPresenter: true,
                    lastname: "Koç",
                    order: 1,
                    phone: "(+1) 697 258 1508",
                    title: "Dr",
                },
            ],
            body: [{eventSubmissionFieldId: 106, value: "https://s3.eu-central-1.amazonaws.com/cdn.meetinghand.net/amdsiottasp-lcn4yap5us/submissionFiles/8wQSeBBnLz6ImZC4wCrVQknMKRYuqpd5Z9EFwYVy.pdf" }],
            keywords: [ "imply dummimply dummimply dummimply dumm imply dumm imply dumm imply dummimply dumm", "imply dumm imply dumm imply dumm", "imply dumm imply dumm imply dummimply dummimply dummimply dumm"],
            references: ["Lorem ipsumLorem ipsummLorem ipsum Lorem ipsum Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
        };
    },
    template: `
      <SubmissionPreview type="text" topic="Topic 1" title="Title" :authors="authors" :body="body" :keywords="keywords" :references="references" keywordLabel="buralar hep dutluktu"/>
      <br/>
      <SubmissionPreview type="file" :body="body" :authors="authors" title="Title"/>
    `,
}));