// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

// src/routes/posts.ts
import {http} from "../lib/api/strapi";
import type {PageLoad, PageData} from "./$types";

export const load: PageLoad<PageData> = async () => {
    return {...await http.get("/posts?populate=HeaderImage&populate=Poster&fields[0]=Slug&fields[1]=Title&fields[2]=Color&sort=rank:asc")}
}
