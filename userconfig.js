// latte / frappe / macchiato / mocha
const palette = latte;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Oxford",
    scale: "C"
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
      background_url: "src/img/banners/cbg-09.gif",
      categories: [
        {
          name: "faves",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: palette.lavender,
            },
            {
              name: "claude",
              url: "https://claude.ai/chats",
              icon: "message-chatbot",
              icon_color: palette.lavender,
            },
            {
              name: "scoop",
              url: "https://scoop.sh/",
              icon: "ice-cream-2",
              icon_color: palette.lavender,
            },
            {
              name: "youtube",
              url: "https://youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.lavender,
            },
            {
              name: "catppuccin",
              url: "http://catppuccin.com/",
              icon: "cat",
              icon_color: palette.lavender
            }
          ]
        },
        {
          name: "study",
          links: [
            {
              name: "archive.org",
              url: "https://archive.org/",
              icon: "archive",
              icon_color: palette.lavender
            },
            {
              name: "Bodleian SOLO",
              url: "https://solo.bodleian.ox.ac.uk/discovery/search?vid=44OXF_INST:SOLO&lang=en",
              icon: "book",
              icon_color: palette.lavender
            },
            {
              name: "Oxford Self-Service",
              url: "https://www.ox.ac.uk/students/selfservice",
              icon: "user-circle",
              icon_color: palette.lavender
            }
          ]
        },
        {
          name: "docs",
          links: [
            {
              name: "Helix",
              url: "https://docs.helix-editor.com/",
              icon: "file-code",
              icon_color: palette.lavender
            },
            {
              name: "Julia",
              url: "https://docs.julialang.org/en/v1/",
              icon: "code",
              icon_color: palette.lavender
            },
            {
              name: "Nushell",
              url: "https://www.nushell.sh/",
              icon: "terminal",
              icon_color: palette.lavender
            },
            {
              name: "Typst",
              url: "https://typst.app/docs/",
              icon: "file-text",
              icon_color: palette.lavender
            },
            {
              name: "Yazi",
              url: "https://yazi-rs.github.io/",
              icon: "folder",
              icon_color: palette.lavender
            }
          ]
        }
      ]
    }
  ]
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
