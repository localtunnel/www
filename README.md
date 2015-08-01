# Localtunnel website static

Made with [Headstart](http://headstart.io).

## Build

To build production ready files, install Headstart ([requirements](http://headstart.io/installation#requirements)):
```bash
npm install -g headstart
```

Then run:
```bash
hs build --p
```

FIles will be located in the `export` folder.

## Notes

The landing page uses some PHP to check if the custom font has been loaded before and sets a cookie if it does. This minimizes the FOUT on later visits.

## License

Licensed under MIT.