import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/atoms/Button";

describe("Button", () => {
  it("render button dengan children yang sesuai", () => {
    // getByText() : fungsi untuk ngambil elemen dengan text tertentu
    const { getByText } = render(<Button>Login</Button>);

    // toBeInTheDocument(): fungsi buat masi=tiin elemen tersebut ada di DOM virtual
    expect(getByText("Login")).toBeInTheDocument();
  });

  it("render button dengan warna biru", () => {
    // render dulu komponenntya
    const { getByText } = render(<Button buttonClassname="bg-blue-500">Login</Button>);

    // tampung komponen yang di render ke variabel button
    const button = getByText("Login").closest("button");
    // closest(): fungsi buat ngambil elemen terdekat dengan tag tertentu

    // toContain : fungsi buat mastiin elemen punya class tertentu
    expect(button.className).toContain("bg-blue-500");
  });

  it("render button dengan lebar 100%(w-full)", () => {
    const { getByText } = render(<Button buttonClassname="w-full">Login</Button>);
    const button = getByText("Login").closest("button");
    expect(button.className).toContain("w-full");
  });

  it("render button dengan type tertenu", () => {
    const { getByText } = render(<Button type={"submit"}>Login</Button>);
    const button = getByText("Login").closest("button");
    // toBe : fungsi buat mastiin suatu elemen pnya type tertentu
    expect(button.type).toBe("submit");
  });

  it("Test fungsi onClick pada button ketika diklik", () => {
    // jest.fn(): fungsi buat mock function(data/fungsi tiruan)
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Login</Button>);
    const button = getByText("Login").closest("button");
    // fireEvent : fungsi buat simulasi event handler di suatu elemen
    fireEvent.click(button);

    // toHaveBeenCalledTimes : fungsi buat mastiin kalo fungsi tersebut dipanggil sebanyak 1 kali
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
