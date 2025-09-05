```
.
├── package-lock.json
├── package.json
├── readme.md
├── src
│   ├── base-error-ensurance.ts
│   ├── main.ts
│   └── task
│       ├── domain
│       │   ├── errors
│       │   │   └── validation.error.ts
│       │   └── task.ts
│       ├── infrastructure
│       │   ├── in-memory-task.repository.ts
│       │   ├── task.controller.ts
│       │   └── task.repository.ts
│       ├── task.test.ts
│       └── usecases
│           ├── complete.ts
│           ├── create.ts
│           ├── get-all.ts
│           └── tests
│               ├── complete-task-integration.test.ts
│               ├── create-task-integration.test.ts
│               └── get-all-tasks-integration.test.ts
└── tsconfig.json
```