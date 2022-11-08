import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 今回はGraphQLで最も使用されているApolloというフレームワークを使っています。
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // GraphCMSのAPI URL
  uri: "https://api-ca-central-1.hygraph.com/v2/cla7erel416su01un4rkwaz97/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // AppoloPriverで囲む。このへんの構成は検討する必要あり...(App.jsxで呼び出すのはやめたいかも)
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
