import { APIStore, APIStoreImage } from "api";
import { IStoreInfo, IStoreInfoImage } from "./types";

export const getStoresInfo = async (): Promise<IStoreInfo[]> => {
  const apiUrl: string | undefined = process.env.REACT_APP_API_URL;
  const stores = await fetch(`${apiUrl}/stores`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  return convertAPIStore(stores);
};

const convertAPIStore = (apiStores: APIStore[]): IStoreInfo[] => {
  return apiStores.map((apiStore) => ({
    storeId: apiStore.storeID,
    storeName: apiStore.storeName,
    isActive: Boolean(apiStore.isActive),
    images: convertAPIStoreImage(apiStore.images),
  }));
};

// Technically not necessary as API and Interface share the same types here,
// but added for consistency/future use.
const convertAPIStoreImage = (
  apiStoreImage: APIStoreImage
): IStoreInfoImage => {
  return {
    banner: apiStoreImage.banner,
    logo: apiStoreImage.logo,
    icon: apiStoreImage.icon,
  };
};
