import { createMcpHandler } from "@vercel/mcp-adapter";
import { meetingsTools } from "../src/tools/meetings.js";
import { usersTools } from "../src/tools/users.js";
import { webinarsTools } from "../src/tools/webinars.js";
import { accountTools } from "../src/tools/account.js";
import { chatTools } from "../src/tools/chat.js";
import { phoneTools } from "../src/tools/phone.js";
import { contactsTools } from "../src/tools/contacts.js";
import { recordingsTools } from "../src/tools/recordings.js";
import { reportsTools } from "../src/tools/reports.js";
import { webhooksTools } from "../src/tools/webhooks.js";
import { zoomRoomsTools } from "../src/tools/zoom-rooms.js";

const registerTools = (server, toolsArray) => {
  toolsArray.forEach(tool => {
    server.tool(tool.name, tool.schema, tool.handler, { description: tool.description });
  });
};

const handler = createMcpHandler((server) => {
  registerTools(server, meetingsTools);
  registerTools(server, usersTools);
  registerTools(server, webinarsTools);
  registerTools(server, accountTools);
  registerTools(server, chatTools);
  registerTools(server, phoneTools);
  registerTools(server, contactsTools);
  registerTools(server, recordingsTools);
  registerTools(server, reportsTools);
  registerTools(server, webhooksTools);
  registerTools(server, zoomRoomsTools);
});

export { handler as GET, handler as POST, handler as DELETE };
