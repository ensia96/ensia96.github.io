---
title: 프로그래머스 - 완주하지 못한 선수(Hash Lv.1)
date: 2021-02-26 20:19:30
category: Algorithm
thumbnail: { thumbnailSrc }
draft: false
tags:
  - "Algorithm"
  - "Programmers"
  - "Hash"
  - "Lv.1"
---

## 문제 확인

<details><summary>펼쳐보기</summary>

### 문제 설명

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

### 입출력 예

| participant | completion | return |
|-|-|-|
| [leo, kiki, eden] | [eden, kiki] | leo |
| [marina, josipa, nikola, vinko, filipa] | [josipa, filipa, marina, nikola] | vinko |
| [mislav, stanko, mislav, ana] | [stanko, ana, mislav] | mislav |

### 입출력 예 설명

>
예제 #1  
leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

>
예제 #2  
vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

>
예제 #3  
mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

### 제공하는 소스 코드

```python
def solution(participant, completion):
    answer = ''
    return answer
```

출처 :
<a href='https://programmers.co.kr/learn/courses/30/lessons/42576' target='-blank'>프로그래머스</a>
</details>

## 접근

participant 를 참가자 명단, completion 을 완주자 명단으로 생각하고  
두 명단의 하나씩 비교하는 방식으로 문제를 해결하려고 했는데,

'해시' 를 활용하는 문제이기 때문에 단순한 배열 비교는 하지 않기로 결정했다.

## 검색

구글에 '알고리즘 해시' 를 검색해보았고, 다음의 두 가지 내용을 확인했다.

- 문자열을 고유한 해시값으로 변경하는 해시 함수
- key 와 value 를 갖는 컨테이너형 해시 테이블

<br>

완주하지 못한 사람의 이름을 문자열 형태로 반환해야 하기 때문에  
문자열을 해시화하는 함수는 아니라고 판단했고,

파이썬의 딕셔너리 자료형을 사용하기로 했다.

>
참고로 파이썬의 딕셔너리는 해시 테이블이라고 한다.  
<a href='https://stackoverflow.com/questions/114830/is-a-python-dictionary-an-example-of-a-hash-table' target='-blank'>stackoverflow - Is a Python dictionary an example of a hash table?</a>

## 풀이

<details><summary>1. 주어진 소스 코드에 docstring 을 추가했다.</summary>

```python
def solution(participant, completion):
    '''
    input
        - participant : [참가자] (1 < 100,000)
        - completion  : [완주자] (len(participant) - 1)
    output
        - answer      : 완주하지 못한 사람
    '''
    answer = ''
    return answer
```
</details>

<details><summary>2. 마라톤의 결과를 비교하는 데에 사용할 딕셔너리를 선언했다.</summary>

```python
def solution(participant, completion):
    '''
    input
        - participant : [참가자] (1 < 100,000)
        - completion  : [완주자] (len(participant) - 1)
    output
        - answer      : 완주하지 못한 사람
    '''
    result = dict()
```
</details>

<details><summary>3. (참가자의 이름: 이름이 같은 사람의 수) 를 딕셔너리에 추가했다.</summary>

```python
def solution(participant, completion):
    '''
    input
        - participant : [참가자] (1 < 100,000)
        - completion  : [완주자] (len(participant) - 1)
    output
        - answer      : 완주하지 못한 사람
    '''
    result = dict()

    for name in participant:
        if name not in result:
            result[name] = 0
        result[name] += 1
```
</details>

<details><summary>4. 위에서 완성한 딕셔너리에서 완주자의 수를 뺐다.</summary>

```python
def solution(participant, completion):
    '''
    input
        - participant : [참가자] (1 < 100,000)
        - completion  : [완주자] (len(participant) - 1)
    output
        - answer      : 완주하지 못한 사람
    '''
    result = dict()

    for name in participant:
        if name not in result:
            result[name] = 0
        result[name] += 1

    for name in completion:
        result[name] -= 1
```
</details>

<details><summary>5. 명단에 남아있는 사람을 반환했다.</summary>

```python
def solution(participant, completion):
    '''
    input
        - participant : [참가자] (1 < 100,000)
        - completion  : [완주자] (len(participant) - 1)
    output
        - answer      : 완주하지 못한 사람
    '''
    result = dict()

    for name in participant:
        if name not in result:
            result[name] = 0
        result[name] += 1

    for name in completion:
        result[name] -= 1

    for name in participant:
        if result[name] == 1:
            return name
```
</details>

<br>

> <details><summary>같은 동작을 자바스크립트로 코딩해봤다.</summary>
>
> ```javascript
> const solution = (participant, completion) => {
>   const result = {}
>   let value
> 
>   participant.forEach(name => {
>     value = result[name]
>     result[name] = value ? value + 1 : 1
>   })
> 
>   completion.forEach(name => {
>     result[name] -= 1
>   })
> 
>   return participant.find(name => result[name])
> }
> ```
> </details>

## 배운 것

- 파이썬의 딕셔너리는 해시 테이블이다.
- 다른 사람의 풀이를 보고, collections 모듈과 hash() 함수를 활용하는 방법을 배웠다.
  <details><summary>collections 모듈을 활용한 풀이</summary>

  두 배열에 포함된 요소들의 갯수를 key, value 형태로 저장하는  
  'Counter' 클래스를 활용하여 `참가자 - 완주자`에서 남은 원소를 반환하는 방법이다.  
  `(놀랍게도 Counter 클래스로 생성된 객체는 빼기 연산이 가능하다고 한다!)`
  ```python
  import collections

  def solution(participant, completion):
        answer = collections.Counter(participant) - collections.Counter(completion)
        return list(answer.keys())[0]
  ```
  <details><summary>코드를 더 짧게 바꿔봤다.</summary>
  
  ```python
  from collections import Counter

  def solution(participant, completion):
        return list(Counter(participant) - Counter(completion)).keys().pop()
  ```
  </details>
  </details>
  <details><summary>hash 함수를 활용한 풀이</summary>

  hash() 함수를 이용해 문자열을 정수형 값으로 변환한 후,  
  > 모든 참가자 이름의 해시값 - 모든 완주자 이름의 해시값 = 남은 이름의 해시값

  으로 해시값을 얻어 해당 해시의 원본 문자열이 담긴 딕셔너리에서 값을 호출하는 방법이다.
  ```python
  def solution(participant, completion):
        answer = ''
        temp = 0
        dic = {}
        for part in participant:
            dic[hash(part)] = part
            temp += int(hash(part))
        for com in completion:
            temp -= hash(com)
        answer = dic[temp]

        return answer
  ```
  </details>
- 세상엔 대단한 개발자가 정말 많다는 것을 알게됐다.
  <details><summary>다른 사람의 풀이(자바스크립트)</summary>

  완주자 배열에 (이름: 수) 형태의 원소를 추가하여 유사객체로 변환한 후에  
  참가자 배열의 원소를 순서대로 순회하며 아래 연산을 진행하도록 하고,
  - 이름에 해당하는 값을 감소시킨다.
  - 그 시점의 값이 0 혹은 NaN (거짓) 가 될 경우에 반환하도록 부정 연산을 취한다.

  그 연산의 결과를 find 콜백의 리턴 트리거로 만드는 방법이다.
  ```javascript
  var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
  ```
  </details>
