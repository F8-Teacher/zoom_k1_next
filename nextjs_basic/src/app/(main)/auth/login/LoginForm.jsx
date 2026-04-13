"use client";

export default function LoginForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = "123";
    await fetch(`/api/cookie`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "token",
        value: token,
        ttl: 3600,
      }),
    });
    // const response = await fetch(`/api/cookie?name=token`);
    // const { data } = await response.json();
    // console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          className="px-3 py-1 border border-[#ddd] outline-0 w-1/2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="block mb-1">
          Password
        </label>
        <input
          type="password"
          className="px-3 py-1 border border-[#ddd] outline-0 w-1/2"
        />
      </div>
      <button className="px-3 py-2 bg-green-600 text-white">Submit</button>
    </form>
  );
}
