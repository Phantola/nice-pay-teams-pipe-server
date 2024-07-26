declare namespace NodeJS {
  interface ProcessEnv {
    // General Settings
    ENVIRONMENT: string;
    PORT: string;
    TZ: string;

    // Database Settings
    DATABASE_URL: string;
  }
}
