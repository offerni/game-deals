export interface IStoreInfo {
  storeId: string;
  storeName: string;
  isActive: number;
  images: IStoreInfoImage;
}

export interface IStoreInfoImage {
  banner: string;
  logo: string;
  icon: string;
}
export interface IStoreInfoLocal extends IStoreInfo {
  order: number;
}
