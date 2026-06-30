// PROJECTS DATA
// To add a new project later: copy one of the objects below, edit the fields,
// and add it to the array. The page will render it automatically —
// no HTML or CSS editing needed.
//
// Fields:
//   title        - project name
//   year         - e.g. "2025–26"
//   team         - e.g. "Team of 4" or "Pair"
//   role         - your specific role/contribution
//   tools        - array of tools/skills used, shown as tags
//   tagline      - one-line summary (shown on the card before expanding)
//   description  - 2-4 sentences of detail
//   image        - path to an image, e.g. "images/fridge-pad.jpg"
//                  (leave as "" to show a placeholder)
//   link         - optional external link (e.g. GitHub, video demo)

const PROJECTS = [
  {
    title: "Fridge Pad",
    year: "2025–26",
    team: "Team of 4",
    role: "Hardware & app integration",
    tools: ["Sensors", "App Design", "Prototyping", "User Research"],
    tagline: "A smart pad and companion app that helps reduce food spoilage in shared kitchens.",
    description: "Designed and built a sensor-equipped fridge pad paired with a companion app, aimed at reducing food spoilage in university accommodation kitchens. The system tracks food and nudges users on what needs using up, addressing a problem common to shared student kitchens.",
    image: "",
    link: ""
  },
  {
    title: "ESP32 Sensor Safe",
    year: "2025–26",
    team: "Pair",
    role: "Electronics & firmware",
    tools: ["ESP32", "Electronics", "Embedded C++", "Sensor Integration"],
    tagline: "A safe secured by multiple electrical sensor and input-based unlock methods.",
    description: "Built a physical safe secured by several distinct unlock methods, each driven by different electrical sensors and inputs, all coordinated through an ESP32 microcontroller. The project explored combining multiple authentication methods within a single embedded system.",
    image: "",
    link: ""
  }
];
