import type { Express } from "express";
import { createServer, type Server } from "http";
import { routePlanRequestSchema } from "@shared/schema";
import { planRoutes } from "./services/routePlanner";

export async function registerRoutes(app: Express): Promise<Server> {
  // Route planning endpoint
  app.post("/api/routes/plan", async (req, res) => {
    try {
      const validatedData = routePlanRequestSchema.parse(req.body);
      const result = await planRoutes(validatedData);
      res.json(result);
    } catch (error) {
      console.error("Route planning error:", error);
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Failed to plan routes" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
