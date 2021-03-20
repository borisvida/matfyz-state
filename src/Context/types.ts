export type Items = Array<{ id: number; name: string }>;

export type ItemsAction =
  | { type: 'add'; name: string }
  | { type: 'remove'; index: number }
  | { type: 'reset' };
