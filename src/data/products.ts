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
import bambooTote from "@/assets/bamboo-tote.png.asset.json";
import pSandalwoodSoap from "@/assets/p-sandalwood-soap.jpg";
import pChikankariKurti from "@/assets/p-chikankari-kurti.jpg";
import pPattachitra from "@/assets/p-pattachitra.jpg";
import pNataraja from "@/assets/p-nataraja.jpg";
import pWoolRug from "@/assets/p-wool-rug.jpg";
import pDhurrie from "@/assets/p-dhurrie.jpg";
import pAjrakh from "@/assets/p-ajrakh.jpg";
import pKalamkari from "@/assets/p-kalamkari.jpg";
import pCopperBottle from "@/assets/p-copper-bottle.jpg";
import pNestingDolls from "@/assets/p-nesting-dolls.jpg";
import pLacBangles from "@/assets/p-lac-bangles.jpg";
import pPichwai from "@/assets/p-pichwai.jpg";
import pStoneBuddha from "@/assets/p-stone-buddha.jpg";
import pBambooChime from "@/assets/p-bamboo-chime.jpg";
import pJuteMat from "@/assets/p-jute-mat.jpg";
import pCeramicMugs from "@/assets/p-ceramic-mugs.jpg";
import pPouchWallet from "@/assets/p-pouch-wallet.jpg";
import pMortarPestle from "@/assets/p-mortar-pestle.jpg";
import pSilkBangles from "@/assets/p-silk-bangles.jpg";
import pRosewoodComb from "@/assets/p-rosewood-comb.jpg";
import pApron from "@/assets/p-apron.jpg";
import pMojari from "@/assets/p-mojari.jpg";
import pTablecloth from "@/assets/p-tablecloth.jpg";
import pBrassHooks from "@/assets/p-brass-hooks.jpg";
import pTerracottaTea from "@/assets/p-terracotta-tea.jpg";
import pSariPillow from "@/assets/p-sari-pillow.jpg";
import pLetterOpener from "@/assets/p-letter-opener.jpg";
import pSilBatta from "@/assets/p-sil-batta.jpg";
import pBoneInlayBox from "@/assets/p-bone-inlay-box.jpg";
import pPaintedTray from "@/assets/p-painted-tray.jpg";
import pPotHolders from "@/assets/p-pot-holders.jpg";
import pFiligree from "@/assets/p-filigree.jpg";
import pBeadCurtain from "@/assets/p-bead-curtain.jpg";
import pToyTrain from "@/assets/p-toy-train.jpg";
import pStoneCoasters from "@/assets/p-stone-coasters.jpg";
import pGaneshaPlate from "@/assets/p-ganesha-plate.jpg";
import pKhurjaMugs from "@/assets/p-khurja-mugs.jpg";
import pBookmarks from "@/assets/p-bookmarks.jpg";
import pMasalaDabba from "@/assets/p-masala-dabba.jpg";
import pGlassLantern from "@/assets/p-glass-lantern.jpg";
import pBathTowel from "@/assets/p-bath-towel.jpg";
import pPoojaBell from "@/assets/p-pooja-bell.jpg";
import pHairStick from "@/assets/p-hair-stick.jpg";
import pLeatherWallet from "@/assets/p-leather-wallet.jpg";
import pCoconutArt from "@/assets/p-coconut-art.jpg";
import pBananaPlacemats from "@/assets/p-banana-placemats.jpg";
import pIronHook from "@/assets/p-iron-hook.jpg";
import pGlassVase from "@/assets/p-glass-vase.jpg";
import pYogaBolster from "@/assets/p-yoga-bolster.jpg";
import pEmbroideredCap from "@/assets/p-embroidered-cap.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Hand-Woven Jute Basket",
    description: "Beautifully crafted jute basket perfect for storage or as a decorative piece. Each basket is hand-woven by our artisans using traditional techniques passed down through generations.",
    price: 45.99,
    images: [
      juteBasketsSet.url, // Set of nested handwoven baskets
      "/images/product-basket.jpg",
      "/lovable-uploads/1009825e-3869-4bbc-823c-af06a78c0403.png",
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
    description: "Stylish and sustainable tote bag woven from locally sourced bamboo with a beautiful chevron pattern. Perfect for shopping, work, or as a beach bag.",
    price: 24.99,
    images: [
      bambooTote.url,
      "/images/artisan-crafts.jpg"
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
  ,
  {
    id: "12",
    name: "Madhubani Peacock Painting",
    description: "Authentic Madhubani folk painting on handmade paper featuring twin peacocks and floral motifs. Hand-painted by artisans from Bihar using traditional natural pigments.",
    price: 42.00,
    images: [madhubaniImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["painting", "madhubani", "folk art", "wall art"],
    artisan: "Sunita",
    materials: ["handmade paper", "natural pigments"],
    dimensions: "12\" x 16\"",
    featured: true,
    inStock: true
  },
  {
    id: "13",
    name: "Brass Diya Oil Lamp",
    description: "Traditional hand-engraved brass diya, perfect for festivals, prayer rooms, and home decor. A symbol of light and prosperity.",
    price: 18.50,
    images: [brassDiyaImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["brass", "diya", "lamp", "festive"],
    artisan: "Priya",
    materials: ["brass"],
    dimensions: "5\" x 3\"",
    inStock: true
  },
  {
    id: "14",
    name: "Kashmiri Pashmina Shawl",
    description: "Luxuriously soft pashmina shawl with paisley jacquard border, hand-loomed in Kashmir. A timeless heirloom piece.",
    price: 89.00,
    images: [pashminaImg, "/placeholder.svg"],
    category: Category.Textile,
    tags: ["pashmina", "shawl", "kashmiri", "luxury"],
    artisan: "Meena",
    materials: ["pashmina wool"],
    dimensions: "80\" x 28\"",
    featured: true,
    inStock: true
  },
  {
    id: "15",
    name: "Sandalwood Elephant Figurine",
    description: "Intricately hand-carved sandalwood elephant with traditional motifs. A symbol of wisdom and good luck.",
    price: 34.99,
    images: [sandalwoodElephantImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["sandalwood", "elephant", "carved", "figurine"],
    artisan: "Geeta",
    materials: ["sandalwood"],
    dimensions: "5\" x 4\"",
    inStock: true
  },
  {
    id: "16",
    name: "Kantha Embroidered Throw",
    description: "Reversible cotton throw featuring traditional Kantha running stitch embroidery. Each piece is hand-stitched by Bengali artisans.",
    price: 55.00,
    images: [kanthaThrowImg, "/placeholder.svg"],
    category: Category.Textile,
    tags: ["kantha", "throw", "embroidery", "bengali"],
    artisan: "Anjali",
    materials: ["cotton", "thread"],
    dimensions: "60\" x 90\"",
    newArrival: true,
    inStock: true
  },
  {
    id: "17",
    name: "Channapatna Wooden Spinning Top",
    description: "Eco-friendly wooden toy from Channapatna, lacquered with natural vegetable dyes. Safe and delightful for children.",
    price: 9.99,
    images: [channapatnaToyImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["toy", "wooden", "channapatna", "kids"],
    artisan: "Radha",
    materials: ["ivory wood", "vegetable dyes"],
    inStock: true
  },
  {
    id: "18",
    name: "Jaipur Blue Pottery Vase",
    description: "Hand-painted blue pottery vase from Jaipur featuring traditional Persian-influenced floral motifs in cobalt and turquoise.",
    price: 48.00,
    images: [bluePotteryImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["pottery", "vase", "jaipur", "blue"],
    artisan: "Sunita",
    materials: ["quartz", "ceramic glaze"],
    dimensions: "8\" x 6\"",
    featured: true,
    inStock: true
  },
  {
    id: "19",
    name: "Banarasi Silk Scarf",
    description: "Pure silk scarf woven in Varanasi with traditional golden zari border. Lightweight and elegant for any occasion.",
    price: 36.50,
    images: [banarasiScarfImg, "/placeholder.svg"],
    category: Category.Textile,
    tags: ["silk", "banarasi", "scarf", "zari"],
    artisan: "Meena",
    materials: ["pure silk", "zari thread"],
    dimensions: "70\" x 22\"",
    inStock: true
  },
  {
    id: "20",
    name: "Dhokra Tribal Horse",
    description: "Handcrafted Dhokra metal horse using the ancient lost-wax casting technique by tribal artisans of Chhattisgarh.",
    price: 29.99,
    images: [dhokraHorseImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["dhokra", "metal", "tribal", "horse"],
    artisan: "Kavita",
    materials: ["brass alloy"],
    dimensions: "6\" x 5\"",
    inStock: true
  },
  {
    id: "21",
    name: "Warli Tribal Painting",
    description: "Framed Warli painting depicting village life with traditional white pigment on earthy ochre background.",
    price: 39.00,
    images: [warliPaintingImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["warli", "painting", "tribal", "framed"],
    artisan: "Lakshmi",
    materials: ["canvas", "natural pigments", "wood frame"],
    dimensions: "10\" x 10\"",
    newArrival: true,
    inStock: true
  },
  {
    id: "22",
    name: "Kashmiri Walnut Wood Box",
    description: "Hand-carved walnut wood keepsake box from Kashmir featuring intricate chinar leaf and floral motifs.",
    price: 52.00,
    images: [walnutBoxImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["walnut", "carved", "box", "kashmiri"],
    artisan: "Priya",
    materials: ["walnut wood"],
    dimensions: "7\" x 5\" x 3\"",
    inStock: true
  },
  {
    id: "23",
    name: "Terracotta Bell Wind Chime",
    description: "Rustic terracotta wind chime with melodic clay bells. Handcrafted in West Bengal to bring a soothing earthy sound.",
    price: 16.99,
    images: [terracottaChimeImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["terracotta", "wind chime", "rustic"],
    artisan: "Sunita",
    materials: ["terracotta clay", "jute cord"],
    dimensions: "18\" length",
    inStock: true
  },
  {
    id: "24",
    name: "Phulkari Embroidered Dupatta",
    description: "Vibrant Phulkari hand-embroidered dupatta from Punjab, featuring traditional floral thread work on natural cotton.",
    price: 44.00,
    images: [phulkariImg, "/placeholder.svg"],
    category: Category.Textile,
    tags: ["phulkari", "dupatta", "punjabi", "embroidery"],
    artisan: "Anjali",
    materials: ["cotton", "silk thread"],
    dimensions: "90\" x 36\"",
    newArrival: true,
    inStock: true
  },
  {
    id: "25",
    name: "Marble Inlay Coasters (Set of 4)",
    description: "Set of four white marble coasters with traditional pietra dura inlay work from Agra. Functional art for your table.",
    price: 27.50,
    images: [marbleCoastersImg, "/placeholder.svg"],
    category: Category.Kitchen,
    tags: ["marble", "coasters", "inlay", "agra"],
    artisan: "Radha",
    materials: ["white marble", "semi-precious stones"],
    dimensions: "4\" diameter",
    inStock: true
  },
  {
    id: "26",
    name: "Bidri Ware Decorative Bowl",
    description: "Elegant Bidri bowl from Karnataka with fine silver inlay on blackened zinc alloy. A 14th-century craft tradition.",
    price: 62.00,
    images: [bidriBowlImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["bidri", "bowl", "silver inlay"],
    artisan: "Kavita",
    materials: ["zinc alloy", "silver"],
    dimensions: "6\" diameter",
    featured: true,
    inStock: true
  },
  {
    id: "27",
    name: "Bandhani Tie-Dye Stole",
    description: "Traditional Bandhani stole from Gujarat with vibrant tie-dye dot patterns. Lightweight and full of color.",
    price: 22.00,
    images: [bandhaniImg, "/placeholder.svg"],
    category: Category.Textile,
    tags: ["bandhani", "tie-dye", "stole", "gujarati"],
    artisan: "Meena",
    materials: ["cotton", "natural dyes"],
    dimensions: "72\" x 24\"",
    inStock: true
  },
  {
    id: "28",
    name: "Coconut Shell Bowl Set",
    description: "Set of polished coconut shell bowls — sustainable, lightweight, and perfect for snacks, salads, or decor.",
    price: 19.50,
    images: [coconutBowlsImg, "/placeholder.svg"],
    category: Category.Kitchen,
    tags: ["coconut", "bowls", "eco-friendly", "kitchen"],
    artisan: "Geeta",
    materials: ["coconut shell", "natural oils"],
    dimensions: "4\" diameter",
    inStock: true
  },
  {
    id: "29",
    name: "Jaipur Block Print Quilt",
    description: "Reversible cotton quilt with indigo Jaipur block print, filled with soft cotton for warmth and comfort.",
    price: 79.00,
    images: [blockQuiltImg, "/placeholder.svg"],
    category: Category.Textile,
    tags: ["quilt", "block print", "indigo", "jaipur"],
    artisan: "Lakshmi",
    materials: ["cotton", "natural dyes"],
    dimensions: "90\" x 108\"",
    featured: true,
    inStock: true
  },
  {
    id: "30",
    name: "Meenakari Peacock Trinket Box",
    description: "Stunning Meenakari enamel trinket box with vibrant peacock motif. Handcrafted by artisans of Rajasthan.",
    price: 33.99,
    images: [meenakariBoxImg, "/placeholder.svg"],
    category: Category.Jewelry,
    tags: ["meenakari", "enamel", "box", "rajasthani"],
    artisan: "Priya",
    materials: ["metal", "enamel"],
    dimensions: "4\" x 3\"",
    newArrival: true,
    inStock: true
  },
  {
    id: "31",
    name: "Kolhapuri Leather Sandals",
    description: "Authentic Kolhapuri leather sandals hand-stitched in Maharashtra. Durable, breathable, and effortlessly stylish.",
    price: 38.00,
    images: [kolhapuriImg, "/placeholder.svg"],
    category: Category.Accessories,
    tags: ["leather", "sandals", "kolhapuri", "footwear"],
    artisan: "Radha",
    materials: ["vegetable-tanned leather"],
    dimensions: "Multiple sizes",
    inStock: true
  },
  {
    id: "32",
    name: "Brass Singing Bowl with Mallet",
    description: "Hand-hammered brass singing bowl producing rich healing tones. Perfect for meditation and sound therapy.",
    price: 45.00,
    images: [singingBowlImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["brass", "singing bowl", "meditation"],
    artisan: "Kavita",
    materials: ["brass", "wooden mallet"],
    dimensions: "5\" diameter",
    inStock: true
  },
  {
    id: "33",
    name: "Embossed Leather Journal",
    description: "Hand-bound leather journal with embossed mandala cover and unlined recycled cotton paper inside.",
    price: 24.50,
    images: [leatherJournalImg, "/placeholder.svg"],
    category: Category.Accessories,
    tags: ["leather", "journal", "mandala", "handmade"],
    artisan: "Anjali",
    materials: ["leather", "cotton paper"],
    dimensions: "7\" x 5\"",
    newArrival: true,
    inStock: true
  },
  {
    id: "34",
    name: "Silver Oxidized Jhumka Earrings",
    description: "Traditional Indian jhumka earrings in oxidized silver with red stone accents and dangling bead fringe.",
    price: 21.00,
    images: [jhumkaImg, "/placeholder.svg"],
    category: Category.Jewelry,
    tags: ["earrings", "jhumka", "silver", "ethnic"],
    artisan: "Sunita",
    materials: ["oxidized silver alloy", "glass beads"],
    dimensions: "2.5\" length",
    featured: true,
    inStock: true
  },
  {
    id: "35",
    name: "Rajasthani Kathputli Puppet Pair",
    description: "Colorful pair of traditional Rajasthani string puppets in royal costume. Beautiful as decor or for storytelling.",
    price: 28.00,
    images: [kathputliImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["puppet", "kathputli", "rajasthani", "folk"],
    artisan: "Geeta",
    materials: ["wood", "cotton fabric", "thread"],
    dimensions: "18\" tall",
    inStock: true
  },
  {
    id: "36",
    name: "Hand-Rolled Incense Set",
    description: "Bundle of hand-rolled incense sticks in sandalwood, jasmine, and rose, with a carved wooden holder.",
    price: 12.99,
    images: [incenseImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["incense", "aromatherapy", "wooden holder"],
    artisan: "Lakshmi",
    materials: ["natural resins", "essential oils", "wood"],
    inStock: true
  },
  {
    id: "37",
    name: "Tanjore Ganesha Painting",
    description: "Framed Tanjore-style miniature painting of Lord Ganesha with traditional 22-karat gold foil detailing.",
    price: 68.00,
    images: [tanjoreImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["tanjore", "painting", "ganesha", "gold foil"],
    artisan: "Priya",
    materials: ["wood panel", "gold foil", "pigments"],
    dimensions: "8\" x 8\"",
    featured: true,
    inStock: true
  },
  {
    id: "38",
    name: "Khadi Cotton Kurta",
    description: "Hand-spun and hand-woven khadi cotton kurta with subtle hand-embroidered placket. Breathable and timeless.",
    price: 42.50,
    images: [khadiKurtaImg, "/placeholder.svg"],
    category: Category.Accessories,
    tags: ["khadi", "kurta", "cotton", "clothing"],
    artisan: "Meena",
    materials: ["khadi cotton"],
    dimensions: "Multiple sizes",
    inStock: true
  },
  {
    id: "39",
    name: "Brass Urli Decorative Bowl",
    description: "Traditional brass urli bowl perfect for floating flowers and tealight candles. Adds elegance to any entryway.",
    price: 49.99,
    images: [brassUrliImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["brass", "urli", "decor", "festive"],
    artisan: "Kavita",
    materials: ["brass"],
    dimensions: "10\" diameter",
    inStock: true
  },
  {
    id: "40",
    name: "Handcrafted Wooden Chess Set",
    description: "Heirloom-quality chess set with hand-turned rosewood and maple pieces on a contrasting wood board.",
    price: 95.00,
    images: [chessSetImg, "/placeholder.svg"],
    category: Category.HomeDecor,
    tags: ["chess", "wooden", "game", "rosewood"],
    artisan: "Radha",
    materials: ["rosewood", "maple wood"],
    dimensions: "14\" x 14\"",
    inStock: true
  },
  {
    id: "41",
    name: "Rajasthani Mirror Work Handbag",
    description: "Vibrant patchwork handbag with traditional Rajasthani mirror embroidery, tassels, and a sturdy rope handle.",
    price: 32.00,
    images: [mirrorBagImg, "/placeholder.svg"],
    category: Category.Accessories,
    tags: ["bag", "mirror work", "rajasthani", "embroidered"],
    artisan: "Anjali",
    materials: ["cotton", "mirrors", "thread"],
    dimensions: "12\" x 14\"",
    newArrival: true,
    inStock: true
  },
  { id: "42", name: "Mysore Sandalwood Soap Set", description: "Set of three handmade sandalwood soaps from Mysore, naturally fragrant and skin-nourishing.", price: 14.50, images: [pSandalwoodSoap, "/placeholder.svg"], category: Category.HomeDecor, tags: ["soap", "sandalwood", "bath"], artisan: "Priya", materials: ["sandalwood oil", "coconut oil"], inStock: true },
  { id: "43", name: "Lucknowi Chikankari Kurti", description: "Hand-embroidered white cotton kurti featuring delicate Lucknowi Chikankari thread work.", price: 49.99, images: [pChikankariKurti, "/placeholder.svg"], category: Category.Accessories, tags: ["kurti", "chikankari", "clothing"], artisan: "Meena", materials: ["cotton", "embroidery thread"], dimensions: "Multiple sizes", featured: true, inStock: true },
  { id: "44", name: "Pattachitra Krishna Painting", description: "Authentic Odisha Pattachitra painting of Krishna on treated palm leaf with natural pigments.", price: 38.00, images: [pPattachitra, "/placeholder.svg"], category: Category.HomeDecor, tags: ["pattachitra", "krishna", "folk art"], artisan: "Sunita", materials: ["palm leaf", "natural pigments"], dimensions: "10\" x 14\"", inStock: true },
  { id: "45", name: "Brass Nataraja Statue", description: "Hand-cast brass statue of dancing Shiva Nataraja, a timeless symbol of cosmic rhythm.", price: 72.00, images: [pNataraja, "/placeholder.svg"], category: Category.HomeDecor, tags: ["brass", "nataraja", "statue"], artisan: "Kavita", materials: ["brass"], dimensions: "10\" tall", featured: true, inStock: true },
  { id: "46", name: "Hand-Knotted Wool Rug", description: "Hand-knotted wool rug with traditional Persian-inspired Indian motifs in rich jewel tones.", price: 149.00, images: [pWoolRug, "/placeholder.svg"], category: Category.HomeDecor, tags: ["rug", "wool", "carpet"], artisan: "Radha", materials: ["wool"], dimensions: "4' x 6'", inStock: true },
  { id: "47", name: "Cotton Dhurrie Rug", description: "Handwoven flatweave cotton dhurrie rug with neutral stripes — durable and reversible.", price: 54.00, images: [pDhurrie, "/placeholder.svg"], category: Category.HomeDecor, tags: ["dhurrie", "rug", "cotton"], artisan: "Geeta", materials: ["cotton"], dimensions: "3' x 5'", inStock: true },
  { id: "48", name: "Ajrakh Block Print Stole", description: "Indigo Ajrakh hand-block printed cotton stole with traditional geometric patterns.", price: 28.00, images: [pAjrakh, "/placeholder.svg"], category: Category.Textile, tags: ["ajrakh", "stole", "block print"], artisan: "Meena", materials: ["cotton", "natural dyes"], dimensions: "72\" x 28\"", newArrival: true, inStock: true },
  { id: "49", name: "Kalamkari Tree of Life Tapestry", description: "Hand-painted Kalamkari cotton wall tapestry depicting the iconic tree of life motif.", price: 58.00, images: [pKalamkari, "/placeholder.svg"], category: Category.HomeDecor, tags: ["kalamkari", "tapestry", "wall art"], artisan: "Anjali", materials: ["cotton", "natural dyes"], dimensions: "36\" x 48\"", inStock: true },
  { id: "50", name: "Hammered Copper Water Bottle", description: "Pure copper water bottle hand-hammered for Ayurvedic wellness benefits. Leak-proof cap.", price: 26.00, images: [pCopperBottle, "/placeholder.svg"], category: Category.Kitchen, tags: ["copper", "bottle", "ayurveda"], artisan: "Priya", materials: ["pure copper"], dimensions: "10\" tall, 1L", featured: true, inStock: true },
  { id: "51", name: "Wooden Nesting Doll Set", description: "Set of five hand-painted wooden nesting dolls with colorful Indian folk motifs.", price: 32.00, images: [pNestingDolls, "/placeholder.svg"], category: Category.HomeDecor, tags: ["nesting dolls", "wooden", "kids"], artisan: "Lakshmi", materials: ["wood", "natural paint"], inStock: true },
  { id: "52", name: "Lac Bangles Set", description: "Vibrant set of traditional Rajasthani lac bangles with kundan stone embellishments.", price: 18.50, images: [pLacBangles, "/placeholder.svg"], category: Category.Jewelry, tags: ["bangles", "lac", "rajasthani"], artisan: "Sunita", materials: ["lac", "glass stones"], inStock: true },
  { id: "53", name: "Pichwai Cow Painting", description: "Traditional Pichwai painting of sacred cow surrounded by lotus blooms — Nathdwara art.", price: 65.00, images: [pPichwai, "/placeholder.svg"], category: Category.HomeDecor, tags: ["pichwai", "painting", "folk art"], artisan: "Kavita", materials: ["cloth", "natural pigments"], dimensions: "14\" x 14\"", inStock: true },
  { id: "54", name: "Stone Carved Buddha Statue", description: "Serene hand-carved soapstone Buddha statue in meditation pose, perfect for altars.", price: 42.00, images: [pStoneBuddha, "/placeholder.svg"], category: Category.HomeDecor, tags: ["buddha", "stone", "statue"], artisan: "Radha", materials: ["soapstone"], dimensions: "8\" tall", featured: true, inStock: true },
  { id: "55", name: "Bamboo Wind Chime", description: "Soothing bamboo wind chime handcrafted in Northeast India, producing mellow tones.", price: 17.00, images: [pBambooChime, "/placeholder.svg"], category: Category.HomeDecor, tags: ["wind chime", "bamboo"], artisan: "Geeta", materials: ["bamboo", "jute cord"], dimensions: "24\" length", inStock: true },
  { id: "56", name: "Jute Welcome Door Mat", description: "Durable handwoven jute door mat with classic welcome lettering — eco-friendly.", price: 22.99, images: [pJuteMat, "/placeholder.svg"], category: Category.HomeDecor, tags: ["doormat", "jute"], artisan: "Lakshmi", materials: ["jute"], dimensions: "24\" x 36\"", inStock: true },
  { id: "57", name: "Hand-Painted Ceramic Mugs (Set of 2)", description: "Pair of hand-painted ceramic mugs in classic blue-and-white Indian folk patterns.", price: 24.50, images: [pCeramicMugs, "/placeholder.svg"], category: Category.Kitchen, tags: ["mugs", "ceramic", "hand-painted"], artisan: "Priya", materials: ["ceramic"], inStock: true },
  { id: "58", name: "Embroidered Coin Pouch", description: "Compact embroidered fabric pouch with mirror work, tassels, and zip closure.", price: 12.50, images: [pPouchWallet, "/placeholder.svg"], category: Category.Accessories, tags: ["pouch", "wallet", "embroidered"], artisan: "Anjali", materials: ["cotton", "thread", "mirrors"], dimensions: "6\" x 4\"", newArrival: true, inStock: true },
  { id: "59", name: "Wooden Mortar and Pestle", description: "Traditional rosewood mortar and pestle for grinding fresh spices the artisan way.", price: 19.99, images: [pMortarPestle, "/placeholder.svg"], category: Category.Kitchen, tags: ["mortar", "pestle", "wooden"], artisan: "Meena", materials: ["rosewood"], dimensions: "5\" diameter", inStock: true },
  { id: "60", name: "Silk Thread Bangles Stack", description: "Stack of colorful silk thread wrapped bangles in rainbow jewel tones.", price: 16.00, images: [pSilkBangles, "/placeholder.svg"], category: Category.Jewelry, tags: ["bangles", "silk thread"], artisan: "Sunita", materials: ["silk thread", "plastic core"], inStock: true },
  { id: "61", name: "Hand-Carved Rosewood Comb", description: "Beautifully carved rosewood comb — gentle on hair and naturally antistatic.", price: 14.00, images: [pRosewoodComb, "/placeholder.svg"], category: Category.Accessories, tags: ["comb", "rosewood", "hair"], artisan: "Radha", materials: ["rosewood"], dimensions: "6\" length", inStock: true },
  { id: "62", name: "Block Print Cotton Apron", description: "Cotton kitchen apron with traditional Indian floral block print and adjustable strap.", price: 21.50, images: [pApron, "/placeholder.svg"], category: Category.Kitchen, tags: ["apron", "block print", "cotton"], artisan: "Meena", materials: ["cotton"], inStock: true },
  { id: "63", name: "Embroidered Mojari Shoes", description: "Hand-stitched leather mojari shoes with delicate floral embroidery — traditional Rajasthani footwear.", price: 46.00, images: [pMojari, "/placeholder.svg"], category: Category.Accessories, tags: ["mojari", "shoes", "leather"], artisan: "Priya", materials: ["leather", "embroidery thread"], dimensions: "Multiple sizes", featured: true, inStock: true },
  { id: "64", name: "Floral Embroidered Tablecloth", description: "Hand-embroidered cotton tablecloth with vibrant floral motifs and lace trim.", price: 48.00, images: [pTablecloth, "/placeholder.svg"], category: Category.Textile, tags: ["tablecloth", "embroidered"], artisan: "Kavita", materials: ["cotton", "thread"], dimensions: "60\" x 90\"", inStock: true },
  { id: "65", name: "Brass Peacock Wall Hooks (Pair)", description: "Pair of decorative brass peacock wall hooks — elegant for entryways and bedrooms.", price: 28.50, images: [pBrassHooks, "/placeholder.svg"], category: Category.HomeDecor, tags: ["brass", "hooks", "peacock"], artisan: "Geeta", materials: ["brass"], inStock: true },
  { id: "66", name: "Terracotta Tea Set", description: "Rustic terracotta tea set with teapot and four kulhad cups — earthy and authentic.", price: 34.00, images: [pTerracottaTea, "/placeholder.svg"], category: Category.Kitchen, tags: ["terracotta", "tea set"], artisan: "Sunita", materials: ["terracotta clay"], inStock: true },
  { id: "67", name: "Recycled Sari Patchwork Pillow", description: "Vibrant throw pillow stitched from upcycled silk sari patches — every piece is unique.", price: 26.00, images: [pSariPillow, "/placeholder.svg"], category: Category.HomeDecor, tags: ["pillow", "sari", "recycled"], artisan: "Lakshmi", materials: ["upcycled silk sari"], dimensions: "18\" x 18\"", newArrival: true, inStock: true },
  { id: "68", name: "Carved Wooden Letter Opener", description: "Elegant hand-carved wooden letter opener with intricately detailed floral handle.", price: 11.50, images: [pLetterOpener, "/placeholder.svg"], category: Category.Accessories, tags: ["letter opener", "wooden"], artisan: "Anjali", materials: ["sheesham wood"], dimensions: "9\" length", inStock: true },
  { id: "69", name: "Stone Sil Batta Spice Grinder", description: "Traditional Indian stone sil batta — perfect for grinding fresh wet spice masalas.", price: 38.99, images: [pSilBatta, "/placeholder.svg"], category: Category.Kitchen, tags: ["stone", "sil batta", "grinder"], artisan: "Priya", materials: ["granite stone"], inStock: true },
  { id: "70", name: "Bone Inlay Jewelry Box", description: "Stunning bone inlay jewelry box with intricate orange floral pattern from Rajasthan.", price: 56.00, images: [pBoneInlayBox, "/placeholder.svg"], category: Category.Jewelry, tags: ["jewelry box", "bone inlay"], artisan: "Kavita", materials: ["wood", "bone inlay"], dimensions: "8\" x 5\" x 3\"", featured: true, inStock: true },
  { id: "71", name: "Hand-Painted Wooden Tray", description: "Mango wood serving tray hand-painted with traditional Rajasthani folk art motifs.", price: 32.00, images: [pPaintedTray, "/placeholder.svg"], category: Category.Kitchen, tags: ["tray", "wooden", "painted"], artisan: "Radha", materials: ["mango wood", "paint"], dimensions: "14\" x 10\"", inStock: true },
  { id: "72", name: "Quilted Cotton Pot Holders (Set of 3)", description: "Set of three quilted cotton pot holders with floral block print and heat-resistant lining.", price: 15.99, images: [pPotHolders, "/placeholder.svg"], category: Category.Kitchen, tags: ["pot holders", "quilted"], artisan: "Meena", materials: ["cotton", "batting"], inStock: true },
  { id: "73", name: "Silver Filigree Pendant", description: "Delicate silver filigree pendant handcrafted in Cuttack with intricate wirework.", price: 39.00, images: [pFiligree, "/placeholder.svg"], category: Category.Jewelry, tags: ["silver", "filigree", "pendant"], artisan: "Sunita", materials: ["sterling silver"], inStock: true },
  { id: "74", name: "Beaded Door Curtain", description: "Colorful handcrafted beaded door curtain — adds boho charm to any doorway.", price: 44.00, images: [pBeadCurtain, "/placeholder.svg"], category: Category.HomeDecor, tags: ["curtain", "beaded", "boho"], artisan: "Geeta", materials: ["wooden beads", "thread"], dimensions: "36\" x 72\"", inStock: true },
  { id: "75", name: "Channapatna Wooden Toy Train", description: "Colorful eco-friendly wooden toy train from Channapatna, finished with food-safe lacquer.", price: 22.00, images: [pToyTrain, "/placeholder.svg"], category: Category.HomeDecor, tags: ["toy", "wooden", "kids"], artisan: "Lakshmi", materials: ["ivory wood", "vegetable dyes"], inStock: true },
  { id: "76", name: "Carved Stone Coasters (Set of 4)", description: "Set of four hand-carved soapstone coasters with intricate floral relief patterns.", price: 24.50, images: [pStoneCoasters, "/placeholder.svg"], category: Category.Kitchen, tags: ["coasters", "stone", "carved"], artisan: "Priya", materials: ["soapstone"], inStock: true },
  { id: "77", name: "Brass Ganesha Wall Plate", description: "Embossed brass Ganesha wall plate — auspicious decor for entryways and pooja rooms.", price: 36.00, images: [pGaneshaPlate, "/placeholder.svg"], category: Category.HomeDecor, tags: ["brass", "ganesha", "wall plate"], artisan: "Anjali", materials: ["brass"], dimensions: "10\" diameter", inStock: true },
  { id: "78", name: "Khurja Pottery Mug Set", description: "Set of four cheerful Khurja pottery mugs hand-painted with vibrant floral motifs.", price: 29.99, images: [pKhurjaMugs, "/placeholder.svg"], category: Category.Kitchen, tags: ["mugs", "khurja", "pottery"], artisan: "Kavita", materials: ["ceramic"], inStock: true },
  { id: "79", name: "Embroidered Bookmarks (Set of 4)", description: "Set of four delicate hand-embroidered fabric bookmarks with playful tassels.", price: 9.99, images: [pBookmarks, "/placeholder.svg"], category: Category.Accessories, tags: ["bookmarks", "embroidered"], artisan: "Radha", materials: ["cotton", "embroidery thread"], inStock: true },
  { id: "80", name: "Wooden Masala Dabba Spice Box", description: "Traditional round wooden masala dabba with 7 compartments for organizing your spices.", price: 28.00, images: [pMasalaDabba, "/placeholder.svg"], category: Category.Kitchen, tags: ["masala dabba", "spice box"], artisan: "Meena", materials: ["sheesham wood"], dimensions: "9\" diameter", featured: true, inStock: true },
  { id: "81", name: "Hand-Painted Glass Lantern", description: "Vintage-style glass lantern hand-painted with Indian folk motifs — glows beautifully.", price: 34.50, images: [pGlassLantern, "/placeholder.svg"], category: Category.HomeDecor, tags: ["lantern", "glass", "hand-painted"], artisan: "Sunita", materials: ["glass", "metal frame"], dimensions: "9\" tall", inStock: true },
  { id: "82", name: "Handwoven Cotton Bath Towel", description: "Soft handwoven cotton bath towel with rust striped border — quick-drying and absorbent.", price: 19.99, images: [pBathTowel, "/placeholder.svg"], category: Category.Textile, tags: ["towel", "cotton"], artisan: "Geeta", materials: ["cotton"], dimensions: "30\" x 60\"", inStock: true },
  { id: "83", name: "Brass Pooja Bell", description: "Small ornate brass pooja bell with melodious tone, perfect for daily rituals.", price: 13.50, images: [pPoojaBell, "/placeholder.svg"], category: Category.HomeDecor, tags: ["brass", "bell", "pooja"], artisan: "Priya", materials: ["brass"], dimensions: "4\" tall", inStock: true },
  { id: "84", name: "Carved Wooden Hair Stick", description: "Hand-carved wooden hair stick with floral motif — a graceful hair accessory.", price: 8.99, images: [pHairStick, "/placeholder.svg"], category: Category.Accessories, tags: ["hair stick", "wooden"], artisan: "Anjali", materials: ["sandalwood"], dimensions: "7\" length", inStock: true },
  { id: "85", name: "Hand-Stitched Leather Wallet", description: "Classic brown bifold wallet, hand-stitched from vegetable-tanned full grain leather.", price: 32.50, images: [pLeatherWallet, "/placeholder.svg"], category: Category.Accessories, tags: ["wallet", "leather"], artisan: "Radha", materials: ["vegetable-tanned leather"], inStock: true },
  { id: "86", name: "Painted Coconut Shell Ornament", description: "Decorative dried coconut shell hand-painted with cheerful folk motifs — hangable.", price: 14.50, images: [pCoconutArt, "/placeholder.svg"], category: Category.HomeDecor, tags: ["coconut", "ornament", "painted"], artisan: "Kavita", materials: ["coconut shell", "paint"], inStock: true },
  { id: "87", name: "Banana Fiber Placemats (Set of 4)", description: "Set of four woven banana fiber placemats — natural, sustainable, and beautifully textured.", price: 22.50, images: [pBananaPlacemats, "/placeholder.svg"], category: Category.Kitchen, tags: ["placemats", "banana fiber"], artisan: "Lakshmi", materials: ["banana fiber"], dimensions: "13\" diameter", inStock: true },
  { id: "88", name: "Hand-Forged Iron Wall Hook", description: "Decorative wrought iron wall hook with floral scrollwork — perfect for coats and keys.", price: 17.99, images: [pIronHook, "/placeholder.svg"], category: Category.HomeDecor, tags: ["iron", "hook", "wall"], artisan: "Sunita", materials: ["wrought iron"], dimensions: "8\" tall", inStock: true },
  { id: "89", name: "Recycled Glass Flower Vase", description: "Handcrafted vase made from recycled glass with a stunning ocean-blue tint.", price: 23.00, images: [pGlassVase, "/placeholder.svg"], category: Category.HomeDecor, tags: ["vase", "glass", "recycled"], artisan: "Geeta", materials: ["recycled glass"], dimensions: "8\" tall", inStock: true },
  { id: "90", name: "Cotton Yoga Bolster", description: "Handwoven cotton yoga bolster with natural cotton filling — supportive and breathable.", price: 36.00, images: [pYogaBolster, "/placeholder.svg"], category: Category.Textile, tags: ["yoga", "bolster", "cotton"], artisan: "Priya", materials: ["cotton"], dimensions: "26\" x 9\"", newArrival: true, inStock: true },
  { id: "91", name: "Embroidered Nehru Cap", description: "Traditional Indian cotton Nehru cap with mirror work and colorful paisley embroidery.", price: 19.50, images: [pEmbroideredCap, "/placeholder.svg"], category: Category.Accessories, tags: ["cap", "embroidered", "nehru"], artisan: "Anjali", materials: ["cotton", "thread", "mirrors"], inStock: true }
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
