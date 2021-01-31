import * as fetch from 'node-fetch';
import { range } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

function request(): Promise<fetch.Response> {
  return fetch.default(
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
      switchMap(x => request()),
      switchMap(res => res.headers.entries()),
      tap(res => {

        console.log(res)
      })
  ).subscribe()
