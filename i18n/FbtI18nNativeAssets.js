/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 * This file is generated. Do not modify it manually!
 * @codegen-command : phps RepoSync intl_oss_fbt
 * @codegen-source : fbsource/xplat/intl/oss-fbt/rn-demo-app/i18n/FbtI18nNativeAssets.js
 * @generated SignedSource<<3e0ea1fbdaf33302fbb2ae68facdf640>>
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

"use strict";
import * as Localization from "expo-localization";

import source from "./fbt/output/cs_CZ.json";
const _translationsDictionary = source;
const englishIsActive = Localization.locale.startsWith("en");

export default class FbtI18nNativeAssets {
  static getString = (hashKey) => {
    if (englishIsActive) {
      return null;
    }
    return _translationsDictionary[hashKey];
  };
}
