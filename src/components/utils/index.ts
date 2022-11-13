export const removeFromList = (list: any[], index: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
};

export const addToList = (list: any[], element: any) => {
    const result = Array.from(list);
    // result.splice(index, 0, element);
    return [...result, element]
};

export const taskTypes = [
    {name: "To Be Done", sort: "tobedone"},
    {name: "In Progress", sort: "inprogress"},
    {name: "Done", sort: "done"}
]

export const allowedPaths = [
    "/",
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/reset-password",
    "/auth/verify-email",
    "/auth/verify-email-success",
    "/auth/verify-email-failure",
    "/auth/verify-email-resent",
    "/auth/verify-email-resent-failure",
    "/auth/verify-email-resent-success",
    "/landing",
    "/landing/coming-soon",
    "/auth/signup",
];