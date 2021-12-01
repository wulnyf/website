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
    jumbotronTop: "Lunar New Year Festival 2022",
    jumbotronMiddle: "Bold Strides",
    jumbotronBottom: undefined,
    jumbotronButtons: (
      <>
        <Link to="/events">
          <StyledButton white>Events</StyledButton>
        </Link>
        <a href="https://wustl.app.box.com/s/pz47cqqnfnmkmc3bxf0ulhhqacb4d7tx?page=20">
          <Button white>Banquet Photos</Button>
        </a>
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
    philanthropyTitle: "Haven of Grace",
    philanthropyText: (
      <>
        <Typography>
          "Serving women who are pregnant and homeless, The Haven of Grace
          provides a safe, nurturing home, educational programs and long-term
          support for mother and child. Founded in faith, we instill hope,
          dignity and the pride of independence, one family at a time."
        </Typography>
      </>
    ),
    philanthropyLink: "https://havenofgracestl.org/",
  },
  events: [
    {
      month: "Dec",
      day: "12",
      title: "Letter Writing",
      caption: "AMC Suite (Olin Women's Building) | 3:00 PM - 5:00 PM",
      description:
        "Drop by the AMC suite to write letters with us and drop off your donations for Haven of Grace",
    },
    {
      month: "Nov\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0Dec",
      day: "29-12",
      title: "LNYF x Haven of Grace x SWAP Donation Drive",
      caption: "AMC Suite (Olin Women's Building) / SWAP",
      description:
        "LNYF will be hosting drive for mothers and children at the Haven of Grace! These mothers are often coming into the Haven with just the clothes they are wearing so any and all donations are helpful. Good donations includ toys / stuffed animals, medium / large clothing items, tennis shoes, hygiene items for moms & babies, and letters / picture books / comics.",
    },
    {
      month: "Dec",
      day: "4",
      title: "Vitality Bowls Benefit Night",
      caption: "8029 Dale Ave. | 10:00 AM - 7:00 PM",
      description:
        "Vitality Bowls (8029 Dale Ave.) will donate 15% of sales to LNYF. Those who participate in the benefit night should mention that they are with WashU Lunar New Year Festival before placing their order. For online orders, mention in the notes that you are with LNYF.",
    },
    {
      month: "Nov",
      day: "7",
      title: "Mod Pizza Benefit Night",
      caption: "8855K Ladue Rd. or Online | 10:30 AM - 10:00 PM",
      description:
        "MOD Pizza (8855K Ladue Rd) will donate 20% of sales to LNYF. Those who participate in the benefit night should mention that they are with WashU Lunar New Year Festival before placing their order. For online orders, use coupon code “GR202365W.”",
    },
    {
      month: "Oct",
      day: "20",
      title: "Seoul Taco Benefit Night",
      caption: "Delmar Loop | 5:00 PM - 8:00 PM",
      description:
        "Seoul Taco Delmar will donate 15% of sales from orders over $12 to LNYF. Those who participate in the benefit night must mention they would like their order to beincluded in the benefit night prior to placing their order/submitting payment. For online orders, use coupon code “LNYF21”.",
    },
    {
      month: "Oct",
      day: "16",
      title: "Volunteer w/ Haven of Grace",
      caption: undefined,
      description:
        "Our philanthropy partner -- Haven of Grace -- is hosting a scavenger hunt and needs volunteers to help organize the event. Contact us if you're interested!",
    },
    {
      month: "Sep",
      day: "25-30",
      title: "Auditions",
      caption: "Mudd MPR",
      description: (
        <>
          Try out to become a performer at LNYF!{" "}
          <Link to="/auditios">Here</Link> is the link to the schedule
        </>
      ),
    },
    {
      month: "Sep",
      day: "16",
      title: "General Body Meeting",
      caption: "Ursa's Fireside | 7:00 PM - 8:30 PM",
      description:
        "Come out to the first general body meeting of the year! Learn more about LNYF, upcoming events, and how you can get involved.",
    },
  ],
  philanthropy: {
    2022: {
      image: "havenofgrace",
      title: "Haven of Grace",
      money: undefined,
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
        "Sophia Chow (Choreo)",
        "Amanda Taylor (Choreo)",
        "Jacqueline Au",
        "Brooke Bergman",
        "Isabel Lee",
        "Jessica Li",
        "Aditi Malay",
        "Emily Shen",
        "Nayana Vuppala",
        "Rachel Wang",
      ],
    },
    {
      title: "Fusion",
      image: "fusion",
      performers: [
        "Mary Le (Choreo)",
        "Christina Cai",
        "Grace Chen",
        "Jessica Huang",
        "Amelia Kung",
        "Carrie Lo",
        "Alice Na",
        "Vivian Nguyen",
        "Ethan Shen",
        "Bridget Sun",
        "Emily Xi",
        "Amy Xue",
        "Layow Yu",
        "Julie Zhang",
        "Selena Zhang",
      ],
    },
    {
      title: "Juggling",
      image: "juggling",
      performers: [
        "Eddie Quan (Choreo)",
        "Michael Lin (Choreo)",
        "Walker Sexton (Choreo)",
        "and the Juggling Club",
      ],
    },
    {
      title: "Samulnori",
      image: "samulnori",
      performers: [
        "Sungyi Cho (Choreo)",
        "Zach Zhao (Choreo)",
        "Alana Depaz (j)",
        "Ashley Lee (j)",
        "Linus Lee (j)",
        "Sebastian Lee (j)",
        "Sangwook Suh (j)",
        "Andrew Yu (j)",
        "Davina Zhou (j)",
        "Joy Choi (b)",
        "Hillary Fujimoto (b)",
        "Lauren Kang (b)",
        "Sarah Kim (b)",
        "Jay Won (b)",
        "Jane Zhang (b)",
        "Jaz Choi (jing)",
      ],
    },
    {
      title: "Skit",
      image: "skit",
      performers: [
        "Karinne Summers (Choreo)",
        "Adela Cho",
        "Arko Dhar",
        "Steve Li",
        "Christopher Wang",
      ],
    },
    {
      title: "Standing Drums",
      image: "standingdrums",
      performers: [
        "Dan Du (Choreo)",
        "Julie Chan",
        "Anne He",
        "Yoon Kim",
        "Grace Lai",
        "Sang-Mi Lee",
        "Alex Liu",
        "Mindy Liu",
        "Brian Sohn",
        "Chris Xu",
      ],
    },
    {
      title: "Yo Yo",
      image: "yoyo",
      performers: [
        "Ethan Shen (Choreo)",
        "Mikayla Bridges",
        "James Cevasco",
        "Grace (Yuetong) Chen",
        "Raymond Dai",
        "Mandy Freenstra",
        "Nick Ho",
        "Jihoon Kiel",
        "Emily Shen",
        "Ethan Tsao",
        "Benjamin Yi",
        "Eugenia Yoh",
        "Cadi Zhang",
      ],
    },
    {
      title: "Dai",
      image: "dai",
      performers: [
        "Anna Li (Choreo)",
        "Rachel Tian (Choreo)",
        "Madeline Huang",
        "Heyue Liu",
        "Jasmine Liu",
        "Ally Sun",
        "Amanda Taylor",
        "Isabella Xie",
        "Victoria Xu",
        "Amanda Zhu",
      ],
    },
    {
      title: "Lion",
      image: "lion",
      performers: [
        "Julie Chan (Choreo)",
        "Anh Le (Choreo)",
        "Lily Luu (h)",
        "Helen Ye (h)",
        "Wenting Yu (h)",
        "Jeff Che (t)",
        "Wesley Yin (t)",
        "Kayli Yip (t)",
        "Matthew Du (p)",
        "Kacey Yip (p)",
      ],
    },
    {
      title: "Lotus Hat Dance",
      image: "lotusvietnamese",
      performers: [
        "Lily Luu (Choreo)",
        "Grace Nelson (Choreo)",
        "Audrey Brown",
        "Kelsey Chen",
        "Tietchan Dang",
        "Sophia Dykstra",
        "Campbell Oh",
        "Vicki Truong",
        "Julie Wang",
        "Alexia Zheng",
      ],
    },
    {
      title: "Tinikling",
      image: "tinikling",
      performers: [
        "Julia Dai (Choreo)",
        "Akshat Sharma (Choreo)",
        "Kathy Zhou (Choreo)",
        "Noelle Casem (g)",
        "Guenevere Chang (g)",
        "Jiwon Choi (g)",
        "Paula Glaser (g)",
        "Kathryn Xu (g)",
        "Alicia Yang (g)",
        "Max Francisco (b)",
        "Brian Jwa (b)",
        "Jeevun Kansupada (b)",
        "Caleb Lee (b)",
        "James Na (b)",
        "Aaron Wang (b)",
        "William Yin (b)",
      ],
    },
  ],
  store: {
    caption: undefined,
    items: [
      {
        title: "Postcard",
        subtitle: "Design 1",
        images: [
          { image: "post-a-front", alt: "Postcard Design 1 Front Side" },
          { image: "post-a-mock", alt: "Postcard Design 1 Mockup" },
        ],
        subImages: undefined,
        price: "$1.50",
        soldOut: false,
      },
      {
        title: "Postcard",
        subtitle: "Design 2",
        images: [
          { image: "post-b-front", alt: "Postcard Design 2 Front Side" },
          { image: "post-b-mock", alt: "Postcard Design 2 Mockup" },
        ],
        subImages: undefined,
        price: "$1.50",
        soldOut: false,
      },
      {
        title: "Long Sleeve Shirt",
        subtitle: "(Only in person)",
        images: [
          { image: "long-back", alt: "Long Sleeve Back Side" },
          { image: "long-front", alt: "Long Sleeve Front Side" },
        ],
        subImages: undefined,
        price: "$22.00",
        soldOut: false,
      },
      {
        title: "Short Sleeve T-Shirt",
        subtitle: "(Only in person)",
        images: [
          { image: "short-back", alt: "Short Sleeve Back Side" },
          { image: "short-front", alt: "Short Sleeve Front Side" },
        ],
        subImages: undefined,
        price: "$15.00",
        soldOut: false,
      },
      // {
      //   title: "Shirt Bundle",
      //   images: [{ image: "shirt-bundle", alt: "Shirt Bundle" }],
      //   subImages: undefined,
      //   price: "$35.00",
      //   soldOut: false,
      // },
      {
        title: "Food Puns Sticker Sheet",
        images: [
          { image: "food", alt: "Food Stickers" },
          { image: "food_sheet", alt: "Food Stickers Sheet" },
          { image: "food_dimsum", alt: "Dimsum Sticker" },
          { image: "food_mochi", alt: "Mochi Sticker" },
          { image: "food_pho", alt: "Pho Sticker" },
          { image: "food_boba", alt: "Boba Sticker" },
          { image: "food_takoyaki", alt: "Takoyaki Sticker" },
        ],
        subImages: undefined,
        price: "$7.00",
        soldOut: false,
      },
      // {
      //   title: "Mystery Box",
      //   subtitle: "(5 Stickers in a Red Envelope)",
      //   images: [{ image: "mystery", alt: "Mystery Stickers" }],
      //   subImages: undefined,
      //   price: "$10.00",
      //   soldOut: false,
      // },
      {
        title: "Performance Stickers",
        images: [{ image: "animals", alt: "Performance Stickers" }],
        subtitle: "(Click to see more!)",
        subImages: [
          { image: "fusion", name: "Fusion Sticker" },
          { image: "cfan", name: "Cfan Sticker" },
          { image: "hula", name: "Hula Sticker" },
          { image: "juggling", name: "Juggling Sticker" },
          { image: "kfan", name: "Kfan Sticker" },
          { image: "lion", name: "Lion Sticker" },
          { image: "lotus", name: "Lotus Sticker" },
          { image: "skit", name: "Skit Sticker" },
          { image: "standing", name: "Standing Drums Sticker" },
          { image: "martial_arts", name: "Martial Arts Sticker" },
          { image: "samulnori", name: "Samulnori Sticker" },
          { image: "swords", name: "Swords Sticker" },
          { image: "tinikling", name: "Tinikling Sticker" },
          { image: "yoyo", name: "Yo Yo Sticker" },
        ],
        price: "$2.00/ea",
        soldOut: false,
      },
      {
        title: "Zodiac Stickers",
        images: [{ image: "zodiac", alt: "Zodiac Stickers" }],
        subtitle: "(Click to see more!)",
        subImages: [
          { image: "zodiac_cat", name: "Cat Sticker" },
          { image: "zodiac_dog", name: "Dog Sticker" },
          { image: "zodiac_dragon", name: "Dragon Sticker" },
          { image: "zodiac_goat", name: "Goat Sticker" },
          { image: "zodiac_horse", name: "Horse Sticker" },
          { image: "zodiac_monkey", name: "Monkey Sticker" },
          { image: "zodiac_ox", name: "Ox Sticker" },
          { image: "zodiac_pig", name: "Pig Sticker" },
          { image: "zodiac_rabbit", name: "Rabbit Sticker" },
          { image: "zodiac_rat", name: "Rat Sticker" },
          { image: "zodiac_rooster", name: "Rooster Sticker" },
          { image: "zodiac_snake", name: "Snake Sticker" },
          { image: "zodiac_tiger", name: "Tiger Sticker" },
        ],
        price: "$1.00/ea",
        soldOut: false,
      },
      {
        title: "LNYF Sticker",
        subtitle: '(2"x2")',
        images: [
          { image: "lnyf-first", alt: "LNYF Sticker Yellow Background" },
          { image: "sticker_lnyf", alt: "LNYF Sticker Grey Background" },
        ],
        subImages: undefined,
        price: "$1.00",
        soldOut: false,
      },
      // {
      //   title: "Unwavering Sticker",
      //   subtitle: '(2"x2")',
      //   images: [
      //     { image: "ox-first", alt: "Unwavering Sticker Orange Background" },
      //     { image: "sticker_ox", alt: "Unwavering Sticker Grey Background" },
      //   ],
      //   subImages: undefined,
      //   price: "$2.00",
      //   soldOut: false,
      // },
      // {
      //   title: "LNYF Sticker Bundle",
      //   images: [
      //     { image: "stickers-bundle", alt: "LNYF Sticker Bundle" },
      //     { image: "stickers-mockup", alt: "LNYF Sticker Bundle Mockup" },
      //   ],
      //   subImages: undefined,
      //   price: "$3.00",
      //   soldOut: false,
      // },
    ],
  },
  people: {
    bod: [
      {
        image: "jessicahuang",
        name: "Jessica Huang",
        position: "Executive Director",
        major: "Global Health & Environment / Biology",
        zodiac: "Dragon",
        favTreat: "Anything matcha or tea flavored :)",
      },
      {
        image: "allysun",
        name: "Ally Sun",
        position: "Executive Director",
        major: "Healthcare Management",
        zodiac: "Rabbit",
        favTreat: "Bread from Asian Bakeries",
      },
      {
        image: "kathrynxu",
        name: "Kathryn Xu",
        position: "Director of Communications",
        major: "Biology",
        zodiac: "Dragon",
        favTreat: "Choco Pie",
      },
      {
        image: "madelinehuang",
        name: "Madeline Huang",
        position: "Director of Development",
        major: "Marketing / Finance",
        zodiac: "Dragon",
        favTreat: "Bingfen",
      },
      {
        image: "maryle",
        name: "Mary Le",
        position: "Director of Performance",
        major: "Linguistics",
        zodiac: "Snake",
        favTreat: "Moon Cakes and Good Tea",
      },
    ],
    comm: [
      {
        image: "selenazhang",
        name: "Selena Zhang",
        position: "Art Director",
        major: "Communication Design",
        zodiac: "Dragon",
        favTreat: "Black Sesame Tang Yuan",
      },
      {
        image: "emilyxi",
        name: "Emily Xi",
        position: "Art Director",
        major: "Communication Design / Marketing",
        zodiac: "Rabit-tail-dragon-head",
        favTreat: "Sesame Tang Yuan",
      },
      {
        image: "eugeniayoh",
        name: "Eugenia Yoh",
        position: "Multimedia Director",
        major: "Communication Design",
        zodiac: "Tiger",
        favTreat: "Strawberry Pocky",
      },
      {
        image: "zacharyyoung",
        name: "Zach Young",
        position: "Secretary/Webmaster",
        major: "Computer Science",
        zodiac: "Dragon",
        favTreat: "Nian gao",
      },
      {
        image: "racheltian",
        name: "Rachel Tian",
        position: "PR Chair",
        major: "Communication Design",
        zodiac: "Horse",
        favTreat: "Anything matcha slaps",
      },
      {
        image: "layowyu",
        name: "Layow Yu",
        position: "PR Chair",
        major: "Biochemistry / French",
        zodiac: "Snake",
        favTreat: "Noodles and Egg Tarts",
      },
    ],
    dev: [
      {
        image: "juliewang",
        name: "Julie Wang",
        position: "Corporate Sponsorship Chair",
        major: "Marketing",
        zodiac: "Rabbit",
        favTreat: "Matcha-flavored White Rabbit Candy",
      },
      {
        image: "alicena",
        name: "Alice Na",
        position: "Philanthropy Chair",
        major: "Anthropology",
        zodiac: "Rabbit",
        favTreat: "Honey Rice Cake",
      },
      {
        image: "wesleyyin",
        name: "Wesley Yin",
        position: "Fundraising Chair",
        major: "Computer Science",
        zodiac: "Snake",
        favTreat: "Moon Cakes",
      },
      {
        image: "bridgetsun",
        name: "Bridget Sun",
        position: "Corporate Sponsorship Chair",
        major: "Marketing",
        zodiac: "Snake",
        favTreat: "Sticky Rice Cake",
      },
      {
        image: "sophiachen",
        name: "Sophia Chen",
        position: "Fundraising Chair",
        major: "Biology",
        zodiac: "Dragon",
        favTreat: "Egg Tarts",
      },
      {
        image: "chrisxu",
        name: "Chris Xu",
        position: "Treasurer",
        major: "Economics",
        zodiac: "Snake",
        favTreat: "Egg Tart",
      },
    ],
    perf: [
      {
        image: "jinapark",
        name: "Jina Park",
        position: "Technical Chair",
        major: "Cognitive Neuroscience",
        zodiac: "Dragon",
        favTreat: "Hi-chew",
      },
      {
        image: "ethanshen",
        name: "Ethan Shen",
        position: "Choreo Chair",
        major: "Biology",
        zodiac: "Rabbit",
        favTreat: "Lychee Jelly",
      },
      {
        image: "christinacai",
        name: "Christina Cai",
        position: "Choreo Chair",
        major: "Business and Computer Science",
        zodiac: "snake",
        favTreat: "Mango Sticky Rice",
      },
      {
        image: "gracechen",
        name: "Grace Chen",
        position: "Special Operations Chair",
        major: "Mechanical Engineering",
        zodiac: "Horse",
        favTreat: "Nian Gao",
      },
    ],
  },
  gallery: {
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
