import { NextRequest, NextResponse } from "next/server";
import { apiRoutes } from "@/constantes";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        console.log("data",data)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.auth.login}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to add expert');
        }
        const responseData = await response.json();
        console.log('response', responseData)
        return NextResponse.json(responseData, { status: 200 });
    } catch (error) {
        console.error('Error adding expert:', error);
        return NextResponse.json({ error: 'Failed to add expert' }, { status: 500 });
    }
}