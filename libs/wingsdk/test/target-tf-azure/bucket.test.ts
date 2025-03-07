import * as cdktf from "cdktf";
import * as cloud from "../../src/cloud";
import * as tfazure from "../../src/target-tf-azure";
import { mkdtemp } from "../../src/util";
import {
  tfResourcesOf,
  tfResourcesOfCount,
  tfSanitize,
  treeJsonOf,
} from "../util";

test("create a bucket", () => {
  // GIVEN
  const app = new tfazure.App({ outdir: mkdtemp(), location: "East US" });
  new cloud.Bucket(app, "my_bucket");
  const output = app.synth();

  // THEN
  expect(tfResourcesOf(output)).toEqual([
    "azurerm_resource_group",
    "azurerm_storage_account",
    "azurerm_storage_container",
  ]);
  expect(tfResourcesOfCount(output, "azurerm_storage_container")).toEqual(1);
  expect(tfSanitize(output)).toMatchSnapshot();
  expect(treeJsonOf(app.outdir)).toMatchSnapshot();
});

test("create multiple buckets", () => {
  // GIVEN
  const app = new tfazure.App({ outdir: mkdtemp(), location: "East US" });
  new cloud.Bucket(app, "my_bucket");
  new cloud.Bucket(app, "my_bucket2");
  const output = app.synth();

  // THEN
  expect(tfResourcesOf(output)).toEqual([
    "azurerm_resource_group",
    "azurerm_storage_account",
    "azurerm_storage_container",
  ]);
  expect(tfResourcesOfCount(output, "azurerm_storage_container")).toEqual(2);
  expect(tfSanitize(output)).toMatchSnapshot();
  expect(treeJsonOf(app.outdir)).toMatchSnapshot();
});

test("bucket is public", () => {
  // GIVEN
  const app = new tfazure.App({ outdir: mkdtemp(), location: "East US" });
  new cloud.Bucket(app, "my_bucket", { public: true });
  const output = app.synth();

  // THEN
  expect(tfResourcesOf(output)).toEqual([
    "azurerm_resource_group",
    "azurerm_storage_account",
    "azurerm_storage_container",
  ]);
  expect(tfResourcesOfCount(output, "azurerm_storage_container")).toEqual(1);
  expect(tfSanitize(output)).toMatchSnapshot();
  expect(treeJsonOf(app.outdir)).toMatchSnapshot();
});

test("bucket with two preflight objects", () => {
  // GIVEN
  const app = new tfazure.App({ outdir: mkdtemp(), location: "East US" });
  const bucket = new cloud.Bucket(app, "my_bucket", { public: true });
  bucket.addObject("file1.txt", "hello world");
  bucket.addObject("file2.txt", "boom bam");
  const output = app.synth();

  // THEN
  expect(tfResourcesOf(output)).toEqual([
    "azurerm_resource_group",
    "azurerm_storage_account",
    "azurerm_storage_blob",
    "azurerm_storage_container",
  ]);
  expect(tfResourcesOfCount(output, "azurerm_storage_blob")).toEqual(2);
  expect(tfSanitize(output)).toMatchSnapshot();
  expect(treeJsonOf(app.outdir)).toMatchSnapshot();
});

test("bucket name valid", () => {
  // GIVEN
  const app = new tfazure.App({ outdir: mkdtemp(), location: "East US" });
  const bucket = new cloud.Bucket(app, "The-Uncanny-Bucket");
  const output = app.synth();

  expect(
    cdktf.Testing.toHaveResourceWithProperties(
      output,
      "azurerm_resource_group",
      {
        name: `Default-${app.node.addr.substring(0, 8)}`,
      }
    )
  ).toEqual(true);

  expect(
    cdktf.Testing.toHaveResourceWithProperties(
      output,
      "azurerm_storage_account",
      {
        name: `default${app.node.addr.substring(0, 8)}`,
      }
    )
  ).toEqual(true);

  expect(
    cdktf.Testing.toHaveResourceWithProperties(
      output,
      "azurerm_storage_container",
      {
        name: `the-uncanny-bucket-${bucket.node.addr.substring(0, 8)}`,
      }
    )
  ).toEqual(true);

  expect(tfSanitize(output)).toMatchSnapshot();
  expect(treeJsonOf(app.outdir)).toMatchSnapshot();
});
