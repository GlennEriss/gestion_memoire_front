import { apiRoutes } from "@/constantes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { id } = await req.json();
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.lector.delete}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to delete lector');
        }

        return NextResponse.json({ message: 'Lector deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting lector:', error);
        return NextResponse.json({ error: 'Failed to delete lector' }, { status: 500 });
    }
}