# 1142_2N_DEMO_LTLIN_14

1142 學年度 Web 程式設計課程示範與作業練習專案，內容依週次整理，涵蓋 React、TypeScript、Next.js、Prisma 與 Supabase。

## 專案重點

- 以週次資料夾方式整理課堂練習與成果。
- 從 `w01`、`w02` 的 TypeScript 與前端基礎，逐步延伸到 `w03` 的 Next.js。
- `w04`、`w05` 整合 Prisma 與 Supabase，實作資料讀取與使用者 CRUD。
- `demo/md` 保留每週操作紀錄、截圖與 git log。

## 線上連結

- Github: https://github.com/zero2005x/1142_2N_DEMO_LTLIN_14
- Vercel: https://1142-vercel-ltlin-14.vercel.app/

## 目錄說明

- `w01-ceate-react-app`：Create React App 練習專案。
- `w01_typescript_14`：Vite + TypeScript 基礎語法與型別練習。
- `w02_typescript_14`：Type Alias、Interface、Modules、Generics、資料驗證等練習。
- `w03_nextjs_demo_14`：Next.js App Router、Navbar、`next/image` 與 tours 頁面。
- `w04_prisma_14`：Next.js + Prisma + Supabase，建立 `User` / `Post` 資料表並讀取資料。
- `w05_user_14`：延續 `w04`，加入 server actions 完成使用者新增、修改、刪除與回饋訊息。
- `w07_code_stud_14`：購物清單應用，包含客戶端 (localStorage) 與資料庫版本的 CRUD 實作。
- `demo/md`：每週 markdown 筆記、操作截圖與紀錄。

## 各週內容摘要

### W01

- 建立 Github 專案。
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
  - `grocery_14`：客戶端實作，使用 localStorage 儲存資料
  - `grocery_db_14`：資料庫實作，使用 Prisma + Supabase 進行 CRUD 操作
- 將刪除按鈕重構為獨立的 `DeleteButton_14` 元件
- 實作商品的新增、刪除、完成狀態切換功能
- 使用 `react-toastify` 提供使用者操作回饋
- 專案已部署到 Vercel

## 最新重點：`w07_code_stud_14`

目前最新的示範專案是 `w07_code_stud_14`，整合了以下功能：

- `src/app/grocery_14`：客戶端購物清單，使用 localStorage 進行資料持久化
- `src/app/grocery_db_14`：資料庫版購物清單，整合 Prisma + Supabase
- `src/actions/grocery_action_14.ts`：處理購物清單的 CRUD 操作（fetch、create、delete、toggle）
- `src/app/tours_14`：讀取外部 tours API，練習 App Router 與 `next/image`
- `src/app/supabase_14`：以伺服器端金鑰讀取 Supabase 資料
- `src/app/user_db_14`：透過 Prisma server actions 管理使用者資料
- `prisma/schema.prisma`：定義 `User`、`Post` 與 `Grocery` 模型

## 執行方式

本倉庫不是單一應用，而是由多個獨立子專案組成；請先切換到目標資料夾再執行指令。

### 1. 啟動 TypeScript / Vite 專案

```bash
cd w02_typescript_14
npm install
npm run dev
```

### 2. 啟動 Next.js 專案（最新版本）

```bash
cd w07_code_stud_14
npm install
npm run dev
```

### 3. 啟動較舊的 Next.js 專案

```bash
cd w05_user_14
npm install
npm run dev
```

### 4. 建置 Next.js 專案

```bash
cd w07_code_stud_14
npm run build
```

## 環境變數

`w04_prisma_14`、`w05_user_14` 與 `w07_code_stud_14` 需要資料庫與 Supabase 設定，至少包含：

```env
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
```

用途說明：

- `DATABASE_URL`：Prisma 連線 PostgreSQL / Supabase Database。
- `NEXT_PUBLIC_SUPABASE_URL`：Supabase 專案 URL。
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`：前端可使用的 Supabase publishable key。
- `SUPABASE_SECRET_KEY`：伺服器端讀取資料使用的 secret key。

## 參考紀錄

- `demo/md/w01_typescript_14/w01_typescript_14.md`
- `demo/md/w02_typescript_14/w02_typescript_14.md`
- `demo/md/w03_nextjs_demo_14/w03_nextjs_demo_14.md`
- `demo/md/w04_prisma_14/w04_prisma_14.md`
- `demo/md/w05_user_14/w05_user_14.md`
- `demo/md/w07_code_stud_14/w07_code_stud_14.md`

## 常用指令

### 查看特定日期之後的 Git 紀錄

```bash
git log --pretty=format:"%h%x09%an%x09%ad%x09%s" --after="2026-3-3"
```
