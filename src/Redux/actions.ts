export type ItemsAction =
  | { type: 'add'; name: string }
  | { type: 'remove'; index: number }
  | { type: 'reset' };

export const addItem = (name: string) => ({
  type: 'add',
  name,
});

export const removeItem = (index: number) => ({
  type: 'remove',
  index,
});
