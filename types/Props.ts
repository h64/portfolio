export interface Cli {
  simulateCliTyping: (text: string) => void;
}

export interface IntervalSingleton {
  interval: number;
  start: (text: string) => void;
  stop: () => void;
  clear: () => void;
}
