import fs from 'fs';
import gendiff from '../src/index';

const path = './__tests__/__fixtures__/';
const extensions = ['json', 'yaml', 'ini'];
const formats = ['tree', 'plain', 'json'];

const dataForTests = (fileExtensions, outputFormats) => fileExtensions
  .map((fileExtension) => outputFormats
    .map((format) => {
      const result = fs.readFileSync(`${path}${format}result.txt`, 'utf-8');
      return [fileExtension, format, result];
    })).flat();

test.each(dataForTests(extensions, formats))(
  'compare %s on %s format',
  (extension, outputFormat, expected) => {
    const before = `${path}before.${extension}`;
    const after = `${path}after.${extension}`;
    expect(gendiff(before, after, outputFormat)).toEqual(expected);
  },
);
