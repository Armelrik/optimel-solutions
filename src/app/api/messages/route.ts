import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src/data/messages.json");
    const data = await fs.readFile(filePath, "utf8");
    const messages = JSON.parse(data || "[]");

    // Trie du plus récent au plus ancien
    messages.sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.error("Erreur lecture messages:", error);
    return new Response(
      JSON.stringify({ error: "Impossible de lire les messages." }),
      {
        status: 500,
      }
    );
  }
}
