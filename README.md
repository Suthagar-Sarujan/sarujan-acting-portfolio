# Sarujan – Acting Portfolio (Angular, Clean Architecture)

## Run
```
npm install
npm start        # http://localhost:4200
npm run build    # output in dist/
```

## Add your content (no code changes)
- Text, projects, timeline, contact: `public/data/portfolio.json`
- Photos: `public/assets/images/` (`hero.jpg`, `portrait.jpg`, `gallery1.jpg`…)
- Videos: `public/assets/videos/` or set a `youtube` video id in the JSON
Missing files show a styled placeholder instead of breaking.

## Architecture (`src/app`)
| Layer | Folder | Responsibility |
|---|---|---|
| Domain | `domain/` | Entities (`models`) and ports (`repositories`). No Angular/HTTP. |
| Application | `application/use-cases` | Use cases; depend only on domain ports. |
| Infrastructure | `infrastructure/` | Port implementations (HTTP → `portfolio.json`). |
| Presentation | `presentation/` | Pages, sections, layout, shared directives. |

Dependencies point inward: presentation → application → domain ← infrastructure.
`app.config.ts` is the composition root that binds `PortfolioRepository` to `HttpPortfolioRepository`.
