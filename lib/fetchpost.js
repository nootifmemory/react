export async function getAuthStrapi() {
  const auth = await fetch(process.env.STRAPI_API_URL + "/auth/local", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      identifier: "admin",
      password: "706749Aa",
    }),
  });
  const res = await auth.json();
  return res.jwt;
}

export async function getPostdata(method, jwt) {
      var res = await fetch(process.env.STRAPI_API_URL + "/nootif-dbs", {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      });
      var data = await res.json();
      return data;
}

export async function getImgdata(method, jwt) {
  var res = await fetch(process.env.STRAPI_API_URL + "/imgs/1", {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
  var data = await res.json();
  return data
}