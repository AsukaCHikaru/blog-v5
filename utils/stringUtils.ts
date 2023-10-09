export const isImageSnapshot = (value: string) => /!\[.+\]/.test(value);

export const getImageSnapshotUrl = (value: string) =>
  value.replace(/!\[(.+)\]/, '$1');
