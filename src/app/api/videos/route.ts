import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {
        const videos = await prisma.video.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        return NextResponse.json({
            videos,
            success: true
        }, {
            status: 200
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Something went wrong while fetching videos",
            success: false
        }, {
            status: 500
        });
    } finally {
        await prisma.$disconnect();
    }
}