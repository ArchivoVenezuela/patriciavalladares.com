import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: '/Users/patriciavalladares/Projects/patriciavalladares.com/tina/__generated__/.cache/1785416545697', url: 'http://localhost:4001/graphql', token: '', queries,  });
export default client;
  