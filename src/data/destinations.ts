export interface Destination {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  price: number;
  rating: number;
  location: string;
  featured?: boolean;
  reviews: Review[];
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

// Mock destinations data
export const destinations: Destination[] = [
  {
    id: "1",
    title: "Tropical Paradise Retreat",
    description: "Escape to pristine beaches with crystal-clear waters and luxury resorts.",
    fullDescription: "Experience the ultimate tropical getaway in this stunning paradise featuring pristine white sand beaches, crystal-clear turquoise waters, and world-class luxury resorts. Enjoy snorkeling, diving, spa treatments, and gourmet dining while surrounded by breathtaking natural beauty.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
    ],
    price: 1299,
    rating: 4.8,
    location: "Maldives",
    featured: true,
    reviews: [
      {
        id: "r1",
        userName: "Sarah Johnson",
        userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
        rating: 5,
        comment: "Absolutely magical! The beaches were pristine and the service was exceptional.",
        date: "2024-01-15"
      },
      {
        id: "r2",
        userName: "Mike Chen",
        userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
        rating: 5,
        comment: "Best vacation ever! The snorkeling was incredible and the resort was luxurious.",
        date: "2024-01-10"
      }
    ]
  },
  {
    id: "2",
    title: "Mountain Adventure Escape",
    description: "Breathtaking mountain views with hiking trails and cozy cabins.",
    fullDescription: "Discover the majesty of towering peaks and pristine wilderness in this mountain adventure. Features include challenging hiking trails, cozy mountain cabins, wildlife viewing opportunities, and stunning vistas that will take your breath away.",
    image: "https://images.unsplash.com/photo-1464822759844-d150065494cc?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1464822759844-d150065494cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
    ],
    price: 899,
    rating: 4.6,
    location: "Swiss Alps",
    featured: true,
    reviews: [
      {
        id: "r3",
        userName: "Emma Wilson",
        userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
        rating: 5,
        comment: "The mountain views were absolutely spectacular! Great hiking trails.",
        date: "2024-01-20"
      }
    ]
  },
  {
    id: "3",
    title: "Historic City Discovery",
    description: "Explore ancient architecture and vibrant cultural heritage.",
    fullDescription: "Immerse yourself in centuries of history and culture in this fascinating historic city. Walk through ancient streets, visit world-renowned museums, sample local cuisine, and experience the vibrant nightlife of this cultural gem.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520637836862-4d197d17c2a7?w=800&h=600&fit=crop"
    ],
    price: 749,
    rating: 4.7,
    location: "Prague, Czech Republic",
    featured: true,
    reviews: [
      {
        id: "r4",
        userName: "David Rodriguez",
        userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
        rating: 4,
        comment: "Rich history and beautiful architecture. The local food was amazing!",
        date: "2024-01-18"
      }
    ]
  },
  {
    id: "4",
    title: "Safari Wildlife Experience",
    description: "Witness magnificent wildlife in their natural habitat.",
    fullDescription: "Embark on an unforgettable safari adventure to witness the Big Five and countless other wildlife species in their natural habitat. Stay in luxury safari lodges and enjoy guided game drives led by expert rangers.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551750014-b7a1f6e3e725?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop"
    ],
    price: 2199,
    rating: 4.9,
    location: "Serengeti, Tanzania",
    reviews: [
      {
        id: "r5",
        userName: "Lisa Thompson",
        userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
        rating: 5,
        comment: "Life-changing experience! Saw all the Big Five and more. Incredible!",
        date: "2024-01-22"
      }
    ]
  },
  {
    id: "5",
    title: "Coastal Wine Country",
    description: "Sample world-class wines with stunning ocean views.",
    fullDescription: "Indulge in a sophisticated wine-tasting experience along the dramatic coastline. Visit boutique wineries, enjoy gourmet meals paired with exceptional wines, and take in breathtaking ocean views from clifftop vineyards.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558346648-9757f2fa4474?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop"
    ],
    price: 1599,
    rating: 4.5,
    location: "Sonoma Coast, California",
    reviews: [
      {
        id: "r6",
        userName: "Robert Kim",
        userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
        rating: 4,
        comment: "Excellent wines and beautiful scenery. Perfect romantic getaway!",
        date: "2024-01-25"
      }
    ]
  },
  {
    id: "6",
    title: "Desert Oasis Adventure",
    description: "Experience the magic of desert landscapes and starry nights.",
    fullDescription: "Discover the serene beauty of the desert with camel rides, luxury desert camps, and some of the clearest night skies on Earth. Experience traditional Bedouin culture and enjoy spectacular sunrises and sunsets.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
    ],
    price: 999,
    rating: 4.4,
    location: "Sahara Desert, Morocco",
    reviews: [
      {
        id: "r7",
        userName: "Amanda Foster",
        userAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&crop=face",
        rating: 5,
        comment: "Magical experience under the stars! The camel trek was unforgettable.",
        date: "2024-01-28"
      }
    ]
  }
];

export const getFeaturedDestinations = () => {
  return destinations.filter(dest => dest.featured);
};

export const getDestinationById = (id: string) => {
  return destinations.find(dest => dest.id === id);
};