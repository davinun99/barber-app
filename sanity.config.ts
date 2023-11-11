import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas/schemaTypes";
import { Logo } from "./plugins/studioLogo";

const title = "MopriBarber";
const projectId = "3rtzzy5l"; // process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = "production"; // process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = "2022-11-16"; // process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

// const title = import.meta.env.VITE_SANITY_PROJECT_TITLE || process?.env?.NEXT_PUBLIC_SANITY_PROJECT_TITLE || process?.env?.SANITY_PROJECT_TITLE || "[Studio] Commerce Layer Sanity Starter";
// const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || process?.env?.NEXT_PUBLIC_SANITY_PROJECT_ID || process?.env?.SANITY_PROJECT_ID;
// const dataset = import.meta.env.VITE_SANITY_DATASET || process?.env?.NEXT_PUBLIC_SANITY_DATASET || process?.env?.SANITY_DATASET;
// const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || process?.env?.NEXT_PUBLIC_SANITY_API_VERSION || process?.env?.SANITY_API_VERSION;
// const title = import.meta.env.VITE_SANITY_PROJECT_TITLE;
// const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
// const dataset = import.meta.env.VITE_SANITY_DATASET
// const apiVersion = import.meta.env.VITE_SANITY_API_VERSION
// console.log("title", title);
// console.log(import.meta.env.VITE_SANITY_PROJECT_TITLE, import.meta.env);
// console.log('SANITY_PROJECT_TITLE', import.meta.env.SANITY_PROJECT_TITLE);
export default defineConfig({
  title,
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemas
  },
  studio: {
    components: {
      logo: Logo
    }
  }
});
