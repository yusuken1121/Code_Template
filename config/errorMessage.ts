/**
 * 多言語対応のエラーメッセージ定義
 */
export const ERROR_MESSAGES = {
  en: {
    BACKEND: {
      GENERAL: {
        UNEXPECTED: "An unexpected error has occurred.",
        NETWORK: "A network error occurred. Please check your connection.",
        FORBIDDEN: "You do not have permission to access this resource.",
        NOT_FOUND: "The requested resource was not found.",
        TIMEOUT: "The request timed out. Please try again.",
      },
      VALIDATION: {
        REQUIRED: (fieldName: string) => `${fieldName} is required.`,
        INVALID: (fieldName: string) => `The value of ${fieldName} is invalid.`,
      },
      AUTH: {
        UNAUTHORIZED: "Authentication failed. Please log in again.",
        TOKEN_EXPIRED: "Your session has expired. Please log in again.",
      },
      SERVER: {
        INTERNAL: "A server error has occurred. Please try again later.",
        MAINTENANCE:
          "The server is currently under maintenance. Please try again later.",
      },
      API: {
        INVALID: "Invalid request.",
        RATE_LIMIT: "Too many requests. Please try again later.",
        UNKNOWN_ERROR: "An unknown API error has occurred.",
        DUPLICATE: "The data already exists.",
      },
    },
    FRONTEND: {
      FORM: {
        EMPTY_FIELD: (fieldName: string) => `Please enter ${fieldName}.`,
        INVALID_INPUT: (fieldName: string) => `${fieldName} is invalid.`,
      },
      UI: {
        LOADING_FAILED: (componentName: string) =>
          `Failed to load ${componentName}.`,
      },
    },
  },
  ja: {
    BACKEND: {
      GENERAL: {
        UNEXPECTED: "予期しないエラーが発生しました。",
        NETWORK: "ネットワークエラーが発生しました。接続を確認してください。",
        FORBIDDEN: "このリソースにアクセスする権限がありません。",
        NOT_FOUND: "要求されたリソースが見つかりません。",
        TIMEOUT: "リクエストがタイムアウトしました。もう一度お試しください。",
      },
      VALIDATION: {
        REQUIRED: (fieldName: string) => `${fieldName}は必須項目です。`,
        INVALID: (fieldName: string) => `${fieldName}の値が無効です。`,
      },
      AUTH: {
        UNAUTHORIZED: "認証に失敗しました。再度ログインしてください。",
        TOKEN_EXPIRED:
          "セッションの有効期限が切れています。再度ログインしてください。",
      },
      SERVER: {
        INTERNAL: "サーバーエラーが発生しました。後でもう一度お試しください。",
        MAINTENANCE: "サーバーは現在メンテナンス中です。後ほどお試しください。",
      },
      API: {
        INVALID: "無効なリクエストです。",
        RATE_LIMIT:
          "リクエストが多すぎます。しばらくしてから再度お試しください。",
        UNKNOWN_ERROR: "不明なAPIエラーが発生しました。",
        DUPLICATE: "そのデータは既に存在しています。",
      },
    },
    FRONTEND: {
      FORM: {
        EMPTY_FIELD: (fieldName: string) => `${fieldName}を入力してください。`,
        INVALID_INPUT: (fieldName: string) => `${fieldName}が無効です。`,
      },
      UI: {
        LOADING_FAILED: (componentName: string) =>
          `${componentName}の読み込みに失敗しました。`,
      },
    },
  },
} as const;

/**
 * 多言語対応用の型定義
 */
export type Language = keyof typeof ERROR_MESSAGES;
export type ErrorMessageKeys = keyof typeof ERROR_MESSAGES.en;
