import { Artisan } from "./types";

export const artisans: Artisan[] = [
  {
    id: "1",
    name: "Lakshmi",
    location: "Rajasthan, India",
    story: "Lakshmi has been weaving jute baskets for over 20 years, learning the craft from her mother. She leads a group of women in her village, creating sustainable home goods using local materials.",
    image: "/lovable-uploads/93ae01c4-bfbf-4a7a-a660-c2c70c5620ae.png"
  },
  {
    id: "2",
    name: "Meena",
    location: "Gujarat, India",
    story: "Specializing in hand-block printing, Meena creates beautiful textiles using techniques passed down for generations. Her work helps preserve traditional crafts while supporting her family.",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Sunita",
    location: "Tamil Nadu, India",
    story: "A master potter, Sunita creates functional and decorative clay pieces using locally sourced materials. Her work combines traditional techniques with contemporary designs.",
    image: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Priya",
    location: "Karnataka, India",
    story: "Priya specializes in wood carving, creating beautiful kitchen utensils from reclaimed wood. Her work helps reduce waste while creating functional art for the home.",
    image: "/placeholder.svg"
  }
];

export const getArtisanById = (id: string): Artisan | undefined => {
  return artisans.find(artisan => artisan.id === id);
};

export const getArtisanByName = (name: string): Artisan | undefined => {
  return artisans.find(artisan => artisan.name === name);
};
