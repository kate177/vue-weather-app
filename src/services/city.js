import { initHttpModule } from "@/http/index.js";

export function cityService() {
  const http = initHttpModule();

  //   function getCityByName(name) {
  //     return http.get(`query=${name}`);
  //   }

  function getCityByName(name) {
    return http.get(
      `weather?q=${name}&units=metric&APPID=0c03ea0eae00ade84673af66593242d1`
    );
  }

  return { getCityByName };
}
