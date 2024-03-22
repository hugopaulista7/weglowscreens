export interface Medal {
  shape: 'round' | 'square' | 'hexagon' | 'star';
  text: string;
  picture?: string;
  isStreak: boolean;
}
