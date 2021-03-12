---
title: 프로그래머스 - 위장(Hash Lv.2)
date: 2021-03-12 10:03:92
category: Algorithm
thumbnail: { thumbnailSrc }
draft: false
tags:
  - "Algorithm"
  - "Programmers"
  - "Hash"
  - "Lv.2"
  - wecode
  - 위코드
---

## 문제 확인

<details><summary>펼쳐보기</summary>

### 문제 설명

스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

| 종류 | 이름 |
|-|-|
| 얼굴 | 동그란 안경, 검정 선글라스 |
| 상의 | 파란색 티셔츠 |
| 하의 | 청바지 |
| 겉옷 | 긴 코트 |

스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

### 제한 사항

- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
- 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
- 같은 이름을 가진 의상은 존재하지 않습니다.
- clothes의 모든 원소는 문자열로 이루어져 있습니다.
- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
- 스파이는 하루에 최소 한 개의 의상은 입습니다.

### 입출력 예

| clothes | return |
|-|-|
| [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]] | 5 |
| [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]] | 3 |

### 입출력 예 설명

>
예제 #1  
headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.

```
1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses
```

>
예제 #2  
face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.

```
1. crow_mask
2. blue_sunglasses
3. smoky_makeup
```

### 제공하는 소스 코드

```python
def solution(clothes):
    answer = 0
    return answer
```

출처 :
<a href='https://programmers.co.kr/learn/courses/30/lessons/42578' target='-blank'>프로그래머스</a>
</details>

## 접근

최대 배열의 길이가 30이니까 심각하게 비효율적이지만 않으면 문제가 없다고 생각했다.

처음에는 문제를 조금 복잡하게 생각했었는데, 조금 더 생각해보고 더 간단하게 풀었다.

<details><summary>처음에 정리한 해결 아이디어</summary>

`모든 경우의 수를 직접 조합해보는 방법을 생각했다.`

가장 중요하다고 생각한 조건은 아래 두 가지였다.

- 의상의 종류가 중복되면 안되고, 최소 1가지 이상의 의상을 입음.
- 의상을 1개만 입을 수도 있음.

구성하고자 하는 코드의 동작을 정리해봤다.

- 모든 의상을 하나씩만 입은 경우에서 시작
- 의상의 이름을 키로 하고, 해당 의상의 종류를 값으로 하는 해시 테이블 A 추가
- 한번에 입을 수 있는 최대 의상의 수는 의상의 종류의 수와 같음.
- 입은 의상의 수를 키로 하고, 조합을 값으로 하는 해시 테이블 B 추가
- 하나의 의상만 입은 경우를 해시 테이블 B에 추가
- 이후, 하나의 의상을 고정으로 하고, 다른 종류의 의상을 하나씩 추가하며 해시 테이블 B에 추가
- 이 과정을 반복

하지만, 이 방식으로 여러 종류의 옷이 조합된 경우를 확인하려면 너무 복잡해진다.
</details>

<details><summary>'이렇게하면 되지 않을까?' 싶었던 해결 아이디어</summary>

`전체 경우에서 조건에 맞지 않는 경우만 제외하는 방법을 생각했다.`

처음에 생각한 풀이 방식에 문제가 있었기 때문에,  
애초에 모든 경우를 구하는 방법부터 생각해봤다.

의상의 종류 하나에 대해서 하나 이상을 선택하거나 아예 선택하지 않을 수 있기 때문에,  
(선택 가능한 의상의 수) + (아무것도 선택하지 않은 경우) 로 전체 경우를 파악할 수 있다.

선택 가능한 의상의 수가 n이라면, n + 1 이 되는 것이다.

그리고, 각각의 의상의 종류끼리는 서로 영향을 주지 않기 때문에,  
가능한 경우의 수끼리 곱해주면 모든 경우의 수가 나올 것이다.

마지막으로, 모든 의상의 종류에 대해 아무것도 입지 않는 경우 1만 빼면,  
최소한 하나 이상의 의상을 입는 모든 경우의 수를 구할 수 있다.
</details>

<br>

이렇게 문제에 접근한 후에 대충 코딩해서 제출했고, 정답 판정을 받았다.  
`(맞는 것 같긴 한데, 놓친 부분은 없나? 생각하고 있던터라, 좀 당황스러웠다.)`

## 검색

내가 제출한 코드와 프로그래머스의 '나의 풀이' 의 코드가 달라서, 구글에 검색해봤다.

검색해봐도 나오지 않길래, 그냥 다른 사람의 풀이에 합쳐진 것이라고 생각했다.

<details><summary>실제로 제출한 코드</summary>

`진짜로, 이게 될까? 싶어서 변수 명도 모두 test 로 작성했다 ㅋㅋㅋ`

```python
def solution(clothes):
    test = {}

    for name, kind in clothes:
        if kind not in test:
            test[kind] = []
        test[kind].append(name)

    _test = 1

    for key in test:
        _test *= len(test[key]) + 1

    return _test - 1
```
</details>

<details><summary>나의 풀이에 기록된 코드</summary>

```python
def solution(c):
    dic = {}
    for i, j in c:
        if j not in dic:
            dic[j] = [i]
        else:
            dic[j].append(i)

    r = 1
    for i in dic:
        r *= len(dic[i]) + 1

    return r-1
```
</details>

## 풀이

<details><summary>1. 주어진 소스 코드에 docstring 을 추가했다.</summary>

```python
def solution(clothes):
    '''
    input
        - clothes : [[의상 이름, 의상 종류]] (1 <= [] <= 30, 1 <= i <= 20)
    output
        - answer  : 서로 다른 옷의 조합의 수
    '''
    answer = 0
    return answer
```
</details>

<details><summary>2. 종류 별로 옷을 구분하기 위해 딕셔너리를 선언했다.</summary>

```python
def solution(clothes):
    '''
    input
        - clothes : [[의상 이름, 의상 종류]] (1 <= [] <= 30, 1 <= i <= 20)
    output
        - answer  : 서로 다른 옷의 조합의 수
    '''
    closet = {}
```
</details>

<details><summary>3. (종류: [의상 이름]) 을 딕셔너리에 추가했다.</summary>

```python
def solution(clothes):
    '''
    input
        - clothes : [[의상 이름, 의상 종류]] (1 <= [] <= 30, 1 <= i <= 20)
    output
        - answer  : 서로 다른 옷의 조합의 수
    '''
    closet = {}

    for name, kind in clothes:
        if kind not in closet:
            closet[kind] = []
        closet[kind].append(name)
```
</details>

<details><summary>4. 의상의 종류 별로 선택 가능한 모든 경우를 곱했다.</summary>

```python
def solution(clothes):
    '''
    input
        - clothes : [[의상 이름, 의상 종류]] (1 <= [] <= 30, 1 <= i <= 20)
    output
        - answer  : 서로 다른 옷의 조합의 수
    '''
    closet = {}
    answer = 1

    for name, kind in clothes:
        if kind not in closet:
            closet[kind] = []
        closet[kind].append(name)

    for key in closet:
        answer *= len(closet[key]) + 1
```
</details>

<details><summary>5. 아무것도 입지 않은 경우를 제외했다.</summary>

```python
def solution(clothes):
    '''
    input
        - clothes : [[의상 이름, 의상 종류]] (1 <= [] <= 30, 1 <= i <= 20)
    output
        - answer  : 서로 다른 옷의 조합의 수
    '''
    closet = {}
    answer = 1

    for name, kind in clothes:
        if kind not in closet:
            closet[kind] = []
        closet[kind].append(name)

    for key in closet:
        answer *= len(closet[key]) + 1

    return answer - 1
```
</details>

<br>

<details><summary>참고 : 배열을 사용하지 않아도 된다.</summary>

`len() 함수도 사용하지 않아도 되고, 초기값을 1로 설정해 더하기 연산을 하나 줄일 수 있다.`

```python
def solution(clothes):
    '''
    input
        - clothes : [[의상 이름, 의상 종류]] (1 <= [] <= 30, 1 <= i <= 20)
    output
        - answer  : 서로 다른 옷의 조합의 수
    '''
    closet = {}
    answer = 1

    for _, kind in clothes:
        if kind not in closet:
            closet[kind] = 1
        closet[kind] += 1

    for key in closet:
        answer *= closet[key]

    return answer - 1
```
</details>

<br>

> <details><summary>같은 동작을 자바스크립트로 코딩해봤다.</summary>
>
> ```javascript
> const solution = (clothes) => {
>   const closet = {};
>   let answer = 1;
> 
>   clothes.forEach(([_, kind]) => {
>     const value = closet[kind];
>     closet[kind] = value ? value + 1 : 2;
>   });
> 
>   Object.values(closet).forEach((count) => (answer *= count));
> 
>   return answer - 1;
> };
> ```
> </details>

## 배운 것

- 문제를 해결하기에 부적절하다고 판단되면, 빠르게 방향을 전환해야 한다.
   - 결과를 위주로 생각하는 것이 아니라, 구간구간 현재 상태를 점검해야 한다.
   - 지난 번에 접했던 문제에서 얻은 교훈을 적용한 덕분에 쉽게 풀었다..
- 다른 사람의 풀이를 보고, reduce() 함수를 사용하는 방법을 배웠다.
  <details><summary>reduce() 함수를 활용한 풀이</summary>

  기존의 값과 (각각의 값 + 1) 을 곱하는 콜백, Counter 객체, 곱의 초기값 1을  
  reduce() 함수에 인자로 넣어주고, 마지막에 1을 빼는 방법이다.
  ```python
  def solution(clothes):
        from collections import Counter
        from functools import reduce
        cnt = Counter([kind for name, kind in clothes])
        answer = reduce(lambda x, y: x*(y+1), cnt.values(), 1) - 1
        return answer
  ```
  </details>
  <details><summary>reduce() 함수는 인자로 받은 함수와 객체에 대해 연산한다.</summary>

  - 유용한 고계 함수들의 집합인 'functools' 라이브러리에 포함된 함수다.
  - 순수 함수(콜백), 반복 가능한 객체(iterable), 계산 초기값(initializer) 를 인자로 받는다.
     - 인자의 순서는 고정이고, 마지막 인자 'initializer' 는 선택적 인자(기본 값 = None)다.
     - 이 때, 순수 함수는 두 개의 인자를 받는 함수여야 한다.
  - 인자로 받은 순수 함수에 인자로 받은 반복 가능한 객체의 원소를 연속적으로 입력한다.
  - 위의 과정에서 순수 함수의 실행 결과를 기준으로 계산 결과를 누적시킨다.
  </details>
  <details><summary>reduce() 함수의 동작 방식을 코드로 표현하면,</summary>

      \- 출처 : 
      <a href='https://docs.python.org/ko/3/library/functools.html' target='-blank'>
      'Python'
      </a>

      ```python
      def reduce(function, iterable, initializer=None):
            it = iter(iterable)
            if initializer is None:
                value = next(it)
            else:
                value = initializer
            for element in it:
                value = function(value, element)
            return value
      ```
  </details>
