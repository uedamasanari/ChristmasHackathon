# Dockerコンテナの概要

## 起動方法
```
cd ChristmasHackathon
docker compose up -d
```

## 起動するコンテナ (12:42現在)
|  コンテナ名  |  ポート番号  | 役割  |
| ---- | ---- | ---- |
| santa_mysql | 3306 | MySQLサーバー |
| santa_phpmyadmin  | 8080 | MySQLのGUIクライアント |
| santa_server  | 1323 | APIサーバー |
| santa_swagger  | 8888 | APIの仕様書 |
