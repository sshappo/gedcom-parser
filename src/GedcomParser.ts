import {BaseParser} from "./BaseParser";
import {Person} from "./Person";

export class GedcomParser extends BaseParser {
    formatLineValue(id: string, level: number, tag: string, value: Array<string>): void {
        if (!this.gedcom[id]) {
            this.gedcom[this.currentPerson.id] = this.currentPerson.data;
            this.gedcom[id] = {};
            this.currentPerson = new Person(id);
        } else {
            this.currentPerson.getLine(tag, value);
        }
    }
}
