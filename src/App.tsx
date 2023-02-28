import React from 'react';
import {MainScreen} from "./screens/MainScreen";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <MainScreen />
    </QueryClientProvider>
  );
}

export default App;
