/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 * This file is generated. Do not modify it manually!
 * @codegen-command : phps RepoSync intl_oss_fbt
 * @codegen-source : fbsource/xplat/intl/oss-fbt/rn-demo-app/i18n/scripts/generate-android-localizables-executor.js
 * @generated SignedSource<<84f2daf1146f2a21b9825f3d7abfb3d7>>
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @noflow
 */

// Nice wrapper to use generate-android-localizables from babel node directly.

"use strict";

const { generateLocalizableFiles } = require("./generate-localizables");
const fs = require("fs");
const yargs = require("yargs");

const args = {
  HELP: "h",
  TRANSLATION_OUTPUT: "translationOutput",
  OUTPUT_DIR: "outputDir",
  TRANSLATIONS_FILENAME: "translationsFilename",
};

const argv = yargs
  .usage(
    "Take translations output, and write individual JSON files for each " +
      "locale:  raw-es_rES/localizable.json => {<hash>: translatedString}"
  )
  .string(args.TRANSLATION_OUTPUT)
  .default(args.TRANSLATION_OUTPUT, "./i18n/fbt/translatedFbts.json")
  .describe(args.TRANSLATION_OUTPUT, `path to the translatedFbts`)
  .string(args.OUTPUT_DIR)
  .default(args.OUTPUT_DIR, "./i18n/fbt/output")
  .describe(args.OUTPUT_DIR, `path to the output folder`)
  .string(args.TRANSLATIONS_FILENAME)
  .default(args.TRANSLATIONS_FILENAME, "")
  .describe(
    args.TRANSLATIONS_FILENAME,
    `name that json translation files should take`
  ).argv;

if (argv[args.HELP]) {
  yargs.showHelp();
  process.exit(0);
}

generateLocalizableFiles(
  JSON.parse(
    fs.readFileSync(argv[args.TRANSLATION_OUTPUT], { encoding: "utf8" })
  ),
  argv[args.OUTPUT_DIR],
  argv[args.TRANSLATIONS_FILENAME]
);
