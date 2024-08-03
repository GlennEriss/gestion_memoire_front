import { apiRoutes } from "@/constantes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        console.log('je suis ici')
        const data = await req.json();
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.lector.update}/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update lector');
        }

        return NextResponse.json({ message: 'Lector update successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting lector:', error);
        return NextResponse.json({ error: 'Failed to update lector' }, { status: 500 });
    }
}