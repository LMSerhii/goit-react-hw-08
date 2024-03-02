import Fuse from 'fuse.js';

export const searchFuse = (arrey, query) => {
  const fuseOptions = {
    keys: ['name', 'number'],
  };
  const fuse = new Fuse(arrey, fuseOptions);
  return fuse.search(query);
};
