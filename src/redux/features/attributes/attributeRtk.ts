// Rtk
import {apiSlice} from '../api/apiSlice';
import {IAttributeInfoUpgrade} from './interfaces/attribute-upgrade-api.interface';

export const attributeApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUpgradeInfo: builder.query<IAttributeInfoUpgrade['data'], void>({
      query: () => ({url: '/attributes/upgrade_info'}),
      transformResponse: (response: IAttributeInfoUpgrade) => {
        const data = {
          kaspro_desc: response.result.info[0].description,
          banktransfer_desc: response.result.info[1].description,
        };
        return data;
      },
    }),
  }),
  overrideExisting: true,
});

export const {useGetUpgradeInfoQuery} = attributeApi;
