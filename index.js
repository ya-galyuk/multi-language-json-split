const fs = require('fs');

/** Language code array. */
const langArr = ['ua', 'ru', 'en'];

/** Path to the folder for the generated files. */
const folderPath = './lang'

/** File path for splitting. */
const filePath = './lang.json'

const langJson = require(filePath);

/**
 * Create a file.
 * @param {string} fileName - A file name.
 * @param {string} data – Data is to place in the file.
 * @param {string} [path] – Path to the folder for the generated files.
 */
const createFile = (fileName, data, path = folderPath) => {
    try {
        if (!fs.existsSync(path)) fs.mkdirSync(path)
        fs.writeFileSync(`${path}/${fileName}.json`, data);
    } catch (err) {
        console.error(err)
    }
};

/**
 * Convert multilingual object to monolingual.
 * @param {Object} obj – Base object or child object.
 * @param {string} langValue – The language code.
 * @returns {Object} – Monolingual object.
 */
const parseJson = (obj, langValue) => {
    let keys = Object.keys(obj)
    keys.forEach(key => {
        if (typeof obj[key] === 'object') {
            if (obj[key].hasOwnProperty(langValue)) {
                obj[key] = obj[key][langValue]
            }
            return parseJson(obj[key], langValue)
        }
    })
    return obj
};

/**
 * Create monolingual files for each language code.
 * @param {Object} json – Data from a json file.
 * @param {string[]} langArr – Language code array.
 */
const splitMultiLangJson = (json, langArr) => {
    langArr.forEach(lang => {
        let langJsonCopy = JSON.parse(JSON.stringify(json));
        let langJson = parseJson(langJsonCopy, lang)
        createFile(lang, JSON.stringify(langJson))
    })
};

splitMultiLangJson(langJson, langArr)
