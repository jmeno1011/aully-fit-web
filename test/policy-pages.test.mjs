import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));

const requiredFiles = [
  "app/page.tsx",
  "app/privacy/page.tsx",
  "app/terms/page.tsx",
  "src/content/policies.ts",
  "src/components/PolicyPage.tsx",
];

for (const file of requiredFiles) {
  assert.equal(existsSync(join(root, file)), true, `${file} should exist`);
}

const policyContent = readFileSync(
  join(root, "src/content/policies.ts"),
  "utf8",
);

assert.match(policyContent, /Photos are not used for model training/);
assert.match(policyContent, /Face Data/);
assert.match(policyContent, /Aully Fit does not collect face data for face recognition/);
assert.match(policyContent, /사진은 모델 학습에 사용되지 않습니다/);
assert.match(policyContent, /얼굴 데이터/);
assert.match(policyContent, /Terms of Service/);
assert.match(policyContent, /서비스 설명/);
