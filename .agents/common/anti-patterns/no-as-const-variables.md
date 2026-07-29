# No As Const Variables

## Rule

Do not create variables by appending `as const` to values.

## Bad

```ts
const routeConfig = {
    path: '/agents',
    label: 'Agents',
} as const;
```

## Good

```ts
interface RouteConfig {
    path: string;
    label: string;
}

const routeConfig: RouteConfig = {
    path: '/agents',
    label: 'Agents',
};
```

## Apply When

Use explicit types for configs, filters, state, routes, and payloads.
