const PARENT_TAGS: any = {
    BIRT: 'BIRT',
    EDUC: 'EDUC',
};
const TAG_GED = {
    DATE: 'DATE',
    PLAC: 'PLAC',
    NOTE: 'NOTE',
    CONC: 'CONC',
    CONT: 'CONT',
    ...PARENT_TAGS
};

export class Person {

    private currentParentTag: string;
    private info: any = {};

    get data(): any {
        return this.info;
    }

    constructor(readonly id: string) {}

    getLine(tag: string, value: Array<string>): void {
        if (PARENT_TAGS[tag]) {
            this.currentParentTag = tag;
        }
        switch (tag) {
            case TAG_GED.DATE:
                this.addDataCase(tag, TAG_GED.BIRT, value);
                this.addDataCase(tag, TAG_GED.EDUC, value);
                break;
            case TAG_GED.PLAC:
                this.addDataCase(tag, TAG_GED.EDUC, value);
                break;
            case TAG_GED.NOTE:
                this.addDataCase(tag, TAG_GED.EDUC, value);
                break;
            case TAG_GED.CONC:
                this.addDataCase(tag, TAG_GED.EDUC, value);
                break;
            case TAG_GED.CONT:
                this.addDataCase(tag, TAG_GED.EDUC, value);
                break;
            default:
                this.setValue(tag, value.join(' '));
        }

    }

    setValue(field: string, value: string | Array<string> | Object): void {
        if (field === void 0 || value === void 0) return;

        this.info[field] = value;
    }

    addDataCase(TAG_LINE: string, COMPARE_TAG: string, value: Array<string>): void {
        if (this.currentParentTag === COMPARE_TAG) {
            if (!this.info[COMPARE_TAG]) {
                this.info[COMPARE_TAG] = {};
            }
            this.info[COMPARE_TAG][TAG_LINE] = value.join(' ');
        }
    }
}
