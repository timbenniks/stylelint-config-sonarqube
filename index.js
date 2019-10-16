"use strict";

// mapping used: https://github.com/SymphonyOSF/sonar-css-plugin/blob/master/doc/stylelint-sonarqube-rule-mapping.md

module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    // "!important" annotation should not be used
    "declaration-no-important": true,
    "keyframe-declaration-no-important": true,

    // CSS should be written in lower case
    "property-case": "lower",
    "function-name-case": "lower",
    "at-rule-name-case": "lower",
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-element-case": "lower",
    "selector-type-case": "lower",
    "unit-case": "lower",
    "color-hex-case": "lower",

    // Duplicated properties should be removed
    "declaration-block-no-duplicate-properties": true,

    // Each declaration should end with a semicolon
    "declaration-block-trailing-semicolon": "always",

    // Empty declarations should be removed
    "no-extra-semicolons": true,

    // Empty rules should be removed
    "block-no-empty": true,

    // Empty stylesheets should be removed
    "no-empty-source": true,

    // Experimental @-rules should not be used
    "at-rule-no-vendor-prefix": true,

    // Experimental identifiers should not be used
    "value-no-vendor-prefix": true,

    // Experimental properties should not be used
    "property-no-vendor-prefix": true,

    // Files should contain an empty new line at the end
    "no-missing-end-of-source-newline": true,

    // Leading zeros should be removed
    "number-leading-zero": "never",

    // Lines should not be too long
    "max-line-length": 500,

    // Lines should not end with trailing whitespaces
    "no-eol-whitespace": true,

    // Over-specified selectors should be simplified
    "selector-max-compound-selectors": 8,

    // Protocol-relative URL should not be used
    "function-url-no-scheme-relative": true,

    // Shorthand properties should be used whenever possible
    "declaration-block-no-redundant-longhand-properties": true,

    // Single quotes should be used instead of double quotes for strings
    "string-quotes": "single",

    // Source code should comply with formatting standards
    "block-opening-brace-newline-after": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-bang-space-after": "never",

    // There should be one single declaration per line
    "declaration-block-single-line-max-declarations": 1,

    // Trailing zeros for numeric values should be removed
    "number-no-trailing-zeros": true,

    // Units for zero length values should be removed
    "length-zero-no-unit": true,

    "no-descending-specificity": null,

    // Unknown @-rules should be removed
    "at-rule-no-unknown": true,

    // Unknown properties should be removed
    "property-no-unknown": true,

    // Unknown pseudo-elements and pseudo-classes should be removed
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,

    // Unknown type selectors should be removed
    "selector-type-no-unknown": true,

    // URL should be quoted
    "function-url-quotes": "always"
  }
};
