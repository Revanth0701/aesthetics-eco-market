import { Product, Category } from "./types";
import tableRunnerImg from "@/assets/product-table-runner.jpg";
import clayPlanterImg from "@/assets/product-clay-planter.jpg";
import woodenSpoonsImg from "@/assets/product-wooden-spoons.jpg";
import beadedNecklaceImg from "@/assets/product-beaded-necklace.jpg";
import cushionCoverImg from "@/assets/product-cushion-cover.jpg";
import wallHangingImg from "@/assets/product-wall-hanging.jpg";
import juteBasketsSet from "@/assets/jute-baskets-set.png.asset.json";
import madhubaniImg from "@/assets/product-madhubani.jpg";
import brassDiyaImg from "@/assets/product-brass-diya.jpg";
import pashminaImg from "@/assets/product-pashmina.jpg";
import sandalwoodElephantImg from "@/assets/product-sandalwood-elephant.jpg";
import kanthaThrowImg from "@/assets/product-kantha-throw.jpg";
import channapatnaToyImg from "@/assets/product-channapatna-toy.jpg";
import bluePotteryImg from "@/assets/product-blue-pottery.jpg";
import banarasiScarfImg from "@/assets/product-banarasi-scarf.jpg";
import dhokraHorseImg from "@/assets/product-dhokra-horse.jpg";
import warliPaintingImg from "@/assets/product-warli-painting.jpg";
import walnutBoxImg from "@/assets/product-walnut-box.jpg";
import terracottaChimeImg from "@/assets/product-terracotta-chime.jpg";
import phulkariImg from "@/assets/product-phulkari.jpg";
import marbleCoastersImg from "@/assets/product-marble-coasters.jpg";
import bidriBowlImg from "@/assets/product-bidri-bowl.jpg";
import bandhaniImg from "@/assets/product-bandhani.jpg";
import coconutBowlsImg from "@/assets/product-coconut-bowls.jpg";
import blockQuiltImg from "@/assets/product-block-quilt.jpg";
import meenakariBoxImg from "@/assets/product-meenakari-box.jpg";
import kolhapuriImg from "@/assets/product-kolhapuri.jpg";
import singingBowlImg from "@/assets/product-singing-bowl.jpg";
import leatherJournalImg from "@/assets/product-leather-journal.jpg";
import jhumkaImg from "@/assets/product-jhumka.jpg";
import kathputliImg from "@/assets/product-kathputli.jpg";
import incenseImg from "@/assets/product-incense.jpg";
import tanjoreImg from "@/assets/product-tanjore.jpg";
import khadiKurtaImg from "@/assets/product-khadi-kurta.jpg";
import brassUrliImg from "@/assets/product-brass-urli.jpg";
import chessSetImg from "@/assets/product-chess-set.jpg";
import mirrorBagImg from "@/assets/product-mirror-bag.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Hand-Woven Jute Basket",
    description: "Beautifully crafted jute basket perfect for storage or as a decorative piece. Each basket is hand-woven by our artisans using traditional techniques passed down through generations.",
    price: 45.99,
    images: [
      "/images/product-basket.jpg", // Real basket photo
      "/lovable-uploads/1009825e-3869-4bbc-823c-af06a78c0403.png", // Added user provided image
      "/placeholder.svg"
    ],
    category: Category.HomeDecor,
    tags: ["basket", "jute", "storage", "eco-friendly"],
    artisan: "Lakshmi",
    materials: ["jute", "natural dyes"],
    dimensions: "12\" x 12\" x 10\"",
    featured: true,
    inStock: true
  },
  {
    id: "2",
    name: "Organic Cotton Table Runner",
    description: "Add a touch of elegance to your dining table with this hand-printed table runner. Made from 100% organic cotton and printed using natural dyes.",
    price: 32.50,
    images: [
      tableRunnerImg,
      "/placeholder.svg"
    ],
    category: Category.Textile,
    tags: ["cotton", "table runner", "hand-printed"],
    artisan: "Meena",
    materials: ["organic cotton", "natural dyes"],
    dimensions: "60\" x 16\"",
    newArrival: true,
    inStock: true
  },
  {
    id: "3",
    name: "Clay Pottery Planter",
    description: "Handcrafted clay planter perfect for your favorite houseplants. Each piece is uniquely designed and fired using traditional methods.",
    price: 28.99,
    images: [
      clayPlanterImg,
      "/placeholder.svg"
    ],
    category: Category.HomeDecor,
    tags: ["planter", "pottery", "clay", "garden"],
    artisan: "Sunita",
    materials: ["natural clay", "mineral glazes"],
    dimensions: "6\" diameter, 5\" height",
    featured: true,
    inStock: true
  },
  {
    id: "4",
    name: "Hand-Carved Wooden Spoons (Set of 3)",
    description: "A set of three beautifully carved wooden spoons made from reclaimed wood. Perfect for cooking and serving.",
    price: 19.99,
    images: [
      woodenSpoonsImg,
      "/placeholder.svg"
    ],
    category: Category.Kitchen,
    tags: ["kitchen", "wooden spoons", "utensils"],
    artisan: "Priya",
    materials: ["reclaimed mango wood", "natural oils"],
    featured: false,
    inStock: true
  },
  {
    id: "5",
    name: "Beaded Statement Necklace",
    description: "A stunning statement necklace hand-beaded using recycled glass beads and natural seeds. Each piece is unique and tells a story.",
    price: 38.50,
    images: [
      beadedNecklaceImg,
      "/placeholder.svg"
    ],
    category: Category.Jewelry,
    tags: ["necklace", "beaded", "jewelry"],
    artisan: "Anjali",
    materials: ["recycled glass beads", "natural seeds", "cotton thread"],
    newArrival: true,
    inStock: true
  },
  {
    id: "6",
    name: "Handwoven Bamboo Tote Bag",
    description: "Stylish and sustainable tote bag woven from locally sourced bamboo. Perfect for shopping or as a beach bag.",
    price: 49.99,
    images: [
      "/lovable-uploads/6d60b2f2-6f27-4ffc-8804-858b85c80960.png", // Bamboo tote
      "/images/artisan-crafts.jpg" // Handmade/crafty fallback
    ],
    category: Category.Accessories,
    tags: ["bag", "tote", "bamboo", "shopping"],
    artisan: "Geeta",
    materials: ["bamboo", "cotton"],
    dimensions: "16\" x 14\" x 6\"",
    featured: true,
    inStock: true
  },
  {
    id: "7",
    name: "Hand-Blocked Print Cushion Cover",
    description: "Beautiful cushion cover featuring traditional hand-blocked prints using natural dyes. Adds a touch of artisanal beauty to any home.",
    price: 24.99,
    images: [
      cushionCoverImg,
      "/placeholder.svg"
    ],
    category: Category.HomeDecor,
    tags: ["cushion", "cover", "hand-blocked", "print"],
    artisan: "Radha",
    materials: ["organic cotton", "natural dyes"],
    dimensions: "18\" x 18\"",
    newArrival: true,
    inStock: true
  },
  {
    id: "8",
    name: "Natural Fiber Wall Hanging",
    description: "Elegant wall hanging handcrafted from natural fibers. Each piece is unique and adds texture and warmth to your walls.",
    price: 65.99,
    images: [
      wallHangingImg,
      "/placeholder.svg"
    ],
    category: Category.HomeDecor,
    tags: ["wall hanging", "macrame", "decor"],
    artisan: "Kavita",
    materials: ["jute", "cotton", "banana fiber"],
    dimensions: "24\" x 36\"",
    featured: true,
    inStock: true
  },
  {
    id: "9",
    name: "Jute Clutch",
    description: "Elegant handcrafted clutch featuring delicate beadwork and natural jute fabric. Adorned with cream-colored fringe details and intricate crystal embellishments. Perfect for special occasions or as a statement piece for everyday wear.",
    price: 15.00,
    images: [
      "/lovable-uploads/a4522e05-36bc-4951-b0d5-b3ebf2d2ec07.png", // Jute clutch actual image
      "/placeholder.svg"
    ],
    category: Category.Accessories,
    tags: ["bag", "clutch", "beaded", "jute", "handmade"],
    artisan: "Meena",
    materials: ["jute", "cotton fringe", "glass beads", "crystals"],
    dimensions: "12\" x 8\"",
    newArrival: true,
    inStock: true
  },
  {
    id: "10",
    name: "Handmade Bag",
    description: "Beautiful handcrafted gift bag made with sustainable materials. Perfect for special occasions and eco-friendly gift giving.",
    price: 10.00,
    images: [
      "/lovable-uploads/97a9c825-ecb5-4037-890b-500df9289edd.png", // Provided by user
      "/placeholder.svg"
    ],
    category: Category.Accessories,
    tags: ["bag", "gift", "handmade", "eco-friendly"],
    artisan: "Lakshmi",
    materials: ["jute", "cotton", "natural dyes"],
    dimensions: "10\" x 12\"",
    newArrival: true,
    inStock: true
  },
  {
    id: "11",
    name: "Handcrafted Drawstring Tote Bag",
    description: "Unique handcrafted tote bag featuring a stylish drawstring closure. Made from high-quality cotton with a bold star pattern, it's perfect for everyday use or gifting.",
    price: 15.00,
    images: [
      "/lovable-uploads/bab493f0-42e5-48f6-ad32-ed23741a61c1.png",
      "/images/artisan-crafts.jpg"
    ],
    category: Category.Accessories,
    tags: ["bag", "tote", "drawstring", "handmade", "star"],
    artisan: "Radha",
    materials: ["cotton", "drawstring cord"],
    dimensions: "12\" x 14\"",
    newArrival: true,
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.newArrival);
};

export const getProductsByCategory = (category: Category): Product[] => {
  return products.filter(product => product.category === category);
};
