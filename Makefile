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

GIT_ROOT=$(shell git rev-parse --show-toplevel)
CALENDAR_PATH?=$(GIT_ROOT)/assets/PyConIndia2020.ics

calendar-requirements:
	pip install -r requirements.txt

generate-calendar: calendar-requirements $(CALENDAR_PATH)

$(CALENDAR_PATH):
	python $(GIT_ROOT)/scripts/generate_calendar.py --schedule $(GIT_ROOT)/_data/talks.yml --skip-empty > $@

clean-calendar: $(CALENDAR_PATH)
	rm -rf $^
