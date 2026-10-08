import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Directory-style URLs match the generated page/index.html files on Pages.
    trailingSlash: "always",
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
