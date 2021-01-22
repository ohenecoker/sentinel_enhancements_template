import { writable } from "svelte/store";
export const data = [
  {
    header: "Editorial",
    links: ["True self-care"],
  },
  {
    header: "Keeping watch",
    links: [
      `"God with me" was my prayer`,
      "How do I know God loves me?",
      `"I'm not going there"`,
    ],
  },
  {
    header: "Teens",
    links: ["When my boss asked me to lie", `Poetry You are compassionate,`],
  },
  {
    header: "Healings",
    links: [
      "Healed of breathing problem",
      `Back injury quickly healed`,
      "Confrontation ends peacefully",
    ],
  },
  {
    header: "Bible Lens",
    links: ["Life"],
  },
  {
    header: "",
    links: ["Letters & Conversations"],
  },
];

export const categorizedData = [
  {
    header: "Editorial",
    title: "Reaching beyond resistance",
    byLine: "Tony Lobl",
  },
  {
    header: "Article",
    title: `“God with me” was my prayer`,
    byLine: "Susan Tish",
  },
  {
    header: "Article",
    title: `How do I know God loves me?`,
    byLine: "Tressie Armstrong",
  },
  { header: "Bible Lens", title: `Life`, byLine: "" },
  {
    header: "Article",
    title: `“I’m not going there”`,
    byLine: "Sandi Justad",
  },
  {
    header: "TeenConnect",
    title: `When my boss asked me to lie`,
    byLine: "Name Withheld",
  },
  {
    header: "Poem",
    title: `You are compassionate, Lord`,
    byLine: "Miguel De Castro",
  },
  {
    header: "Testimony of Healing",
    title: `Healed of breathing problem`,
    byLine: "Shelly Richardson",
  },
  {
    header: "Testimony of Healing",
    title: `Back injury quickly healed`,
    byLine: "Susan Dawson Cook",
  },
  {
    header: "Testimony of Healing",
    title: `Confrontation ends peacefully`,
    byLine: "Jeremy Campbell with contributions from Anita Campbell",
  },
  {
    header: "Letters",
    title: `Letters & Conversation`,
    byLine: "Rachel Hanson, Kaye Cover, Dona Musgrave, The Editors",
  },
];

export const simplified = [
  {
    header: "Editorial",
    content: [{ title: "Reaching beyond resistance", byLine: "Tony Lobl" }],
  },
  {
    header: "Keeping Watch",
    content: [
      {
        title: `Our unobstructed purpose in God’s kingdom`,
        byLine: "Annu Matthai",
      },
      {
        title: `Isn’t healing just a coincidence?`,
        byLine: "Elaina Simpson",
      },
      {
        title: `A prayer for unity`,
        byLine: "Eric M. Nager",
      },
      {
        title: `Gathering together in Church without boundaries`,
        byLine: "Mark Swinney",
      },
    ],
  },
  {
    header: "Image and inspiration",
    content: [
      {
        title: `In hope that sends...`,
        byLine: "Consuela Allen Sand",
      },
    ],
  },
  {
    header: "Healings",
    content: [
      {
        title: `Visa process smoothed through prayer`,
        byLine: "Nitya Thomas",
      },
      {
        title: `Desire to know God leads to knee healing`,
        byLine: "Robert Storm",
      },
      {
        title: `Embracing humanity in our prayer heals`,
        byLine: "Dorothy Estes",
      },
    ],
  },
  {
    header: "Kids",
    content: [
      {
        title: "Let’s go on an adventure",
        byLine: "Virginia Anders",
      },
    ],
  },
  {
    header: "Bible Lens",
    content: [
      { title: "Truth", byLine: "" },
      { title: "Love", byLine: "" },
    ],
  },
  {
    header: "Letters",
    content: [
      {
        title: "Letters & Conversation",
        byLine: "",
      },
    ],
  },
];
