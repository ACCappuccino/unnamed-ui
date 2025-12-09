# 项目目录结构说明

本文档详细介绍了本设计系统与组件库项目的目录结构。该项目采用 Monorepo 架构，使用 `pnpm` workspace 管理依赖。

## 根目录概览

```text
.
├── apps/               # 应用程序目录，包含文档站点等
├── packages/           # 共享包目录，包含 CLI 工具等
├── pnpm-workspace.yaml # pnpm workspace 配置文件
├── turbo.json          # TurboRepo 配置文件
└── ...
```

## Apps 目录 (`apps/`)

### `apps/www/`

这是项目的主文档站点和组件展示平台，基于 Next.js 构建。

```text
apps/www/
├── app/                    # Next.js App Router 路由目录
│   ├── (home)/             # 首页路由
│   ├── api/                # API 路由
│   ├── docs/               # 文档页面路由
│   ├── themes/             # 主题相关路由
│   └── ...
├── components/             # 文档站点自用的 UI 组件
├── content/                # 文档内容 (MDX 格式)
│   ├── docs/               # 文档页面内容
│   │   ├── blocks/         # 区块文档
│   │   ├── components/     # 组件文档
│   │   └── ...
│   └── ...
├── lib/                    # 工具函数库
├── registry/               # [核心] 组件注册表源码
│   ├── wuhan/              # "wuhan" 组件集合/主题
│   │   ├── blocks/         # 较大的 UI 区块 (Block)
│   │   ├── examples/       # 组件使用示例
│   │   └── ui/             # 基础 UI 组件 (Button, Input 等)
│   ├── styles.ts           # 样式相关配置
│   └── ...
├── registry.json           # 组件注册表元数据配置
└── ...
```

#### 关键目录说明：

- **`registry/`**: 这是组件库的核心代码所在。它按照集合（如 `wuhan`）组织。
    - **`ui/`**: 存放原子组件，如 Button, Input。
    - **`blocks/`**: 存放由多个组件组成的复杂区块。
    - **`examples/`**: 存放用于文档展示的组件示例代码。
- **`content/`**: 存放 MDX 文档，这些文档会引用 `registry` 中的示例。
- **`registry.json`**: 定义了所有组件、区块和示例的元数据（名称、依赖、文件路径等），供 CLI 工具和文档站点使用。

## Packages 目录 (`packages/`)

### `packages/cli/`

这是项目的命令行工具，用于帮助用户初始化项目或添加组件。

```text
packages/cli/
├── src/
│   ├── commands/           # 命令实现 (如 create, init)
│   ├── types/              # 类型定义
│   └── index.ts            # 入口文件
└── ...
```

## 配置文件

- **`pnpm-workspace.yaml`**: 定义了工作区包含 `apps/*` 和 `packages/*`。
- **`apps/www/registry.json`**: 定义了组件库的注册表信息，包括组件名称、类型、依赖关系和文件路径。这是自动化工具和文档生成的关键数据源。
