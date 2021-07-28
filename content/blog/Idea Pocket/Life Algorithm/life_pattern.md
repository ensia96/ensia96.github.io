---
title: life_pattern
date: 2021-07-24 20:50:00
category: Life Algorithm
thumbnail: { thumbnailSrc }
draft: False
tags:
  - "Algorithm"
  - "Pseudocode"
---

```py
from datetime import time

class LifePattern:
    '''
    생활 패턴을 규격화하는 클래스
    '''
    OPTIMAL_SLEEP_TIME = 8 # 최적의 수면 시간
    MINIMAL_SLLEP_TIME = 6 # 최소한의 수면 시간
    MEAL_AND_REST_TIME = 1 # 식사 및 휴식 시간
    BASE_TIME = {
        'shower': 1, # 샤워 시간
        'concentration': (0, 50), # 집중 시간
        'rest': (0, 10), # 휴식 시간
        'reward': 4 # 보상 시간
    }

    def __init__(self, **kwargs):
        default = {
            'wake_up': (9,), # 기상 시간
            'routine_start': (10,), # 일상 시작
            'routine_end': (18,), # 일상 종료
            'lunch': (12,), # 점심 시간
            'dinner': (20,), # 저녁 시간
        }

        for key in default:
            setattr(self, key, time(*kwargs.get(key, default[key])))


```

<details><summary>메모</summary>

```
기상(~ 09:00)
+ 샤워(1시간/09:00 ~ 10:00)
+ 오전(2시간/10:00 ~ 12:00)
+ 점심(1시간/12:00 ~ 13:00)
+ 오후(5시간/13:00 ~ 18:00)
+ TIL(1시간/18:00 ~ 19:00)
+ 샤워(1시간/19:00 ~ 20:00)
+ 저녁(1시간/20:00 ~ 21:00)
+ 보상(4시간/21:00 ~ 01:00)
+ 수면(8시간/01:00 ~ 09:00)

업무 시간(회사) : '10:00 ~ 12:00', '13:00 ~ 18:00'
```

참고 사항

- 재택 기준(출퇴근 시간 제외)
- 보상 시간 = 업무, 공부에 신경 쓰지 않는 시간
- 1시간 기준, 50분은 집중, 10분은 휴식

참고 영상(집중, 휴식 비율)

- https://www.youtube.com/watch?v=inhsROAhhPY
- https://www.youtube.com/watch?v=4YoxyuuCwt0
- https://www.youtube.com/watch?v=3WxdLVip66o

</details>

<details><summary>변경 기록</summary>

- 20210724 - 전 직장에서의 생활 패턴을 기준으로 코드 기반 구성

</details>
