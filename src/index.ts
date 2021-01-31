import fetch from 'node-fetch';
import { Response, Headers } from 'node-fetch';
import { range } from 'rxjs';
import { switchMap, tap, mergeMap, map } from 'rxjs/operators';






class OperationHeaders {
  "x-access-token": string;
  "x-spot-id": string;
  "x-spotim-device-uuid": string;
  "x-spotim-device-v2": string;
  "x-spotim-page-view-id": string;

  static create(params: [keyof OperationHeaders, string][]): OperationHeaders {
    const instance = new OperationHeaders();
    for (const [key, value] of params) {
      instance[key] = value;
    }
    return instance;
  }
}

class Post {
  "x-post-id": string;
  "x-spot-id": string;
  constructor(init: Partial<Post>) { return Object.assign(this, init); }
}


function getMetadData(post: Post): Promise<Response> {
  return fetch("https://api-2-0.spot.im/v1.0.0/authenticate", {
    "headers": {
      "accept": "*/*",
      "accept-language": "he-IL,he;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "x-post-id": post["x-post-id"],
      "x-spot-id": post["x-spot-id"],
    },
    "referrer": "https://www.globes.co.il/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "POST",
    "mode": "cors"
  } as any);
}


function like(instance: OperationHeaders, post: Post): Promise<Response> {

  const headers: HeadersInit =
  {
    "accept": "application/json",
    "accept-language": "he-IL,he;q=0.9",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-spot-id": post["x-spot-id"],
    "x-post-id": post["x-post-id"],
    "x-spotim-page-view-id": "d6693d3c-f01c-483a-80f2-3f29616d3cc6",
    "x-access-token": instance["x-access-token"],
    "x-spotim-device-uuid": instance["x-spotim-device-uuid"],
    "x-spotim-device-v2": instance["x-spotim-device-v2"],
  };

  return fetch("https://api-2-0.spot.im/v1.0.0/rank/rank/message", {
    headers,
    "referrer": "https://www.globes.co.il/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": {
      operation: "like",
      message_id: "sp_oYNOQACf_1001358732_c_1nnfSeGlwr1OztYEMDsmoEFbS7k",
      source: "conversation"
    },
    "method": "POST",
    "mode": "cors"
  } as any);

}

const post: Post = new Post({
  "x-post-id": "1001358732",
  "x-spot-id": "sp_oYNOQACf"
});

range(0, 10)
  .pipe(
    mergeMap(x => getMetadData(post)),
    map(res => res.headers.entries()),
    map(x => Array.from(x)),
    mergeMap(res => like(OperationHeaders.create(res as any), post)),
    mergeMap(x => x.text())
  )
  .subscribe(e => console.log(e))

