import { http } from "./config";

export default {
  listar: () => {
    return http.get("all");
  },
  countryCode: (code) => {
    return http.get(`alpha/${code}`);
  },
  countryRegion: (region) => http.get(`region/${region}`),

  countryLanguage: (languages) => http.get(`languages/${languages}`),
};
