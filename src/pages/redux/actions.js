import { createAsyncThunk } from "@reduxjs/toolkit";
import { headers } from "../../utils/api";
import axios from "axios";

const getData = createAsyncThunk("covid/getData", async ({ code, query }) => {
  const params = { iso: code, q: query };
  const req1 = axios.get("https://covid-19-statistics.p.rapidapi.com/reports", {
    params,
    headers,
  });
  const req2 = axios.get(
    code
      ? `https://restcountries.com/v3.1/alpha/${code}`
      : `https://restcountries.com/v3.1/name/${query}`
  );

  const responses = await Promise.all([req1, req2]);

  const covid = {
    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
  };
  delete covid.region;
  delete covid.cities;

  console.log(responses[0].data.data[0]);

  return { covid, country: responses[1].data[0] };
});
export default getData;
