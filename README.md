# tyleragnew.com

Portfolio site for Tyler Agnew, SEO and GEO content strategist, content marketer, and journalist.

## Stack

Plain HTML, CSS, and JavaScript. No build step.

```
public/
  index.html      page markup, SEO meta, Person schema
  styles.css      design system and layout
  main.js         copy-email button, persona tabs, writing sample filters
  assets/         headshot, favicon, grayscale client logos
```

## Run locally

```
python3 -m http.server 8080 --directory public
```

Then open http://localhost:8080.

## Hosting

Deployed on Replit as a static deployment (see `.replit`, `publicDir = "public"`), with the custom domain tyleragnew.com pointed at it from GoDaddy DNS.

## Editing content

- Writing samples live in the `.clips` list in `public/index.html`. Add a `<li class="clip" data-type="content|journalism">` to add one.
- Upwork stats are in the `.proof` list in the hero.
- Logos are 96px-tall transparent PNGs in `public/assets/logos/`.
