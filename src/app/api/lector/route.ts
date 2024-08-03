import { NextRequest, NextResponse } from "next/server";
import { apiRoutes } from "@/constantes";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.lector.add}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to add user');
        }
        const responseData = await response.json();
        return NextResponse.json(responseData, { status: 200 });
    } catch (error) {
        console.error('Error adding user:', error);
        return NextResponse.json({ error: 'Failed to add user' }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.lector.get}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch lectors');
        }

        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Error fetching lectors:', error);
        return NextResponse.json({ error: 'Failed to fetch lectors' }, { status: 500 });
    }
}