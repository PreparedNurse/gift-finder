// app/api/gifts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_TABLE_NAME;

  const res = await fetch(`https://api.airtable.com/v0/${baseId}/${table}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    cache: 'no-store',
  });

  const data = await res.json();

  const formatted = data.records.map((record: any) => ({
    id: record.id,
    name: record.fields.Name || '',
    image: record.fields.Image || '',
    link: record.fields.Link || '',
    price: record.fields.Price || '',
    category: record.fields.Category || '',
  }));

  return NextResponse.json(formatted);
}