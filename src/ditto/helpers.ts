import variables from "./variables.json";

export function dittoVariableLink(key: string) {
  const variable = (variables as any)[key];
  if (!variable) {
    throw new Error(`No Ditto Variable found: ${key}`);
  }

  return variable.url;
}
