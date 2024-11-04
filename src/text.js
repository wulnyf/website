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
  },
  index: {
    jumbotronTop: "Lunar New Year Festival 2025",
    jumbotronMiddle: "Interwoven",
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
    philanthropyTitle: "SQSH",
    philanthropyText: (
      <>
        <Typography>
          LNYF is proud to partner with St. Louis Queer Support & Healing (SQSH) as its philanthropy for the Year of the Snake.
        </Typography>

        <Typography style={{ "font-weight": "bold" }}> About the Philanthropy: </Typography>

        <Typography>
          A group of dedicated queer St. Louisans founded SQSH on June 1, 2019, after a community needs assessment demonstrated that the St. Louis LGBTQIA+ community faces increased rates of violence, discrimination, substance use, and insecurity in employment and housing; disparities in medical, mental, and sexual health; and barriers to accessing the identity-affirming resources needed to meet those needs.
        </Typography>
        <Typography>
          SQSH’s mission is to strengthen the St. Louis queer community by building collective skills for peer support, active listening, and navigating conflict. It operates a telephone support line five days a week, builds deep connections within the local community, and partners with civil rights organizations to advocate for LGBTQIA+ needs. SQSH aims to create alternative models, strategies, and practices that moves the LGBTQIA+ community closer to collective liberation.
        </Typography>


      </>
    ),
    philanthropyLink: "https://www.thesqsh.org/",
  },
  events: [
    /*{
      month: "Aug",
      day: "30",
      title: "Activities Fair",
      caption: "3-5 PM @ Mudd Field",
      description:
        "Come find the LNYF booth and sign up to be on our mailing list!",
    },
    {
      month: "Aug",
      day: "31",
      title: "Choreo Apps",
      caption: "Due 11:59 pm",
      description:
        "Apply to choreograph a dance in the upcoming 2025 show!",
    }, 
    {
      month: "Sep",
      day: "8",
      title: "General Body Meeting",
      caption: "3 PM @ Ursa's",
      description:
        "Come join our first GBM to find out more about how we celebrate Lunar New Year through performance, fundraising, and other events!",
    },*/
    // {
    //   month: "Sep",
    //   day: "15",
    //   title: "LNYF @ AMC's Mid-Autumn Festival",
    //   caption: "3-5 PM @ Ursa's",
    //   description:
    //     "Come to the LNYF Booth to play games and learn more about LNYF!",
    // },
    /*{
      month: "Sep",
      day: "14-15",
      title: "Auditions",
      caption: "More info on the Auditions Page and LNYF's Instagram!",
      description:
        "Try out to become a performer at LNYF 2025!",
    },
    {
      month: "Sep",
      day: "16-20",
      title: "Make-Up Auditions",
      caption: "More info on the Auditions Page and LNYF's Instagram!",
      description:
        "In case you missed it, or for a second chance!",
    }, */
    {
      month: "Nov",
      day: "9",
      title: "Performer Banquet",
      caption: "6-8 PM @ Umrath Lounge",
      description:
        "Join your fellow performers for a night of fun activities and delicious food!",
    },
    {
      month: "Nov",
      day: "11",
      title: "Philanth. MedQ Event",
      caption: "6 PM @ Seigle 303",
      description:
        "Join us for SQSH's MEDQ Philanthropy Event to learn more about the LGBTQ+ community in healthcare!",
    },
    {
      month: "Jan",
      day: "31",
      title: "LNYF Show 1",
      caption: "7 pm",
      description:
        "Come watch our show! Find more info on our instagram!",
    },
    {
      month: "Feb",
      day: "1",
      title: "LNYF Shows 2 & 3",
      caption: "2 & 7 pm",
      description:
        "Come watch our show! Find more info on our instagram!",
    }
    // {
    //   month: "April",
    //   day: "21",
    //   title: "Choreo Info Session Panel",
    //   caption: "2-3 PM @ DUC 233",
    //   description:
    //     "Come to learn more!",
    // },

  ],
  philanthropy: {
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
      title: "Chinese Contemporary Fan",
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
    caption:
      "Welcome to the LNYF Store!",
    items: [
      {
        title: "COMING SOON",
        images: [
          { image: "coming-soon", alt: "Coming Soon" },
        ],
        subImages: undefined,
        price: "0.00",
        soldOut: false,
      },
      /*{
        title: "Long Sleeve Shirt",
        images: [
          { image: "shirt-pic", alt: "Long Sleeve" },
          { image: "shirt-pic-2", alt: "Long Sleeve" },
        ],
        subImages: undefined,
        price: "$27.00",
        soldOut: true,
      },
      {
        title: "Tote Bag",
        images: [
          { image: "tote-pic", alt: "LNYF Tote" },
          { image: "tote-pic-2", alt: "LNYF Tote" },
        ],
        subImages: undefined,
        price: "$18.00",
        soldOut: true,
      },
      {
        title: "Sweatpants",
        images: [
          { image: "pants-pic", alt: "Sweatpants" },
          { image: "pants-pic-2", alt: "Sweatpants" },
        ],
        subImages: undefined,
        price: "$45.00",
        soldOut: true,
      },
      {
        title: "Keychain",
        images: [
          { image: "keychain-pic", alt: "Keychain" },
        ],
        subImages: undefined,
        price: "$5.00",
        soldOut: true,
      },*/
    ],
  },
  people: {
    bod: [
      {
        image: "maxfrancisco",
        name: "Max Francisco",
        position: "Executive Director",
        major: "Communication Design and Business of the Arts",
        zodiac: "Horse",
        facts: "LNYF is a celebration of a really diverse range of East Asian and Southeast Asian cultures and traditions, and it’s always exciting to see it bring all kinds of people together!",
      },
      {
        image: "emilyshen",
        name: "Emily Shen",
        position: "Executive Director",
        major: "Biomedical Engineering with Computer Science Minor",
        zodiac: "Goat",
        facts: "LNYFamily <3, amazing community of talented performers, choreographers, and leaders who are passionate about celebrating and sharing East/Southeast Asian culture!",
      },
      {
        image: "sophieleong",
        name: "Sophie Leong",
        position: "Director of Communications",
        major: "Communication Design & Marketing",
        zodiac: "Monkey",
        facts: "LNYF definitely means family hehe. Being a part of Tinikling during my first-year gave me amazing people to rely on and learn from during my first few months at college!! ",
      },
      {
        image: "sarahcao",
        name: "Sarah Cao",
        position: "Director of Development",
        major: "PNP with Biology Minor",
        zodiac: "Goat",
        facts: "LNYF means having a community to celebrate Asian culture during a very important holiday!",
      },
      {
        image: "vickitruong",
        name: "Vicki Trương",
        position: "Director of Performance",
        major: "Biology with Psychology and EALC Minors",
        zodiac: "Goat",
        facts: "LNYFAMILY (I love being able to share my culture to to others hehe)",
      },
    ],
    comm: [
      {
        image: "matthewdu",
        name: "Matthew Du",
        position: "Art Director",
        major: "Biochemistry with HCI Minor",
        zodiac: "Goat",
        facts: "Kindest and most supportive community of talented performers always pushing each other to grow and improve!",
      },
      {
        image: "emilyhao",
        name: "Emily Hao",
        position: "Art Director",
        major: "Math & Econ, Computer Science Majors with Design Minor",
        zodiac: "Goat",
        facts: "Enjoying lovely performances and admiring my friends' hard work!!!",
      },
      {
        image: "minjungsong",
        name: "Minjung Song",
        position: "Multimedia Director",
        major: "Communication Design with HCI Minor",
        zodiac: "Horse",
        facts: "A moment to share, connect, and explore",
      },
      {
        image: "madisonwang",
        name: "Madison Wang",
        position: "Multimedia Director",
        major: "Communication Design with CS and HCI Minors",
        zodiac: "Monkey",
        facts: "A community of hardworking people coming together to create an amazing show! Lovely Nice Young Fellows",
      },
      {
        image: "rachelwei",
        name: "Rachel Wei",
        position: "PR Chair",
        major: "PNP, Medical Humanitites and EALC",
        zodiac: "Monkey",
        facts: "LNYF provided a community where I could learn more about my and others' cultures, and an opportunity to continue participating in performing arts in college.",
      },
      {
        image: "cecely",
        name: "Cece Ly",
        position: "PR Chair",
        major: "Organization and Strategic Management and Marketing",
        zodiac: "Monkey",
        facts: "It means a community of driven individuals coming together to a singular goal of spreading Asian culture all for a good cause.",
      },
      {
        image: "janeliang",
        name: "Jane Liang",
        position: "Webmaster",
        major: "Biomedical Engineering with Computer Science Minor",
        zodiac: "Goat",
        facts: "It is community of some of my best friends, and it is celebration of the asian cultures bringing in the new year.",
      },
    ],
    dev: [
      {
        image: "sophielin",
        name: "Sophie Lin",
        position: "Philanthropy Chair",
        major: "Global Studies major with Writing & CS minors",
        zodiac: "Monkey",
        facts: "LNYF is a place to express my Asian cultural identity and build community!",
      },
      {
        image: "jacepark",
        name: "Jace Park",
        position: "Fundraising Chair",
        major: "Biomedical Engineering Major with Psychology Minor",
        zodiac: "Goat",
        facts: "LNYF is where my past and present meet – LNYF helps to keep my memories of Asian culture alive, and allows me to express parts of my culture through performances.",
      },
      {
        image: "logansumitani",
        name: "Logan Sumitani",
        position: "Fundraising Chair",
        major: "Undecided",
        zodiac: "Rooster",
        facts: "LNYF is a place for people to learn a little about Asian culture.",
      },
      {
        image: "frankjiang",
        name: "Frank Jiang",
        position: "Corporate Sponsorship Chair",
        major: "Psychology, Economics and Strategy, with CS Minor",
        zodiac: "Horse",
        facts: "LNYF has been an  opportunity for me to support my friends in their performing arts endeavors, meet new people and develop myself professionally, and also some fun while we're at it ^-^",
      },
      {
        image: "alexzhang",
        name: "Alex Zhang",
        position: "Corporate Sponsorship Chair",
        major: "Biology with Psychology Minor",
        zodiac: "Monkey",
        facts: "For me, LNYF is a chance to support my friends who are performing, and also an opportunity to learn about different Asian cultures while introducing new friends to these traditions as well.",
      },
      {
        image: "emilyso",
        name: "Emily So",
        position: "Treasurer",
        major: "PNP and Legal Studies and Anthropology Global Health and Environment Minor",
        zodiac: "Monkey",
        facts: "A place of comfort and family",
      },
      {
        image: "cynthiazhi",
        name: "Cynthia Zhi",
        position: "Treasurer",
        major: "Neuroscience",
        zodiac: "Rooster",
        facts: "A wonderful community to celebrate a culturally important holiday with! ",
      },
    ],
    perf: [
      {
        image: "tietchandang",
        name: "Tietchan Dang",
        position: "Choreo Chair",
        major: "Psychology and Math",
        zodiac: "Goat",
        facts: "A place to find family that are all as passionate about culture, performance, and helping the St. Louis area",
      },
      {
        image: "andrialuo",
        name: "Andria Luo",
        position: "Choreo Chair",
        major: "Computer Science with Bioinformatics Minor",
        zodiac: "Monkey",
        facts: "Lovely people and a lovely time! It's so much fun getting to learn about different cultures as well as share my own culture with others – all while celebrating one of my favorite holidays!",
      },
      {
        image: "charlottechen",
        name: "Charlotte Chen",
        position: "Technical Chair",
        major: "Biomedical Engineering and Architecture",
        zodiac: "Goat",
        facts: "To me, LNYF is a celebration of culture and tradition and where we get to share this rich cultural heritage with the community around us.",
      },
      {
        image: "birdielee",
        name: "Birdie Lee",
        position: "Special Operations Chair",
        major: "Mechanical Engineering",
        zodiac: "Goat",
        facts: "To me, LNYF holds a lot of cultural and familial significance. Being a part of LNYF at WashU, and celebrating it in such a big way, fills me with both pride and happiness. The people and communities I've become part of through this organization have become my WashU family. ",
      },
    ],
  },
  gallery: {
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
    active: true,
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
