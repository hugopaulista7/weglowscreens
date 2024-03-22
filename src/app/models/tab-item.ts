export interface TabItem {
  text: string;
  isActive: boolean;
  id: TabItemId;
}

export enum TabItemId {
  progress = 'progress',
  photos = 'photos',
  activity = 'activity',
  awards = 'awards',
}
