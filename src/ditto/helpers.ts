import variables from "./variables.json";

export function dittoVariableLink(key: keyof typeof variables) {
  const variable = (variables as any)[key];
  if (!variable) {
    throw new Error(`No Ditto Variable found: ${key}`);
  }
  if (!variable.url) {
    throw new Error(`No URL found for Ditto Variable: ${key}`);
  }

  return variable.url;
}
