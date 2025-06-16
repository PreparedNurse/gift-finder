// lib/getGifts.ts

export type Gift = {
    id: string;
    name: string;
    image: string;
    link: string;
    price: string;
    category: string;
  };
  
  export async function getGifts(): Promise<Gift[]> {
    const res = await fetch('/api/gifts');
    const data = await res.json();
    return data;
  }