async function useAsync(func: () => Promise<void>): Promise<{
  result: string;
  error: string;
  loading: boolean;
}> {
  return { result: 'hi', error: 'error', loading: false }
}