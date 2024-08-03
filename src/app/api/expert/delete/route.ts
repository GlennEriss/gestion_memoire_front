import { apiRoutes } from "@/constantes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { id } = await req.json();
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${apiRoutes.expert.delete}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to delete expert');
        }

        return NextResponse.json({ message: 'Expert deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting expert:', error);
        return NextResponse.json({ error: 'Failed to delete expert' }, { status: 500 });
    }
}