export interface TierData {
  name: string;
  playlistLink: string;
  tier: string;
  type: string;
  review: string;
}

export interface AppData {
  Peak: TierData;
  Good: TierData;
  Mid: TierData;
}
