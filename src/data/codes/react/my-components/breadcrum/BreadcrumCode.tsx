export const DefaultBreadcrumCode = `
<Breadcrumb>
    <BreadcrumbLink>Section 1</BreadcrumbLink>
    <BreadcrumbLink>Section 1.5</BreadcrumbLink>
    <BreadcrumbLink>Section 1.5.3</BreadcrumbLink>
    <BreadcrumbLink>Section 1.5.3.2</BreadcrumbLink>
</Breadcrumb>
`;

export const BreadcrumWithHrefCode = `
<Breadcrumb>
    <BreadcrumbLink href="/react">React</BreadcrumbLink>
    <BreadcrumbLink href="/react/my-components">
        My Components
    </BreadcrumbLink>
    <BreadcrumbLink href="/react/my-components/breadcrumb">
        Breadcrumb
    </BreadcrumbLink>
</Breadcrumb>
`;

export const BreadcrumWithCustomSeparatorCode = `
<Breadcrumb separator="-">
    <BreadcrumbLink>React</BreadcrumbLink>
    <BreadcrumbLink>My Components</BreadcrumbLink>
    <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
</Breadcrumb>
`;

export const BreadcrumWithCustomSeparatorIconCode = `
<Breadcrumb separator={<ReactIcon />}>
    <BreadcrumbLink>React</BreadcrumbLink>
    <BreadcrumbLink>My Components</BreadcrumbLink>
    <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
</Breadcrumb>
`;

export const BreadcrumbsWithIconsCode = `
<Breadcrumb style={{ link: { color: "black" } }}>
    <BreadcrumbLink icon={<ReactIcon />}>React</BreadcrumbLink>
    <BreadcrumbLink icon={<ReactComponentIcon />}>
        My Components
    </BreadcrumbLink>
    <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
</Breadcrumb>
`;

export const BreadcrumbChangeColorCode = `
<Breadcrumb style={{ link: { color: "black" } }}>
    <BreadcrumbLink icon={<ReactIcon />}>React</BreadcrumbLink>
    <BreadcrumbLink icon={<ReactComponentIcon />}>
        My Components
    </BreadcrumbLink>
    <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
</Breadcrumb>
`;
