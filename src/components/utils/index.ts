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