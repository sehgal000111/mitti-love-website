
export interface ProductReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  description: string;
  longDescription?: string;
  features: string[];
  benefits: string[];
  images: string[];
  mainImage: string;
  reviews: ProductReview[];
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Clay Water Dispenser",
    size: "4L",
    price: 1000,
    description: "Natural clay water dispenser that keeps water cool and healthy.",
    longDescription: "Our 4L Clay Water Dispenser is handcrafted by skilled artisans using traditional techniques. The natural clay material keeps your water naturally cool without refrigeration and enhances the taste by adding essential minerals. The perfect size for small families or office spaces.",
    features: [
      "4-liter capacity",
      "Naturally cools water",
      "Handcrafted in Rajasthan",
      "Easy-to-use tap system",
      "Elegant design with natural finish"
    ],
    benefits: [
      "Maintains water's natural taste",
      "Alkaline properties balance body pH",
      "No harmful chemicals or plastics",
      "Adds essential minerals to water",
      "Eco-friendly alternative to plastic"
    ],
    mainImage: "./claypot1.png",
    images: [
      "./claypot1.png",
      "./claypot1.png",
      "./claypot1.png",
      "./claypot1.png"
    ],
    reviews: [
      {
        id: 101,
        name: "Arjun Sharma",
        rating: 5,
        comment: "Water tastes so much better from this clay dispenser! It stays cool even during hot summer days.",
        date: "2023-05-12"
      },
      {
        id: 102,
        name: "Priya Patel",
        rating: 5,
        comment: "Excellent quality clay pot. My grandmother used to have something similar, and I'm glad I found this.",
        date: "2023-06-24"
      },
      {
        id: 103,
        name: "Rajiv Malhotra",
        rating: 4,
        comment: "Good product, water remains naturally cool. The tap works well too.",
        date: "2023-07-15"
      }
    ],
    rating: 4.7
  },
  {
    id: 2,
    name: "Clay Water Dispenser",
    size: "6L",
    price: 1500,
    description: "Medium-sized clay water dispenser for families, keeping water naturally cool.",
    longDescription: "Our 6L Clay Water Dispenser is perfect for medium-sized families. Handcrafted from natural clay using traditional techniques, this dispenser keeps water naturally cool and enhances its taste while preserving all essential minerals. The beautiful earthy design adds a touch of tradition to your home.",
    features: [
      "6-liter capacity",
      "Naturally cools water",
      "Handcrafted in Rajasthan",
      "Durable brass tap",
      "Traditional design with modern functionality"
    ],
    benefits: [
      "Enhances metabolism and digestion",
      "Keeps minerals intact",
      "Reduces acidity in water",
      "Eco-friendly manufacturing process",
      "Sustainable alternative to plastic containers"
    ],
    mainImage: "./clapypot2v2.png",
    images: [
      "./claypot2.png",
      "./claypot2v2.png",
      "./claypot2.png",
      "./claypot2v2.png"
    ],
    reviews: [
      {
        id: 201,
        name: "Ananya Singh",
        rating: 5,
        comment: "Perfect size for our family of four. The water tastes amazing and stays cool naturally.",
        date: "2023-04-18"
      },
      {
        id: 202,
        name: "Vikram Mehta",
        rating: 4,
        comment: "Good quality product. Reminds me of my childhood when we used clay pots for water.",
        date: "2023-05-29"
      },
      {
        id: 203,
        name: "Meera Kapoor",
        rating: 5,
        comment: "Excellent craftmanship and the tap doesn't leak. Very satisfied with this purchase!",
        date: "2023-08-10"
      },
      {
        id: 204,
        name: "Suresh Kumar",
        rating: 5,
        comment: "My kids love drinking water from this clay pot. They say it tastes better!",
        date: "2023-07-22"
      }
    ],
    rating: 4.8
  },
  {
    id: 3,
    name: "Clay Water Dispenser",
    size: "8L",
    price: 2000,
    description: "Large clay water dispenser perfect for big families and gatherings.",
    longDescription: "Our premium 8L Clay Water Dispenser is designed for large families or gatherings. This spacious dispenser is handcrafted by skilled artisans using the finest natural clay. It keeps water naturally cool and enhances its mineral content and taste. The elegant design combined with practical functionality makes it a perfect addition to any home.",
    features: [
      "8-liter capacity",
      "Naturally cools water",
      "Handcrafted by master artisans",
      "Premium quality brass tap",
      "Elegant design with traditional motifs"
    ],
    benefits: [
      "Provides naturally cool water without electricity",
      "Maintains water's natural pH balance",
      "Enriches water with essential minerals",
      "Supports traditional craftsmanship",
      "Environmentally sustainable product"
    ],
    mainImage: "./claypot2.png",
    images: [
      "./claypot2.png",
      "./claypot2.png",
      "./claypot2.png",
      "./claypot2.png"
    ],
    reviews: [
      {
        id: 301,
        name: "Ravi Desai",
        rating: 5,
        comment: "Excellent quality and perfect size for our joint family. The water tastes so pure!",
        date: "2023-03-15"
      },
      {
        id: 302,
        name: "Sunita Agarwal",
        rating: 4,
        comment: "Beautiful design and keeps water cool. The tap works smoothly. Highly recommended.",
        date: "2023-06-05"
      },
      {
        id: 303,
        name: "Prakash Joshi",
        rating: 5,
        comment: "We've been using this for the past month and love it. Water tastes better and stays cool.",
        date: "2023-07-28"
      },
      {
        id: 304,
        name: "Lakshmi Nair",
        rating: 5,
        comment: "Perfect for our family gatherings. Everyone comments on how good the water tastes!",
        date: "2023-08-17"
      },
      {
        id: 305,
        name: "Amit Shah",
        rating: 4,
        comment: "Good capacity and nice traditional look. Keeps water cool naturally.",
        date: "2023-09-02"
      }
    ],
    rating: 4.6
  }
];
