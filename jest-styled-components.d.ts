declare module "jest-styled-components" {
  import "jest";

  declare global {
    namespace jest {
      interface Matchers<R> {
        toHaveStyleRule(property: string, value?: string, options?: object): R;
      }
    }
  }
}