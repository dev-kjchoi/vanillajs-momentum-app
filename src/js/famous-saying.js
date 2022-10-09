const famouseSayingList = [
  "천명의 친구가 있어도 의지할 친구 하나 없고, 한 명의 적이 있어도 어딜가나 그를 만나게 될 것이다.",
  "자만은 인간이 자신을 과대평가하는 데에서 생기는 기쁨이다.",
  "말 적은 이가 제일 좋은 사람이다.",
  "만약 당신이 한번도 두렵거나 굴욕적이거나 상처입은 적이 없다면, 그렇다면 당신은 아무런 위험도 감수하지 않은 것이다.",
  "'눈에는 눈' 식으로 하면 결국 온 세상의 눈이 멀게 된다.",
  "죽는 일보다 고통 받는 일이 더 많은 용기를 필요로 한다.",
  "인내할 수 있는 사람은 그가 바라는 것은 무엇이든지 손에 넣을 수 있다.",
  "긴 인생은 충분히 좋지 않을 수도 있다, 그러나 좋은 인생은 충분히 길다.",
  "젊은이를 타락으로 이끄는 확실한 방법은 다르게 생각하는 사람 대신 같은 사고방식을 가진 이를 존경하도록 지시하는 것이다.",
  "인격은 그 사람의 운명이다.",
  "바삐 태어나지 않은 자는 바삐 죽는다.",
  "당신은 지체할 수도 있지만 시간은 그러하지 않을 것이다.",
  "순간들을 소중히 여기다 보면, 긴 세월은 저절로 흘러간다.",
  "과거에서 교훈을 얻을 수는 있어도 과거 속에 살 수는 없다.",
  "여가시간을 가지려면 시간을 잘 써라.",
  "세상 모든 일은 여러분이 무엇을 생각하느냐에 따라 일어납니다."
];

const famousSaying = document.getElementById("famous-saying");
const span = document.createElement("span");

function showFamousSaying() {
  const maxLength = famouseSayingList.length;
  const target = Math.floor(Math.random() * maxLength);
  span.innerText = famouseSayingList[target];
  famousSaying.appendChild(span);
}

setInterval(showFamousSaying, 10000);

showFamousSaying();
