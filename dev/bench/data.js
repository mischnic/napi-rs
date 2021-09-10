window.BENCHMARK_DATA = {
  lastUpdate: 1631238279427,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: '2e752652cca71142358092c0af91a300136f5b71',
          message: 'napi@1.7.7',
          timestamp: '2021-09-10T09:40:07+08:00',
          tree_id: 'f5ba0fd4c9e6871406f429791da7a91450c2afde',
          url: 'https://github.com/napi-rs/napi-rs/commit/2e752652cca71142358092c0af91a300136f5b71',
        },
        date: 1631238278202,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 56256828,
            range: '±0.18%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 714080015,
            range: '±0.15%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 22921802,
            range: '±0.92%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 711996154,
            range: '±0.12%',
            unit: 'ops/sec',
            extra: '95 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 326501,
            range: '±13.77%',
            unit: 'ops/sec',
            extra: '67 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1680821,
            range: '±9.38%',
            unit: 'ops/sec',
            extra: '85 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 35564,
            range: '±0.11%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 7981,
            range: '±0.12%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 7804,
            range: '±0.3%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 17163,
            range: '±0.16%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 10263,
            range: '±0.15%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 12365,
            range: '±0.12%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 379938,
            range: '±6.06%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 339894,
            range: '±5.98%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 343276,
            range: '±5.59%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 317211,
            range: '±6.08%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 39581,
            range: '±1.9%',
            unit: 'ops/sec',
            extra: '83 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 306,
            range: '±5.9%',
            unit: 'ops/sec',
            extra: '29 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 42185,
            range: '±2.56%',
            unit: 'ops/sec',
            extra: '83 samples',
          },
          {
            name: 'Query#query * 100',
            value: 2145,
            range: '±0.33%',
            unit: 'ops/sec',
            extra: '90 samples',
          },
          {
            name: 'Query#query * 1',
            value: 32031,
            range: '±2.82%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
        ],
      },
    ],
  },
}
