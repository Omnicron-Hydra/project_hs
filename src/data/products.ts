import { Product } from '../types';
import { hotelImages, nftImages } from '../utils/images';

// Shuffle arrays to ensure random distribution
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const shuffledHotelImages = shuffleArray([...hotelImages]);
const shuffledNFTImages = shuffleArray([...nftImages]);

const hotelNames = [
  'Grand Plaza Hotel & Spa',
  'The Ritz Carlton',
  'Four Seasons Resort',
  'Mandarin Oriental',
  'Peninsula Hotel',
  'Waldorf Astoria',
  'St. Regis Hotel',
  'Park Hyatt',
  'Burj Al Arab',
  'Atlantis Resort',
  'Bellagio Hotel',
  'Marina Bay Sands',
  'The Plaza',
  'Caesars Palace',
  'The Venetian',
  'Shangri-La Hotel',
  'InterContinental',
  'W Hotel',
  'Aman Resort',
  'Raffles Hotel'
];

const locations = [
  'New York, USA',
  'Paris, France',
  'Tokyo, Japan',
  'Dubai, UAE',
  'London, UK',
  'Singapore',
  'Hong Kong',
  'Sydney, Australia',
  'Rome, Italy',
  'Barcelona, Spain',
  'Amsterdam, Netherlands',
  'Bangkok, Thailand',
  'Maldives',
  'Bali, Indonesia',
  'Cancun, Mexico',
  'Cape Town, South Africa',
  'Rio de Janeiro, Brazil',
  'Venice, Italy',
  'Santorini, Greece',
  'Marrakech, Morocco'
];

const nftCollections = [
  'Celestial Dreams',
  'Digital Horizons',
  'Crypto Punks',
  'Bored Apes',
  'Meta Worlds',
  'Future Visions',
  'Abstract Realms',
  'Pixel Masters',
  'Virtual Genesis',
  'Ethereum Dreams',
  'Digital Legacy',
  'Crypto Art',
  'NFT Universe',
  'Digital Essence',
  'Meta Collection',
  'Future Art',
  'Virtual Visions',
  'Blockchain Beauty',
  'Digital Dynasty',
  'Crypto Creation'
];

const artists = [
  'Elena Cosmos',
  'Digital Master',
  'Crypto Artist',
  'NFT Creator',
  'Meta Artist',
  'Virtual Visionary',
  'Digital Dreams',
  'Crypto Punk',
  'NFT Master',
  'Digital Creator',
  'Meta Maker',
  'Virtual Artist',
  'Digital Genius',
  'Crypto Creator',
  'NFT Visionary',
  'Digital Artist',
  'Meta Visionary',
  'Virtual Master',
  'Digital Pioneer',
  'Crypto Genius'
];

export const products: Product[] = [];

// Generate hotel entries
for (let i = 0; i < 20; i++) {
  products.push({
    id: `hotel-${i + 1}`,
    type: 'hotel',
    name: hotelNames[i],
    description: 'Experience luxury and comfort in our premium accommodations with world-class amenities and exceptional service.',
    price: 200 + Math.floor(Math.random() * 800),
    rating: 4 + Math.random(),
    reviews: Math.floor(Math.random() * 1000) + 100,
    location: locations[i],
    imageUrl: shuffledHotelImages[i],
    profit: {
      daily: Math.floor(Math.random() * 50) + 20,
      total: Math.floor(Math.random() * 20000) + 10000
    }
  });
}

// Generate NFT entries
for (let i = 0; i < 20; i++) {
  products.push({
    id: `nft-${i + 1}`,
    type: 'nft',
    name: `${nftCollections[i]} #${Math.floor(Math.random() * 1000)}`,
    description: 'Unique digital artwork from a renowned artist, part of an exclusive NFT collection.',
    price: Math.random() * 10 + 0.1,
    rating: 4 + Math.random(),
    reviews: Math.floor(Math.random() * 100) + 10,
    imageUrl: shuffledNFTImages[i],
    artist: artists[i],
    collection: nftCollections[i]
  });
}