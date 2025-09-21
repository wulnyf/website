import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Typography from "./components/Typography";

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
    store2: "https://docs.google.com/forms/d/e/1FAIpQLScCqjMIVtSPz-8_1roqnXly6q6xMPj0dJ_kQCcw_wQlGOX5uw/viewform?usp=dialog",
    //store: "https://docs.google.com/forms/d/e/1FAIpQLScHw56q-6mb2jUH9Wx5KhdkTjk4KWjdP0uwR0uTIa_9DWlXIw/viewform",
  },
  index: {
    jumbotronTop: "Lunar New Year Festival 2026",
    jumbotronMiddle: "Boundless\nHorizons",
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
    philanthropyTitle: "EarthDance",
    philanthropyText: (
      <>
        <Typography>
          LNYF is proud to partner with EarthDance as its philanthropy for the Year of the Horse.
        </Typography>

        <Typography style={{ "font-weight": "bold" }}> About the Philanthropy: </Typography>

        <Typography>
          Based in Ferguson, Missouri, EarthDance operates on the oldest organic farm west of the Mississippi and is nationally recognized for its hands-on, justice-focused approach to farming education. By reconnecting people to the land and one another, EarthDance teaches community members of all ages where their food comes from and how to grow it themselves, fostering deeper relationships with both food and community.
        </Typography>
        <Typography>
          EarthDance makes fresh, locally grown produce accessible through a Pay-What-You-Can model at their Farm Stand and Ferguson Farmers Market booth, partnerships with local food pantries and grocers, and affordable gardening education. With about 60% of their customers living in North St. Louis County—an area facing historic and ongoing barriers to healthy food access—their sliding-scale systems ensure that nourishment is treated as a right, not a privilege, in service of a more regenerative, inclusive future.
        </Typography>


      </>
    ),
    philanthropyLink: "https://earthdancefarms.org/",
  },
  events: [
    // {
    //   month: "Aug",
    //   day: "29",
    //   title: "Activities Fair",
    //   caption: "3-5 PM @ Mudd Field",
    //   description:
    //     "Come find the LNYF booth and sign up to be on our mailing list!",
    // },
    // {
    //   month: "Aug",
    //   day: "31",
    //   title: "Choreo Apps",
    //   caption: "Due 11:59 pm",
    //   description:
    //     "Apply to choreograph a dance in the upcoming 2026 show!",
    //   link: "https://docs.google.com/document/d/1fPwDiHwoEnvHn7a3U0Pa0dJshJN13q4eGg8ZCsJtBxc/edit?tab=t.0",
    // },
    {
      month: "Sept",
      day: "7",
      title: "General Body Meeting",
      caption: "TBA Time @ Ursa's",
      description:
        "Come join our first GBM to find out more about how we celebrate Lunar New Year through performance, fundraising, and other events!",
    },
    {
      month: "Sept",
      day: "12",
      title: "LNYF @ AMC's Mid-Autumn Festival",
      caption: "3-5 PM @ Ursa's",
      description:
        "Come to the LNYF Booth to play games and learn more about LNYF!",
    },
    {
      month: "Sept",
      day: "8-12",
      title: "Act Workshops",
      caption: "More info on the LNYF's Instagram!",
      description:
        "Explore different LNYF 2026 Acts!",
    },
    {
      month: "Sept",
      day: "13-14",
      title: "Auditions",
      caption: "More info on the Auditions Page and LNYF's Instagram!",
      description:
        "Try out to become a performer at LNYF 2026!",
    },
    {
      month: "Sept",
      day: "15-19",
      title: "Make-Up Auditions",
      caption: "More info on the Auditions Page and LNYF's Instagram!",
      description:
        "In case you missed it, or for a second chance!",
    }, 
    {
      month: "Sept",
      day: "24",
      title: "KBOP Fundraiser",
      caption: "6-8PM @ BD",
      description:
        "Help us raise money for our philanthropy!",
    }, 
    {
      month: "Sept",
      day: "25",
      title: "KBOP Fundraiser",
      caption: "11AM-2PM @ DUC",
      description:
        "Help us raise money for our philanthropy!",
    }, 
    // {
    //   month: "Nov",
    //   day: "9",
    //   title: "Performer Banquet",
    //   caption: "6-8 PM @ Umrath Lounge",
    //   description:
    //     "Join your fellow performers for a night of fun activities and delicious food!",
    // },
    // {
    //   month: "Nov",
    //   day: "11",
    //   title: "Philanth. MedQ Event",
    //   caption: "6 PM @ Seigle 303",
    //   description:
    //     "Join us for SQSH's MEDQ Philanthropy Event to learn more about the LGBTQ+ community in healthcare!",
    // },
    // {
    //   month: "Jan",
    //   day: "25",
    //   title: "AMC Fireworks",
    //   caption: "7 pm",
    //   description:
    //     "Watch beautiful fireworks and a variety of dances at our collaboration event with Asian Multicultural Council!",
    // },
    // {
    //   month: "Jan",
    //   day: "31",
    //   title: "LNYF Show 1",
    //   caption: "7 pm",
    //   description:
    //     "Come watch our show. Find more info on our instagram!",
    // },
    // {
    //   month: "Feb",
    //   day: "1",
    //   title: "LNYF Shows 2 & 3",
    //   caption: "2 & 7 pm",
    //   description:
    //     "Come watch our show. Find more info on our instagram!",
    // }
    // {
    //   month: "April",
    //   day: "24",
    //   title: "Choreo Info Session Panel",
    //   caption: "7-8 PM @ DUC 234",
    //   description:
    //     "Come to learn more!",
    // },
  ],
  philanthropy: {
    2026: {
      image: "earthdance",
      title: "EarthDance",
      money: undefined,
      description:
        'EarthDance is a non-profit organization that operates on the oldest organic farm west of the Mississippi and is nationally recognized for its hands-on, justice-focused approach to farming education. By reconnecting people to the land and one another, EarthDance teaches community members of all ages where their food comes from and how to grow it themselves, fostering deeper relationships with both food and community.',
      link: "https://earthdancefarms.org/",
    },
    2025: {
      image: "SQSH",
      title: "St. Louis Queer SUpport &amp Healing",
      money: undefined,
      description:
        'SQSH’s mission is to strengthen the St. Louis queer community by building collective skills for peer support, active listening, and navigating conflict. It operates a telephone support line five days a week, builds deep connections within the local community, and partners with civil rights organizations to advocate for LGBTQIA+ needs. SQSH aims to create alternative models, strategies, and practices that moves the LGBTQIA+ community closer to collective liberation.',
      link: "https://www.thesqsh.org/",
    },
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
      title: "Contemporary Chinese Fan",
      image: "ccfan",
      performers: [
        "Rachel Wei (choreo)", "Jennifer Li (choreo)", "Alex Liu", "Catherine Zhao", "Eilene Liu", "Helen Ma", "Jessica Hu", "Julia Li", "Kathleen Weng", "Lisa Ji", "Maggie Cheng", "Ran Duan"
      ],
    },
    {
      title: "Chinese Umbrella",
      image: "umbrella",
      performers: [
        "Emily Shen (choreo)", "Ching Ching Zhang (choreo)", "Amelia Kung", "Andria Luo", "Annie Zhao", "Celina Liu", "Claire Ku", "Gioia Wang", "Kiki Sakano", "Kylee Kest", "Theresa Xuan Nguyen", "Veronica Hsu"
      ],
    },
    {
      title: "Fashion Show",
      image: "fashionshow",
      performers: [
        "Kelly Gan (choreo)", "Bao Nguyen (choreo)", "Nikki Nguyen (choreo)", "Angel Truong", "Dung Tran", "Hailey Kim", "Hannah Chen", "Jacky Ta", "Jana Yan", "Jessica Chen", "Joye Zheng", "Madeleine Yeung", "Phi Chanda", "Sophie Lin", "William Li"
      ],
    },
    {
      title: "Juggling",
      image: "juggling",
      performers: [
        "Daniel Chen (choreo)", "Jeremy Cho (choreo)", "Grant Kaplan (choreo)", "Logan Sumitani", "Justin Xu", "Lizzie Wagner", "Mandar Brahmbhatt", "Sandro Xiao", "Synoma Perea"
      ],
    },
    {
      title: "Korean Fan",
      image: "kfan",
      performers: [
        "Sarah Cao (choreo)", "Kalea Lee (choreo)", "Vicky Cadena (choreo)", "Audrey Tsai", "Eric Montufar-Morales", "Frank Jiang", "Jamie Shin", "Jessica Lee", "Kaitlyn Wang", "Min Suh Kwak", "Miranda Lee"
      ],
    },
    {
      title: "Lion",
      image: "lion",
      performers: [
        "Birdie Lee (H) (choreo)",
        "Justin Lan (T) (choreo)",
        "Edward Hao (H)",
        "Kelly Gan (H)",
        "Wenting Yu (H)",
        "Matthew Du (T)",
        "Richard Yang (T)",
        "William Yin (T)",
        "Kevin Si (P)",
        "Lance Yeh (P)"
      ],
    },
    {
      title: "Lotus",
      image: "lotusvietnamese",
      performers: [
        "Vicki Truong (choreo)", "Theresa Xuan Nguyen (choreo)", "Abby Tang", "Bao Nguyen", "Cassie Phan", "Emma Shen", "Kim Nguyen", "Nhi Ly", "Sydney Kim", "Sydney Kuo", "Tiffany Chan"
      ],
    },
    {
      title: "Samulnori",
      image: "samulnori",
      performers: [
        "Emily So (choreo)", "Sebastian Lee (choreo)", "Alex Zhang", "Alyssa Kim", "Andy Mun", "Chelsea Chun", "Elaine Yoo", "Emily Shen", "Jane Zhang", "Jasmine Li", "Jeremy Lin", "Juneseo Lee", "Nevin Song", "Sol Bae", "Steven Tao", "Yoon Shin"
      ],
    },
    {
      title: "Standing Drums",
      image: "standingdrums",
      performers: [
        "Alex Liu (choreo)", "Harry Gao (choreo)", "Birdie Lee", "Daniel Yoo", "Dexter Chen", "Elysia Quah", "Iris Yang", "Justin Yu", "Lia Seo", "Richard Li"
      ],
    },
    {
      title: "Taekwondo",
      image: "taekwondo",
      performers: [
        "Julie Baguio (choreo)", "Priyanka Deka (choreo)", "Sayf Fadil (choreo)", "Daniel Oh", "James Law", "Jason Ng", "Jonathan Leung", "Michael Nguyen", "Nathan Zhou", "Sarah Cai"
      ],
    },
    {
      title: "Tinikling",
      image: "tinikling",
      performers: [
        "Jane Liang (choreo)", "Paula Glaser (choreo)", "Ricky Wang (choreo)", "Alexandria Flojo", "Amanda Young", "Cece Idinopulos", "Claudine Noel", "Julie Baguio", "Noelle Casem", "Sophie Leong", "Aaron Wang", "Darian Liu", "Eric Liu", "John Glaser", "Max Francisco", "Noah Sagum", "Ronak Chandiwala"
      ],
    },
    {
      title: "Vietnamese Fan",
      image: "vfan",
      performers: [
        "Tietchan Dang (choreo)", "Vivian Nguyen (choreo)", "Charlotte Chen", "Emily Hao", "Nikki Nguyen", "Sarah You", "Tiffany Ly", "Vy Nguyen"
      ],
    },
    {
      title: "Watersleeves",
      image: "watersleeves",
      performers: [
        "Celina Liu (choreo)", "Andria Luo (choreo)", "Caleb Lee", "Cynthia Chen", "Cynthia Zhi", "Ella Jang", "Esther Wang", "Jocelyn Liao", "Vicki Truong"
      ],
    },
    {
      title: "Yoyo",
      image: "yoyo",
      performers: [
        "Emily Shen (choreo)", "Demi Zhuang (choreo)", "Nevin Song (choreo)", "Brandon Lin", "David Zhu", "Ivy Huang", "Madison Wang", "Megan Guo", "Peter Chang", "Reina Xu", "Ryan Lin", "Sharon Shen", "Thomas Lang"
      ],
    },
  ],
  store: {
    // "The store is closed temporarily. Please check back soon. Apologies for any inconvenience.""
    // "Welcome to the LNYF Store!",
    //caption: "The store is closed temporarily. Please check back soon. Apologies for any inconvenience.",
    items: [
      /*{
        title: "COMING SOON",
        images: [
          { image: "coming-soon", alt: "Coming Soon" },
        ],
        subImages: undefined,
        price: "0.00",
        soldOut: false,
      },*/
      {
        title: "Long Sleeve Shirt",
        images: [
          { image: "shirt-boys", alt: "Long Sleeve" },
          { image: "shirt-girls", alt: "Long Sleeve" },
          { image: "shirt-tote-girls", alt: "Long Sleeve" },
        ],
        subImages: undefined,
        price: "$26.00",
        soldOut: false,
      },
      {
        title: "Tote Bag",
        images: [
          { image: "tote-bag", alt: "LNYF Tote" },
          { image: "tote-bag-1", alt: "LNYF Tote" },
          { image: "tote-bag-girls", alt: "LNYF Tote" },
          { image: "tote-bag-boys", alt: "LNYF Tote" },
        ],
        subImages: undefined,
        price: "$17.00",
        soldOut: false,
      },
      // {
      //   title: "Sweatpants",
      //   images: [
      //     { image: "pants-pic", alt: "Sweatpants" },
      //     { image: "pants-pic-2", alt: "Sweatpants" },
      //   ],
      //   subImages: undefined,
      //   price: "$45.00",
      //   soldOut: true,
      // },
      {
        title: "Snake Pin",
        images: [
          { image: "pins", alt: "Pin" },
          { image: "pins-1", alt: "Pin" },
          { image: "pins-2", alt: "Pin" },
        ],
        subImages: undefined,
        price: "$7.00",
        soldOut: false,
      },
      {
        title: "Short Sleeve T-Shirt",
        images: [
          { image: "t-shirt-1", alt: "Short Sleeve" },
          { image: "t-shirt-2", alt: "Short Sleeve" },
          { image: "t-shirt-3", alt: "Short Sleeve" },
        ],
        subImages: undefined,
        price: "$14.00",
        soldOut: false,
      },
      {
        title: "Coffee Mug",
        images: [
          { image: "mug-main", alt: "Mug" },
          { image: "mug-slides", alt: "Mug" },
        ],
        subImages: undefined,
        price: "$14.00",
        soldOut: false,
      },
    ],
  },
  people: {
    bod: [
      {
        image: "sarahcao",
        name: "Sarah Cao",
        position: "Executive Director",
        major: "Philosophy-Neuroscience-Psychology",
        zodiac: "GOAT",
        facts: "LNYF is a celebration of my heritage that always reminds me to be proud of my upbringing. It's also a constant reminder of the amazing community and people I'm surrounded by! ",
      },
      {
        image: "emilyso",
        name: "Emily So",
        position: "Executive Director",
        major: "Philosophy-Neuroscience-Psychology",
        zodiac: "Monkey",
        facts: "My college experience ❤️ ",
      },
      {
        image: "cecely",
        name: "Cece Ly",
        position: "Director of Communications",
        major: "Organization and Strategic Management & Marketing",
        zodiac: "Monkey",
        facts: "It means a community of people who work together towards a common goal of spreading culture through performances and celebration. It’s a community that when I first saw it on stage was one that radiated a level of comfort and excitement in wanting to be part of something like it. To me, it also means opportunities and chances to meet new people, learn new things, and push beyond my limits. ",
      },
      {
        image: "alexzhang",
        name: "Alex Zhang",
        position: "Director of Development",
        major: "Biology: Neuroscience",
        zodiac: "Monkey",
        facts: "LNYF is home away from home where I can form memories and friends that I will cherish for a long time.",
      },
      {
        image: "nikkinguyen",
        name: "Nikki Nguyen",
        position: "Director of Performance",
        major: "Political Science and Educational Studies",
        zodiac: "Rooster",
        facts: "LNYF is a great supportive community where I can express my Asian heritage!",
      },
    ],
    comm: [
      {
        image: "carolinezhuang",
        name: "Caroline Zhuang",
        position: "Art Director",
        major: "Neuroscience",
        zodiac: "Rooster",
        facts: "Watching LNYF has always been my favorite part of the school year! I think it's a great way to find community and I'm super excited to be a part of planning this year!",
      },
      {
        image: "charliewang",
        name: "Charlie Wang",
        position: "Art Director",
        major: "Communication Design",
        zodiac: "Dog",
        facts: "A reflection of cultural heritage and pride.",
      },
      {
        image: "madisonwang",
        name: "Madison Wang",
        position: "Multimedia Director",
        major: "Communication Design",
        zodiac: "Monkey",
        facts: "Lovely Night Yummy Friends",
      },
      {
        image: "justinlan",
        name: "Justin Lan",
        position: "Multimedia Director",
        major: "Biology",
        zodiac: "Monkey",
        facts: "The most welcoming and talented group of people that works so so hard to put on an amazing show both on the stage and behind the scenes.",
      },
      {
        image: "jaxonpoentis",
        name: "Jaxon Poentis",
        position: "Multimedia Director",
        major: "Computer Science + Math",
        zodiac: "Rooster",
        facts: "LNYF brings together passionate, like-minded individuals to showcase their talents in a vibrant celebration of Asian culture!",
      },
      {
        image: "andrialuo",
        name: "Andria Luo",
        position: "PR Chair",
        major: "Computer Science, Bioinformatics & Psychology minors",
        zodiac: "Monkey",
        facts: "Lovely people and a lovely time :) LNYF is a wonderful, supportive community and I love being able to celebrate one of my favorite holidays with everyone.",
      },
      {
        image: "estherperez",
        name: "Esther Perez",
        position: "PR Chair",
        major: "Marketing & Communication Design, PNP minor",
        zodiac: "Rooster",
        facts: "A community where you can explore who you are without having to hold yourself back.",
      },
      {
        image: "sophieleong",
        name: "Sophie Leong",
        position: "Graphic Design Chair",
        major: "Communication Design",
        zodiac: "Monkey",
        facts: "LNYF is Lunar New Year Festival to me :P (it also means the place where I found some of my closest friends and learned so many life lessons in college!)",
      },
      {
        image: "johnpaulpineda",
        name: "John Paul (JP) Pineda",
        position: "Webmaster",
        major: "Computer Science + Math",
        zodiac: "Monkey",
        facts: "Being part of a passionate and fun community that showcases a variety of Asian culture!",
      },
    ],
    dev: [
      {
        image: "sarahyou",
        name: "Sarah You",
        position: "Philanthropy Chair",
        major: "Architecture",
        zodiac: "Rooster caw cawwww",
        facts: "LNYF provides an opportunity to connect with community members through showcasing East and Southeast Asian culture!",
      },
      {
        image: "alexflojo",
        name: "Alex Flojo",
        position: "Fundraising Chair",
        major: "Architecture",
        zodiac: "Monkey",
        facts: "lovely people, lovely dancing, lovely memories made and to be made!",
      },
      {
        image: "cynthiazhi",
        name: "Cynthia Zhi",
        position: "Fundraising Chair",
        major: "Computational Biology",
        zodiac: "Rooster",
        facts: "LNYF is a wonderful community of passionate individuals who I get to celebrate one of my favorite holidays with! ",
      },
      {
        image: "phichanda",
        name: "Phi Chanda",
        position: "Fundraising Chair",
        major: "Political Sciencce",
        zodiac: "Dog",
        facts: "Where countries with centuries of beef can share dressing rooms and even a stage!",
      },
      {
        image: "kellygan",
        name: "Kelly Gan",
        position: "Corporate Sponsorship Chair",
        major: "Biology, Anthropology minor",
        zodiac: "Rooster",
        facts: "LNYF is a chance for a strong community of minorities to support each other and other minorities; it's a beautiful experience to be uplifting others through more than just performance.",
      },
      {
        image: "randuan",
        name: "Ran Duan",
        position: "Corporate Sponsorship Chair",
        major: "Computer Science, Statistics",
        zodiac: "Goat",
        facts: "LNYF is about coming together as a community to celebrate the traditions that make our cultures so rich and beautiful.",
      },
      {
        image: "lisaji",
        name: "Lisa Ji",
        position: "Corporate Sponsorship Chair",
        major: "Biology: Neuroscience",
        zodiac: "Goat",
        facts: "EVERYTHING. I'm so grateful to have met my best friends here and be a part of the community that celebrate my cultural heritage.",
      },
      {
        image: "hayoungcho",
        name: "Katie Cho",
        position: "Treasurer",
        major: "Data Science",
        zodiac: "Monkey",
        facts: "The community!",
      },
      {
        image: "alstonliu",
        name: "Alston Liu",
        position: "Treasurer",
        major: "Computer Engineering",
        zodiac: "Rooster",
        facts: "LNYF means to me that I can experience Lunar New Year away from family and experience how other cultures celebrate it!",
      },
      {
        image: "willli",
        name: "William Li",
        position: "Treasurer",
        major: "Computer Engineering",
        zodiac: "Rooster",
        facts: "Good Vibes and Good Times!",
      },
    ],
    perf: [
      {
        image: "davidzhu",
        name: "David Zhu",
        position: "Choreo Chair",
        major: "Computational Biology",
        zodiac: "Monkey",
        facts: "LNYF to me is an opportunity to see a bunch of passionate and talented people come together to create something that's meaningful and celebrates their heritage.",
      },
      {
        image: "nevinsong",
        name: "Nevin Song",
        position: "Choreo Chair",
        major: "Biomedical Engineering",
        zodiac: "Monkey",
        facts: "LNYF means being with friends to showcase our culture together through amazing performances!",
      },
      {
        image: "charlottechen",
        name: "Charlotte Chen",
        position: "Technical Chair",
        major: "Biomedical Engineering and Architecture",
        zodiac: "Sheep",
        facts: "To me, LNYF is a vibrant celebration of cultural pride, tradition, and unity within the Asian community and beyond. It serves as a platform to share stories, heritage, and creativity with a wider audience through performance and collective effort. More than just a festival, LNYF nurtures a deep sense of belonging, strengthens community connections, and creates opportunities for people of all backgrounds to engage with and appreciate diverse cultural traditions.",
      },
      {
        image: "reinaxu",
        name: "Reina Xu",
        position: "Special Operations Chair",
        major: "Biology",
        zodiac: "Monkey",
        facts: "A great community of performers and friends :D",
      },
      {
        image: "vynguyen",
        name: "Vy Nguyen",
        position: "External Performance Chair",
        major: "Anthropology",
        zodiac: "Goat",
        facts: "A community where we all work together to create a lovely show that celebrates different East and Southeast Asian cultures!",
      },
    ],
  },
  gallery: {
    2025: {
      photos: [
        { image: "lion_one", caption: "Lion" },
        { image: "umbrella_one", caption: "Chinese Umbrella" },
        { image: "cfan_one", caption: "Contemporary Chinese Fan" },
        { image: "fashion_one", caption: "Fashion Show" },
        { image: "tinikling_one", caption: "Tinikling" },
        { image: "juggling_one", caption: "Juggling" },
        { image: "lotus_one", caption: "Lotus" },
        { image: "lotus_two", caption: "Lotus" },
        { image: "tkd_one", caption: "Taekwondo" },
        { image: "samulnori_one", caption: "Samulnori" },
        { image: "yoyo_one", caption: "Yoyo" },
        { image: "watersleeves_one", caption: "Watersleeves" },
        { image: "vfan_one", caption: "Vietnamese Fan" },
        { image: "standing_one", caption: "Standing Drums" },
        { image: "kfan_one", caption: "Korean Fan" },
        { image: "liontinikling_one", caption: "Lion x Tinikling" },
        { image: "senior_dance_one", caption: "Senior Dance" },
        { image: "senior_dance_two", caption: "Senior Dance" },
        { image: "senior_dance_three", caption: "Senior Dance" },
        { image: "curtain_one", caption: "Curtain Call" },
        { image: "curtain_two", caption: "Curtain Call" },
        { image: "curtain_three", caption: "Curtain Call" },
        { image: "lion_two", caption: "Lion" },
        { image: "tinikling_two", caption: "Tinikling" },
        { image: "juggling_two", caption: "Juggling" },
        { image: "watersleeves_two", caption: "Watersleeves" },
        { image: "umbrella_two", caption: "Chinese Umbrella" },
        { image: "cfan_two", caption: "Contemporary Chinese Fan" },
        { image: "samulnori_two", caption: "Samulnori" },
        { image: "tkd_two", caption: "Taekwondo" },
        { image: "tinikling_three", caption: "Tinikling" },
        { image: "liotinikling_two", caption: "Lion x Tinikling" },
        { image: "kfan_two", caption: "Korean Fan" },
        { image: "yoyo_two", caption: "Yoyo" },
        { image: "fashion_two", caption: "Fashion Show" },
        { image: "vfan_two", caption: "Vietnamese Fan" },
      ],
      videos: [
        { link: "https://www.youtube.com/embed/8KHaVBibACc?si=Yg_2WtACB1olexp5", },
        { link: "https://www.youtube.com/embed/0axC0Em2vBw?si=3yhcyYfqtE-vUSSl", },,
        { link: "https://www.youtube.com/embed/_wUiM3PPsRk?si=MTgAIcM99vX-u-Qp", },
        { link: "https://www.youtube.com/embed/4EehtboydO0?si=DCdUDHIKke9QOOeP", },
        { link: "https://www.youtube.com/embed/XSRRL8DjPug?si=U3cXGWHNGHAL8ftl", },
        { link: "https://www.youtube.com/embed/3fK6njKZ4EI?si=STVVdHy_McXpc0OQ", },
        { link: "https://www.youtube.com/embed/0S1HyRSgk_4?si=GDiGZ-6qu6tZGAqh", },
        { link: "https://www.youtube.com/embed/jf_Mof-htv0?si=T5Dm4wxVtp6hRYZB", },
        { link: "https://www.youtube.com/embed/cOOzKbRMA0o?si=l6FeAsqXY0SBvJHN8", },
        { link: "https://www.youtube.com/embed/P4kDCthv-mc?si=Ia-IuP-irZkU5xh5", },
        { link: "https://www.youtube.com/embed/c96zml7hqAs?si=6dV7kRYUPenGe0Lv", },
        { link: "https://www.youtube.com/embed/gVW4jcByNJM?si=lbG36QZAGEHSmOj3", },
        { link: "https://www.youtube.com/embed/kt_KLZefG-k?si=uqCWXbMDo-GODXir", },
        { link: "https://www.youtube.com/embed/w3cReIJ-dLk?si=KkiJhZD052GJQAC7", },
        { link: "https://www.youtube.com/embed/2TzkLv2lbEc?si=f_c8LgHrjvz9JuVv", },
        { link: "https://www.youtube.com/embed/b4R0ESYKPZU?si=29ZKBgzob14QgmkA", },
        { link: "https://www.youtube.com/embed/CHiAof1-900?si=wBTxR-GsPlWqxbWp", },
      ],
    },
    2024: {
      photos: [
        { image: "2024_lion", caption: "Lion Dance" },
        { image: "2024_dai", caption: "Dai" },
        { image: "2024_standing", caption: "Standing Drums" },
        { image: "2024_chinese_contemp", caption: "chinese_contemp" },
        { image: "2024_fashionshow", caption: "fashion_show" },
        { image: "2024_juggling", caption: "juggling" },
        { image: "2024_kfan", caption: "kfan" },
        { image: "2024_lotus", caption: "lotus" },
        { image: "2024_samulnori", caption: "samulnori" },
        { image: "2024_senior", caption: "senior_dance" },
        { image: "2024_taekwondo", caption: "taekwondo" },
        { image: "2024_tinikling", caption: "tinikling" },
        { image: "2024_watersleeves", caption: "watersleeves" },
        { image: "2024_yoyo", caption: "yoyo" },
        { image: "backstage_one", caption: "backstage_one" },
        { image: "backstage_two", caption: "backstage_two" },
        { image: "curtain-call", caption: "curtain-call" },
        { image: "chinese_contemp", caption: "chinese_contemp" },
        { image: "dai", caption: "dai" },
        { image: "kfan", caption: "kfan" },
        { image: "lion", caption: "lion" },
        { image: "lotus", caption: "lotus" },
        { image: "senior-dance", caption: "senior-dance" },
        { image: "sensasions", caption: "sensasions" },
        { image: "standing", caption: "standing" },
        { image: "taekwondo", caption: "taekwondo" },
        { image: "taekwondo_one", caption: "taekwondo_one" },
        { image: "tinikles_girls", caption: "tinikles_girls" },
        { image: "tinikling_end", caption: "tinikling_end" },
        { image: "watersleeves", caption: "watersleeves" },
        { image: "yoyo", caption: "yoyo" },
      ],
      videos: [
        { link: "https://www.youtube.com/embed/Kw91dbtjtEc?si=fMv-HQsciqZWvCTw", },
        { link: "https://www.youtube.com/embed/Mm4hct7hbJk?si=6GBychD59p9n96KX", },
        { link: "https://www.youtube.com/embed/Ol1HRSY6Vw0?si=LgtLTuPUSHHA0Ra2", },
        { link: "https://www.youtube.com/embed/8v1Uq4HlSqs?si=iK5zx6jyuKXDPxGv", },
        { link: "https://www.youtube.com/embed/Lf94GmRdHkI?si=r5A1XbszXAC3JXeB", },
        { link: "https://www.youtube.com/embed/uii1T0CZiDM?si=yk7Xwo7Y9VUFEdqi", },
        { link: "https://www.youtube.com/embed/1R7FMHiNlCs?si=j-mT6lwUB9EyJDzv", },
        { link: "https://www.youtube.com/embed/LEcB1Zf1K-0?si=kg0UvPCIOwZMrwE9", },
        { link: "https://www.youtube.com/embed/bnGW3G-DiT8?si=Mwdx9sQP3h-9tJtN", },
        { link: "https://www.youtube.com/embed/sw5Tr0V0mTw?si=BRQQSKVx-W7AFFCV", },
        { link: "https://www.youtube.com/embed/asftPbpUkcM?si=lxxjNFVXP2CsTwpA", },
        { link: "https://www.youtube.com/embed/xani_y29DUs?si=Igd29xBYkosGvRC5", },
        { link: "https://www.youtube.com/embed/QK9Y_1UU11E?si=M7HpCg0W5BwTcqTW", },
        { link: "https://www.youtube.com/embed/tOXkPKdFj5I?si=xsY3CQhV9qSh-hfy", },
        { link: "https://www.youtube.com/embed/CG5wx44Zt5A?si=MhKcGzlsun1CU8r8", },
        { link: "https://www.youtube.com/embed/VkmbbAuj1a0?si=kQ7Ty70F4n142ZsN", },
        { link: "https://www.youtube.com/embed/k-Z31jzyWcI?si=kj4D8TOE5ksJa13V", },
      ],
    },
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
    active: false,
    content: (
      <>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSef97k_fA8FsUM8l63CSOiV2jQECn65NckuCTybw1MRFO-69g/viewform?usp=sf_link">
          <AuditionButton>Liability Waiver</AuditionButton>
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScPyvY2naMK4-hb6rudJg0zBNUJeqvgvVd0hHshQrRxAL03dg/viewform?usp=sf_link">
          <AuditionButton>Attendance Form</AuditionButton>
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDLnYR7A67esGHGjW5TjIcSJICxdtdzQjp09wrYPoXpOxd9g/viewform">
          <AuditionButton>Auditions Form</AuditionButton>
        </a>
        <StyledHeader variant="h6">Auditions</StyledHeader>
        <Table>
          <tr>
            <th style={{ width: '150px' }}>Date</th>
            <th style={{ width: '110px' }}>Time</th>
            <th style={{ width: '110px' }}>Location</th>
            <th style={{ width: '150px' }}>Act</th>
          </tr>
          <tr>
            <td rowspan="7">Saturday 9/14</td>
            <td>10AM - 12PM</td>
            <td>Olin 1</td>
            <td>Vietnamese Fan</td>
          </tr>
          <tr>
            <td>12PM - 2PM</td>
            <td>Olin 1</td>
            <td>Watersleeves</td>
          </tr>
          <tr>
            <td>2PM - 4PM</td>
            <td>Olin 2</td>
            <td>Korean Fan</td>
          </tr>
          <tr>
            <td>4PM - 6PM</td>
            <td>Olin 2</td>
            <td>Umbrella</td>
          </tr>
          <tr>
            <td>6PM - 8PM</td>
            <td>Olin 1</td>
            <td>Lotus</td>
          </tr>
          <tr>
            <td>8PM - 10PM</td>
            <td>Olin 1</td>
            <td>Contemp C-Fan</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>Olin 1</td>
            <td>Fashion Show</td>
          </tr>
          <tr>
            <td rowspan="7">Sunday 9/15</td>
            <td>10AM - 12PM</td>
            <td>Malli 303/305</td>
            <td>Samulnori</td>
          </tr>
          <tr>
            <td>12PM - 2PM</td>
            <td>McMillan Cafe</td>
            <td>Standing Drums</td>
          </tr>
          <tr>
            <td>2PM - 4PM</td>
            <td>McMillan Cafe</td>
            <td>Lion</td>
          </tr>
          <tr>
            <td>4PM - 6PM</td>
            <td>McMillan Cafe</td>
            <td>Tae Kwon Do</td>
          </tr>
          <tr>
            <td>6PM - 8PM</td>
            <td>McMillan Cafe</td>
            <td>Tinikling</td>
          </tr>
          <tr>
            <td>8PM - 10PM</td>
            <td>McMillan Cafe</td>
            <td>Juggling</td>
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
            <th style={{ width: '150px' }}>Date</th>
            <th style={{ width: '110px' }}>Time</th>
            <th style={{ width: '110px' }}>Location</th>
            <th style={{ width: '150px' }}>Act</th>
          </tr>
          <tr>
            <td rowspan="3">Monday 9/16</td>
            <td>6PM - 8PM</td>
            <td>Mudd MPR</td>
            <td>Fashion Show</td>
          </tr>
          <tr>
            <td>8PM - 10AM</td>
            <td>Mudd MPR</td>
            <td>Contemp C-Fan</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>Mudd MPR</td>
            <td>Tae Kwon Do</td>
          </tr>
          <tr>
            <td rowspan="4">Tuesday 9/17</td>
            <td>6PM - 8PM</td>
            <td>McMillan Cafe</td>
            <td>Juggling</td>
          </tr>
          <tr>
            <td>8PM - 10PM</td>
            <td>McMillan Cafe</td>
            <td>Tinikling</td>
          </tr>
          <tr>
            <td>8PM - 10PM</td>
            <td>Olin 2</td>
            <td>Lotus</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>Olin 1</td>
            <td>Vietnamese Fan</td>
          </tr>
          <tr>
            <td rowspan="4">Wednesday 9/18</td>
            <td>6PM - 8PM</td>
            <td>Mudd MPR</td>
            <td>Umbrella</td>
          </tr>
          <tr>
            <td>8PM - 10PM</td>
            <td>Mudd MPR</td>
            <td>Yoyo</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>Mudd MPR</td>
            <td>K-Fan</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>McMillan Cafe</td>
            <td>Standing Drum</td>
          </tr>
          <tr>
            <td rowspan="3">Thursday 9/19</td>
            <td>8PM - 10PM</td>
            <td>Malli 302/303</td>
            <td>Samulnori</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>McMillan Cafe</td>
            <td>Lion</td>
          </tr>
          <tr>
            <td>10PM - 12AM</td>
            <td>Mudd MPR</td>
            <td>Watersleeves</td>
          </tr>
          <tr>
            <td>Friday 9/20</td>
            <td>6PM - 8PM</td>
            <td>Olin 2</td>
            <td>Lion (Callbacks)</td>
          </tr>
        </Table>
      </>
    ),
  },
};

export default text;
