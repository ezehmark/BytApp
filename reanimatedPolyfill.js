if (typeof globalThis !== 'undefined') {
  if (!globalThis.__reanimatedLoggerConfig) {
    globalThis.__reanimatedLoggerConfig = {
      logFunction: (data) => {
        const message = data?.message?.content || data?.message || String(data);
        if (data?.level === 'error' || data?.level === 'fatal' || data?.level === 'syntax') {
          console.error(message);
        } else {
          console.warn(message);
        }
      },
      level: 1,
      strict: false,
    };
  }

  if (typeof global !== 'undefined' && !global.__reanimatedLoggerConfig) {
    global.__reanimatedLoggerConfig = globalThis.__reanimatedLoggerConfig;
  }
}
