export interface Product {
  id: string;
  type: 'hotel' | 'nft';
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  location?: string;
  imageUrl: string;
  profit?: {
    daily?: number;
    total?: number;
  };
  artist?: string;
  collection?: string;
}