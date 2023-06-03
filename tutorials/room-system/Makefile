.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: adsf-install
adsf-install:	## Install with asdf requirements of project
	@asdf install

.PHONY: install
install:		## Install dependencies of project
	@yarn install

.PHONY: setup
setup: asdf-install install 	## Setup project

.PHONY: test
test:	## Run tests
	@docker compose up -d db
	@yarn test