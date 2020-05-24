install:
	npm install

install-deps:
	npm ci

run:
	bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage