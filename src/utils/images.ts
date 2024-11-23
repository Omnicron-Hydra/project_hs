// Curated collection of high-quality images for hotels and NFTs
export const hotelImages = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80', // Luxury hotel facade
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80', // Modern hotel interior
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80', // Beachfront resort
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80', // Boutique hotel
  'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?auto=format&fit=crop&q=80', // Mountain resort
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80', // Urban hotel
  'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80', // Luxury suite
  'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80', // Historic hotel
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80', // Poolside view
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80', // Penthouse suite
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80', // Tropical resort
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80', // Design hotel
  'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&q=80', // Luxury lobby
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80', // Boutique room
  'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&q=80', // Seaside hotel
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80', // City view hotel
  'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80', // Modern resort
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80', // Luxury pool
  'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&q=80', // Spa resort
  'https://images.unsplash.com/photo-1574691250077-03a929faece5?auto=format&fit=crop&q=80', // Eco lodge
];

export const nftImages = [
  'https://images.unsplash.com/photo-1569437061241-a848be43cc82?auto=format&fit=crop&q=80', // Abstract digital art
  'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&q=80', // Crypto art
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80', // Digital landscape
  'https://images.unsplash.com/photo-1638913662180-aaa9a66e6c09?auto=format&fit=crop&q=80', // NFT collection
  'https://images.unsplash.com/photo-1643101809204-6fb869816dbe?auto=format&fit=crop&q=80', // Digital creation
  'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80', // Abstract waves
  'https://images.unsplash.com/photo-1633355444132-695d5876cd00?auto=format&fit=crop&q=80', // Digital patterns
  'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&q=80', // Crypto punk style
  'https://images.unsplash.com/photo-1616444540850-a513927d1e04?auto=format&fit=crop&q=80', // Digital sculpture
  'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&q=80', // Generative art
  'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?auto=format&fit=crop&q=80', // Abstract geometry
  'https://images.unsplash.com/photo-1614812513172-567d2fe96a75?auto=format&fit=crop&q=80', // Digital portrait
  'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80', // Crypto world
  'https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80', // Digital space
  'https://images.unsplash.com/photo-1616444540529-6d7aad761b17?auto=format&fit=crop&q=80', // NFT universe
  'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?auto=format&fit=crop&q=80', // Digital dream
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80', // Abstract motion
  'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80', // Crypto art
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80', // Digital nature
  'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&q=80'  // Future art
];

// Utility function to get a unique image
export const getUniqueImage = (type: 'hotel' | 'nft', index: number): string => {
  const images = type === 'hotel' ? hotelImages : nftImages;
  return images[index % images.length];
};