import { apiRoutes } from "@/constantes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { id } = await req.json();

        console.log('ID to delete:', id); 
        console.log(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.annee.delete}/${id}`)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.annee.delete}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to delete year');
        }

        return NextResponse.json({ message: 'Year deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting academic year:', error);
        return NextResponse.json({ error: 'Failed to delete academic year' }, { status: 500 });
    }
}