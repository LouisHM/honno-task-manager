const priorityEnum = {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
} as const;

export type priorityType = (typeof priorityEnum)[keyof typeof priorityEnum];
