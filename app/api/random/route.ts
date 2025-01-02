export async function GET() {
    return new Response(JSON.stringify(Math.random()), { status: 200 });
}