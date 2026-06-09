export async function GET() {
    return Response.json({
        status: "healthy",
        service:"portfolio",
        timestamp: new Date().toISOString(),
    });
}