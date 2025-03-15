# v5.12.4

## Feature

- Remove table of contents

# v5.12.3

## Bug fixes

- Fixed issue that cjk fonts used unicode-range from 0030 instead of 3000

# v5.12.2

## Bug fixes

- Fixed issue of subfont build failures when the same font faces with different unicode ranges are used

# v5.12.1

## Refactor

- Use unicode-range instead of manually set font language

# v5.12.0

## Polish

- Subset font files for better loading performance
  - For latin-only fonts, subset with unicode range from U+0020 to 00BF
  - For CJK fonts, from U+3000 to 312F, 3300 to 9FFF, F900 to FAFF

# v5.11.2

- Show blog post list at /blog

# v5.11.1

## Polish

- Improved markdown fetch logic
- Updated markdown contents
- Removed workaround for image caption

# v5.11.0

## Features

- Add blog RSS feed

# v5.10.0

## Features

- Migrate to https://asukawang.com

## Polish

- Adjust blog DOM structure

# v5.9.2

## Features

- Mobile menu animation

## Polish

- Change font file format from .ttf to .woff2

## Chore

- Change node version from 16.19.0 to 20.18.0
- Remove redundant frontmatter properties from markdown
- Remove unused environment variables from action
