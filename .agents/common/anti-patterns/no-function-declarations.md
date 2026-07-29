# No Function Declarations By Default

## Rule

Use arrow functions for new or changed functions unless framework/runtime semantics or nearby project convention require a function declaration.

## Avoid

```ts
function selectTitle(notification: Notification): string {
  return notification.content.title;
}
```

## Prefer

```ts
const selectTitle = (notification: Notification): string => {
  return notification.content.title;
};
```

## Allowed Exception

Use a function declaration only when it is required by the local file pattern, overload style, hoisting requirement, framework contract, or runtime API.

## Apply When

Use this for TypeScript implementation, bugfix, refactor, and review work.
