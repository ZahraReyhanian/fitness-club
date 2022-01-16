// in addUploadFeature.js
/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

/**
 * For posts update only, convert uploaded image in base 64 and attach it to
 * the `picture` sent property, with `src` and `title` attributes.
 */
const addUploadFeature = (requestHandler) => (type, resource, params) => {
  if (type === "UPDATE" || type === "CREATE") {
    // notice that following condition can be true only when `<ImageInput source="image" />` component has parameter `multiple={true}`
    // if parameter `multiple` is false, then data.image is not an array, but single object
    console.log(params);
    console.log(resource);
    console.log(type);
    if (params.data.image && params.data.image.length) {
      // only freshly dropped image are instance of File

      const image = params.data.image;
      params.data.image = [image];
      console.log(params.data.image);

      const formerimage = params.data.image.filter(
        (p) => !(p.rawFile instanceof File)
      );
      const newimage = params.data.image.filter(
        (p) => p.rawFile instanceof File
      );

      return Promise.all(newimage.map(convertFileToBase64))
        .then((base64image) =>
          base64image.map((picture64, index) => ({
            src: picture64,
            title: `${newimage[index].title}`,
          }))
        )
        .then((transformedNewimage) =>
          requestHandler(type, resource, {
            ...params,
            data: {
              ...params.data,
              image: [...transformedNewimage, ...formerimage],
            },
          })
        );
    }
  }
  // for other request types and resources, fall back to the default request handler
  return requestHandler(type, resource, params);
};

export default addUploadFeature;
