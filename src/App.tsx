import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { HeaderRouter, MainRouter, FooterRouter } from '@routes/index';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HeaderRouter />
      <MainRouter />
      <FooterRouter />
    </QueryClientProvider>
  );
}
