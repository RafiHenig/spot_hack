import * as f from 'node-fetch';
import { Response } from 'node-fetch';
import { range } from 'rxjs';
import { switchMap, tap, mergeMap, map } from 'rxjs/operators';

const fetch = f.default;

function request(): Promise<Response> {
  return fetch(
    'https://api-2-0.spot.im/v1.0.0/authenticate',
    {
      headers: {
        'accept': '*/*',
        'accept-language': 'he-IL,he;q=0.9',
        'content-type': 'application/json',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'x-post-id': '1001358607',
        'x-spot-id': 'sp_oYNOQACf',
        'x-spotim-device-uuid': '346bfa55-a137-4728-a85c-e58cbc7df744'
      },
      referrer: 'https://www.globes.co.il/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: 'undefind',
      method: 'POST',
      mode: 'cors'
    } as any)
}

range(0, 10)
  .pipe(
    mergeMap(x => request()),
    map(res => res.headers.entries()),
    map(x => Array.from(x)),
    mergeMap(res => {
const d = OperationHeaders.setFields(res as any);
     return like(OperationHeaders.setFields(res as any))
    
    })
  ).subscribe(e => console.log(e))


function like(instance: OperationHeaders) {

  return fetch("https://api-2-0.spot.im/v1.0.0/rank/rank/message", {
    "headers": {
      "accept": "application/json",
      "accept-language": "he-IL,he;q=0.9",
      "content-type": "application/json",
      "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      ...instance
    },
    "referrer": "https://www.globes.co.il/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"operation\":\"like\",\"message_id\":\"sp_oYNOQACf_1001358607_c_1noVXKi1tiFjlOnD96rJUkLcZPD\",\"source\":\"conversation\"}",
    "method": "POST",
    "mode": "cors"
  } as any);

}


class OperationHeaders {
  "x-access-token": string;
  "x-spot-id": string;
  "x-spotim-device-uuid": string;
  "x-spotim-device-v2": string;
  "x-spotim-page-view-id": string;

  static setFields(params: [keyof OperationHeaders, string][]) {
    const instance = new OperationHeaders();
    for (const [key, value] of params) {
      instance[key] = value;
    }
    return instance;
  }
}