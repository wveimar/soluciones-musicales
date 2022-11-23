import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import ReactDOM from "react-dom/client";
import App from "./App";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter } from "react-router-dom";

const ACCESS_TOKEN = "KKp7X4O3zUWO-Ajm-PCzcyLRB1YiWnNt_5nyc4bmR9I";
const SPACE_ID = "uuu0i7f8baia";

const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: ACCESS_TOKEN ? `Bearer ${ACCESS_TOKEN}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
