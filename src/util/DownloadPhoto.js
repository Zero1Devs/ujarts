import { SupabaseGateway } from "../gateways/SupaBaseGateway";
export const DownloadPhoto = async (url) => {
  try {
    const { data, error } = await SupabaseGateway.downloadPhoto(url);
    if (error) throw error;

    return URL.createObjectURL(data);
  } catch (error) {
    console.log(error);
  }
};
