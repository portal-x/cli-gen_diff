install:
		install-deps

install-deps:
		npm ci

run:
		## index.js

publish:
		npm publish --dry-run

lint:
		npx eslint .

test:
		npm test

test-coverage:
		npm test -- --coverage