import { execa } from "execa";
import * as fs from "fs-extra";
import { expect } from "vitest";
import { wingBin } from "./paths";

export async function runWingCommand(
  cwd: string,
  wingFile: string,
  args: string[],
  shouldSucceed: boolean
) {
  const out = await execa(wingBin, [...args, wingFile], {
    cwd,
    reject: false,
    stdin: "ignore",
    all: true,
  });
  if (shouldSucceed) {
    if (out.exitCode !== 0) {
      throw out.all;
    }
  } else {
    expect(out.exitCode).not.toBe(0);
    expect(out.all).not.toBe("");
  }
  return out;
}

export function sanitize_json_paths(path: string) {
  const assetKeyRegex = /"asset\..+"/g;
  const assetSourceRegex = /"assets\/.+"/g;
  const json = fs.readJsonSync(path);

  const jsonText = JSON.stringify(json);
  const sanitizedJsonText = jsonText
    .replace(assetKeyRegex, '"<ASSET_KEY>"')
    .replace(assetSourceRegex, '"<ASSET_SOURCE>"');

  const finalObj = JSON.parse(sanitizedJsonText);
  delete finalObj.terraform;

  return finalObj;
}
