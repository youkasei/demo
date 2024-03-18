// export function thirdLogin(
//   userid: string,
//   password: string,
// ): Promise<loginInfo> {
//   return $fetch("/api/third_login", {
//     method: "POST",
//     body: {
//       user_id: (userid || "").toUpperCase(),
//       password: password,
//       channel: "JRY",
//       security: "DT",
//     },
//     onResponse({ response: { headers } }) {
//       const token = headers.get("token");
//       token && localStorage.setItem("token", token);
//     },
//   });
// }

// export function mainLogin(
//   userid: string,
//   password: string | number,
// ): Promise<loginInfo> {
//   return $fetch("/tt_boss/login", {
//     method: "POST",
//     body: {
//       user_id: userid,
//       password: password,
//       language: "CHT",
//       terminal_type: "DT",
//       encoding: "utf-8",
//     },
//     headers: {
//       "Content-Type": "application/json",
//       token: localStorage.getItem("token") || "",
//     },
//   });
// }
