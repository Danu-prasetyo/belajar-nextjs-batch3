import { login } from "@/services/auth";
import axios from "axios";

// buat data tiruan yang dikirim ke api
jest.mock("axios");

describe("Login", () => {
  it("test fungsi login sukses dengan payload yang sesuai", async () => {
    // data dummy
    const payload = {
      username: "danu",
      password: "123",
    };

    // manggil service login
    await login(payload);

    // toHaveBeenCalledWith : fungsi untuk mastiin fungsi tsb dipanggil dengan endpint dan parameter yang sesuai
    expect(axios.post).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API}/auth/login`, payload);
  });

  it("test fungsi login gagal dengan payload yang tidak sesuai", async () => {
    // data dummy
    const payload = {
      username: "danu",
      password: "123",
    };
    // simulasi error boongan
    const error = new Error("Login gagal");
    // mockRejectedValue : fungsi buat ngembaliin error(pura2 error)
    axios.post.mockRejectedValue(error);
    // manggil service login
    const res = await login(payload);

    // toEqual fungsi buat bandingin hasil
    expect(res).toEqual({ status: false, error });
  });

  it("cek token jika login berhasil", async () => {
    // data dummy
    const payload = {
      username: "danu",
      password: "123",
    };
    const token = "token123";
    // mockResolvedValue : fungsi buat ngembaliin sttaus sukses(pura2 sukses)
    axios.post.mockResolvedValue({ data: { token } });
    const res = await login(payload);

    expect(res).toEqual({ status: true, token });
  });
});
