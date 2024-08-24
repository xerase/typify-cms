export default {
  '*.{ts,tsx,js,jsx}': () => 'tsc --noEmit',
  '*.{ts,tsx}': 'eslint --no-error-on-unmatched-pattern --fix'
};
