

1. 직사각형 별 찍기
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.


process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { //입력받은 숫자를 'data'에 받는다ㄴ
    const n = data.split(" "); // 입력받은 data를 배열로 변경.
    const a = Number(n[0]), b = Number(n[1]); // a는 별의 개수, b는 별의 줄. 
    for(let i=0; i<b; i++){ //몇줄 반복할지 정함.
      let str = "";
      for(let j=0; j<a; j++){
        str = str+"*"
      }
      console.log(str)
    } 
});


2. 짝수와 홀수
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.\

function solution(num) {
  var answer = '';
  if(num % 2==0) {   //정수num이 짝수일 경우ㅡ
      return "Even"   // 문자열 Even반환
  }   else {
      return "Odd" // 아니면 문자열 Odd반환
  }
  
}

3. 가운데 글자 가져오기
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  if(s.length % 2 === 0){ //단어의 길이 짝수일때
   return s[s.length/2 -1] + s[s.length/2] // 가운데 두 글자 반환. 1.중간에서 -1, 2.중간글자.
  } else {
      return s[s.length/2-0.5] //홀수는 딱 나누어 떨어지지 않으니까 -0.5해서 값을 맞춰준다.
  }
}
// -> 문자열을 리스트로도 사용할 수 있는지 몰랐었다.


4. 두 정수 사이의 합
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
  let sum=0;            
    if(a<=b){
        for (let i=a; i<=b; i++){
           sum += i;    
      }
    } else {
       for (let i=b; i<=a; i++){
           sum += i;  
       }
    }
    return sum;
}


5. 문자열을 정수로 바꾸기.
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.


function solution(s) {
  const a = parseInt(s)
  return a
}


6.없는 숫자 더하기.
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

// 입출력 예
// numbers	result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6

// 입출력 예 설명
// 입출력 예 #1
// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 입출력 예 #2

// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

function solution(numbers) {
  var answer = 0;
  for(let i=0; i<10; i++){
      if(!numbers.includes(i)) answer += i; 
  } 
  return answer;
}

7.음양 더하기

// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
// 입출력 예
// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0
// 입출력 예 설명
// 입출력 예 #1

// signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.
// 입출력 예 #2

// signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
// 따라서 세 수의 합인 0을 return 해야 합니다.

function solution(absolutes, signs) {
  var answer = 123456789;
  return answer;
}

8. 평균 구하기
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5

// reduce를 사용하면된다 -> 근데 아직 잘 모르겠음 사용방법. 할떄마다 찾아서해야하나봄..
function solution(arr) {
 
  const average = arr.reduce((a,c) => a+c) / arr.length;
  console.log(average)
  return average;
}

9. 핸드폰 번호 가리기

// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

function solution(phone_number) {
  const p = phone_number.length -4;
  return '*'.repeat(p) + phone_number.slice(p);

}

// repeat method와 , slice, substring 메소드의 이해가 필요한 문제 였다.
// 앞으로도 자주 쓰일 것 같음.

10.
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
// 입출력 예
// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]

function solution(arr1, arr2) {
  var answer = [[]];
  return answer;
}

// 11.
// x만큼 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.
// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

function solution(x, n) {
  var answer = [];
  return answer;
}

//12.

// 문제 설명
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// 제한사항
// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수
// 입출력 예
// price	money	count	result
// 3	20	4	10
// 입출력 예 설명
// 입출력 예 #1
// 이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.

// hint : 삼항연산자와 += 사용 / 가우스정리도있다.
function solution(price, money, count) {
  let total = 0;
  for(let i=1; i<=count; i++){
        
      total += i * price ;
  }
  return money > total ? 0 : total-money; 
}

// 13. 2016
// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
// 입출력 예
// a	b	result
// 5	24	"TUE"

function solution(a, b) {
  let dt = new Date(2016,a-1,b);  // 날짜를 가져오는 객체 Date에 인자넣음.
  let days= ['SUN','MON','TUE','WED','THU','FRI','SAT']; // 리스트에 요일 입력
    
  let week = days[dt.getDay(b)]; // 리스트에서 요일입력을 받음.
   
   return week;
}

//14. 나누어 떨어지는 숫자 배열

// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// 입출력 예
// // arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]

function solution(arr, divisor) {
  var answer =[];
  for(let i=0; i<arr.length; i++){
      // divisor 나머지가 0이면 배수이다. push로 배열새로 생성.
      if(arr[i] % divisor === 0) {
         answer.push(arr[i])
      }
  }
  //값이 비어있음은 length가0이라는뜻, 삼항연산자/sort사용해서 오름정렬로 추가.
  return answer.length === 0 ? [-1] : answer.sort((a,b)=>a-b);
}


//15.내적


//맵사용인줄 알았는데, 생각해보니  for문으로도 작동이되었다.
// var result=0; var result=[]; 두개 차이점알아내야한다.
// 또하나의 방법은 reduce인데, 이거물어봐야할듯.
function solution(a, b) {
  var result = 0;
  for(let i=0; i<a.length; i++){
     
      result += a[i] * b[i];
  }
   return result;
}

//16. 문자열 내 p와y의개수

// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false

//SOME,FILTER를 떠올렸으나, uppercase로 대문자를 한번에 변환후, split으로 배열생성이 핵심이었던 문제.
function solution(s){
    
  return s.toUpperCase().split('P').length ===s.toUpperCase().split("Y").length;
}



//17.문자열 다루기 기본.
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true

//표현식으로 해야한다.
function solution(s) {
  var answer = true;
  return answer;
}


// 18.서울에서 김서방 찾기

// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.
// 입출력 예
// seoul	return
// ["Jane", "Kim"]	"김서방은 1에 있다"


//인덱스오브를 쓰자, 쉬웠다./
function solution(seoul) {
  var answer = '';
  var mrKim = seoul.indexOf('Kim'); 
  return '김서방은 '  + mrKim + '에 있다'
}

//19.수박수박수박수박수박수?

// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 
// 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

//이문제는 진짜 그냥 substr하나로만 풀엇고, 수박수박수 변수가 생성되어야 할 것 같은데 뭐지????

function solution(n) {
  return '수박'.repeat(n).substring(0,n)
}

//20.완주하지 못한 선수

// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항` 
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
// 입출력 예 설명
// 예제 #1
// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #2
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #3
// "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

// sort를 활용한 문제 였는데, 왜 filter로 했을때 []제거가 되지 않았을까? 이거좀 이상하네.
// 물어봐야 겠다.
function solution(participant, completion) {
  var a=participant.sort();
  var b=completion.sort();
  for(let i=0; i<participant.length; i++){
      if(a[i] != b[i]){
          return a[i]
      }
  }
    
} //


//21.이상한 문자 만들기


// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"
// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
// 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 
// "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

//중복 for나 map은 이해하기가 지금당장은 어렵다. 계쏙 보다보면 이해 될 것 같고,
//아래 코드도 접근까지는 햇으나 풀지는 못했따.(컨셉은 잡았었지만.)
//맵/중복문에 대한 이해도가 더 필요하다.
function solution(s) {
  let answer = '';
  //'try','hello','world'가됨.
  let words = s.split(' ');
  
  for (let i = 0; i < words.length; i++) {
      for(let j = 0; j < words[i].length; j++) {
          if(j % 2 === 0) {
              answer += words[i][j].toUpperCase();
          } else {
              answer += words[i][j].toLowerCase();
          }
      }
      if (i < words.length -1) {
          answer += ' ';
      }
  }
  return answer;
}


//22.자릿수더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

function solution(n){
  let answer =0;
   //문자열로 변환.
   //strN = n.toString();이랑 n=n.toTring먼차이?
  n = n.toString();
  
   for(let i=0; i < n.length; i++){
       //1.strN[0] + strN[1] + strN[2];     
       //다시 parseInt로 정수로 변환.
          answer += parseInt(n[i])
       }
   return answer;
}


//23. 자연수 뒤집어 배열로 만들기
// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

function solution(n) {
  let answer = [];
  //12345 -> "12345로 변환" 해서 뒤집음 
  let strN = n.toString().split('').reverse()
  //['1','2','3','4','5']를 정수로 바꿔서 푸쉬함.
  for(let i=0; i<strN.length; i++){
    answer.push(parseInt(strN[i]))
  }
  return answer;

}

//24.내림차순으로 배치하기
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	return
// 118372	873211

function solution(n) {
  let answer = 0;
  //정수를 문자열로 만들어서 리스트에 내림차순으로 정렬.
  let strN = n.toString().split('').map(ele => parseInt(ele)).sort((a, b) => b - a).join('');
 
  return parseInt(strN)
}

//join을 몰랏다!!!!

//25.정수 제곱근 판별

// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1
// 입출력 예 설명
// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

// 입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

function solution(n) {
  var answer = 0;
  return answer;
}



//26.제일 작은 수 제거하기

// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

function solution(arr) {
  var answer = [];
  return answer;
}