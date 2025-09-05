Some of the concepts are omitted for simplicity, but the idea is here. SOLID, dependency rule and stuff like that.

Tree snapshot:
.
├── package-lock.json
├── package.json
├── readme.md
├── src
│   ├── application
│   │   ├── index.ts
│   │   ├── repositories
│   │   │   ├── index.ts
│   │   │   └── task.repository.ts
│   │   └── usecases
│   │       ├── index.ts
│   │       ├── task
│   │       │   ├── complete.ts
│   │       │   ├── create.ts
│   │       │   └── get-all.ts
│   │       └── tests
│   │           ├── complete-task-integration.test.ts
│   │           ├── create-task-integration.test.ts
│   │           └── get-all-tasks-integration.test.ts
│   ├── domain
│   │   ├── entities
│   │   │   ├── index.ts
│   │   │   ├── task.ts
│   │   │   └── tests
│   │   │       └── task.test.ts
│   │   ├── errors
│   │   │   ├── index.ts
│   │   │   └── validation.ts
│   │   └── index.ts
│   ├── infrastructure
│   │   ├── errors
│   │   │   ├── base-error-ensurance.ts
│   │   │   └── index.ts
│   │   ├── persistence
│   │   │   ├── in-memory-task-repository.ts
│   │   │   └── index.ts
│   │   └── web
│   │       ├── controllers
│   │       │   ├── index.ts
│   │       │   └── task.ts
│   │       ├── index.ts
│   │       └── server.ts
│   └── main.ts
└── tsconfig.json