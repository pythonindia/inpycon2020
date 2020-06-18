.PHONY: install dev build clean

BUILD_OUTPUT?=public

install:
	bundle install

dev: install
	jekyll serve --watch

build: install
	jekyll build -d ${BUILD_OUTPUT}

clean:
	rm -r ${BUILD_OUTPUT}
