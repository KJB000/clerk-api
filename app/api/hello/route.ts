import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello next.js!',
    contents: '/app/api 폴더 생성',
  }
  return NextResponse.json(data)
}
