import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        hello: "world",
    });
};
export function POST() {
    return NextResponse.json({
        hello: "world",
    });
};


export function PATCH() {
    return NextResponse.json({
        hello: "world",
    });
};