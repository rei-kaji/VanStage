import React from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";
import { Stack } from "@mui/material";
import Sample from "./components/Sample";

// gqlの中にはGraphCMSのAPI PlayGroundで準備したものを利用する
//　以下サンプル
const SAMPLES = gql`
  {
    samples {
      id
      publishedAt
      title
      updatedAt
      image {
        id
        url
      }
    }
  }
`;

function App() {
  // useQueryと上記で設定したgqlを使用してGraphCMSからデータを取得
  // 3つの値が取得される loading:取得中かどうか error:取得に失敗したか data:レスポンスデータ
  const { loading, error, data } = useQuery(SAMPLES);
  console.log(data);
  //loading中の処理
  if (loading) return <Loader />;
  //errorの場合の処理
  if (error) return <ErrorPage message={error.message} />;

  return (
    <Stack>
      {data.samples.map((sample) => (
        <Sample key={sample.id} title={sample.title} image={sample.image} />
      ))}
    </Stack>
  );
}

export default App;
