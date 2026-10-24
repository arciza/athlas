export type TravelIcon =
  | "turtle"
  | "surf"
  | "wind"
  | "waterfall"
  | "volcano"
  | "forest"
  | "crater"
  | "wildlife"
  | "palm"
  | "fish";

export type TravelLocation = {
  id: string;
  name: { es: string; en: string };
  lat: number;
  lon: number;
  label: "left" | "right" | "top" | "bottom";
  icon: TravelIcon;
  photos: readonly string[];
  nudge?: { x: number; y: number };
};

const surfPhotos = [
  "/media/travel/surfing.jpg",
  "/media/travel/surf-boards.jpg",
  "/media/travel/surf-lesson.jpg",
  "/media/travel/surf-practice.jpg",
] as const;

const verdiazulPhotos = [
  "/media/travel/turtle-briefing.jpg",
  "/media/travel/beach-line.jpg",
  "/media/travel/verdiazul-bin.jpg",
  "/media/travel/verdiazul-fruit.jpg",
] as const;

export const travelLocations: TravelLocation[] = [
  {
    id: "junquillal",
    name: { es: "Junquillal, Santa Cruz", en: "Junquillal, Santa Cruz" },
    lat: 10.146,
    lon: -85.772,
    label: "left",
    icon: "turtle",
    photos: verdiazulPhotos,
    nudge: { x: 10, y: 22 },
  },
  {
    id: "tamarindo",
    name: { es: "Tamarindo, Guanacaste", en: "Tamarindo, Guanacaste" },
    lat: 10.299,
    lon: -85.837,
    label: "left",
    icon: "surf",
    photos: surfPhotos,
    nudge: { x: -22, y: -18 },
  },
  {
    id: "tilaran",
    name: { es: "Tilarán, Guanacaste", en: "Tilarán, Guanacaste" },
    lat: 10.473,
    lon: -84.967,
    label: "left",
    icon: "wind",
    photos: [],
    nudge: { x: -22, y: 0 },
  },
  {
    id: "rio-celeste",
    name: { es: "Río Celeste", en: "Río Celeste" },
    lat: 10.705,
    lon: -84.995,
    label: "right",
    icon: "waterfall",
    photos: [],
    nudge: { x: -6, y: -18 },
  },
  {
    id: "la-fortuna",
    name: { es: "La Fortuna, Guanacaste", en: "La Fortuna, Guanacaste" },
    lat: 10.471,
    lon: -84.645,
    label: "right",
    icon: "volcano",
    photos: [],
    nudge: { x: 20, y: -4 },
  },
  {
    id: "monteverde",
    name: { es: "Monteverde", en: "Monteverde" },
    lat: 10.319,
    lon: -84.825,
    label: "right",
    icon: "forest",
    photos: [],
    nudge: { x: 0, y: 20 },
  },
  {
    id: "irazu",
    name: { es: "Volcán Irazú, Cartago", en: "Irazú Volcano, Cartago" },
    lat: 9.979,
    lon: -83.852,
    label: "right",
    icon: "crater",
    photos: [],
  },
  {
    id: "manuel-antonio",
    name: { es: "Manuel Antonio, Puntarenas", en: "Manuel Antonio, Puntarenas" },
    lat: 9.39,
    lon: -84.137,
    label: "left",
    icon: "wildlife",
    photos: [],
    nudge: { x: -8, y: -6 },
  },
  {
    id: "nauyaca",
    name: { es: "Nauyaca", en: "Nauyaca" },
    lat: 9.261,
    lon: -83.802,
    label: "right",
    icon: "waterfall",
    photos: [],
    nudge: { x: 12, y: 8 },
  },
  {
    id: "tortuguero",
    name: { es: "Tortuguero, Limón", en: "Tortuguero, Limón" },
    lat: 10.541,
    lon: -83.504,
    label: "right",
    icon: "turtle",
    photos: [],
  },
  {
    id: "puerto-viejo",
    name: { es: "Puerto Viejo, Limón", en: "Puerto Viejo, Limón" },
    lat: 9.656,
    lon: -82.758,
    label: "right",
    icon: "palm",
    photos: [],
  },
  {
    id: "golfo-dulce",
    name: { es: "Golfo Dulce", en: "Golfo Dulce" },
    lat: 8.63,
    lon: -83.28,
    label: "left",
    icon: "fish",
    photos: [],
  },
];
