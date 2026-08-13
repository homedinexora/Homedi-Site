import { readFileSync } from "fs";
import path from "path";

export function loadPolicyHtml(filename: string): string {
  const filePath = path.join(process.cwd(), "content", "policies", filename);
  const html = readFileSync(filePath, "utf8");

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let body = bodyMatch?.[1] ?? html;

  // Drop Cocoa/Word inline style blocks and class attributes for clean site styling.
  body = body.replace(/<style[\s\S]*?<\/style>/gi, "");
  body = body.replace(/\sclass="[^"]*"/gi, "");
  body = body.replace(/\sstyle="[^"]*"/gi, "");
  body = body.replace(/\s(cellspacing|cellpadding|valign)="[^"]*"/gi, "");
  body = body.replace(/<p><br\s*\/?><\/p>/gi, "");

  return body.trim();
}
