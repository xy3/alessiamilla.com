import {http} from "../../lib/api/strapi";
import type {PageLoad, PageData} from "./$types";

export const load: PageLoad<PageData> = async () => {
  return {...await http.get(`/about?populate=*`)}
}
