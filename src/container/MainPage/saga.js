import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchUserDetails,
  fetchUserDetailsFail,
  fetchUserDetailsSuccess,
} from "./reducer";
import axios from "axios";

export function* fetchUserDetailsSaga(action) {
  try {
    const url = "https://staging.fastor.in/v1/m/restaurant?city_id=118";
    const { data } = yield call(axios, {
      method: "GET",
      url,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsInBob25lIjoiOTgxODk3OTQ1MCIsImRpYWxfY29kZSI6Iis5MSIsImxhc3RfcGFzc3dvcmRfdXBkYXRlIjoiMjAyMi0wMS0yNVQxMTo1NTo0Ny4wMDBaIiwiaWF0IjoxNjY1OTExNTgyLCJleHAiOjE2NzMxNjkxODJ9.ohOvtboMYV1TOl5U20umsF2NkYGdJHj9kw4mWJs7vAY",
      },
      //   process.env.REACT_APP_TOKEN
    });

    if (data) yield put(fetchUserDetailsSuccess(data));
    // console.log(data);
  } catch (error) {
    yield put(fetchUserDetailsFail());
    console.log(error);
  }
}

export const MainPageSaga = [
  takeLatest(fetchUserDetails.type, fetchUserDetailsSaga),
];
