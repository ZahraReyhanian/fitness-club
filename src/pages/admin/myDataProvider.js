import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
  const token = localStorage.getItem("x-auth-token");
  //   if (!options.headers) {
  //     options.headers = new Headers({ Accept: "application/json" });
  //   }
  //   options.headers.set("Authorization", `Bearer ${token}`);

  if (url.includes("?")) url = url + "&api_token=" + token;
  else url = url + "?api_token=" + token;

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  "http://localhost:8000/api/v1/admin",
  httpClient
);

const myDataProvider = {
  ...dataProvider,
  update: (resource, params) => {
    if (resource !== "gym" || !params.data.image) {
      // fallback to the default implementation
      return dataProvider.update(resource, params);
    }
    /**
     * For posts update only, convert uploaded image in base 64 and attach it to
     * the `picture` sent property, with `src` and `title` attributes.
     */

    // Freshly dropped image are File objects and must be converted to base64 strings
    const newimage = params.data.image.filter((p) => p.rawFile instanceof File);
    const formerimage = params.data.image.filter(
      (p) => !(p.rawFile instanceof File)
    );

    return Promise.all(newimage.map(convertFileToBase64))
      .then((base64image) =>
        base64image.map((picture64) => ({
          src: picture64,
          title: `${params.data.title}`,
        }))
      )
      .then((transformedNewimage) =>
        dataProvider.update(resource, {
          ...params,
          data: {
            ...params.data,
            image: [...transformedNewimage, ...formerimage],
          },
        })
      );
  },
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export default myDataProvider;
