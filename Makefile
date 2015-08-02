build:
	hs build -p

deploy:
	make build
	git init export
	cd export && \
		git remote add origin git@github.com:localtunnel/www.git && \
		git co -b gh-pages && \
		rm .htaccess && \
		git add . && \
		git ci -m "make it so" && \
		git push -f origin gh-pages

.PHONY: build
