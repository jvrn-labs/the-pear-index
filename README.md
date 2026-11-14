# The Pear Index

A visual atlas of art and graphic design. Explore 148 illustrated studies across 12 chapters, using one red pear as the recurring motif.

[Browse the live atlas on GitHub Pages](https://jvrn-labs.github.io/the-pear-index/)

The [website and app UX/UI gallery](https://jvrn-labs.github.io/the-pear-index/ux-ui/) includes 66 interface studies, with filters for platform and chapter. The examples are fictional concept images, with links to design documentation and references in the study details.

## Run locally

This project is a static site and needs no build step. From the repository root, run:

```sh
python3 -m http.server 8000 --directory dist
```

Open [localhost:8000](http://localhost:8000/) in your browser. Search the catalog, filter by chapter, or open an artwork to read its description. In the detail view, use the arrow keys to browse and Escape to close.

`dist/catalog.js` and `dist/ui-catalog.js` contain study metadata and artwork coordinates. The generated illustrations are stored in `dist/art/`.
