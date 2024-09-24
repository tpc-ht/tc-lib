const preFix = 'zd';
const usePrefix = (name: string) => {
  return `${preFix}-${name}`;
};
export default usePrefix;
