const preFix = 'zd';
export const usePrefix = (name: string) => {
  return `${preFix}-${name}`;
};
