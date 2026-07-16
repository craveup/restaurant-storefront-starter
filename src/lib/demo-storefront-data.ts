import { Currencies } from "@craveup/storefront-sdk";
import type { MenusResponse } from "@/types/menus";
import type { Product } from "@/types/menu-types";

type DemoProduct = Product & {
  category: string;
  tags?: string[];
};

export const demoProducts: DemoProduct[] = [
  {
    id: "demo-cookie-walnut",
    name: "Chocolate Walnut Cookie",
    description: "Crisp edges, soft center, toasted walnuts, and dark chocolate. 620 cal",
    price: "6.50",
    displayPrice: "$6.50",
    currency: Currencies.USD,
    images: ["/images/home-page-bg.jpeg"],
    category: "Cookies",
    tags: ["popular"],
    availability: "available",
    modifierIds: [],
    modifiers: [],
  },
  {
    id: "demo-croissant",
    name: "Butter Croissant",
    description: "Classic laminated croissant baked fresh every morning. 310 cal",
    price: "4.75",
    displayPrice: "$4.75",
    currency: Currencies.USD,
    images: ["/images/leclerc-bakery/our-story.webp"],
    category: "Pastries",
    tags: ["popular"],
    availability: "available",
    modifierIds: [],
    modifiers: [],
  },
  {
    id: "demo-baguette",
    name: "Country Baguette",
    description: "Naturally leavened baguette with a crisp crust and open crumb. 420 cal",
    price: "5.25",
    displayPrice: "$5.25",
    currency: Currencies.USD,
    images: ["/images/menu-bg.jpeg"],
    category: "Breads",
    tags: ["new"],
    availability: "available",
    modifierIds: [],
    modifiers: [],
  },
  {
    id: "demo-cookie-oat",
    name: "Oat Chocolate Cookie",
    description: "Brown sugar oat cookie with dark chocolate chunks. 540 cal",
    price: "5.95",
    displayPrice: "$5.95",
    currency: Currencies.USD,
    images: ["/preview.png"],
    category: "Cookies",
    tags: [],
    availability: "available",
    modifierIds: [],
    modifiers: [],
  },
];

export const demoMenusResponse: MenusResponse = {
  menus: [
    {
      id: "demo-all-day",
      name: "All Day",
      isActive: true,
      time: "All Day",
      timeRange: "Open to close",
      categories: [
        {
          id: "demo-cookies",
          name: "Cookies",
          products: demoProducts.filter((product) => product.category === "Cookies"),
        },
        {
          id: "demo-pastries",
          name: "Pastries",
          products: demoProducts.filter((product) => product.category === "Pastries"),
        },
        {
          id: "demo-breads",
          name: "Breads",
          products: demoProducts.filter((product) => product.category === "Breads"),
        },
      ],
    },
  ],
  popularProducts: demoProducts.slice(0, 3),
};

export function shouldUseDemoStorefrontData() {
  return process.env.NODE_ENV !== "production";
}
