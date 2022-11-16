import merge from 'lodash/merge';

export function someComposable() {
  return {
    xyz: merge({ foo: 1 } , { bar: 2 }),
  };
}
