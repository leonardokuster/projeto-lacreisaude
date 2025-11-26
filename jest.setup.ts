import "@testing-library/jest-dom";
import "jest-styled-components";
import React from "react";

// Mock do next/image
jest.mock("next/image", () => {
  return function ImageMock(props: any) {
    return React.createElement("img", props);
  };
});

// Mock do next/link
jest.mock("next/link", () => {
  return function LinkMock({ children, href, ...otherProps }: any) {
    return React.createElement("a", { href, ...otherProps }, children);
  };
});
