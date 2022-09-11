/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 * This file is generated. Do not modify it manually!
 * @codegen-command : phps RepoSync intl_oss_fbt
 * @codegen-source : fbsource/xplat/intl/oss-fbt/rn-demo-app/i18n/scripts/generate-android-localizables.js
 * @generated SignedSource<<ed6128e5ea1f1b6a639f8ab42381f6ce>>
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const invariant = require("invariant");
const fs = require("fs");
const path = require("path");

/**
 * Take translations output, and write individual JSON files for each locale
 */
function generateLocalizableFiles(
  translationOutput,
  outputDir,
  translationsFileName
) {
  invariant(
    !translationsFileName.includes("."),
    "translationsFileName must not contain file extension"
  );
  try {
    for (const locale in translationOutput) {
      invariant(
        locale.split("_").length === 2,
        "locale array must have two items"
      );
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
      }
      const fileName = translationsFileName
        ? `${translationsFileName}_${locale}.json`
        : `${locale}.json`;
      fs.writeFileSync(
        path.join(outputDir, fileName),
        JSON.stringify(translationOutput[locale]),
        { encoding: "utf8" }
      );
    }
  } catch (error) {
    console.error("An error occurred while generating the localizables");
    console.error(error);
    process.exit(1);
    throw error;
  }
}

module.exports = {
  generateLocalizableFiles,
};
