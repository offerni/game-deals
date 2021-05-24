export interface IStoreInfo {
  storeID: string;
  storeName: string;
  isActive: boolean;
  images: IStoreInfoImage;
}

interface IStoreInfoImage {
  banner: string;
  logo: string;
  icon: string;
}
