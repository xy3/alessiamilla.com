import {http} from "../../../lib/api/strapi";
import type {PageLoad, PageData} from "./$types";

export const load: PageLoad<PageData> = async ({params}) => {
  return {...await http.get(`/posts?filters[Slug][$eq]=${params.slug}&populate=*`)}
}
