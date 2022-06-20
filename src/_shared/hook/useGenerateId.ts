import { nanoid } from '@reduxjs/toolkit';

export function useGenerateId() {
  return nanoid();
}
