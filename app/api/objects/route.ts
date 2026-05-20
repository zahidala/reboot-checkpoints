export async function GET() {
  try {
    const res = await fetch("https://learn.reboot01.com/api/object/bahrain");

    if (!res.ok) {
      return Response.json(
        { error: "Failed to fetch data" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return Response.json(data);
  } catch (err) {
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}