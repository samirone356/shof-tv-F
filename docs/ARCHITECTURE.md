# Application architecture

ShofTV uses a standalone Angular feature architecture. The goal is to keep
product areas independently understandable and make future backend integration
possible without turning page components into service or data containers.

## Folder boundaries

```text
src/app/
├── app.config.ts             # application-wide providers
├── app.routes.ts             # top-level route map only
├── core/                     # singleton app infrastructure and shell
│   ├── layout/               # application chrome
│   ├── models/               # cross-feature contracts
│   └── navigation/           # site-wide navigation configuration
├── features/                 # business capabilities
│   └── <feature>/
│       ├── data/              # local/static data sources
│       ├── models/            # feature contracts
│       └── <feature>.routes.ts
├── pages/                    # route-level UI compositions
├── shared/                   # reusable UI with no business ownership
└── components/               # reusable landing-page sections
```

## Dependency rules

1. `app.routes.ts` may only compose feature route groups.
2. Each feature owns its routes, models, and data. A page consumes feature data
   instead of declaring the same business objects inline.
3. `core` contains app-wide infrastructure; it must not contain feature
   business logic.
4. `shared` and `components` remain presentation-focused. They may receive
   data, but should not know how a feature persists or fetches it.
5. Route-level pages may compose core, shared, and feature-owned UI/data.
6. Prefer `readonly` contracts and immutable feature data. State that changes
   belongs in a component or, when shared across screens, a feature service.

## Routing strategy

Top-level areas are lazy loaded with `loadChildren`, and individual pages are
lazy loaded with `loadComponent`. This keeps the initial bundle focused on the
landing route and gives each business area a natural place to grow:

- `home`
- `about`
- `support`
- `commerce`
- `account`
- `community`
- `tickets`

When a feature gains API calls, add a feature service under that feature and
keep transport details out of its components. When it gains multiple screens,
add child route entries to its existing route file rather than expanding the
root route map.

## Next scaling step

The current `pages/` directory is retained as a route-level compatibility
boundary. New feature screens should live beside their feature route file. A
future cleanup can migrate existing page components into
`features/<feature>/pages` one feature at a time, without changing the public
routes or visual components.