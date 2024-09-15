export const root = true;
export const env = {
  node: true
};
export const extendOptions  = [
  'plugin:vue/essential',
  '@vue/standard'
];
export const parserOptions = {
  parser: '@babel/eslint-parser',
  requireConfigFile: false 
};
export const rules = {
  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
};
