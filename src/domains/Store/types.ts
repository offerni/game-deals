export interface IStoreInfo {
  storeId: string;
  storeName: string;
  isActive: boolean;
  images: IStoreInfoImage;
}

export interface IStoreInfoImage {
  banner: string;
  logo: string;
  icon: string;
}
