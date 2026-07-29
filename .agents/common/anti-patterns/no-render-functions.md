# No Render Functions

## Rule

Do not create JSX-returning helpers or variables named `renderXxx`, `xxxRender`, `renderSomething`, or similar inside components.

## Bad

```tsx
const renderTags = () => {
    return tags.map((tag) => <TagBadge key={tag.id} tag={tag} />);
};

return <div>{renderTags()}</div>;
```

## Good

```tsx
const TagsList = ({ tags }: TagsListProps) => {
    return (
        <div>
            {tags.map((tag) => (
                <TagBadge key={tag.id} tag={tag} />
            ))}
        </div>
    );
};

return <TagsList tags={tags} />;
```

## Apply When

Extract markup into named components. Use booleans for visibility and data variables for data.
