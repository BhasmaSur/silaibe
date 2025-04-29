import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { tailorId: string } }) {
    const userId = params.tailorId;
  
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }
  
    // Mocked user data for demonstration purposes
    const users = [
      { id: "1", name: "Shruti kumari", message_to_world: "pal pal na jaane tinku jiya"},
      { id: "2", name: "Shruti reddy", message_to_world: "bhidi jaliale, jigar se piya" },
      { id: "2", name: "Shruti talpade", message_to_world: "dil ka dariya, beh hi gaya" },
    ];
  
    const user = users.find((u) => u.id === userId);
  
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
  
    return NextResponse.json(user, { status: 200 });
  }