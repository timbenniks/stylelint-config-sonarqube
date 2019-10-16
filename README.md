# stylelint-config-sonarqube

A [Stylelint](https://stylelint.io/) config that attempts to map [sonar](https://www.sonarqube.org/) css rules to stylelint rules.

## Mapping

This [mapping](https://github.com/SymphonyOSF/sonar-css-plugin/blob/master/doc/stylelint-sonarqube-rule-mapping.md) has been used to come to the correct styleint rules to use.

### The following Sonar CSS rules are covered

- "!important" annotation should not be used
- CSS should be written in lower case
- Duplicated properties should be removed
- Each declaration should end with a semicolon
- Empty declarations should be removed
- Empty rules should be removed
- Empty stylesheets should be removed
- Experimental @-rules should not be used
- Experimental identifiers should not be used
- Experimental properties should not be used
- Files should contain an empty new line at the end
- Leading zeros should be removed
- Lines should not be too long
- Lines should not end with trailing whitespaces
- Over-specified selectors should be simplified
- Protocol-relative URL should not be used
- Shorthand properties should be used whenever possible
- Single quotes should be used instead of double quotes for strings
- Source code should comply with formatting standards
- There should be one single declaration per line
- Trailing zeros for numeric values should be removed
- Units for zero length values should be removed
- Unknown @-rules should be removed
- Unknown properties should be removed
- Unknown pseudo-elements and pseudo-classes should be removed
- Unknown type selectors should be removed
- URL should be quoted

## If you are using SCSS you might want to add the following rules manually:

```javascript
// Unknown @-rules should be removed
"at-rule-no-unknown": null,
"scss/at-rule-no-unknown": true,

// Rulesets should not be nested too deeply
"max-nesting-depth": 3
```

## How to use

Install the npm module:

```
yarn add stylelint-config-sonarqube --dev
```

or

```
npm install stylelint-config-sonarqube --save-dev
```

Extend the Stylelint ruleset by adding this to your `.stylelintrc.js`:

```javascript
module.exports = {
  extends: ["stylelint-config-sonarqube"]
};
```

You can extend it with your own [rules](https://stylelint.io/user-guide/rules/) and [plugins](https://stylelint.io/user-guide/plugins/).
