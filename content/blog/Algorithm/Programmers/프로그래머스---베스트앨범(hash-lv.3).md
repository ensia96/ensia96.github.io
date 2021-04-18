---
title: 프로그래머스 - 베스트앨범(Hash Lv.3)
date: 2021-03-16 16:19:69
category: Algorithm
thumbnail: { thumbnailSrc }
draft: false
tags:
  - "Algorithm"
  - "Programmers"
  - "Hash"
  - "Lv.3"
  - wecode
  - 위코드
---

## 문제 확인

<details><summary>펼쳐보기</summary>

### 문제 설명

스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

### 제한사항

- genres[i]는 고유번호가 i인 노래의 장르입니다.
- plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
- genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
- 장르 종류는 100개 미만입니다.
- 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
- 모든 장르는 재생된 횟수가 다릅니다.

### 입출력 예

| genres | plays | return |
|-|-|-|
| ["classic", "pop", "classic", "classic", "pop"] | [500, 600, 150, 800, 2500] | [4, 1, 3, 0] |

### 입출력 예 설명

classic 장르는 1,450회 재생되었으며, classic 노래는 다음과 같습니다.

- 고유 번호 3: 800회 재생
- 고유 번호 0: 500회 재생
- 고유 번호 2: 150회 재생

pop 장르는 3,100회 재생되었으며, pop 노래는 다음과 같습니다.

- 고유 번호 4: 2,500회 재생
- 고유 번호 1: 600회 재생

따라서 pop 장르의 [4, 1]번 노래를 먼저, classic 장르의 [3, 0]번 노래를 그다음에 수록합니다.

※ 공지 - 2019년 2월 28일 테스트케이스가 추가되었습니다.

### 제공하는 소스 코드

```python
def solution(genres, plays):
    answer = []
    return answer
```

출처 :
<a href='https://programmers.co.kr/learn/courses/30/lessons/42579' target='-blank'>프로그래머스</a>

</details>

## 접근

문제의 조건을 만족하기 위해선, 정렬을 진행하는 순서가 중요하다고 생각했고,  
`장르 별로 비교한 후에, 장르에 포함되는 곡들을 비교해야 한다.`

장르는 100개 미만이기 때문에, 장르를 기준으로 정보를 저장하면 될 것이라 생각했다.

**코드를 작성하기 전에 정리한 내용**

- 조건
   - 가장 많이 재생된 장르
   - 가장 많이 재생된 곡
   - 재생 횟수가 같다면 작은 고유번호
   - 장르 별로 최대 2곡
- 방법
   - 장르 순서로 정렬하기 위해 해시 테이블 생성
      - 'genres table' : `{장르: {재생 횟수: i, 곡 목록: [고유번호]}}`
   - 모든 곡에 대해서 반복문 수행
      - 해당 장르의 횟수 누적
      - 해당 장르의 곡 목록 추가
   - 장르의 총 재생 횟수로 정렬된 배열 생성
      - 'sorted list' : `[{재생 횟수:i, 곡 목록: [고유번호]}]`
   - 정렬된 장르에 대해서 반복문 수행
      - 곡 목록의 고유번호들을 재생 횟수로 정렬
      - 정렬된 순서에 맞춰 2개의 원소를 정답 배열에 추가

## 검색

별도의 검색은 하지 않았다.

## 풀이

<details><summary>1. 주어진 소스 코드에 docstring 을 추가했다.</summary>

```python
def solution(genres, plays):
    '''
    input
        - genres : [노래의 장르] (1 <= [] <= 10,000, 종류 < 100)
        - plays  : [재생된 횟수] (len(genres))
    output
        - answer : [곡 고유번호]
    '''
    answer = []
    return answer
```

</details>

<details><summary>2. 정보를 저장할 해시 테이블을 선언했다.</summary>

```python
def solution(genres, plays):
    '''
    input
        - genres : [노래의 장르] (1 <= [] <= 10,000, 종류 < 100)
        - plays  : [재생된 횟수] (len(genres))
    output
        - answer : [곡 고유번호]
    '''
    answer      = []
    genre_table = {}

    return answer
```

</details>

<details><summary>3. 장르 별로 저장할 정보를 해시 테이블에 입력했다.</summary>

```python
def solution(genres, plays):
    '''
    input
        - genres : [노래의 장르] (1 <= [] <= 10,000, 종류 < 100)
        - plays  : [재생된 횟수] (len(genres))
    output
        - answer : [곡 고유번호]
    '''
    answer      = []
    genre_table = {}

    for song, play in enumerate(plays):
        genre = genres[song]
        if genre not in genre_table:
            genre_table[genre] = {'plays': 0, 'songs': []}

    return answer
```

</details>

<details><summary>4. 장르 별 총 재생 횟수를 누적시키고, 곡 목록을 추가했다.</summary>

```python
def solution(genres, plays):
    '''
    input
        - genres : [노래의 장르] (1 <= [] <= 10,000, 종류 < 100)
        - plays  : [재생된 횟수] (len(genres))
    output
        - answer : [곡 고유번호]
    '''
    answer      = []
    genre_table = {}

    for song, play in enumerate(plays):
        genre = genres[song]
        if genre not in genre_table:
            genre_table[genre] = {'plays': 0, 'songs': []}

        genre_table[genre]['plays'] += play
        genre_table[genre]['songs'].append(song)

    return answer
```

</details>

<details><summary>5. 해시 테이블의 정보를 정렬하여 배열에 저장했다.</summary>

```python
def solution(genres, plays):
    '''
    input
        - genres : [노래의 장르] (1 <= [] <= 10,000, 종류 < 100)
        - plays  : [재생된 횟수] (len(genres))
    output
        - answer : [곡 고유번호]
    '''
    answer      = []
    genre_table = {}

    for song, play in enumerate(plays):
        genre = genres[song]
        if genre not in genre_table:
            genre_table[genre] = {'plays': 0, 'songs': []}

        genre_table[genre]['plays'] += play
        genre_table[genre]['songs'].append(song)

    sorted_list = sorted(genre_table.values(), key=lambda x: x['plays'], reverse=True)

    return answer
```

</details>

<details><summary>6. 장르 별로 곡 목록을 정렬하여 정답 배열에 추가했다.</summary>

```python
def solution(genres, plays):
    '''
    input
        - genres : [노래의 장르] (1 <= [] <= 10,000, 종류 < 100)
        - plays  : [재생된 횟수] (len(genres))
    output
        - answer : [곡 고유번호]
    '''
    answer      = []
    genre_table = {}

    for song, play in enumerate(plays):
        genre = genres[song]
        if genre not in genre_table:
            genre_table[genre] = {'plays': 0, 'songs': []}

        genre_table[genre]['plays'] += play
        genre_table[genre]['songs'].append(song)

    sorted_list = sorted(genre_table.values(), key=lambda x: x['plays'], reverse=True)

    for genre in sorted_list:
        answer.extend(sorted(genre['songs'], key=lambda x: plays[x], reverse=True)[:2])

    return answer
```

</details>

<br>

> <details><summary>같은 동작을 자바스크립트로 코딩해봤다.</summary>
>
> ```javascript
>  const solution = (genres, plays) => {
>    const answer = [];
>    const genreTable = {};
>  
>    plays.forEach((play, song) => {
>      const genre = genres[song];
>      genreTable[genre] = genreTable[genre] || { plays: 0, songs: [] };
>  
>      genreTable[genre].plays += play;
>      genreTable[genre].songs.push(song);
>    });
>  
>    Object.values(genreTable)
>      .sort((a, b) => b.plays - a.plays)
>      .map(({ songs }) => songs.sort((a, b) => plays[b] - plays[a]))
>      .forEach((songs) => songs.slice(0, 2).forEach((song) => answer.push(song)));
>  
>    return answer;
>  };
> ```
>
> </details>


## 배운 것

- 값을 비교하며 배열을 구성하는 것보다, 마지막에 한 번에 정렬하는 것이 더 낫다.
- 단순한 구조라면 객체를 선언하고 키에 값을 넣는 것보다, 한 번에 선언하는 것이 더 낫다.
- 다른 사람의 풀이를 보고, 정렬 가능한 클래스를 구현하는 방법을 배웠다.

<details><summary>클래스를 활용한 풀이</summary>

- 특정한 구조의 정보를 저장하기 위해 클래스를 사용할 수 있다는 것을 배웠다.
- 정렬에 필요한 메소드를 구성하고, 슬라이싱 대신 횟수를 세는 방식이 인상 깊었다.
- 길이는 길지만, 읽기 좋은 코드인 것 같다.

```python
def solution(genres, plays):
    answer = []
    dic = {}
    album_list = []
    for i in range(len(genres)):
        dic[genres[i]] = dic.get(genres[i], 0) + plays[i]
        album_list.append(album(genres[i], plays[i], i))

    dic = sorted(dic.items(), key=lambda dic:dic[1], reverse=True)
    album_list = sorted(album_list, reverse=True)



    while len(dic) > 0:
        play_genre = dic.pop(0)
        print(play_genre)
        cnt = 0;
        for ab in album_list:
            if play_genre[0] == ab.genre:
                answer.append(ab.track)
                cnt += 1
            if cnt == 2:
                break

    return answer

class album:
    def __init__(self, genre, play, track):
        self.genre = genre
        self.play = play
        self.track = track

    def __lt__(self, other):
        return self.play < other.play
    def __le__(self, other):
        return self.play <= other.play
    def __gt__(self, other):
        return self.play > other.play
    def __ge__(self, other):
        return self.play >= other.play
    def __eq__(self, other):
        return self.play == other.play
    def __ne__(self, other):
        return self.play != other.play
```

</details>

<br>

- 20210404 - 마크다운 구성 변경
- 20210418 - 맞춤법 수정(인상깊 -> 인상 깊, 한번 -> 한 번)
