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
    jumbotronTop: "Lunar New Year Festival 2023",
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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
        </Typography>
      </>
    ),
    philanthropyTitle: "Caring for Kids",
    philanthropyText: (
      <>
        <Typography>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
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
