# github 操作步驟介紹
### 準備 github 帳號 / git /vscode

1. 註冊 github
2. 創建 repositories 
 ![](picture/1.JPG)
3. 下載 git  
![](picture/2.JPG) 

### 設定與創建具版本控制資料夾
4. 打開vscode teriminal 啟用 git bash
![](picture/3.JPG)
5. 指令 : 複製 repository 下來
```
git clone "your_github_repository_link"
```
6. 確認成功完成，檢查資料夾有.git檔表示具版控
![](picture/4.JPG)

### 上傳github 

7. 前往main資料夾
![](picture/13.JPG)
更新檔案資訊於暫存區域
```
git add .
```

8. **首次** 上傳需要設定上傳之帳戶郵箱與github 名稱
```
  git config --global user.email "you@example.com"
  git config --global user.name "Your_Name_in_github " 
```
9. 撰寫上傳訊息
```
git commit -m "message_for_update"
```
10. 上傳
```
git push
```

### 其他 LF will be replaced by CRLF the next time Git touches it
如果你在跨平台開發（例如在 Windows 和 Unix/Linux 之間切換），設置 Git 將行尾符號統一為 LF：
git config --global core.autocrlf input 


## 後續使用--將本地資料同步更新至獻上最新版本
```
git pull 
```

## 將網站架至 vercel 
1. 註冊vercel (用github 可)
2. 登入
3. add new project
![](picture/6.JPG)
4. add github account//連結github
5. select respository
![](picture/8.JPG)
6. import
![](picture/9.JPG)
7. **Congratulations!**
![](picture/10.JPG)
8. github 也會出現連結
![](picture/11.JPG)

**它預設會執行在root 裡面 index.html** 

# SASS 之 SCSS 使用
**目的** 更加結構化的CSS語法，避免屬性衝突
## 步驟(安裝SASS)
1. 安裝node.js 
2. 打開VSCODE　檢查nodejs、npm版本
![](/1132-web-demo/W11/SASS前置任務.JPG)
3. 打開terimal安裝SASS並檢查版本
```
npm install -g sass
```
檢查版本
```
sass --version
```
## SCSS使用(cd 至檔案所在位址)
建立 .scss 
### 指令
1. 單一轉檔並**即時(--watch)更新**
```
sass --watch file1.scss file1.css
```
2. 資料夾內全轉檔並即時更新
```
sass --watch folder1:folder2
```
or
```
sass --watch path1/folder1:path2/folder2
```