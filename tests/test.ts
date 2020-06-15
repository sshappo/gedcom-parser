import {GedcomParser} from '../src';
import * as fs from 'fs';

const FILE_NAME = './testFile.ged';

fs.readFile(FILE_NAME, 'utf8', (err, gedcom) => {
    if (err) return err;
    const parser = new GedcomParser(JSON.stringify(gedcom));
    console.log(parser.data);
});

