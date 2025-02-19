import Input from "@/components/atoms/Input";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

describe("Input", () => {
  it("render input dengan placeholder yang sesusai", () => {
    const { getByPlaceholderText } = render(<Input placeholder={"Username"} />);
    //  getByPlaceholderText buat ngakses elemenn dengan placeholder tertentu
    const input = getByPlaceholderText("Username");
    expect(input.placeholder).toBe("Username");
  });

  it("test fungsi onChange pada elemen input", () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(<Input placeholder={"Username"} onChange={onChange} />);
    const input = getByPlaceholderText("Username");
    fireEvent.change(input, { target: { value: "danu" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
