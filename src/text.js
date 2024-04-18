import React from "react";
import Typography from "./components/Typography";
import { Link } from "gatsby";
import Button from "./components/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-right: 10px;
  margin-bottom: 5px;
  @media (min-width: 800px) {
    margin-bottom: 0px;
  }
`;

const AuditionButton = styled(Button)`
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 5px;
  @media (min-width: 800px) {
    margin-bottom: 0px;
  }
`;

const Table = styled.table`
  border: 1px solid white;
  td,
  th {
    padding: 10px;
    border: 1px solid white;
  }
`;

const StyledHeader = styled(Typography)`
  margin-top: 30px;
  margin-bottom: 20px;
`;

// FORMATTING GUIDELINES
// {
//   links: {
//     facebook: String
//     instagram: String
//     youtube: String
//     store: String
//   },
//   index: {
//     jumbotronTop: String
//     jumbotronMiddle: String
//     jumbotronBottom: String | undefined
//     jumbotronButtons: JSX,
//     aboutText: JSX,
//     philanthropyTitle: String
//     philanthropyText: JSX,
//     philanthropyLink: String,
//   },
//   events:
//     {
//       month: String,
//       day: String,
//       title: String,
//       caption: String,
//       description: JSX.Element
//     }[],
//   philanthropy: {
//     [INSERT_YEAR]: {
//       image: String,
//       title: String,
//       money: String,
//       description: String,
//       link: String,
//     }
//   },
//   performances:
//     {
//       title: String,
//       image: String,
//       performers: String[],
//     }[],
//   store: {
//     caption: String,
//     items:
//       {
//         title: String,
//         subtitle: String,
//         images: { image: String, alt: String }[],
//         subImages: { image: String, name: String }[],
//         price: String,
//         soldOut: Boolean,
//       }[],
//   },
//   people: {
//     [bod | comm | dev | perf]:
//       {
//         image: String,
//         name: String,
//         position: String,
//         major: String,
//         zodiac: String,
//         facts: String,
//       }[],
//   },
//   gallery: {
//     [INSERT_YEAR]: {
//       photos:
//         {
//           image: String,
//           caption: String,
//         }[],
//       videos:
//         {
//           link: String,
//         }[],
//     },
//   },
//   schedule: {
//     active: Boolean,
//     auditions: JSX.Element,
//     makeups: JSX.Element
//   }
// };

const text = {
  links: {
    facebook: "https://www.facebook.com/WULNYF/",
    instagram: "https://www.instagram.com/wu.lnyf/?hl=en",
    youtube: "https://www.youtube.com/user/LNYF",
    store: "https://commerce.cashnet.com/SULUNAR",
  },
  index: {
    jumbotronTop: "Lunar New Year Festival 2024",
    jumbotronMiddle: "Radiance",
    jumbotronBottom: undefined,
    jumbotronButtons: (
      <>
        <Link to="/events">
          <StyledButton white>Events</StyledButton>
        </Link>
      </>
    ),
    aboutText: (
      <>
        <Typography>
        Lunar New Year Festival (LNYF) is an annual student-run production staged in commemoration and celebration of the Lunar New Year.
        LNYF seeks to leave a prolonged impact both on and off the stage. Dynamic performances ranging from acting to dancing to martial arts explore Asian heritage from both traditional and modern perspectives, and acknowledge social issues prevalent in Asian communities. LNYF partners with local non-profit organizations to offer sustainable support to the greater St Louis community.
        </Typography>
      </>
    ),
    philanthropyTitle: "Prison Performing Arts",
    philanthropyText: (
      <>
        <Typography>
        LNYF is proud to partner with Prison Performing Arts as its philanthropy for the Year of the Dragon.
        About the Philanthropy:
        “Prison Performing Arts is a multi-discipline, literacy and performing arts program dedicated to enriching the lives of youth and adults in Missouri’s criminal and juvenile justice systems. They foster individual and social change by providing incarcerated adults, justice-involved youth, and returning citizens with opportunities to participate in the arts as artists, students, and audience members. Participants learn creative and constructive ways to express emotions, build trust, and work in collaboration with one another. Programs aim to improve literacy and communication skills, instill responsibility to self and others, and to promote non-violent expression of emotion.”
        </Typography>
      </>
    ),
    philanthropyLink: "https://www.prisonperformingarts.org/",
  },
  events: [
    {
      month: "Sep",
      day: "1",
      title: "Activities Fair",
      caption: "3-5 PM @ Mudd Field",
      description:
        "Come find the LNYF booth and sign up to be on our mailing list!",
    },
    {
      month: "Sep",
      day: "14",
      title: "General Body Meeting",
      caption: "6 PM @ Ursa's",
      description:
        "Come join our first GBM to find out more about how we celebrate Lunar New Year through performance, fundraising, and other events!",
    },
    {
      month: "Sep",
      day: "15",
      title: "LNYF @ AMC's Mid-Autumn Festival",
      caption: "3-5 PM @ Ursa's",
      description:
        "Come to the LNYF Booth to play games and learn more about LNYF!",
    },
    {
      month: "Sep",
      day: "16-22",
      title: "Auditions",
      caption: "More info to come",
      description:
        "Try out to become a performer at LNYF!",
    },
    {
      month: "Feb",
      day: "9-10",
      title: "LNYF Show",
      caption: "Find more info on our instagram",
      description:
        "Come watch our show!",
    },
  ],
  philanthropy: {
    2024: {
      image: "ppa",
      title: "Prison Performing Arts",
      money: undefined,
      description:
        'Prison Performing Arts is a multi-discipline, literacy and performing arts program dedicated to enriching the lives of youth and adults in Missouri’s criminal and juvenile justice systems. They foster individual and social change by providing incarcerated adults, justice-involved youth, and returning citizens with opportunities to participate in the arts as artists, students, and audience members. Participants learn creative and constructive ways to express emotions, build trust, and work in collaboration with one another. Programs aim to improve literacy and communication skills, instill responsibility to self and others, and to promote non-violent expression of emotion.',
      link: "https://www.prisonperformingarts.org/",
    },
    2023: {
      video: "https://www.youtube.com/embed/c9vfyap0Jqs",
      title: "Caring for Kids",
      money: undefined,
      description:
        '“Caring for Kids immediately provides essential resources to meet the urgent needs of abused, neglected or at-risk children in St. Louis County. Founded in 2003, Caring for Kids was started by Susan Block, an Administrative Judge of the St. Louis Family Court. She witnessed children that were unable to receive basic needs due to lack of resources, including school supplies, clothing, and even glasses and tutoring. Caring For Kids identifies kids at risk and helps kids meet their basic needs.”',
      link: "https://caringforkids-stl.org/",
    },
    2022: {
      image: "havenofgrace",
      title: "Haven of Grace",
      money: "$10,000",
      description:
        '"Serving women who are pregnant and homeless, The Haven of Grace provides a safe, nurturing home, educational programs and long-term support for mother and child. Founded in faith, we instill hope, dignity and the pride of independence, one family at a time."',
      link: "https://havenofgracestl.org/",
    },
    2021: {
      image: "fosterandadoptive",
      title: "Foster & Adoptive Care Coalition",
      money: "$6,750",
      description:
        '"The Foster & Adoptive Care Coalition strives to create permanency in foster children’s lives by recruiting and supporting foster and adoptive families in the metropolitan St. Louis region."',
      link: "https://www.foster-adopt.org/",
    },
    2020: {
      image: "varietychildren",
      title: "Variety, The Children's Charity",
      money: "$7,000",
      description:
        '"All children are special. However, Variety – the Children’s Charity’s purpose is to serve children who are less fortunate – children who live and grow up with a serious illness, disability or disadvantage. These are extra special children who require a special kind of help."',
      link: "https://usvariety.org/",
    },
    2019: {
      image: "kingdomhouse",
      title: "Kingdom House",
      money: undefined,
      description:
        '"Our mission is to help individuals and families achieve economic well-being by providing high-impact, relationship-based programming and by addressing systemic barriers to their success."',
      link: "https://www.lifewisestl.org/",
    },
    2018: {
      image: "foodoutreach",
      title: "Food Outreach",
      money: undefined,
      description:
        '"Food Outreach is the only St. Louis area organization whose mission is to provide nutritional support and enhance the quality of life of men, women and children living with HIV/AIDS or cancer."',
      link: "https://foodoutreach.org/",
    },
    2017: {
      image: "beyondhousing",
      title: "Beyond Housing",
      money: undefined,
      description:
        '"We began with housing in 1975, because we understood that home matters. Through our work, we learned that the true meaning of home - a place to shelter people and nurture dreams - can only happen in the context of a strong community."',
      link: "https://www.beyondhousing.org/legacy-gala",
    },
  },
  performances: [
    {
      title: "Standing Drums",
      image: "standingdrums",
      performers: [
        "Alex Liu (Choreo)",
        "Grace Lai (Choreo)",
        "Connor Park",
        "Harry Gao",
        "Claire Pan",
        "Deanna Wu",
        "Dexter Chen",
        "Jasmine Yang",
        "Ken Soe",
        "Wenting Yu"
      ],
    },
    {
      title: "Lotus",
      image: "lotusvietnamese",
      performers: [
        "Tietchan Dang (Choreo)",
        "Vicki Truong (Choreo)",
        "Cece Ly",
        "Celine Vuong",
        "Grace Nelson",
        "Helen Ha",
        "Nhi Ly",
        "Sydney Hwang",
        "Theresa Xuan Nguyen",
        "Tiana Mao"
      ],
    },
    {
      title: "Samulnori",
      image: "samulnori",
      performers: [
        "Andrew Yu (Choreo)",
        "Jane Zhang (Choreo)",
        "Alana Depaz",
        "Amanda Zhu",
        "Chelsea Chun",
        "Elysia Quah",
        "Emily So",
        "Grace Choi",
        "Hillary Fujimoto",
        "Jace Park",
        "Jay Won",
        "Joy Choi",
        "Linus Lee",
        "Minjung Song",
        "Rachel Wei",
        "Sebastian Lee",
        "Seoyoung Bae"
      ],
    },
    {
      title: "Korean Fan",
      image: "kfan",
      performers: [
        "Sarah Kim (Choreo)",
        "Andrea Ham",
        "Audrey Tsai",
        "Catherine Zhao",
        "Jessica Lee",
        "Kalea Lee",
        "Katie Zhou",
        "Madison Wang",
        "Maki Oh",
        "Michelle Chen",
        "Min-suh Kwak",
        "Vicky Cadena"
      ],
    },
    {
      title: "Tinikling",
      image: "tinikling",
      performers: [
        "Aaron Wang (Choreo)",
        "Noelle Casem (Choreo)",
        "Paula Glaser (Choreo)",
        "Alicia Huang",
        "Annie Chang",
        "Gwyneth Noel",
        "Jane Liang",
        "Malaya Hill",
        "Sophie Leong",
        "Alex Fang",
        "John Paul Pineda",
        "Kellen Wang",
        "Miguel Cadiz",
        "Nathan Suh",
        "Ricky Wang",
        "Tanner Sharon"
      ],
    },
    {
      title: "Lion",
      image: "lion",
      performers: [
        "Wenting Yu (H) (Choreo)",
        "Matthew Du (T) (Choreo)",
        "Amanda Taylor (H)",
        "Birdie Lee (H)",
        "Cindy Li (H)",
        "Justin Lan (T)",
        "Richard Yang (T)",
        "William Yin (T)",
        "Dora Chen (P)",
        "Stephane Cui (P)"
      ],
    },
    {
      title: "Yoyo",
      image: "yoyo",
      performers: [
        "Benjamin Yi (Choreo)",
        "Emily Shen (Choreo)",
        "Raymond Dai (Choreo)",
        "Ashtin Wang",
        "David Zhu",
        "Demi Zhuang",
        "Megan Guo",
        "Nevin Song",
        "Reina Xu",
        "Sharon Shen",
        "Tiffany Chen",
        "William Chen"
      ],
    },
    {
      title: "Juggling",
      image: "juggling",
      performers: [
        "Jeremy Cho (Choreo)",
        "Matthew Yu (Choreo)",
        "William Chen (Choreo)",
        "Daniel Chen",
        "Grant Kaplan",
        "Matthew Turbin",
        "Sandro Xiao",
        "Shawn Fong"
      ],
    },
    {
      title: "Fashion Show",
      image: "fashionshow",
      performers: [
        "Maki Oh (Choreo)",
        "Michelle Chen (Choreo)",
        "Sophia Dykstra (Choreo)",
        "BaoVy Nguyen",
        "Coco Wu",
        "Dung Tran",
        "Emily Hao",
        "Hailey Kim",
        "Joye Zheng",
        "Kelly Gan",
        "Lynn Yuan",
        "Nikki Nguyen",
        "Sangmi Lee",
        "Sophie Lee"
      ],
    },
    {
      title: "Chinese Contemporary",
      image: "chinesecontemp",
      performers: [
        "Addie Li (Choreo)",
        "Amanda Taylor (Choreo)",
        "Sophia Chow (Choreo)",
        "Andria Luo",
        "Anna Li",
        "Celina Liu",
        "Elizabeth Jin",
        "Emily Shen",
        "Hongyu Li",
        "Morgan Ye",
        "Prerana Acharyya",
        "Rachel Tian"
      ],
    },
    {
      title: "Watersleeves",
      image: "watersleeves",
      performers: [
        "Amanda Taylor (Choreo)",
        "Anna Li (Choreo)",
        "Ching Ching Zhang (Choreo)",
        "Addie Li",
        "Annabel Shen",
        "Benjamin Yi",
        "Caleb Lee",
        "Gioia Wang",
        "Grace Chen",
        "Jessica Li"
      ],
    },
    {
      title: "Taekwondo",
      image: "taekwondo",
      performers: [
        "Jonathan Tsao (Choreo)",
        "Priyanka Deka (Choreo)",
        "Sayf Fadil (Choreo)",
        "Allison Rea",
        "Daniel Oh",
        "Elizabeth Chen",
        "James Law",
        "Julie Baguio",
        "Michael Nguyen",
        "Nathan Zhou",
        "Ray Adelstein",
        "Sarah Cai"
      ],
    },
    {
      title: "Dai",
      image: "dai",
      performers: [
        "Judy Li (Choreo)",
        "Sarah Cao (Choreo)",
        "Alex Flojo",
        "Cynthia Zhi",
        "Eileen Li",
        "Emily Hu",
        "Isabel Lee",
        "Jessie Luo",
        "Lisa Ji",
        "Sophia Dykstra",
        "Tavia Liu",
        "Victoria Li"
      ],
    },
  ],
  store: {
    caption:
      "The store is closed temporarily. Please check back soon. Apologies for any inconvenience.",
    items: [
      {
        title: "Long Sleeve Shirt",
        images: [
          { image: "shirt-pic", alt: "Long Sleeve" },
          { image: "shirt-pic-2", alt: "Long Sleeve" },
        ],
        subImages: undefined,
        price: "$27.00",
        soldOut: false,
      },
      {
        title: "Tote Bag",
        images: [
          { image: "tote-pic", alt: "LNYF Tote" },
          { image: "tote-pic-2", alt: "LNYF Tote" },
        ],
        subImages: undefined,
        price: "$18.00",
        soldOut: false,
      },
      {
        title: "Sweatpants",
        images: [
          { image: "pants-pic", alt: "Sweatpants" },
          { image: "pants-pic-2", alt: "Sweatpants" },
        ],
        subImages: undefined,
        price: "$45.00",
        soldOut: false,
      },
      {
        title: "Keychain",
        images: [
          { image: "keychain-pic", alt: "Keychain" },
        ],
        subImages: undefined,
        price: "$5.00",
        soldOut: false,
      },
    ],
  },
  people: {
    bod: [
      {
        image: "racheltian",
        name: "Rachel Tian",
        position: "Executive Director",
        major: "Communication Design and Marketing",
        zodiac: "Horse",
        facts: "I like film photography, painting, Chinese dance, baking brownies, and going to art museums",
      },
      {
        image: "gracechen",
        name: "Grace Chen",
        position: "Executive Director",
        major: "Mechanical Engineering with a Minor in Design",
        zodiac: "Horse",
        facts: "I enjoy reading, biking, dancing, and ordering T26: mango tea blend with cream, pomelo, and crystal boba at cube tea",
      },
      {
        image: "raymonddai",
        name: "Raymond Dai",
        position: "Director of Communications",
        major: "Computer Science + Math",
        zodiac: "Snake",
        facts: "I submitted my LNYF website photo 23 minutes before it was due because I couldn't find a photo!",
      },
      {
        image: "alanadepaz",
        name: "Alana Depaz",
        position: "Director of Development",
        major: "Computer Science",
        zodiac: "Horse",
        facts: "My favorite animal is the orca and I've swam with two types of sharks!",
      },
      {
        image: "amandataylor",
        name: "Amanda Taylor",
        position: "Director of Performance",
        major: "Computer Science with Minors in Dance and Human-Computer Interaction",
        zodiac: "Horse",
        facts: "If I’m not in the studios dancing, I’m probably in the library napping",
      },
    ],
    comm: [
      {
        image: "makioh",
        name: "Maki Oh",
        position: "Art Director",
        major: "Communication Design",
        zodiac: "Sheep",
        facts: "I really like the movie the menu",
      },
      {
        image: "janezhang",
        name: "Jane Zhang",
        position: "Art Director",
        major: "Communication Design",
        zodiac: "Horse",
        facts: "I almost drowned at a public pool when I was 6 and did competitive swim for 10 years after that out of spite",
      },
      {
        image: "maxfrancisco",
        name: "Max Francisco",
        position: "Multimedia Director",
        major: "Communication Design with a Minor in Business of the Arts",
        zodiac: "Horse",
        facts: "I am sick at breaking (breakdancing) and I love photography",
      },
      {
        image: "chrisoh",
        name: "Chris Oh",
        position: "Multimedia Director",
        major: "Biology and Organizational Management",
        zodiac: "Sheep",
        facts: "I like skateboarding, filming videos, playing basketball, collecting succulents",
      },
      {
        image: "cecely",
        name: "Cece Ly",
        position: "PR Chair",
        major: "Marketing with Minors in Business of Entertainment and Children's Studies",
        zodiac: "Monkey",
        facts: "I have six siblings and I enjoy painting my nails, journaling, cinematography, and fashion",
      },
      {
        image: "sophieleong",
        name: "Sophie Leong",
        position: "PR Chair",
        major: "Communication Design and Marketing",
        zodiac: "Monkey",
        facts: "I like making art out of random things and photosynthesizing (lying in the sun)",
      },
      {
        image: "harrygao",
        name: "Harry Gao",
        position: "Webmaster",
        major: "Computer Science + Mathematics with a Minor in Psychology",
        zodiac: "Horse",
        facts: "I'm colorblind and a little bit scared of the dark",
      },
    ],
    dev: [
      {
        image: "jessicali",
        name: "Jessica Li",
        position: "Philanthropy Chair",
        major: "Biology with a Minor in Healthcare Management",
        zodiac: "Horse",
        facts: "I enjoy dance and hiking",
      },
      {
        image: "tianamao",
        name: "Tiana Mao",
        position: "Fundraising Chair",
        major: "Philosophy-Neuroscience-Psychology",
        zodiac: "Snake",
        facts: "I can do a really good Stitch impression, and I can make good matcha cookies!",
      },
      {
        image: "emilyshen",
        name: "Emily Shen",
        position: "Fundraising Chair",
        major: "Biomedical Engineering",
        zodiac: "Sheep",
        facts: "I didn't send Harry a fun fact :(",
      },
      {
        image: "sophielin",
        name: "Sophie Lin",
        position: "Corporate Sponsorship Chair",
        major: "Global Studies",
        zodiac: "Monkey",
        facts: "I recently competed at the powerlifting collegiate national meet!",
      },
      {
        image: "sarahcao",
        name: "Sarah Cao",
        position: "Corporate Sponsorship Chair",
        major: "Philospohy-Neuroscience-Psychology",
        zodiac: "Sheep",
        facts: "I'm a figure skater!",
      },
      {
        image: "tietchandang",
        name: "Tietchan Dang",
        position: "Treasurer",
        major: "Psychology with Minors in Math and Writing",
        zodiac: "Goat",
        facts: "I can bend my pinky backwards to touch my wrist!",
      },
      {
        image: "emilyso",
        name: "Emily So",
        position: "Treasurer",
        major: "Philosophy-Neuroscience-Psychology and Philosophy: Law and Policy",
        zodiac: "Monkey",
        facts: "I almost died when a tree fell on my house in elementary school",
      },
    ],
    perf: [
      {
        image: "annali",
        name: "Anna Li",
        position: "Choreo Chair",
        major: "Biomedical Engineering",
        zodiac: "Snake",
        facts: "I drink my coffee black XD and my favorite hobby is grocery shopping",
      },
      {
        image: "matthewdu",
        name: "Matthew Du",
        position: "Choreo Chair",
        major: "Biochemistry",
        zodiac: "Sheep",
        facts: "I like to draw and longboard!",
      },
      {
        image: "joannachen",
        name: "Joanna Chen",
        position: "Technical Chair",
        major: "Biomedical Engineering",
        zodiac: "Horse",
        facts: "I get clowned a lot for my obsession with the sky 😓",
      },
      {
        image: "vickitruong",
        name: "Vicki Truong",
        position: "Special Operations Chair / Co-treasurer",
        major: "Biology with Minors in Psychology and East Asian Languages and Cultures",
        zodiac: "Goat",
        facts: "I have double jointed elbows and I watch videos in 3x speed sometimes",
      },
    ],
  },
  gallery: {
    2023: {
      photos: [
        {
          image: "1V2A9954",
          caption: "Show photos"
        },
        {
          image: "1V2A1695",
          caption: "Show photos"
        },
        {
          image: "1V2A1629",
          caption: "Show photos"
        },
        {
          image: "1V2A9865",
          caption: "Show photos"
        },
        {
          image: "1V2A1098",
          caption: "Show photos"
        },
        {
          image: "1V2A0945",
          caption: "Show photos"
        },
        {
          image: "1V2A0859",
          caption: "Show photos"
        },
        {
          image: "1V2A0565",
          caption: "Show photos"
        },
        {
          image: "1V2A1788",
          caption: "Show photos"
        },
        {
          image: "1V2A0417",
          caption: "Show photos"
        },
        {
          image: "1V2A8994",
          caption: "Show photos"
        },
        {
          image: "1V2A3759",
          caption: "Show photos"
        },
        {
          image: "1V2A3718",
          caption: "Show photos"
        },
        {
          image: "1V2A3616",
          caption: "Show photos"
        },
        {
          image: "1V2A3590",
          caption: "Show photos"
        },
        {
          image: "1V2A3322",
          caption: "Show photos"
        },
        {
          image: "1V2A2743",
          caption: "Show photos"
        },
        {
          image: "1V2A2670",
          caption: "Show photos"
        },
        {
          image: "1V2A2323",
          caption: "Show photos"
        },
        {
          image: "1V2A9818",
          caption: "Show photos"
        },
      ],
      videos: [
        {
          link: "https://www.youtube.com/embed/2VTpOkWIoeY",
        },
        {
          link: "https://www.youtube.com/embed/weO73kyAmRk",
        },
        {
          link: "https://www.youtube.com/embed/WCd9g1zGXZQ",
        },
        {
          link: "https://www.youtube.com/embed/qRLrd1a_B6E",
        },
        {
          link: "https://www.youtube.com/embed/aZx5jwIDprM"
        },
        {
          link: "https://www.youtube.com/embed/-9fvYJvDxJM",
        },
        {
          link: "https://www.youtube.com/embed/ZsvyOUwWPdU",
        },
        {
          link: "https://www.youtube.com/embed/Xu7DilnHcP8",
        },
        {
          link: "https://www.youtube.com/embed/s7WaJIDiyOY",
        },
        {
          link: "https://www.youtube.com/embed/WeujnG0tfms",
        },
        {
          link: "https://www.youtube.com/embed/3iohBylHwro",
        },
        {
          link: "https://www.youtube.com/embed/aHvbKOrQ_Bg",
        },
        {
          link: "https://www.youtube.com/embed/Aa6VIrrJODI",
        },
        {
          link: "https://www.youtube.com/embed/gb5E58bqvUw",
        },
        {
          link: "https://www.youtube.com/embed/Z7bn_4fzMzk",
        },
        {
          link: "https://www.youtube.com/embed/2Sv3wCfyF4w",
        },
      ],
    },
    2022: {
      photos: [
        {
          image: "AZ1A6517",
          caption: "Banquet photos"
        },
        {
          image: "AZ1A6674",
          caption: "Banquet photos"
        },
        {
          image: "AZ1A6923",
          caption: "Banquet photos"
        },
        {
          image: "AZ1A6489",
          caption: "Banquet photos"
        },
        {
          image: "AZ1A6836",
          caption: "Banquet photos"
        },
        {
          image: "AZ1A6460",
          caption: "Banquet photos"
        },
      ],
      videos: [
        {
          link: "https://www.youtube.com/embed/PFXkHuOhL6g",
        },
        {
          link: "https://www.youtube.com/embed/pj8Bth1k0SU",
        },
        {
          link: "https://www.youtube.com/embed/8f3BG7B9uy0",
        },
        {
          link: "https://www.youtube.com/embed/jsQW6DRhlos",
        },
        {
          link: "https://www.youtube.com/embed/9p9xm4FDMM0",
        },
        {
          link: "https://www.youtube.com/embed/7pWLzut9dik",
        },
        {
          link: "https://www.youtube.com/embed/9q7MSWI8ps8",
        },
        {
          link: "https://www.youtube.com/embed/UKXEkCvgE2A",
        },
        {
          link: "https://www.youtube.com/embed/s62HWbOZIf8",
        },
        {
          link: "https://www.youtube.com/embed/GK5__1lGb3M",
        },
        {
          link: "https://www.youtube.com/embed/A47N-pGKUcI",
        },
        {
          link: "https://www.youtube.com/embed/_l_6WvexKYg",
        },
        {
          link: "https://www.youtube.com/embed/fpzj7SDf63E",
        },
        {
          link: "https://www.youtube.com/embed/YdIwniiGYJk",
        },
      ],
    },
    2021: {
      photos: [
        {
          image: "2021_DSC_6632",
          caption: "Banquet photos",
        },
        {
          image: "2021_DSC_6669",
          caption: "Banquet photos",
        },
        {
          image: "2021_DSC_6776",
          caption: "Banquet photos",
        },
        {
          image: "2021_DSC_6800",
          caption: "Banquet photos",
        },
        {
          image: "2021_DSC_6818",
          caption: "Banquet photos",
        },
        {
          image: "2021_DSC_6834",
          caption: "Banquet photos",
        },
      ],
      videos: [
        {
          link: "https://www.youtube.com/embed/ZlceeNnXLls",
        },
        {
          link: "https://www.youtube.com/embed/YUCiiUID1Dc",
        },
        {
          link: "https://www.youtube.com/embed/dJG128WbZtI",
        },
        {
          link: "https://www.youtube.com/embed/N8-_wRVSCVY",
        },
        {
          link: "https://www.youtube.com/embed/fVelluHLyPc",
        },
        {
          link: "https://www.youtube.com/embed/7YoTmf6T7Ks",
        },
        {
          link: "https://www.youtube.com/embed/UYt6NmwOwfI",
        },
        {
          link: "https://www.youtube.com/embed/f23d5n5qY-o",
        },
        {
          link: "https://www.youtube.com/embed/4JYR3A4NyXU",
        },
        {
          link: "https://www.youtube.com/embed/OLfxC7Ehm5E",
        },
        {
          link: "https://www.youtube.com/embed/J5EZ8vAfQ5U",
        },
        {
          link: "https://www.youtube.com/embed/afVIE4PdWvU",
        },
        {
          link: "https://www.youtube.com/embed/SuGSUhWwiPI",
        },
        {
          link: "https://www.youtube.com/embed/0XxfQ9kFiYA",
        },
        {
          link: "https://www.youtube.com/embed/4GmPxs5q88c",
        },
        {
          link: "https://www.youtube.com/embed/_cRE7bU8UnE",
        },
        {
          link: "https://www.youtube.com/embed/FPn_GF86FBI",
        },
        {
          link: "https://www.youtube.com/embed/7vbnj2cZ4O8",
        },
      ],
    },
    2020: {
      photos: [
        {
          image: "2020_cfansquare",
          caption: "Chinese fan",
        },
        {
          image: "2020_daisquare",
          caption: "Dai",
        },
        {
          image: "2020_fusionsquare",
          caption: "Fusion",
        },
        {
          image: "2020_hulasquare",
          caption: "Hula",
        },
        {
          image: "2020_jugglingsquare",
          caption: "Juggling",
        },
        {
          image: "2020_lionsquare",
          caption: "Lion",
        },
        {
          image: "2020_lotussquare",
          caption: "Lotus",
        },
        {
          image: "2020_samulnorisquare",
          caption: "Samulnori",
        },
        {
          image: "2020_skitsquare",
          caption: "Skit",
        },
        {
          image: "2020_standingdrumsquare",
          caption: "Standing Drums",
        },
        {
          image: "2020_swordssquare",
          caption: "Swords",
        },
        {
          image: "2020_tiniklingsquare",
          caption: "Tinikling",
        },
        {
          image: "2020_yoyosquare",
          caption: "Yo Yo",
        },
      ],
      videos: [
        {
          link: "https://www.youtube.com/embed/gNBQ2XlIDD8",
        },
        {
          link: "https://www.youtube.com/embed/LgfF_AerMDE",
        },
        {
          link: "https://www.youtube.com/embed/gkS30Zor6KQ",
        },
        {
          link: "https://www.youtube.com/embed/f_2-AmrpJ68",
        },
        {
          link: "https://www.youtube.com/embed/6yXO0JIkfSU",
        },
        {
          link: "https://www.youtube.com/embed/WTvKhz6UoA4",
        },
        {
          link: "https://www.youtube.com/embed/tFeouMyTyyk",
        },
        {
          link: "https://www.youtube.com/embed/s7yBEo7eRCY",
        },
        {
          link: "https://www.youtube.com/embed/YmCCK9yG488",
        },
        {
          link: "https://www.youtube.com/embed/4KQBQYKr7ms",
        },
        {
          link: "https://www.youtube.com/embed/uJ8mNod_EaU",
        },
        {
          link: "https://www.youtube.com/embed/RY3sHQTvBCI",
        },
        {
          link: "https://www.youtube.com/embed/gHMvRwaeNW0",
        },
        {
          link: "https://www.youtube.com/embed/-xk0ExdPiGA",
        },
        {
          link: "https://www.youtube.com/embed/NwpENXhPQ2Y",
        },
        {
          link: "https://www.youtube.com/embed/Er28twFGTb0",
        },
        {
          link: "https://www.youtube.com/embed/HgTXDfGBi-g",
        },
        {
          link: "https://www.youtube.com/embed/WOg_-ZXSW18",
        },
        {
          link: "https://www.youtube.com/embed/3m3lnL3Qthg",
        },
        {
          link: "https://www.youtube.com/embed/difpmJqCddQ",
        },
        {
          link: "https://www.youtube.com/embed/CcQp8AjK5Hg",
        },
      ],
    },
  },
  schedule: {
    active: true,
    content: (
      <>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf31P_qiT1jEkPz9lX368duUezPVGjCPW0V9IhmI5FNGfkkmQ/viewform?usp=sf_link">
          <AuditionButton>Liability Waiver</AuditionButton>
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2upzA51d3ucJWSJ5T0Ngm59yzu4ebT_e_-kBebQl6t2VDig/viewform?usp=sf_link">
          <AuditionButton>Audition Attendance</AuditionButton>
        </a>
        <StyledHeader variant="h6">Auditions</StyledHeader>
        <Table>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Act</th>
          </tr>
          <tr>
            <td rowspan="6">Saturday 9/16</td>
            <td>10AM - 12PM</td>
            <td>Mudd MPR</td>
            <td>Dai</td>
          </tr>
          <tr>
            <td>12PM - 2PM</td>
            <td>Mudd MPR</td>
            <td>Lotus</td>
          </tr>
          <tr>
            <td>2PM - 4PM</td>
            <td>Mudd MPR</td>
            <td>Fashion Show</td>
          </tr>
          <tr>
            <td>4PM - 6PM</td>
            <td>Mudd MPR</td>
            <td>Chinese Contemporary</td>
          </tr>
          <tr>
            <td>6PM - 8PM</td>
            <td>Mudd MPR</td>
            <td>Korean Fan</td>
          </tr>
          <tr>
            <td>8PM - 10PM</td>
            <td>Mudd MPR</td>
            <td>Watersleeves</td>
          </tr>
          <tr>
            <td rowspan="7">Sunday 9/17</td>
            <td>10AM - 12PM</td>
            <td>Malli 302 & 303</td>
            <td>Samulnori</td>
          </tr>
          <tr>
            <td>12PM - 2PM</td>
            <td>McMillan Cafe</td>
            <td>Tinikling</td>
          </tr>
          <tr>
            <td>2PM - 4PM</td>
            <td>McMillan Cafe</td>
            <td>Standing Drum</td>
          </tr>
          <tr>
            <td>4PM - 6PM</td>
            <td>McMillan Cafe</td>
            <td>Taekwondo</td>
          </tr>
          <tr>
            <td>6PM - 8PM</td>
            <td>McMillan Cafe</td>
            <td>Juggling</td>
          </tr>
          <tr>
            <td>8PM - 10PM</td>
            <td>McMillan Cafe</td>
            <td>Lion</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>McMillan Cafe</td>
            <td>Yoyo</td>
          </tr>
        </Table>
        <StyledHeader variant="h6">Makeups</StyledHeader>
        <Table>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Act</th>
          </tr>
          <tr>
            <td rowspan="3">Monday 9/18</td>
            <td>8PM - 10PM</td>
            <td>Lopata MPR</td>
            <td>Fashion Show</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>Mudd MPR</td>
            <td>Dai</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>McMillan Cafe</td>
            <td>Lion</td>
          </tr>
          <tr>
            <td rowspan="3">Tuesday 9/19</td>
            <td>8PM - 10PM</td>
            <td>Malli 302 & 303</td>
            <td>Samulnori</td>
          </tr>
          <tr>
            <td>8PM - 10PM</td>
            <td>Mudd MPR</td>
            <td>Tinikling</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>Mudd MPR</td>
            <td>Chinese Contemporary</td>
          </tr>
          <tr>
            <td rowspan="4">Wednesday 9/20</td>
            <td>6PM - 8PM</td>
            <td>McMillan Cafe</td>
            <td>Juggling</td>
          </tr>
          <tr>
            <td>8PM - 10PM</td>
            <td>McMillan Cafe</td>
            <td>Yoyo</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>Olin 1</td>
            <td>Watersleeves</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>McMillan Cafe</td>
            <td>Standing Drum</td>
          </tr>
          <tr>
            <td rowspan="3">Thursday 9/21</td>
            <td>8PM - 10PM</td>
            <td>Mudd MPR</td>
            <td>Korean Fan</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>Mudd MPR</td>
            <td>Lotus</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>Olin 1</td>
            <td>Taekwondo</td>
          </tr>
          <tr>
            <td>Friday 9/22</td>
            <td>6PM - 8PM</td>
            <td>TBD</td>
            <td>Lion (Callbacks)</td>
          </tr>
        </Table>
      </>
    ),
  },
};

export default text;
