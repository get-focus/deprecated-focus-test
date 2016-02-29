const DEFAULT_BROWSERS = [
  {name: 'chrome', versions: [45, 46, 47]},
  {name: 'firefox', versions: [43, 44]},
  {name: 'internet explorer', versions: [9, 10, 11]}
//  {name: 'iPhone', versions: [9]},
//  {name: 'iPad', versions: [9]}
];


export const buildBrowserList = browsers => browsers.reduce((res, current) => [...res, ...current.versions.reduce((r, c) => [...r, {name: current.name, version: c}], [])], []);

export default BROWSERS = buildBrowserList(DEFAULT_BROWSERS);
