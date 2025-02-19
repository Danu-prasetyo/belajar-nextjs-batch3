import LoginPage from "@/pages/login";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

// describe : funstion untuk ngekelompokin test case yang beruhubungan dengan suatu komponen
describe("LoginPage", () => {
  // it(): fungsi buat nulis/mendefinisikan suatu test case
  it("render halaman login sesuai spesifikasi", () => {
    // render() : fungsi buat ngerender kompnen ke DOM virtual
    const page = render(<LoginPage />);

    // expect(): fungsi buat bikin assertion(bandingin hasil yang diharapkan dengan hasil yang sebenarnya/lagi dieksekusi)
    // toMatchSnapshhot : fungsi buat snapshot hasil render
    expect(page).toMatchSnapshot();
  });
});
