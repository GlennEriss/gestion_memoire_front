import { NextRequest, NextResponse } from 'next/server';
import { apiRoutes } from '@/constantes';

export async function GET(req: NextRequest) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.annee.get}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch academic years');
        }

        const data = await response.json();

        if (typeof data === 'string' && data.includes('<html')) {
            throw new Error('Received HTML instead of JSON. Please check the API endpoint.');
        }
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Error fetching academic years:', error);
        return NextResponse.json({ error: 'Failed to fetch academic years' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.annee.add}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to add year');
        }

        const responseData = await response.json();

        return NextResponse.json(responseData, { status: 200 });
    } catch (error) {
        console.error('Error adding academic year:', error);
        return NextResponse.json({ error: 'Failed to add academic year' }, { status: 500 });
    }
}