# Multilingual json split

Split the JSON into multiple files of each language.

## 🤔 How to use?

1. Base json file:

```json
{
  "object-property": {
    "child-object-property": {
      "ua": "UA value",
      "ru": "RU value",
      "en": "EN value"
    }
  }
}
```

2. Run:

```shell
node index.js
```

## 🎉 Result

`./lang/ua.json`

```json
{
  "object-property": {
    "child-object-property": "UA value"
  }
}
```

`./lang/ru.json`

```json
{
  "object-property": {
    "child-object-property": "RU value"
  }
}
```

`./lang/en.json`

```json
{
  "object-property": {
    "child-object-property": "EN value"
  }
}
```
