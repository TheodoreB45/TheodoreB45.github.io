// PROJECTS DATA
// To add a new project later:
//   1. Copy one of the objects below and edit the fields.
//   2. Add it to the PROJECTS array.
//   3. Copy projects/template.html to projects/your-slug.html and edit
//      the text inside (see comments in that file).
// The homepage cards render automatically from this file — no HTML/CSS
// editing needed there.
//
// Fields:
//   slug         - short id used in the URL, e.g. "fridge-pad"
//                  -> page will be at projects/fridge-pad.html
//   title        - project name
//   year         - e.g. "2025–26"
//   team         - e.g. "Team of 4" or "Pair"
//   role         - your specific role/contribution
//   tools        - array of tools/skills used, shown as tags
//   tagline      - one-line summary (shown on the card)
//   image        - path to the card's main image, e.g. "images/fridge-pad.jpg"
//                  (leave as "" to show a placeholder)

const PROJECTS = [
  {
    slug: "fridge-pad",
    title: "Fridge Pad",
    year: "2025–26",
    team: "Team of 4",
    role: "Hardware & app integration",
    tools: ["Sensors", "App Design", "Prototyping", "User Research"],
    tagline: "A smart pad and companion app that helps reduce food spoilage in shared kitchens.",
    image: "images/fridge-space.png"
  },
  {
    slug: "esp32-safe",
    title: "ESP32 Sensor Safe",
    year: "2025–26",
    team: "Pair",
    role: "Electronics & firmware",
    tools: ["ESP32", "Electronics", "Embedded C++", "Sensor Integration"],
    tagline: "A safe secured by multiple electrical sensor and input-based unlock methods.",
    image: "images/smart-safe.jpg"
  }
];
