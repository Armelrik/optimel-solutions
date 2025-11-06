import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "src/constants/inscriptions.json"
    );
    const fileData = await fs.readFile(filePath, "utf8");
    const inscriptions = JSON.parse(fileData || "[]");

    // Trie du plus récent au plus ancien
    inscriptions.sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return new Response(JSON.stringify(inscriptions), { status: 200 });
  } catch (error) {
    console.error("Erreur lecture inscriptions:", error);
    return new Response(
      JSON.stringify({ error: "Impossible de lire les inscriptions." }),
      {
        status: 500,
      }
    );
  }
}
