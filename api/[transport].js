import { createMcpHandler } from "@vercel/mcp-adapter";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { loadTools } from "../src/tools/index.js";
import { getZoomToken } from "../src/utils/auth.js";

const handler = createMcpHandler(async (server) => {
  await loadTools(server);
});

export { handler as GET, handler as POST, handler as DELETE };
