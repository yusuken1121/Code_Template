/**
 * クエリパラメータを管理するためのオブジェクト
 * 汎用性を高めるため、アプリケーションで頻繁に使うキーを一元化。
 */
export const queryKeys = {
  FILTER: {
    FAVORITE: "favorite", // お気に入りによるフィルタリング
  },
  SEARCH: {
    QUERY: "search", // 検索クエリ
    ADD: "add", // 新しいデータの追加
  },
  SORT: "sort", // ソート順を指定するクエリ
  PAGE: "page", // ページを指定するクエリ
  LIMIT: "limit", // 1ページあたりのデータ数
  OFFSET: "offset", // データの開始位置
};
