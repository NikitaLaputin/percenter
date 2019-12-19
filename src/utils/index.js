export const toNumber = val =>
  val.replace(/(^[0-9]+)(\.|,)?([0-9]+)?([^0-9,.])+/, "$1$2$3");
export const comaReplacer = val =>
  val.toString().replace(",", ".") === "."
    ? "0."
    : +val.toString().replace(",", ".");
export const dotReplacer = val =>
  val.toString().replace(".", ",") === ","
    ? "0,"
    : val.toString().replace(".", ",");
