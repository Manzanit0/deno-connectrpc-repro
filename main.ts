import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { ElizaService } from "./api/gen/es/greet_connect.ts";

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("world"));


  const transport = createConnectTransport({
    baseUrl: "http://localhost:8083",
  });
  const client = createPromiseClient(ElizaService, transport);

  await client.say({ sentence: "foo" });
