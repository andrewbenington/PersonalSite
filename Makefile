.PHONY: build
build: 
	@npm run build

.PHONY: serve
serve: 
	@serve -s build

.PHONY: start
start: 
	@npm run start

.PHONY: test
test: 
	@npm run test

.PHONY: lint
lint: 
	@npm run lint

.PHONY: logos
logos: install-imagemagick
	@convert public/logo.png -resize 192x192^ public/logo192.png
	@convert public/logo.png -resize 512x512^ public/logo512.png
	@convert public/logo192.png -resize 64x64^ public/favicon.ico
	@for i in 120 152 167 180; do \
		convert public/logo.png -resize $$ix$$i^ public/apple-touch-icon-$$ix$$i.png; \
	done

.PHONY: install-imagemagick
install-imagemagick:
ifeq ($(shell command -v convert),)
	@echo "Installing ImageMagick..."
	brew install imagemagick
endif