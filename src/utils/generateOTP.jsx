export default function generateOTP() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let short_code = "";
  for (let i = 0; i < 10; i++) {
    short_code += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return short_code.toUpperCase();
}
