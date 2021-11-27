import L_SOCIETY from "../../assets/articles/icons/ikona-articles-society.svg";
import L_SCIENCE from "../../assets/articles/icons/ikona-articles-science.svg";
import L_CRIMINAL from "../../assets/articles/icons/ikona-articles-criminology.svg";
import L_PROJECT_1 from "../../assets/projects/projects_icon.svg";
import L_PROJECT_2 from "../../assets/projects/projects_icon.svg";
import L_PROJECT_3 from "../../assets/projects/projects_icon.svg";
import L_HISTORY from "../../assets/about/icons/ikona-about-history.svg";
import L_TEAM from "../../assets/about/icons/ikona-about-team.svg";
import L_DOCUMENTS from "../../assets/about/icons/ikona-about-documents.svg";


export const data = {
    categories: [
        {
            id: 1,
            name: "Społeczeństwo",
            imgSrc: L_SOCIETY,
            linkTo: "/society",
            // _id:	"61705cb0ce5c468ae975398a"  // development category
            _id:	"618fcaa225f312d839fd7e8e"  // deployed category
        },
        {
            id: 2,
            name: "Nauka",
            imgSrc: L_SCIENCE,
            linkTo: "/science",
            // _id:	"61705cbcce5c468ae9753990" // deployed category
            _id:	"618fcabc25f312d839fd7e94" // deployed category
        },
        {
            id: 3,
            name: "Przestępczość",
            imgSrc: L_CRIMINAL,
            linkTo: "/criminal",
            // _id:	"618fc857e9dbb9bf731578a8", // deployed category
            _id:	"618fcab825f312d839fd7e91"// deployed category
        }
    ],

projects:[
    {
        _id: 4,
        name: "Projekt 1",
        imgSrc: L_PROJECT_1,
        linkTo: "/projects/project1"
        // description:xxx,
        // paragraph1:xxx,
        // paragraph2:xxx,
        // paragraph3:xxx,
        // paragraph4:xxx,
        // paragraph5:xxx,
    },
    {
        _id: 5,
        name: "Projekt 2",
        imgSrc: L_PROJECT_2,
        linkTo: "/projects/project2"
        // description:xxx,
        // paragraph1:xxx,
        // paragraph2:xxx,
        // paragraph3:xxx,
        // paragraph4:xxx,
        // paragraph5:xxx,
    },
    {
        _id: 6,
        name: "Projekt 3",
        imgSrc: L_PROJECT_3,
        linkTo: "/projects/project3"
        // description:xxx,
        // paragraph1:xxx,
        // paragraph2:xxx,
        // paragraph3:xxx,
        // paragraph4:xxx,
        // paragraph5:xxx,
    },
],
    about: [
        {
            _id: 7,
            name: "Historia",
            imgSrc: L_HISTORY,
            linkTo: "/history"
        },
        {
            _id: 8,
            name: "Zespół",
            imgSrc: L_TEAM,
            linkTo: "/team"
        },
        {
            _id: 9,
            name: "Dokumenty",
            imgSrc: L_DOCUMENTS,
            linkTo: "/documents"
        },
    ],

}