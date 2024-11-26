import { NextResponse } from 'next/server'
import { sendContact } from '../../sendEmail'

export async function POST(request: Request) {

    const data = await request.json();

    try {
        await sendContact(data.name, data.email,
            data.subject, data.message);
        return NextResponse.json({
            status: "success",
        })
    } catch (error) {
        return NextResponse.json({
            status: "error",
        })
    }
}