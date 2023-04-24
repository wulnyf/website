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
  border: 1px solid black;
  td,
  th {
    padding: 10px;
    border: 1px solid black;
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
//         favTreat: String,
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
    jumbotronTop: "Lunar New Year Festival 2023",
    jumbotronMiddle: "Chasing Dreams",
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
          Lunar New Year Festival (LNYF) is an annual student-run production
          staged in commemoration and celebration of the Lunar New Year.
        </Typography>
        <Typography>
          LNYF seeks to leave a prolonged impact both on and off the stage.
          Dynamic performances ranging from acting to dancing to martial arts
          explore Asian heritage from both traditional and modern perspectives,
          and acknowledge social issues prevalent in Asian communities. LNYF
          partners with local non-profit organizations to offer sustainable
          support to the greater St Louis community.
        </Typography>
      </>
    ),
    philanthropyTitle: "Caring for Kids",
    philanthropyText: (
      <>
        <Typography>
        “Caring for Kids immediately provides essential resources to meet 
        the urgent needs of abused, neglected or at-risk children in St. 
        Louis County.”
        </Typography>
      </>
    ),
    philanthropyLink: "https://caringforkids-stl.org/",
  },
  events: [
    {
      month: "Feb",
      day: "3-4",
      title: "LNYF Show",
      caption: "Edison Theater | 2:00PM , 7:00 PM",
      description:
        "Come watch our show!",
    },
    {
      month: "Jan",
      day: "28",
      title: "AMC Fireworks x LNYF",
      caption: "Tisch Commons | 6:00 PM",
      description:
        "Come celebrate the Lunar New Year!",
    },
    {
      month: "Sep",
      day: "17-18",
      title: "Auditions",
      caption: "Various Places | 2:00 PM - 10:00 PM",
      description:
        "Try out to become a performer at LNYF!",
    },
    {
      month: "Sep",
      day: "16",
      title: "Mid-Autumn Festival",
      caption: "Clocktower | 4:00 PM - 6:00 PM",
      description:
        "Come join the festival to celebrate Mid-Autumn festival and find out more about LNYF!",
    },
    {
      month: "Sep",
      day: "15",
      title: "General Body Meeting",
      caption: "Ursa's Fireside | 6:00 PM",
      description:
        "Come join our first GBM to find out more about how we celebrate Lunar New Year through performance, fundraising, and other events!",
    },
    {
      month: "Sep",
      day: "2",
      title: "Activities Fair",
      caption: "Mudd Field | 3:00 PM - 5:00 PM",
      description:
        "Come find the LNYF booth and sign up to be on our mailing list!",
    },
  ],
  philanthropy: {
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
      title: "Chinese Fan",
      image: "cfan",
      performers: [
        "Amanda Taylor (Choreo)",
        "Emily Shen (Choreo)",
        "Anna Li",
        "Benjamin Yi",
        "Bridget Sun",
        "Caleb Lee",
        "Ching Ching Zhang",
        "Christina Cai",
        "Jessica Li",
        "Rachel Lu",
        "Rachel Tian",
        "Rachel Wei",
      ],
    },
    {
      title: "Standing Drums",
      image: "standingdrums",
      performers: [
        "Grace Lai (Choreo)",
        "Yoon Kim (Choreo)",
        "Alex Liu",
        "Brian Sohn",
        "Connor Park",
        "Emily Shen",
        "Harry Gao",
        "Lily Luu",
        "Matthew Du",
        "Sang-Mi Lee",
      ],
    },
    {
      title: "Lotus & Hats",
      image: "lotusvietnamese",
      performers: [
        "Vicki Truong (Choreo)",
        "Grace Nelson (Choreo)",
        "Alexia Zheng",
        "Emily Lu",
        "Emma Shen",
        "Isa Yang",
        "Jiwon Choi",
        "Julie Xu",
        "Karinne Summers",
        "Sophia Dykstra",
        "Tiana Mao",
        "Tietchan Dang",
      ],
    },
    {
      title: "Samulnori",
      image: "samulnori",
      performers: [
        "Jaz Choi (Choreo)",
        "Sangwook Suh (Choreo)",
        "Joy Choi (j)",
        "Andrew Yu (b,k)",
        "Hillary Fujimoto (b)",
        "Jace Park (b)",
        "Jane Zhang (b)",
        "Josh Chen (b)",
        "Minjung Song (b)",
        "Minwoo Kwon (b)",
        "Chelsea Chun (j)",
        "Emily So (j)",
        "Grace Choi (j)",
        "Jay Won (j)",
        "Linus Lee (j)",
        "Sebastian Lee (j)",
        "Susie Choi (j)",
      ],
    },
    {
      title: "Fusion",
      image: "fusion",
      performers: [
        "Amanda Zhu (Choreo)",
        "Amelia Kung (Choreo)",
        "Amy Xue",
        "Carrie Lo",
        "Emily Shen",
        "Grace Chen",
        "Isabel Lee",
        "Isabelle Xu",
        "Jamie Xu",
        "Josh Hou",
        "Kelly Kim",
        "Michelle Chen",
        "Raymond Dai",
        "Shawn Fong",
        "Vivian Nguyen",
      ],
    },
    {
      title: "Korean Fan",
      image: "kfan",
      performers: [
        "Sarah Kim (Choreo)",
        "Adela Cho",
        "Alexandria Flojo",
        "Eileen Li",
        "Jenny Park",
        "Jessie Luo",
        "Kaitlyn Wang",
        "Madison Wang",
        "Maki Oh",
        "Sarah Cao",
        "Sophie Lee",
        "Vicky Cadena",
      ],
    },
    {
      title: "Tinikling",
      image: "tinikling",
      performers: [
        "Guenevere Chang (Choreo)",
        "Jiwon Choi (Choreo)",
        "Aaron Wang (Choreo)",
        "Amanda Young",
        "Evelyn Song",
        "Jane Liang",
        "Noelle Casem",
        "Paula Glaser",
        "Sophie Leong",
        "Alex Xu",
        "Andrew Choi",
        "James Law",
        "Max Francisco",
        "Ricky Wang",
        "Ritvik Illindala",
        "William Yin",
      ],
    },
    {
      title: "Lion",
      image: "lion",
      performers: [
        "Helen Ye (Choreo)",
        "Matthew Du (Choreo)",
        "Amanda Taylor (h)",
        "Birdie Lee (h)",
        "Wenting Yu (h)",
        "Dan Du (t)",
        "Justin Lan (t)",
        "Wesley Yin (t)",
        "Alex Joggerst (p)",
        "Joanna Chen (p)",
      ],
    },
    {
      title: "Yo Yo",
      image: "yoyo",
      performers: [
        "Benjamin Yi (Choreo)",
        "Emily Shen (Choreo)",
        "Raymond Dai (Choreo)",
        "Cadi Zhang",
        "Calvin Xie",
        "Demi Zhuang",
        "Jihoon Kiel",
        "Kyle Tran",
        "Megan Guo",
        "Nevin Song",
        "Sharon Shen",
        "Thomas Lang",
      ],
    },
    {
      title: "Juggling",
      image: "juggling",
      performers: [
        "Walker Sexton (Choreo)",
        "Matthew Yu (Choreo)",
        "Matthew Turbin",
        "Grant Kaplan",
        "William Chen",
        "Marta Cholewa",
        "TBD"
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
          { image: "mockuplongsleeveback", alt: "Long Sleeve Back Side" },
          { image: "mockuplongsleevefront", alt: "Long Sleeve Front Side" },
        ],
        subImages: undefined,
        price: "$27.00",
        soldOut: false,
      },
      {
        title: "Short Sleeve Shirt",
        images: [
          { image: "shortsleeveback1", alt: "Short Sleeve Back Side" },
          { image: "shortsleevefront1", alt: "Short Sleeve Front Side" },
        ],
        subImages: undefined,
        price: "$16.00",
        soldOut: false,
      },
      {
        title: "Zodiac Stickers",
        images: [
          { image: "lnyfstickermockup", alt: "LNYF Zodiac Stickers" }
        ],
        subImages: undefined,
        price: "$1.00",
        soldOut: false,
      },
      {
        title: "LNYF Tote",
        images: [
          { image: "lnyftotemockup", alt: "LNYF Tote side" },
          { image: "lnyftotemockup2", alt: "LNYF Tote Upright" },
        ],
        subImages: undefined,
        price: "$16.00",
        soldOut: false,
      },
      {
        title: "Beanie",
        images: [
          { image: "beanie_mockup", alt: "Beanie" },
        ],
        subImages: undefined,
        price: "$19.00",
        soldOut: false,
      },
      {
        title: "Poster",
        images: [
          { image: "poster_mockup", alt: "Poster" },
        ],
        subImages: undefined,
        price: "$8.00",
        soldOut: false,
      },
    ],
  },
  people: {
    bod: [
      {
        image: "chrisxu",
        name: "Chris Xu",
        position: "Executive Director",
        major: "Economics",
        zodiac: "Snake",
        lnyf: "LNYF has been my second home at WashU, I've made my closest friends here. The show is something I look forward to every February, and I'm so excited to be a part of it my final year.",
        favTreat: "Custard buns",
      },
      {
        image: "layowyu",
        name: "Layow Yu",
        position: "Executive Director",
        major: "Biochemistry, Minor: Anthropology and French",
        zodiac: "Snake",
        lnyf: "To me, LNYF is both a family and a big machine - we're working towards so many exciting things other than the show itself, but we do it as a big, happy 24-person family.",
        favTreat: "Yóu tiáo",
      },
      {
        image: "racheltian",
        name: "Rachel Tian",
        position: "Director of Communications",
        major: "Communication Design and Marketing",
        zodiac: "Horse",
        lnyf: "LNYF is a cross section of everything I care about: talented people, amazing performances, diverse culture, and wonderful philanthropy opportunities!",
        favTreat: "Japanese Sweet Potato",
      },
      {
        image: "sophiachen",
        name: "Sophia Chen",
        position: "Director of Development",
        major: "Biochemistry, Minor: psychology",
        zodiac: "Dragon",
        lnyf: "LNYF has been a really welcoming place where I can celebrate my culture while also supporting meaningful causes that I care about!",
        favTreat: "Egg tarts!",
      },
      {
        image: "christinacai",
        name: "Christina Cai",
        position: "Director of Performance",
        major: "Business Analytics and Computer Science",
        zodiac: "Snake",
        lnyf: "LNYF is a celebration of family and different cultures and I think that our organization really embodies that, we a family!",
        favTreat: "mango sticky rice",
      },
    ],
    comm: [
      {
        image: "makioh",
        name: "Maki Oh",
        position: "Art Director",
        major: "Communication Design + Human Computer Interaction",
        zodiac: "Sheep",
        lnyf: "LNYF is where I can be my most authentic self, surrounded by people who support one another!",
        favTreat: "Hanami Dango",
      },
      {
        image: "sarahwang",
        name: "Sarah Wang",
        position: "Art Director",
        major: "Communication Design & Human Computer Interactions",
        zodiac: "Horse",
        lnyf: "community & culture <3",
        favTreat: "Chinese herbal tea / Shrimp chips",
      },
      {
        image: "cadizhang",
        name: "Cadi Zhang",
        position: "Multimedia Director",
        major: "Finance and Communication Design",
        zodiac: "Sheep",
        lnyf: "LNYF is an opportunity for anyone who appreciates or enjoys Asian culture to explore and create new avenues of expression through a variety of performances and community service.",
        favTreat: "White Rabbit Candy",
      },
      {
        image: "maxfrancisco",
        name: "Max Francisco",
        position: "Multimedia Director",
        major: "Communication Design",
        zodiac: "Horse",
        lnyf: "To me, LNYF represents an incredibly close family of people who come together in celebration of diverse Asian cultures. The friends I have made through LNYF have been some of the most kind and genuine people I have ever met.",
        favTreat: "Red Bean Mochi",
      },
      {
        image: "gracechen",
        name: "Grace Chen",
        position: "PR Chair",
        major: "Mechanical Engineering + Communication Design",
        zodiac: "Horse",
        lnyf: "best people ever",
        favTreat: "zongzi",
      },
      {
        image: "raymonddai",
        name: "Raymond Dai",
        position: "PR Chair",
        major: "Computer Science + Math",
        zodiac: "Snake",
        lnyf: "A hard-working, close-knit family passionate about performing! Yo-yo enlightenment!",
        favTreat: "Brown Sugar Boba Tea",
      },
      {
        image: "jiwonchoi",
        name: "Jiwon Choi",
        position: "Webmaster",
        major: "Computer Science + Mathematics",
        zodiac: "Dragon",
        lnyf: "fulfilling, joyful, and energetic",
        favTreat: "Pretz Pizza flavored",
      },
    ],
    dev: [
      {
        image: "vivienhuang",
        name: "Vivien Huang",
        position: "Philanthropy Chair",
        major: "Philosophy-Neuroscience-Psychology (PNP), Minor: Writing",
        zodiac: "Dragon",
        lnyf: "To me, LNYF is a community of people with a common interest in celebrating Asian culture as well as a shared love of creativity and artistic expression.  It is also a place to cultivate appreciation for one's cultural identity, whether that is one's own identity or the collective.  I see LNYF as an outlet for WashU students to take pride in exploring Asian culture while building meaningful friendships with people in the community.",
        favTreat: "custard buns and egg tarts",
      },
      {
        image: "jessicali",
        name: "Jessica Li",
        position: "Fundraising Chair",
        major: "Biology, Minor: Healthcare Management",
        zodiac: "Horse",
        lnyf: "LNYF means to me fostering a closer community and spreading awareness of Asian culture.",
        favTreat: "Hello Panda",
      },
      {
        image: "alanadepaz",
        name: "Alana Depaz",
        position: "Fundraising Chair",
        major: "Computer Science",
        zodiac: "Horse",
        lnyf: "LNYF is one big family working towards a great performance, for a great cause!",
        favTreat: "Ube Mamon",
      },
      {
        image: "amyxue",
        name: "Amy Xue",
        position: "Fundraising Chair",
        major: "Mechanical Engineering + Art",
        zodiac: "Snake",
        lnyf: "To me, LNYF is a way to showcase all the amazing parts of the Lunar New Year while both engaging and supporting the communities we're a part of!",
        favTreat: "豆腐脑 💖 (Tofu pudding) (also soy milk is 👌😩)",
      },
      {
        image: "jasmineliu",
        name: "Jasmine (Xiaoyu) Liu",
        position: "Corporate Sponsorship Chair",
        major: "Psychology, Marketing, Minor: Film & Media Studies",
        zodiac: "Horse",
        lnyf: "To me, LNYF is more than a performance. It is the place where I met a lot of amazing people who have a genuine passion for bringing the culture they love to more people and are dedicated to making tons of effort to make it not just happen, but great. Through my previous experience, I feel the importance of every single one on the team and I’m more than thankful that I could be a part of it. It is truly a community that makes me proud. LNYF is the stage that allows me to be proud of my identity and introduce the beauty of my culture to more people.",
        favTreat: "Rice cake",
      },
      {
        image: "jimmyle",
        name: "Jimmy Le",
        position: "Corporate Sponsorship Chair",
        major: "Cognitive Neuroscience, Minor: Bio (Pre-med)",
        zodiac: "Dragon",
        lnyf: "For me, LNYF is a way to connect with my own culture/heritage in a way that I’ve never been able to before. I also love it because it provides such an incredible outlet for people to share their own unique culture in ways they may not be able to in their daily lives. Lastly, LNYF is important to me because it allows our community to really significantly support a local philanthropic organization.",
        favTreat: "strawberry pocket",
      },
      {
        image: "amandazhu",
        name: "Amanda Zhu",
        position: "Treasurer",
        major: "Psychology, Minor: Statistics",
        zodiac: "Ram",
        lnyf: "LNYF is a celebration of Asian culture and an opportunity for me to explore my Asian identity.",
        favTreat: "Binbin rice crackers",
      },
    ],
    perf: [
      {
        image: "amandataylor",
        name: "Amanda Taylor",
        position: "Choreo Chair",
        major: "Computer Science, Minor: Dance",
        zodiac: "Horse",
        lnyf: "community <3",
        favTreat: "congee",
      },
      {
        image: "emilyshen",
        name: "Emily Shen",
        position: "Choreo Chair",
        major: "Computer Science, Minor: Biology",
        zodiac: "Sheep",
        lnyf: "To me, LNYF is an incredible family of passionate performers with a shared goal of celebrating Asian culture and supporting local philanthropies.",
        favTreat: "Taro Buns",
      },
      {
        image: "bridgetsun",
        name: "Bridget Sun",
        position: "Technical Chair",
        major: "Marketing, Minor: East Asian Languages and Cultures",
        zodiac: "Snake",
        lnyf: "Community, celebration, and FUN",
        favTreat: "honey butter chips",
      },
      {
        image: "serenachan",
        name: "Serena Chan",
        position: "Special Operations Chair / Co-treasurer",
        major: "Sociology, Minor: Religion & Politics, Biology",
        zodiac: "Snake",
        lnyf: "I think LNYF is like having a second family during the Lunar New Year Festival to celebrate with - I have one back home, and one here, so it's double the festivities :)",
        favTreat: "Lychee Jelly",
      },
    ],
  },
  gallery: {
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
    active: false,
    content: (
      <>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMFzvhLddCGuBK26SnS3L0TT64HlmnzztWf3FeUDi8A5iLjw/viewform">
          <AuditionButton>Liability Waiver</AuditionButton>
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4w9n9q8ekWLKC6VWNc-kiP4qNv_t-7KInVobpAr1PPnBvwA/viewform">
          <AuditionButton>Audition Preference</AuditionButton>
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
            <td rowspan="5">Saturday 9/25</td>
            <td>1 pm - 3 pm</td>
            <td>Mudd MPR</td>
            <td>Dai</td>
          </tr>
          <tr>
            <td>3 pm - 5 pm</td>
            <td>Mudd MPR</td>
            <td>Yoyo</td>
          </tr>
          <tr>
            <td>5 pm - 7 pm</td>
            <td>Mudd MPR</td>
            <td>Lotus/Vietnamese Hats</td>
          </tr>
          <tr>
            <td>7 pm - 9 pm</td>
            <td>Mudd MPR</td>
            <td>Tinikling</td>
          </tr>
          <tr>
            <td>7 pm - 9 pm</td>
            <td>Olin Studio 2</td>
            <td>*Lion</td>
          </tr>
          <tr>
            <td rowspan="5">Sunday 9/26</td>
            <td>1 pm - 3 pm</td>
            <td>Mudd MPR</td>
            <td>Chinese Fan</td>
          </tr>
          <tr>
            <td>3 pm - 5 pm</td>
            <td>Mudd MPR</td>
            <td>Fusion</td>
          </tr>
          <tr>
            <td>5 pm - 7 pm</td>
            <td>Mudd MPR</td>
            <td>Samulnori</td>
          </tr>
          <tr>
            <td>7 pm - 9 pm</td>
            <td>Mudd MPR</td>
            <td>
              *Skit (Sign up{" "}
              <a href="https://www.signupgenius.com/go/8050b4baaae22a2ff2-lnyf">
                here
              </a>
              )
            </td>
          </tr>
          <tr>
            <td>5 pm - 8 pm</td>
            <td>McMillan Cafe</td>
            <td>Standing Drums</td>
          </tr>
          <tr>
            <td>Monday 9/27</td>
            <td>7 pm - 9 pm</td>
            <td>Mudd MPR</td>
            <td>*Lion</td>
          </tr>
        </Table>
        <p>
          *These have callbacks so you must attend at least one of the main
          auditions to be eligible
        </p>
        <StyledHeader variant="h6">Makeups</StyledHeader>
        <Table>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Act</th>
          </tr>
          <tr>
            <td rowspan="1">Monday 9/27</td>
            <td>5 pm - 7 pm</td>
            <td>Mudd MPR</td>
            <td>Lotus/Vietnamese Hats</td>
          </tr>
          <tr>
            <td rowspan="3">Tuesday 9/28</td>
            <td>5 pm - 7 pm</td>
            <td>Mudd MPR</td>
            <td>Dai</td>
          </tr>
          <tr>
            <td>7 pm - 9 pm</td>
            <td>Mudd MPR</td>
            <td>Samulnori</td>
          </tr>
          <tr>
            <td>9 pm - 11 pm</td>
            <td>Mudd MPR</td>
            <td>Skit</td>
          </tr>
          <tr>
            <td rowspan="3">Wednesday 9/29</td>
            <td>5 pm - 7 pm</td>
            <td>Mudd MPR</td>
            <td>Tinikling</td>
          </tr>
          <tr>
            <td>7 pm - 9 pm</td>
            <td>Mudd MPR</td>
            <td>Yoyo</td>
          </tr>
          <tr>
            <td>9 pm - 11 pm</td>
            <td>Mudd MPR</td>
            <td>Chinese Fan</td>
          </tr>
          <tr>
            <td rowspan="3">Friday 10/1</td>
            <td>5 pm - 7 pm</td>
            <td>Mudd MPR</td>
            <td>Standing Drums</td>
          </tr>
          <tr>
            <td>7 pm - 9 pm</td>
            <td>Mudd MPR</td>
            <td>Fusion</td>
          </tr>
          <tr>
            <td>5 pm - 7 pm</td>
            <td>McMillan Cafe</td>
            <td>Lion</td>
          </tr>
        </Table>
      </>
    ),
  },
};

export default text;
