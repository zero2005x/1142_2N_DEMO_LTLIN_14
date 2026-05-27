# 1142_2N_DEMO_LTLIN_14

1142 學年度 Web 程式設計課程示範與作業練習專案（淡江大學，LTLIN，學號 913410014）。  
內容依週次整理，涵蓋 React、TypeScript、Next.js、Prisma、Supabase、shadcn/ui 與 Clerk 身份驗證。

## 線上連結

- GitHub: https://github.com/zero2005x/1142_2N_DEMO_LTLIN_14
- Vercel: https://1142-vercel-ltlin-14.vercel.app/

## 目錄說明

| 資料夾 | 說明 |
|--------|------|
| `w01-ceate-react-app` | Create React App 練習專案 |
| `w01_typescript_14` | Vite + TypeScript 基礎語法與型別練習 |
| `w02_typescript_14` | Type Alias、Interface、Modules、Generics、zod 資料驗證 |
| `w03_nextjs_demo_14` | Next.js App Router、Navbar、`next/image`、tours 頁面 |
| `w04_prisma_14` | Next.js + Prisma + Supabase，建立 `User` / `Post` 資料表並讀取 |
| `w05_user_14` | 延續 w04，加入 server actions 完成使用者 CRUD 與訊息回饋 |
| `w07_code_stud_14` | 購物清單應用，含 localStorage 版與資料庫版 CRUD |
| `w10_shadcn_14` | 整合 shadcn/ui、midterm 商店、Quiz1 部落格、dark/light mode |
| `W11_tweakcn_14` | **最新主專案**：tweakcn 主題、Clerk 身份驗證、Store 電商功能 |
| `demo/md` | 每週 markdown 筆記、操作截圖與 git log |

## 各週內容摘要

### W01

- 建立 GitHub 專案。
- 練習 TypeScript 基本型別、Union Type、Object 與 Function Fundamentals。
- 包含 CRA 與 Vite 兩種前端起始專案。

### W02

- 練習 Type Alias、Interface、Modules、Generics。
- 使用 `zod` 驗證外部資料格式。
- 範例主要位於 `w02_typescript_14/src/tutorials`。

### W03

- 使用 Next.js 建立 App Router 專案。
- 實作 Navbar 與 metadata。
- 建立 `/tours_14` 頁面，使用 `next/image` 顯示遠端旅遊資料。

### W04

- 使用 Prisma schema 定義 `User` 與 `Post`。
- 連接 PostgreSQL / Supabase，透過 Prisma 建立資料表與測試資料。
- 在 Next.js 中實作 `user_db_14` 頁面，從資料庫讀取使用者資料。

### W05

- 專案部署到 Vercel。
- 實作 `supabase_14` 頁面，透過 Supabase REST API 顯示 `User` 與 `Post`。
- 實作 `user_db_14` 頁面，使用 server actions 進行新增、修改、刪除。
- 表單元件已加入提交狀態與操作結果訊息顯示。

### W07

- 實作購物清單 (Grocery List) 應用，包含兩種版本：
  - `grocery_14`：客戶端實作，使用 localStorage 儲存資料。
  - `grocery_db_14`：資料庫實作，使用 Prisma + Supabase 進行 CRUD 操作。
- 將刪除按鈕重構為獨立的 `DeleteButton_14` 元件。
- 使用 `react-toastify` 提供使用者操作回饋。

### W10

引入 **shadcn/ui** 元件庫並整合所有功能為完整展示應用（`w10_shadcn_14`）。

- Next.js 15 (App Router) + TypeScript + React 19
- Prisma 7 + `@prisma/adapter-pg` + Supabase PostgreSQL
- shadcn/ui（Menubar、Button）+ Tailwind CSS 4 + next-themes（dark/light mode）

### W11

在 `W11_tweakcn_14` 中導入 **Clerk** 身份驗證。

- 使用 tweakcn 自訂 shadcn/ui 主題樣式。
- 整合 Clerk，實作 GitHub / Google 登入。
- 取得 JWT Token，在 `jwt.io` 驗證並從 Clerk 取得 `userId`。
- 設定 `ADMIN_USER_ID` 環境變數。
- 成功部署至 Vercel，通過登入測試。

### W12

延續 `W11_tweakcn_14`，建立 Store 電商核心功能。

- 使用 `npx prisma db seed` 新增 4 筆初始商品資料至 Supabase。
- 實作登入／登出導覽列：未登入顯示 Login / Register，已登入顯示連結與 Logout。
- 實作 `isAdminUser` 檢查：管理員帳號可看到額外的 Admin 連結。

### W13

繼續擴充 Store 電商功能。

- 新增 `NavSearch_14` 搜尋元件與 `CartButton_14` 購物車按鈕。
- 使用 React `Suspense` 包裹非同步資料載入。
- 從 Supabase 讀取 3 筆精選商品（featured products）並顯示。
- 實作 Hero Carousel 輪播橫幅元件。
- 完成精選商品卡片列表頁面。

### W14（最新）

完成 Store 電商核心查詢與後台功能。

- 將 6 個 Store 相關 Prisma model 同步至 Supabase（`npx prisma db push`）。
- 實作商品搜尋：支援 `?layout=list&search=...` 與 `?layout=grid&search=...` 參數。
- 實作商品詳情頁，顯示單一商品完整資訊。
- 實作管理後台 `/store_14/admin_14/sales_14`：限 admin user 可存取，顯示訂單銷售表格。
- 使用 `proxy.tsx` 與 `getAdminUser` 進行後台存取控制。

## 最新主專案：`W11_tweakcn_14`

目前最新的示範專案，整合了 W11～W14 所有功能。

**技術棧：**
- Next.js 15 (App Router) + TypeScript + React 19
- Prisma 7 + `@prisma/adapter-pg`（連線 Supabase PostgreSQL）
- Supabase JS（伺服器端 admin client + 前端 public client）
- Clerk（身份驗證、JWT、管理員判斷）
- tweakcn + shadcn/ui + Tailwind CSS 4
- next-themes（dark / light mode）
- react-icons、react-toastify、lucide-react

**主要頁面：**

| 路由 | 說明 |
|------|------|
| `/counter_14` | useState 計數器 |
| `/tours_14` | 讀取外部 tours API，使用 `next/image` 顯示圖片 |
| `/grocery_14` | 客戶端購物清單（localStorage） |
| `/grocery_db_14` | 資料庫版購物清單（Prisma server actions） |
| `/supabase_14` | 透過 Supabase 伺服器端金鑰讀取資料 |
| `/user_db_14` | 使用者管理（Prisma CRUD + server actions） |
| `/mid_14` | 期中考商店：商品分類、商品列表、新增/刪除商品 |
| `/quiz1_14` | Quiz1：部落格管理（本地 + 資料庫兩版本） |
| `/store_14` | Store 電商首頁：精選商品、Hero Carousel、搜尋 |
| `/store_14/[category]` | 商品分類列表頁，支援搜尋與 grid/list 版面切換 |
| `/store_14/[category]/[id]` | 商品詳情頁 |
| `/store_14/admin_14/sales_14` | 管理後台銷售表格（限 admin user） |

## 執行方式

### 啟動最新展示專案（W11_tweakcn_14）

```bash
cd W11_tweakcn_14
npm install
npm run dev
```

### 啟動 TypeScript / Vite 練習專案

```bash
cd w02_typescript_14
npm install
npm run dev
```

### 建置 Next.js 專案

```bash
cd W11_tweakcn_14
npm run build
```

## 環境變數

`W11_tweakcn_14`（及 w04/w05/w07/w10）需要以下環境變數：

```env
DATABASE_URL=
DIRECT_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
ADMIN_USER_ID=
```

| 變數 | 用途 |
|------|------|
| `DATABASE_URL` | Prisma pooled connection URL（Supabase Transaction Pooler） |
| `DIRECT_URL` | Prisma direct connection URL（Supabase Session Pooler，用於 migration） |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 專案 URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | 前端可使用的 Supabase publishable key |
| `SUPABASE_SECRET_KEY` | 伺服器端使用的 Supabase secret key |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk 前端公開金鑰 |
| `CLERK_SECRET_KEY` | Clerk 伺服器端金鑰 |
| `ADMIN_USER_ID` | 管理員的 Clerk userId，用於 `isAdminUser` 判斷 |

## 參考紀錄

- [demo/md/w01_typescript_14/w01_typescript_14.md](demo/md/w01_typescript_14/w01_typescript_14.md)
- [demo/md/w02_typescript_14/w02_typescript_14.md](demo/md/w02_typescript_14/w02_typescript_14.md)
- [demo/md/w03_nextjs_demo_14/w03_nextjs_demo_14.md](demo/md/w03_nextjs_demo_14/w03_nextjs_demo_14.md)
- [demo/md/w04_prisma_14/w04_prisma_14.md](demo/md/w04_prisma_14/w04_prisma_14.md)
- [demo/md/w05_user_14/w05_user_14.md](demo/md/w05_user_14/w05_user_14.md)
- [demo/md/w07_code_stud_14/w07_code_stud_14.md](demo/md/w07_code_stud_14/w07_code_stud_14.md)
- [demo/md/w10_shadcn_14/w10_shadcn_14.md](demo/md/w10_shadcn_14/w10_shadcn_14.md)
- [demo/md/w11_tweakcn_14/w11_tweakcn_14.md](demo/md/w11_tweakcn_14/w11_tweakcn_14.md)
- [demo/md/w12_14/w12_14.md](demo/md/w12_14/w12_14.md)
- [demo/md/w13_14/w13_14.md](demo/md/w13_14/w13_14.md)
- [demo/md/w14_14/w14_14.md](demo/md/w14_14/w14_14.md)

## 常用指令

```bash
# 查看特定日期之後的 git 紀錄
git log --pretty=format:"%h%x09%an%x09%ad%x09%s" --after="2026-3-3"
```
