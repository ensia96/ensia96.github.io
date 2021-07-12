---
title: 옛날 메모 모음(노션 쓰던 시절)
date: 2021-07-12 11:11:00
category: Memos
thumbnail: { thumbnailSrc }
draft: False
tags:
  - "Memo"
---

<details><summary>메모메모</summary>

```
컨버스 결과물 유튜브 https://youtu.be/0dYvqMhCsy8

CLI 에서 뭔가 헤매고 있을땐, tab 을 눌러보자


mysql db 생성할때 문자인코딩 양식 지정
create database '이름' character set UTF8mb4 collate utf8mb4_bin;
create database shogong character set UTF8mb4 collate utf8mb4_bin;

mysql 에서 칼럼이 null 값인 테이블을 확인하려면 where 구문에서 = 대신 is 를 사용

깃허브에 단순하게 이미지 올리고 싶으면 issues 에 img 업로드 후 태그 얻어내기

url 좌표 길이가 너무 김, 페이지에 맞추면 안됨
재활용 안하는 변수 => _ 로 처리해도 됨
nvim -v
tig
ctags_python
```

</details>

<details><summary> CLI 관련 메모</summary>

```
lsof -i :포트번호
kill -9 PID


설치된 패키지의 환경변수값 확인
which 명령어


brew 로 컴퓨터 관리하기 좋은 명령어

cleanup
doctor
update


yarn
https://medium.com/@pakss328/yarn%EC%9D%B4%EB%9E%80-b4e8edf1638b

MySQL 관련 글
https://velog.io/@max9106/mac%EC%97%90-MySQL-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0-4ck17gzjk3

노드 재설치와 관련된 명령어

sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*

sudo chown -R $(whoami) $(brew --prefix)/*

brew unlink node && brew link node
```

</details>

<details><summary>위코드 CLI 세션 핵심 정리</summary>

```
루트경로?
홈 디렉토리?

경로 탐색 명령어
절대 경로와 상대경로의 차이점

환경변수 HOME? -> 홈 디렉토리의 정보값
환경변수 PATH -> 명령들의 집합
환경변수 목록확인 명령어? -> env (전체 환경변수) , echo (보고싶은 환경변수 지정) / 예) echo $SHELL 등

. ? -> 현재디렉토리
닷파일을 보려면 어떤 명령어에 어떤 옵션을 줘야 할까요? ls -al
편집기? -> bash zsh 등등 vi vim nano atom 등등

디렉토리 변경 명령어? mv (원래 파일이름) (바꿀 파일이름)
현재 디렉토리에서 파일목록을 보는 명령어? ls
파일이나 디렉토리를 복사하는 명령어? cp
파일이나 디렉토리를 이동시키는 명령어? mv
파일이나 디렉토리를 삭제하는 명령어? rm
현재경로를 표시해주는 명령어? pwd
디렉토리를 생성하는 명령어? mkdir
```

</details>

<details><summary>위코드 CLI 세션 영상 관련 필기</summary>

```
초기
프로세스 스케쥴링
가상메모리 및 파일관리
장치 입출력 등
서비스를 제공하는 기본적인 운영체제의 커널
gnu 에서 공개라이센스로 공개 -> 발전해옴

유닉스와의 완벽환 호환 : 무료, GUI 있음, 서버용으로 널리 씀

-

구조

하드웨어 제어 - 커널
 : 리눅스의 핵심, 프로세스관리 메모리관리 파일 및 장치 등 컴퓨터 하드웨어 전체 제어

커널과 유저 대화 - 쉘
 : 컴퓨터에게 명령내리는 배쉬 등의 응용프로그램(진짜 응용해서 만든거)
 : 일반인을 위한 응용체제는 아님 어려움

다른거 - 응용프로그램

-

리눅스 디렉토리구조, 환경변수, 설정파일, 쉘 명령어 자주 써보는 것이 중요함

-

파일시스템 구조
 : 거꾸로된 나무형태 - 트리구조라고 함
 : 루트영역 : /로 표시
 : 하위경로가 존재 (중첩되어서 존재 가능)
 : 다양한 디렉토리가 있는데 /home 에 주목해야됨

홈디렉토리
 : 사용자의 정보를 저장할 수 있는 공간
 : 일반 사용자로 접속하면 홈디렉토리 제공받음
 : 시스템 디렉토리 외에 일반사용자가 유일하게 취할 수 있는 공간

-

디렉토리 구조 탐색

cd
 : change directory 경로이동 ('/' 만쓰면 루트디렉토리)
 : 'cd ~' = 홈디렉토리로 이동 (~ 은 틸다라고 부름), 그냥 cd만 쳐도 됨
pwd
 : 현재 위치 볼 수 있음
ls
 : 현재 위치 구성요소 list 보기
 : ls -a 로 보면 . (현재경로), .. (상위경로) 있음
    절대경로 - 루트~최하위 위치까지 경로 다 쓰기
    상대경로 - 2가지 심볼을 이용해서 이용하거나 접근함 (. 이나 ..)
 : ls 의 옵션 -> -l 자세히보기, -a 숨겨진것도 보기

env
 : 환경변수 보여줌
 : 쉘뿐만아니라리눅스를 위해 존재함
 : home, path 잘봐야됨
 : 명령어들은 환경변수에 등록되어있기때문에 사용 가능
    예) ls 는 /bin/ls 에 담겨있음
 : path 구분자는 콜론(:)
 : 환경변수는 추가해서 정의 가능
 : echo $PATH -> path 환경변수값 출력됨
 : echo $HOME -> home 환경변수값 출력됨
-

리눅스의 환경설정파일
 : 닷파일이라 부름 (숨김파일) (ls -a 로 볼 수있음)
 : 쉘이 동작하기 위해 존재함, 환경변수도 설정 가능

```

</details>

<details><summary>DRF</summary>

```
공식 문서 읽어보면서 정리한 내용
(~ https://www.django-rest-framework.org/api-guide/serializers/#validators)


https://www.django-rest-framework.org/

pip install djangorestframework

https://github.com/Dunedan/django-lockdown/issues/10


파이썬의 네이티브한 데이터
바이너리화 된 데이터
orm 으로 리턴받은 객체
스트림양식에 적합한 filelike (패킷 혹은 청크단위)


Serializer (직렬화 처리기)

serializers.Serializer 는 데이터의 양식이 맞는지 검증, 객체를 딕셔너리로 직렬화해줌 / 단일객체, 여러객체 모두 적용 가능

	1. serializers.py 에서 시리얼라이저 클래스를 생성한 뒤 검증의 기준이 될 모델필드들을 지정 (serializers.Serializer 를 상속받음)
	2. ' 1 ' 에서 생성한 클래스의 인자로 검증할 객체를 넣어서 사용
	3. ' 2 ' 의 상태에서 .data 로 호출하면 딕셔너리형 객체를 리턴함

	클래스 내에서 함수를 정의하여 직렬화된 정보를 사용할 수 있음
		def create(self, validated_data) => 클래스 자가상속, sereializers.Seriealizer 에서 상속받을 수 있는 속성인자인 validated_data 설정
			return 모델클래스.create(**validated_data) => 직렬화된 데이터를 kwargs 형태로 모델클래스의 create 메소드에 인자로써 주입 (db에 저장됨)
		def update(self, instance, validated_data) => 클래스 자가상속, sereializers.Seriealizer 에서 상속받을 수 있는 속성인자인 instance, validated_data 설정
			instance.주입할필드 = validated_data.get('주입할필드', instance.'주입할필드') => 지정필드에 입력된 정보를 언패킹하여 할당
			instance.save() => 정보들이 수정된 상태의 데이터 객체를 .save 메소드로 저장 (db에 저장됨)
			return instance => 정보들이 할당되어 수정된 상태의 데이터객체를 리턴

	4. 위에서 create, update 에 대한 처리를 정의해두었다면, 위의 ' 3 ' 의 상태에 .save 메소드를 호출했을때, 실제로 생성과 수정에 대한 처리가 이루어짐
	5. 별도의 kwargs 를 이용하면 request 에 포함되어 있지 않은 정보를 추가적으로 주입 가능함 (사용자나 시간 등)
	6. 인스턴스를 저장하는 것이 아니라 , 그냥 사용해야 한다면 def save(self) 로 .save 메소드를 오버라이딩하면 됨 (validated_data 속성에 직접접근 가능)

	deserialize 역직렬화를 할 때, validated_data 에 접근하기 위해선 .is_valid() 메소드를 필수적으로 호출해야함.
	이 과정에서 .is_valid() 가 false 를 리턴했을때, .errors 메소드를 호출해서 key 가 필드명이고, value 가 에러내용이 담긴 리스트인 객체를 리턴받을 수 있음
		non_field_errors 라는 키워드를 반환하기도 하는데, 일반적인 유효성 검사 오류가 담긴 리스트가 담겨있음
			=> NON_FIELD_ERRORS_KEY 라는 rest framework 의 설정으로 커스터마이징 될 수 있음
	.is_valid 메소드는 raise_exception 이라는 선택적 속성을 부여받아, serializers.ValidationError 처리를 할 수 있음
		=> raise_exception = True 를 부여하면, invalid 상황에서 status code 400 예외처리를 할 수 있음
	시리얼라이저의 서브클래스를 등록함으로써 필드단위의 판별도 가능
		class 임의의_시리얼라이저(serializers.Serializer):
			임의의필드1 = serializers.필드속성()
			임의의필드2 = serializers.필드속성()
			def validate_임의의필드(self, value):
				if '판별기준': => value 키워드로 필드의 입력값을 사용할 수 있음
					raise serializers.ValidationError('에러메세지')
				return value
		만약, 시리얼라이저의 필드지정선언구에서 required=False 라는 값으로 지정되어있고, 입력값이 없다면 판별과정이 수행되지 않음
	여러 필드에 대한 판별이 필요할경우 .validate() 라는 메소드를 시리얼라이저의 서브클래스로 등록하면 됨.
		이 서브클래스는 필드와 값을 딕셔너리형의 인자로 받게됨.
			class 임의의_시리얼라이저(serializers.Serializer):
				임의의필드1 = serializers.필드속성()
				임의의필드2 = serializers.필드속성()
				임의의필드3 = serializers.필드속성()
				def validate(self, data):
					if data[임의의필드] 와 data[임의의필드]에 대한 판별조건:
						raise.serializers.ValidationError('에러메세지')
					return data
	별도의 판별기함수를 생성하여, 시리얼라이저 클래스의 필드등록선언구에서 validators=[판별기함수] 속성을 부여하여 판별할 수 있음
		def 판별기함수(value):
			if 판별조건:
				raise serializers.ValidationError('에러메세지')
		class 임의의_시리얼라이저(serializers.Serializer):
			임의의필드1 = serializers.필드속성(validators=[판별기함수])


Renderer (렌더링 처리기)

renderers.JSONRenderer 는 파이썬의 딕셔너리를 JSON 으로 렌더링 해줌

	1. JSONRenderer() 를 호출한 뒤에 .render 메소드를 호출, 이때 인자는 시리얼라이저가 .data 메소드로 리턴한 객체를 넣음
	2. 결과는 바이너리화 된 딕셔너리형


Parser (구문분석 처리기)

예시에선 io (입출력 객체) 로 바이너리화 된 상태의 데이터를 filelike 화 한 뒤에 진행됨

parsers.JSONParser 는 filelike 상태의 정보를 파이썬의 네이티브한 데이터로 구문분석해줌

	1. JSONParser() 를 호출한 뒤에 .parse 메소드를 호출, 이때 인자는 filelike 한 상태의 정보를 넣음
	2. ' 1 ' 에서 처리된 결과를 seriealizer 에 kwarg 방식을 통해 인자로 넣음 (data=대상)
	3. ' 2 ' 의 상태에서 .is_valid() 메소드를 사용한 뒤 (return 은 true), .validated_data 메소드를 사용하면 딕셔너리를 반환함

Router (라우팅 처리기)
```

</details>

<details><summary>Flask</summary>

```
https://flask.palletsprojects.com/en/1.1.x/tutorial/database/
https://kkamikoon.tistory.com/158?category=825129
https://flask.palletsprojects.com/en/1.1.x/api/#url-route-registrations
https://flask.palletsprojects.com/en/1.1.x/api/#flask.Flask.add_url_rule
https://flask-docs-kr.readthedocs.io/ko/latest/quickstart.html
https://medium.com/@feedbotstar/python-flask-%EB%A1%9C-crud-%EB%A7%8C%EB%93%A4%EC%96%B4-%EB%B3%B4%EA%B8%B0-3676b3b33d9
https://blog.miguelgrinberg.com/post/designing-a-restful-api-using-flask-restful
```

</details>

<details><summary>자바스크립트 기초 + NodeJs</summary>

```
준석님 수업용깃
https://github.com/joonseokhu/node-2

준석님 아티클
https://hyper.is/

REST 기반 트랜잭션
https://www.popit.kr/rest-%ea%b8%b0%eb%b0%98%ec%9d%98-%ea%b0%84%eb%8b%a8%ed%95%9c-%eb%b6%84%ec%82%b0-%ed%8a%b8%eb%9e%9c%ec%9e%ad%ec%85%98-%ea%b5%ac%ed%98%84-1%ed%8e%b8/?utm_source=popit&utm_campaign=notice

마이크로서비스 아키텍쳐
https://futurecreator.github.io/2018/09/14/what-is-microservices-architecture/

호이스팅(Hoisting)의 개념
함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것

camelCase
snake_case

let : 변수 값을 수정할 수 있음
const : 수정할 수 없음

(): parentheses
{}: curly bracket

함수가 반환을 생략하면 undefined라는 값을 반환

num++ => num = num + 1;

array 에서 값이 할당되지 않은 index 의 값은 undefined

array 에
	push 는 array의 마지막 부분에 인자를 삽입
	unshift 는 array의 맨 앞부분에 인자를 삽입
	pop 은 마지막 요소가 제거 + 반환

for loop 는 초기, 종결, 증감값으로만 가능

typeof => 데이터타입

true로 변환되는 값
비어 있지 않은 문자열 / 0이 아닌 모든 숫자 / 모든 객체

false로 변환되는 값
"" (빈문자열) / 0, NaN / null / undefined

코딩컨벤션
https://github.com/airbnb/javascript

문자열 메소드
https://www.w3schools.com/jsref/jsref_obj_string.asp

슬라이싱
https://www.w3schools.com/jsref/jsref_slice_string.asp

NaN은 Not a number 라는 뜻

Number 함수를 사용해서 String에서 Number형으로 전환 (parseInt, parseFloat 등 도 있음)

시간
new 연산자 다음에 Date 생성자 new Date => 현재시각

GMT : Greenwich Mean Time / 그리니치 천문대 기준시각

let rightNow = new Date();
let year = rightNow.getFullYear();
let month = rightNow.getMonth()+1;
let date = rightNow.getDate();
let day = rightNow.getDay();
let currentHour = rightNow.getHours();
let currentMin = rightNow.getMinutes();

getTime 메서드로 날짜의 밀리초 표현을 반환

math 객체
https://www.w3schools.com/js/js_math.asp

객체의 property값을 접근하는 방법
	마침표(.) 연산자 - 변수 사용 불가능
	대괄호([]) - 변수 사용 가능

이제는 __proto__ (프로토링크) 대신 getPrototypeOf 메소드로 변경

중괄호({}, curly brace)로 감싸진 것 : block

변수 이름을 사용할 수 있는 범위 : namespace

switch 문
https://www.w3schools.com/js/js_switch.asp

클래스는 객체(object)를 잘 설계하기 위한 틀 / 특정로직을 갖고 있는 행동 (method) 와 변경 가능한 상태 (멤버 변수) 를 가짐

변경 가능한 상태값이자 class내의 컨텍스트에서 어느 곳에서나 사용할 수 있는 변수 => 멤버 변수

객체 내부에서, 해당 객체의 프로퍼티에 접근하려면 " this " 라는 키워드를 사용해야함

cunstructor - 생성자 함수

class로 객체를 생성하는 과정 = '인스턴스화'

{} 으로 생긴 모양의 객체를 object literal(객체 리터럴)

`` = back tick (백틱이라고 부름)

`` 안에서 변수를 사용하려면 ${} 으로 변수를 감싸줘야함 / python 의 포맷스트링 + 멀티라인 스트링처럼 사용

String 형태의 자료에 대해 조건값에 따른 일치여부를 boolean 으로 반환
	startsWith
	endsWith
	includes

특정 문자열을 반복 => .repeat(3)

공식문서
https://javascript.info/string

브라우저에 데이터를 저장하는 수단
	Local Storage: 해당 도메인에 영구 저장
	Session Storage: 해당 도메인의, 한 세션에서만 저장 (창을 닫으면 정보가 날라감)
	Cookie: 해당 도메인에 설정된 날짜까지만 저장

https://www.quora.com/What-is-the-difference-between-sessionstorage-localstorage-and-Cookies


document 객체

document.cookie 로 브라우저의 쿠키를 호출 가능 (document 클래스의 cookie 속성)

localStorage, sessionStorage
	 => 글로벌 변수
	특정 값을 보고 싶으면, getItem
	값을 수정하거나 추가하고 싶으면, setItem

arrow function 은 callback 함수로 사용할 때 가장 많이 사용

a => b 리턴
a => {b} 실행

callback = 인자로 전달되는 함수

array 의 반복문 => map, forEach 메서드

https://www.w3schools.com/js/js_array_iteration.asp

Array.map() => 조건값에 맞춰 변조한 배열을 return

Array.forEach() => 배열의 요소들에 대한 동작 실행 / 원래는 return 값 없음 / 구문을 빠져나오고 싶은시점에서 return

for (let i in array){}

iife

Object.keys(object) / valuse, entries
```

</details>

<details><summary>NodeJs 생활코딩</summary>

```
passport

https://www.youtube.com/watch?v=RAE8mcFdcD4&list=PLuHgQVnccGMCBY2wxKYNzFWe6I1gD5xsX&index=12

https://opentutorials.org/course/3402/21864

? [] format

express generator : express 프로젝트 이니셜 잡아줌

cookie 설정에서
Expires 는 언제 사라지도록 할지,
Max-Age 는 언제까지 있도록 할지 (단위는 초)

Secure 는 https 통신에서만 되도록
HttpOnly 는 console 에서 호출되지 않고, 통신에서만 사용되도록

Path 는 지정된 경로에서만 유효
Domain 는 지정된 도메인에서만 유효

acl access control



Session : 사용자 인증관련

express-session : request 객체의 프로퍼티에 세션객체를 추가해줌

app.use(session({
//필수옵션
- secret: 암호키
- resave: false (세션데이터가 바뀌지 전까진 저장소의 값을 저장안함)
- saveUninitialized: true (세션이 필요하기전까지는 세션을 구동 안함)
//추가옵션
- store : 세션에 대한 정보를 저장할 공간
- secure: true (https 에서만 세션이 유효해짐)
- httpOnly : true (웹 통신간에만 세션이 유효 / 탈취 불가)
}))

session 객체의 save 메소드 (인자로온 콜백을 바로 실행)

federation authentication : 타사인증 => oauth

passportjs

localStorage, Indexed DB : 쿠키보다 저장가능한 용량이 큼

hash, salt, key stretching 관련 : PBKDF2 혹은 bcrypt

npm audit fix

npm audit --audit-level high

리터럴 : 정보를 표현하는 방법

fs : file system 객체
https://nodejs.org/dist/latest-v6.x/docs/api/fs.html

process : node (js) 의 런타임 객체


fs.readFile 파일 읽기
fs.readdir 디렉토리 파일들 목록

process.argv 입력값을 리턴함

synchronous 동기적
asynchronous 비동기적

readFile(path[,options], callback)
readFileSync(path[,options])

callback = 인자로써의 함수

sudo npm install pm2 -g (pm2 설치)

pm2

	start 실행파일 (+ --watch 로 감시옵션 + --no-daemon) /  + --ignore-watch="data/*" data 디렉토리 내부의 전체 내용에 대해서 무시
	monit
	list
	log
	stop 실행이름
	kill 모두 종료

this => 소속객체 지정자 / python self 같은

module 객체
export / import


html entities

npm init
pacakge.json 생성 (프로젝트 정보)

npm install -S (프로젝트에서만 사용)

Application-level middleware

const app = express()

인자로 여러개를 넣으면, 여러개를 등록할 수 있음

use : 미들웨어 등록
get : get 메소드에 대해서만 사용
post : post 메소드에 대해서만 사용

router : 경로분배 프로그램

middle ware : 중간매개 프로그램
 - body parser : http 통신 객체에 payload 를 읽을 수 있도록 해줌
 - compression : 데이터를 압축시켜서 내보내줌
 - helmet : 보안관련
 - nsp check 로 보안에 취약할 수 있는 모듈을 확인
 - (req, res, next) => {} 형태의 함수들을 모두 미들웨어라고 함
	req : 요청 / res : 응답 / next : 다음에 호출할 미들웨어

template engine : pug / jade

database integration

pretty url (clean url, semantic url..)

npm install -S mysql
```

</details>

<details><summary>AWS</summary>

```
배포 공부자료
https://www.notion.so/AWS-fc2b1757b77b459fa9d58aa8ba076835


tool kit 관련
https://docs.aws.amazon.com/ko_kr/toolkit-for-visual-studio/latest/user-guide/tkv-ec2-ami.html

https://github.com/aws/aws-toolkit-visual-studio

ec2 서버 ssh 접속
ssh -i '인증키 파일' ubuntu@ ' 주소 '

미니콘다 설치하기
https://docs.conda.io/en/latest/miniconda.html 주소에서 linux 용 miniconda (python 3.x 버젼) 을 우클릭해서 링크주소 복사,
wget ' 복사한 주소 '

미니콘다 설치파일 실행권한 추가하기
chmod +x Miniconda3-latest-Linux-x86_64.sh

미니콘다 설치파일 실행하기
./Miniconda3-latest-Linux-x86_64.sh

엔터 누르다가 yes 하면 설치 끝

CLI 설정 bash 로 바꿔주기
source .bashrc

업데이트 해주기
sudo apt-get update

gcc 설치하기
sudo apt-get install gcc

mysql 클라이언트 설치하기
sudo apt-get install libmysqlclient-dev

콘다 가상환경 생성하기
conda create -n ' 가상환경이름 '

conda : command not found 라고 뜨면 아래 내용
export PATH=~/miniconda3/bin:$PATH

conda activate 가 안된다면 아래 내용
source ~/miniconda3/etc/profile.d/conda.sh

내 공인아이피
curl icanhazip.com

깃 클론따고, my_settings 에 db 호스트를 rds 엔드포인트로 바꾸기

rds 인바운드에 ec2 인스턴스 값 집어넣기

server 돌릴 때, 0:8000 으로 돌려서 공인 아이피로 돌리기
- API 는 ec2 공인아이피 기준으로 받을 수 있음

구니콘 설치하기 (배포)
pip install gunicorn

구니콘으로 실서버 돌리기
gunicorn --bind=0:8000 프로젝트.wsgi

nohup gunicorn  --bind=0:8000 프로젝트.wsgi &

파이썬 실행프로세스 확인하기
ps -ef | grep python

rds 접속
mysql -h ' 주소 ' -u root -p

db 정보 빼기 (덤프 뜨기)
mysqldump -u root -p ' 스키마 ' > ' 파일명 . sql '

db 정보 밀어넣기
mysql -h ' 주소 ' -u root -p ' 스키마 ' < ' 파일명 . sql '
```

</details>

<details><summary>VSCode</summary>

```
⌥ alt
⌘ cmd
⇧ shift
⌃ ctrl

탭
	좌우 분할 => ⌘ \ (+ ⇧ 상하)
	이동 => ⌘⇧ []

터미널
	포커스 : ⌘ '
	꺼내기, 숨기기 => ⌘ j
	이동 => ⌘ ,

편집기
	포커스 : ⌘ ;
	주석 ⌘ /
	선택한 범위찾기 => ⌘ d
	범위 이동하기 ⌥ ↑↓
	범위 찍어내기 ⇧⌥ ↑↓
	다중커서 => ⇧⌥⌘ ↑↓
	전부 접기, 펴기 => ⌘k - 0 / j
	Vim 모드 ⌘ i

사이드바
	포커스 ⌘ l
	꺼내기, 숨기기 ⌘ .

vscode 초기설정값 한글로
https://blog.azulpintor.io/entry/how-to-set-language-in-vscode-for-kor
```

</details>

<details><summary>Alias</summary>

```
자주쓰는거

gss
ga
gcmsg
gp
gl
glols
gloga


습관들여야하는거
gb - branch
gco - checkout
gd - diff (+w word)
gm - merge (+a ==> --abort)
grb - rebase (+i ==> -i | +a ==> --abort | +c ==> --continue)


소헌님 블로그 박제 (alias 관련내용)
https://soheon-lee.github.io/posts/DevPost/alias
```

</details>

<details><summary>위코드 Git 세션</summary>

```
1. git/ GitHub 이란? VCS(Version Control System)이란?
2. repository 생성 + 관련 명령어(git init, git add remote, git remote -v)
3. local repository / remote repository
4. git clone vs. git pull 개념 및 차이점
5. branch의 개념 + 관련 명령어(branch 생성, branch 이동, branch 제거)
6. git staging 설명 + 관련 명령어(add, commit, push)
7. conflict는 왜 발생하는가? 어떻게 해결하는가?



참고자료

- 깃 과 깃허브 영상 [https://vimeo.com/400216189](https://vimeo.com/400216189) (비번: wecode)
- [https://stackoverflow.com/c/wecode/questions/299](https://stackoverflow.com/c/wecode/questions/299)
- [블로그(4기 박준규) 🇰🇷](https://velog.io/@devzunky/wecode-TIL-6%EC%9D%BC%EC%B0%A8-Git-slk1d7jeps)
- [Learn Git Branching 🇺🇸](https://learngitbranching.js.org/?locale=ko)
- [git 간편 안내서 🇰🇷](https://rogerdudler.github.io/git-guide/indexko.html)
- [초심자를 위한 Github 협업 튜토리얼 🇰🇷](https://milooy.wordpress.com/2017/06/21/working-together-with-github-tutorial/?fbclid=IwAR00NEyVsOBMWReI6JRto53df0bvRpgPux8GQxy28D_NQ7OPrPKVFs2k6lk)


과제
1. 임의의 깃 클론
2. 자신의 이름을 딴 branch 생성하기
3. 미션 수행
4. git add .
5. commit 메세지 남기기
6. 해당 branch remote master branch에 푸시
7. merge

충돌관련
1. conflict 발생
2. conflict 해결
3. 다시 add, commit, push
4. github에서 지금까지의 활동 내역 확인 (commit 내역, branch, closed PR 확인).
```

</details>

<details><summary>장고 유닛 테스트와 깃 리베이스</summary>

```
유닛테스트 관련 공부 자료
https://www.notion.so/Unittest-ab08cae80be44e3586108c52039f4a46

유닛 테스트 관련 지훈님 자료
https://github.com/ulfrid/unittest_part01/blob/master/just/tests.py

유닛 테스트 관련 상록님 자료
https://github.com/evergreen-david/django-unit-test/tree/master/book

유닛 테스트 관련 장고 공식문서
https://docs.djangoproject.com/en/dev/topics/testing/overview/
https://docs.djangoproject.com/en/dev/topics/testing/tools/

유닛 테스트 관련 장고 공식문서 - 고급쓰
https://docs.djangoproject.com/ko/3.0/topics/testing/advanced/#django.test.utils.setup_test_environment

유닛 테스트 관련 파이썬 공식문서
https://docs.python.org/3/library/unittest.html#assert-methods

개발자의 중요한 역할 : 테스트 (동작 확인)

E2E (UI testing) : 최종테스트
	- 직관적이고 쉬움 확실쓰
	- 비용이 크고, 사람이 하기 힘듬

Integration : 한쪽의 End-Point 에 대한 테스트

Unit  코드에서 test 할 수 있는 가장 작은 단위 (code block) 에 대한 테스트
	- 코드에 대한 테스트를 하는 코드를 짜는 것

TDD : Test Driven Development


merge
merge commit (다른 변경사항들을 합치기) / fast foward (변경사항이 하나일때)

rebase
git log 의 history 를 깔끔하게 하기 위해

squash (합치다) rebase 의 대상이 되는 feature 에 대해 여러 커밋을 한 덩어리로 만들어주기

git pull origin master

git rebase -i master mango

git rebase -i mango

pick (p) = 살려두기 (최초 커밋)

squash (s) = 스쿼시하기 (나머지 커밋들)

충돌 고치기

git add .

git rebase --continue (리베이스 진행)
git rebase --abort (리베이스 멈추기)

리베이스의 충돌을 해결하면 대상 커밋들에 대한 커밋메세지가 생김 (다 지우고 실제로 사용할 것만 남겨둬도 됨)

git push

pr 이였음

만약 머지를 요구하는 상황이 발생하면, 커밋을하고 다시 리베이스 진행

리베이스 관련

https://feel5ny.github.io/2018/01/05/log_003/

https://git-scm.com/book/en/v2/Git-Branching-Rebasing

https://velog.io/@godori/Git-Rebase:
```

</details>

<details><summary>공부쓰</summary>

```
트리 자료형 공부자료
https://www.notion.so/Data-Structure-4-tree-e00c474f90f14523a5cb7de17b5195d1

포스트맨으로 API 관련 문서 작성하기
https://www.notion.so/API-acba0f7b600549a99b07858ace9a70b0

포스트맨 API 문서 작성 - 상록님 글
https://evergreen-david.github.io/posts/postman-team-development
```

</details>

<details><summary>set 과 hash</summary>

```
set 는 동일한 값을 여러번 삽입 불가능하고 해쉬값을 기반으로 저장하기 때문에 look up 이 굉장히 빠른 자료구조라고 배웠습니다.
내부적으로 해시 값을 사용해서 빠르게 데이터를 저장하고 가져올 수 있기 때문 인데요. 해시 값을  구해주는 함수를 해시 함수라고 하는데 다른 키에 대해서 같은 해시값이 나오는 경우를 충돌 이라고 합니다.
우리는 이런 충돌을 해결하여 중복된 값을 저장하지 않도록 해시 테이블을 사용하여 주어진 MySet클래스의 add 메소드를 간단하게 구현해 보겠습니다.
여기서는 가장 간단한 방법인 선형 탐사기법을 사용하여 충돌을 방지하고 중복된 데이터를 저장하지 않도록 구현해 보겠습니다.
선형탐사(Linear Probing) 특정 버킷에서 충돌이 발생하면 인덱스를 1씩 증가시켜 비어있는 버킷을 찾는 방법입니다.
다음 그림은 wecode를 sha1 해시 함수와 숫자만 뽑아내서 나눗셈법으로 해시버킷6에 삽입한 이후, weplay 를 해시할때 버킷6에서 충돌이 발생한 상황입니다. 충돌이 발생하면 고정적으로 인덱스를 1씩 증가시켜 비어있는 버킷을 찾아내는 것을 선형 탐사라고 합니다.
```

</details>

<details><summary>stack 과 queue</summary>

```
TCO (총 소비 비용)
https://ko.wikipedia.org/wiki/%EC%B4%9D%EC%86%8C%EC%9C%A0%EB%B9%84%EC%9A%A9



Stack : 마지막으로 저장한 데이터가 처음으로 읽힘 / 새로운 데이터 -> 맨뒤로

	- LIFO (Last In First Out)
	- 저장하기 : push
	- 읽어들이기 : pop (읽어들임과 동시에 stack에서 삭제)

	- 예시
		1. 웹브라우저 방문기록(뒤로가기) 및 실행취소
			- 현재 페이지에서 다른 페이지 (b) 로 이동하면 기존 페이지 (a) 를 임의의 상자에 넣어둠
			- ' b ' 페이지로 이동된 상태에서 뒤로가기를 하면 ' a ' 페이지를 불러오고 ' a ' 를 상자에서 없앰

		2. 미로찾기 알고리즘
			- 단위 Cycle
			   - 기준지점을 좌표 (a) 로 표기 -> End-Point 를 모두 탐색 하며 Stack 에 Push -> 모든 경우의 수가 확인되면, pop 을 반복 -> root 위치가 되는 ' a ' 좌표까지 복귀


Queue : 데이터가 들어온 순서대로 처리 / 새로운 데이터 -> 맨뒤로

	-FIFO(First In First Out)
	- 저장하기 : enqueue
	- 읽어들이기 : dequeue

	- 예시 (선입선출을 거치는 모든 과정이 예시가 될 수 있음)
		1. CPU의 프로세스 스케줄링
		2. 프린터의 인쇄 대기목록
		3. 맛집 예약, 티켓카운터 등의 예약 시스템

	- 난이도 있는 알고리즘 문제로 출제 되기도 함.
		: 원형큐, 우선순위 큐 등등...
```

</details>

<details><summary>Django</summary>

```
django-cors-headers 역할?

select, prefetch relate
https://jupiny.tistory.com/entry/selectrelated%EC%99%80-prefetchrelated
https://medium.com/chrisjune-13837/%EB%8B%B9%EC%8B%A0%EC%9D%B4-%EB%AA%B0%EB%9E%90%EB%8D%98-django-prefetch-5d7dd0bd7e15
https://www.notion.so/wecode/django-select_related-prefetch_related-dd7c023ea3be4a27b4087c5e385c147f

ORM 방식 CRUD
https://wayhome25.github.io/django/2017/04/01/django-ep9-crud/

페이지네이션
https://www.notion.so/Pagination-c80224f8381949a68ce9c139cf3f8726
https://docs.djangoproject.com/en/3.0/topics/pagination/

요청과 응답
https://docs.djangoproject.com/en/3.0/ref/request-response/

타임필드 사용법
https://stackoverflow.com/questions/11385607/how-to-model-a-timefield-in-django
https://www.geeksforgeeks.org/timefield-django-model/

성능관련
https://show-me-the-money.tistory.com/48

비밀변수 관리
http://blog.weirdx.io/post/30707

범위스트리밍
https://gist.github.com/dcwatson/cb5d8157a8fa5a4a046e
https://stackoverflow.com/questions/33208849/python-django-streaming-video-mp4-file-using-httpresponse
https://benwilber.github.io/nginx/rtmp/live/video/streaming/django/2018/10/20/building-a-live-video-streaming-website-part-2-the-applications.html

AWS S3 / CloudFront
https://seulcode.tistory.com/193

공부쓰
https://medium.com/%EB%8F%84%EC%84%9C-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%9B%B9%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%8B%A4%EC%A0%84%ED%8E%B8-%EC%9A%94%EC%95%BD/chapter-1-%EC%9E%A5%EA%B3%A0-%EA%B0%9C%EB%B0%9C%EC%9D%98-%EA%B8%B0%EB%B3%B8-%EC%82%AC%ED%95%AD-f34bc323f164

비동기 채팅 구현으로 웹소켓 공부
https://ssungkang.tistory.com/entry/Django-Channels-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%A0%81-%EC%B1%84%ED%8C%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-WebSocket-1
https://channels.readthedocs.io/en/latest/tutorial/part_1.html

유닛테스트
https://docs.djangoproject.com/en/dev/topics/testing/overview/#module-django.test

유닛테스트 상록님
https://github.com/evergreen-david/django-unit-test/tree/master/book

유닛테스트 노션
https://www.notion.so/Unittest-ab08cae80be44e3586108c52039f4a46

유닛테스트에 사용하는 assert 메소드
https://docs.python.org/3/library/unittest.html#assert-methods

유닛테스트에 사용되는 client 객체
https://docs.djangoproject.com/en/3.0/topics/testing/tools/

client 객체에 get 메소드에서 header 를 추가하려면
https://stackoverflow.com/questions/5495452/using-basic-http-access-authentication-in-django-testing-framework

장고에서 데코레이터를 테스트하는법
https://stackoverflow.com/questions/35271567/how-to-test-a-django-decorator

공부해야해

	장고 aggregate, annotate (group by 쿼리 공부 자료)
		https://www.notion.so/wecode/group-by-query-aggregate-annotate-dc78416d60a94cf0b12b79ad4f056f60

	장고 aggregate 사용하기
		https://docs.djangoproject.com/en/3.0/topics/db/aggregation/

	장고 ORM where 절에서 or 문 추가하기 (Q 이용)
		https://brownbears.tistory.com/425

	장고 ORM group by 쿼리 사용하기
		https://simpleisbetterthancomplex.com/tutorial/2016/12/06/how-to-create-group-by-queries.html

	ORM 이란
		https://www.google.com/search?	q=object+mapping&oq=object+mapping&aqs=chrome..69i57j0l7.5360j0j7&sourceid=chrome&ie=UTF-8

	쿼리디버거
		https://www.google.com/search?q=query+debugger&oq=query+debugger&aqs=chrome..69i57j0l7.9302j0j7&sourceid=chrome&ie=UTF-8


공부할 예시
	from django.db.models import Avg, Min, Max, Count, F, Sum

aggregate
value 와 같이쓰면 group_by : 연관관계에 맞춰서

annotate
뜻은 주석달기

F 는 as 처럼 사용 가능

http://raccoonyy.github.io/django-annotate-and-aggregate-like-as-excel/

m2m 관계에는 select_related 를 사용할수 없다

ifconfig 명령어로 내 ip 확인
en0 (무선인터넷) 혹은 en1 (유선인터넷) 항목의 inet 주소
https://ko.wikipedia.org/wiki/Ifconfig

응답이라는 객체를 변수에 할당한 뒤에 [] 를 이용해 속성을 부여하면, 응답 객체의 header 에 kvp 가 추가됨

my_settings 에서 db 설정의 test 항목의 kvp 를 MIRROR:default 로 해두면, 유닛 테스트에서 굳이 개체 생성 안해도 됨

https://docs.djangoproject.com/en/3.0/ref/models/querysets/


__in

__contains

.pk

.fieldnames
```

</details>

<details><summary>Python</summary>

```
파이썬의 입출력 객체
python io => 스트림과 filelike 로 변환해줌

파이썬 3.9 에서 추가된 기능
https://medium.com/@martin.heinz/new-features-in-python-3-9-you-should-know-about-14f3c647c2b4

파이선 mp3 파일을 동영상으로 변환하기 (파일객체, 포맷팅 이해)
https://kminito.tistory.com/m/4

파일생성 명령 등 어떠한 명령이 오던 파일명을 지정하는 구간에 절대경로나 상대경로를 적으면 그대로 적용됨

Python 에서 파일객체를 다루는 메소드로 open 을 사용함
open 메소드의 첫번째 인자로는 대상이 되는 리소스, 두번째 인자로는 리소스에 대한 처리방식이 옴

https://docs.python.org/3.8/tutorial/inputoutput.html#reading-and-writing-files
https://wikidocs.net/26

처리방식에서
r - 읽기
w - 쓰기
a - 추가

https://stackoverflow.com/questions/51163112/which-command-is-better-os-listdir-or-os-systemls-and-why

os.listdir() 으로 호출하면 ls 명령어로 받은 결과값이 배열로 나옴

os.system() 은 인자로 오는 내용에 대하여 cli 에서 처리하도록 하는 파이썬의 운영체제 컨트롤 객체

os.popen() 은 공부해야됨

subprocess 도 공부해야됨
https://docs.python.org/3/library/subprocess.html

python 에서 sql 다루기
- https://docs.python.org/ko/3/library/sqlite3.html


os 모듈은 컴퓨터의 자원에 대해서도 접근이 가능하도록 하는 확장개체이다. (컴퓨터 운영체제에 대한)
 - dirname : 대상의 path 값
 - abspath : 대상의 절대경로값

sys 모듈은 python 프로그램에 대한 원형 객체 접근방식이다.

__file__ : self 파일

CSV 란 ? -> Comma-separated values

python csv 공식문서
https://docs.python.org/ko/3/library/csv.html

csv 다루기 참고
http://pythonstudy.xyz/python/article/207-CSV-%ED%8C%8C%EC%9D%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

csv.reader()
인자로 온 항목 (파일객체) 에 대한 iterator 타입인 reader 객체 (row 들을 원소로 하는 list) 를 리턴하는 명령어

open() 명령어에 대하여, 인자1 로 오는 파일에 대해, 인자2 방식의 처리를 하고, 인자3 의 부가적인 설정값을 갖는다.

with as 구문

with open(파일 경로, 모드) as 객체 (파일호출자) :
	동작
	동작
	...

형식이며, 구문을 빠져나오는 순간, 자동으로 close 가 된다.

한글포함 csv 파일을 python 에서 읽을때 \ufeff 코드가 들어가면, utf-8 대신 utf-8-sig 방식 인코딩을 하면 됨
import csv
f = open(fname, 'r', encoding='utf-8-sig')
rdr = csv.reader(f)

↑ 출처 : https://redcarrot.tistory.com/216
```

</details>
