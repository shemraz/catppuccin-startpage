// latte / frappe / macchiato / mocha
const palette = latte;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Oxford",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.lavender,
  },
  disabled: [],
  fastlink: "",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "",
      background_url: "src/img/banners/cbg-02.gif",
      categories: [
        {
          name: "faves",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "claude",
              url: "https://claude.ai/chats",
              icon: "message-chatbot",
              icon_color: palette.peach,
            },
            {
              name: "scoop",
              url: "https://scoop.sh/",
              icon: "ice-cream-2",
              icon_color: palette.yellow,
            },
          ],
        },
      ],
    },
  ]
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
