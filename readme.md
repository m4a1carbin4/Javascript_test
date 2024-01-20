# js_cote

# 자바 스크립트 코테 대비용 범용 스크립트 리스트업

## Input Output
- input.js
    - example of javascript input :
        - fs, readline example
        - fs is easy To use
- input_t.js
    - Test input example (with fs)
        - read multiple line’s example

## Array
- array.js
    - example of js Array.
        - example of using js Array Method (Method list :)
        
        | 메소드 | 기능 |
        | --- | --- |
        | concat() | 배열간 연결 ex : Array.concat(Array_new,Array_new2…) |
        | copyWithin() | 배열 내부에서 인자간 복사 (첫번쨰 인자 인덱스 데이터를 두번째 인자 인덱스에 복사) |
        | every() | 인자로 입력된 함수로 배열 내 모든 데이터 체크후 반환 |
        | fill() | 배열 내 모든 데이터를 주어진 값으로 채움. |
        | filter() | 인자로 주어진 함수로 배열내 모든 데이터 체크후 true인 경우만 모아 배열로 리턴. |
        | find() | 인자로 주어진 함수로 배열내 모든 요소 체크후 첫번째 True 인 데이터 리턴. (찾지 못한경우 undefind) |
        | findindex() | find 함수에서 리턴이 인덱스값으로 변경된, 찾지 못한경우 -1 리턴 |
        | forEach() | 배열 내 모든 데이터에 주어진 인자값 함수를 실행. |
        | indexof() | 인자값과 동일한 데이터를 배열에서 찾아 첫번째 인덱스를 반환. 찾지 못한경우 -1 |
        | isArray() | 인자값이 배열인 경우 true 리턴. |
        | join() | 배열의 모든 데이터를 인자로 주어진 구분자로 구분된 스트링 반환, 분리자 default 는 ‘,’ |
        | lastIndexOf() | 인자로 주어진 값을 역순으로 찾아서 첫번쨰 발견된 인덱스를 반환, 찾지 못한경우 동일하게 -1 리턴. |
        | map() | 인자로 주어진 함수에 모든 각각의 요소를 적용한 값으로 이루어진 배열을 리턴 |
        | pop() | 배열의 마지막 요소를 삭제후 반환 (사이즈 감소) |
        | push() | 배열의 마지막에 데이터를 추가 (새 배열 길이 리턴.) |
        | reduce() | 인자로 주어진 함수를 모든 요소에 적용하여 만들어진 단일 값을 반환합니다. 배열 요소에 대해 왼쪽에서 오른쪽으로 적용해 나갑니다. array.reduce(function(total, currentValue, currentIndex, arr), initialValue) —> 여전히 잘 모르것음. |
        | reduceRight() | reduce() 기능의 적용 순서가 반대 (역순 적용) |
        | reverse() | 역순 배열 리턴. |
        | shift() | 배열 첫번째 데이터 제거 및 리턴. |
        | slice() | 배열 일부분 추출하여 리턴 (시작 인덱스, 끝 인덱스[포함 안됨]) |
        | some() | 인자로 입력된 함수를 배열의 데이터에 적용하여 하나라도 true인 경우 true 리턴. |
        | sort() | 배열 정렬, 인자값으로 비교함수 정의 가능. ex : arr.sort(function(a, b) { if(a > b) return 1; if(a === b) return 0; if(a < b) return -1; }); |
        | splice() | 배열내 요소 추가 또는 삭제 (시작 인자, 몇개 삭제 , 대체입력 1, 대체입력2 ….) |
        | toString() | to String return (a,b,c,d,e) |
        | unshift() | 배열의 첫번째 위치에 데이터 삽입 , 수정된 배열 길이 리턴.  |
        | valueOf() | 배열 그 자체 반환. var b = a.valueOf(); 라면 a === b |
        - 사실 코테 급에서는 입력 삭제 슬라이싱 정도 활용할것 같으나 알긴 해야 한다.

## Class
- simple_tree.js
    - 간단한 tree 구조 class 구현
        - class 선언 및 내부 함수, 변수 정의 기초.

---

추가 해야 할것 :

링크드 리스트 구현.
BFS, DFS 구현.
정렬 구현.
형변환 함수 테스트.
연산자 테스트.