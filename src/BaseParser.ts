import {Person} from "./Person";

export abstract class BaseParser {

    protected gedcom: any = {};
    protected currentPerson: Person;

    get data() {
        return this.gedcom;
    }

    constructor(gedcom: string) {
        this.currentPerson = new Person('');

        const gedcomLinesArr = gedcom.toString()
            .trim()
            .split("\n");
        gedcomLinesArr.reduce((currentId: string, line: string) => {
            const id = this.lineToRow(line);
            return id ? id : currentId;
        }, '');
    }

    lineToRow(line: string): string {
        const split = line.trim().split(' ');
        const level = parseInt(split.shift());
        let tag = split.shift();
        let id;
        let value;

        if (tag.startsWith("@")) {
            id = tag;
            tag = split.shift()
        }

        this.formatLineValue(id, level, tag, split);
        return id;
    }

    abstract formatLineValue(id: string, level: number, tag: string, value: Array<string>): void;
}