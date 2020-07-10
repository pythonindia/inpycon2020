.PHONY: install dev build clean

BUILD_OUTPUT?=public
BASEURL?="https://in.pycon.org/2020"

install:
	bundle install

dev: install
	jekyll serve --watch

build: install
	jekyll build --baseurl ${BASEURL} -d ${BUILD_OUTPUT}

clean:
	rm -r ${BUILD_OUTPUT}
