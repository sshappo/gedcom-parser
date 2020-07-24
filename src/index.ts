import {GedcomParser} from "./GedcomParser";

export {GedcomParser} from "./GedcomParser";
export {BaseParser} from "./BaseParser";
export {Person} from "./Person";
export {Row} from "./Row";


const gedcom = require("./111.ged").default;
console.time('GedcomParser');
const gedcomParser = new GedcomParser(gedcom);
console.log(gedcomParser.data);
console.timeEnd('GedcomParser');