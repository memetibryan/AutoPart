import { NextResponse } from 'next/server'
import { sendEmail } from '../../sendEmail'

export async function POST(request: Request) {

    const data = await request.json();

    try {
        await sendEmail(data.year, data.engine_size,
            data.make, data.model, data.transmission, data.part, data.name, data.email, data.phone, data.zip_code);
        return NextResponse.json({
            status: "success",
        })
    } catch (error) {
        return NextResponse.json({
            status: "error",
        })
    }
}