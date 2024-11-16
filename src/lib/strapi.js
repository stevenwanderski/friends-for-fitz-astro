export default async function fetchApi({ endpoint }) {
  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

  const headers = {
    'Authorization': `bearer ${import.meta.env.STRAPI_API_KEY}`
  }

  url.searchParams.append("populate", "*");

  const res = await fetch(url.toString(), { headers: headers });

  let json = await res.json();

  const data = json['data'];

  console.log(data);

  return data;
}