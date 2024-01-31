import fs from "fs/promises";
import yaml from "js-yaml";

async function main() {
  const fileContents = await fs.readFile(
    `${process.env.HOME}/.config/ditto`,
    "utf8",
  );
  const yamlData = yaml.load(fileContents);
  const data = (yamlData as any)["api.dittowords.com"][0];
  if (!data) {
    console.log("Error fetching variable data");
    return;
  }

  const options = { method: "GET", headers: { Authorization: data.token } };

  const response = await fetch(
    "https://api.dittowords.com/v1/variables?includeSampleData=true",
    options,
  );
  const variables = await response.json();

  await fs.writeFile(
    "./ditto/variables.json",
    JSON.stringify(variables, null, 2),
  );
}

main();
