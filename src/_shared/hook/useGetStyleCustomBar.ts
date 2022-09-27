export function useGetStyleCustomScrollBar() {
  return {
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#fafafa',
      borderRadius: '24px',
    },
  };
}
