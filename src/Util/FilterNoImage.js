export default function FilterNoImage(x) {
  //This Function filters out all movie object wihout an image

  if (x) {
    let result = x.filter((xs) => xs.Poster !== "N/A");
    return result;
  }
}
