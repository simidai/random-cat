import { connection } from "next/server";
import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image";

export default async function Home() {
  await connection(); // 接続が確立するまで待機
  const image = await fetchImage();
  console.log("Home: 画像情報を取得しました", image);
  return <CatImage url={image.url} />;
}